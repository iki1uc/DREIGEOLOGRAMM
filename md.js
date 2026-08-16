export function md(text) {
  return {
    raw: text,
    parsed: text.replace(/#/g, "§"),
    mode: "MD_RESOLVER"
  };
}
