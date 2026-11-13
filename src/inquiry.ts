const fields = [
  ["name", "Full name"],
  ["email", "Email"],
  ["phone", "Phone"],
  ["city", "City and state"],
  ["territory", "Preferred territory or format"],
  ["comments", "Questions or comments"],
] as const;

export function createInquiryDraft(form: FormData, recipient: string) {
  const lines = fields.map(
    ([name, label]) => `${label}: ${form.get(name) ?? ""}`,
  );
  const body = [
    "Franchise inquiry",
    "",
    ...lines,
    "",
    "I agree to be contacted about this inquiry.",
  ].join("\n");

  // Opening the draft is a separate action; preparing it never sends an email.
  return `mailto:${recipient}?subject=${encodeURIComponent("Yumberry Bowl franchise inquiry")}&body=${encodeURIComponent(body)}`;
}
