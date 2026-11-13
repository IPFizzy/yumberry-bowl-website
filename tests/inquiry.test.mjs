import assert from "node:assert/strict";
import test from "node:test";
import { createInquiryDraft } from "../src/inquiry.ts";

test("keeps punctuation and multiline questions inside the email body", () => {
  const form = new FormData();
  form.set("name", "Alex & Jordan");
  form.set("email", "alex+franchise@example.com");
  form.set("city", "Bend, Oregon");
  form.set("comments", "Storefront or mobile?\nWhat about A&B #2? &bcc=other@example.com");
  const draft = new URL(createInquiryDraft(form, "team@example.com"));
  assert.equal(draft.protocol, "mailto:");
  assert.equal(draft.pathname, "team@example.com");
  assert.equal(draft.searchParams.get("subject"), "Yumberry Bowl franchise inquiry");
  assert.equal(draft.searchParams.has("bcc"), false);
  assert.equal(draft.hash, "");
  assert.match(draft.searchParams.get("body"), /Alex & Jordan/);
  assert.ok(draft.searchParams.get("body").includes(form.get("comments")));
});

test("leaves optional fields blank rather than inserting null", () => {
  const body = new URL(createInquiryDraft(new FormData(), "team@example.com")).searchParams.get("body");
  assert.ok(body.includes("Phone: \n"));
  assert.ok(body.includes("Preferred territory or format: \n"));
  assert.equal(body.includes("null"), false);
});
