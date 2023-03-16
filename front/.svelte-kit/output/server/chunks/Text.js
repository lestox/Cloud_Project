import { c as create_ssr_component, e as escape, h as add_styles, i as is_void } from "./index.js";
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { textTag = "p" } = $$props;
  let { textColor = "var(--color-text-dark)" } = $$props;
  let { textStyle } = $$props;
  if ($$props.textTag === void 0 && $$bindings.textTag && textTag !== void 0)
    $$bindings.textTag(textTag);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  if ($$props.textStyle === void 0 && $$bindings.textStyle && textStyle !== void 0)
    $$bindings.textStyle(textStyle);
  return `${((tag) => {
    return tag ? `<${textTag} class="${"text " + escape(textStyle + " " + $$props.class, true)}"${add_styles({ "color": textColor })}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(textTag)}`;
});
export {
  Text as T
};
