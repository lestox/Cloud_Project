import { c as create_ssr_component, d as add_attribute, e as escape, h as add_styles } from "./index.js";
const Link_svelte_svelte_type_style_lang = "";
const css = {
  code: ".link.svelte-19ztez9{font-family:var(--font-family-primary);font-size:var(--font-size-regular);font-weight:var(--font-weight-semibold);color:var(--color-text-dark);text-decoration:none;display:inline-block}",
  map: null
};
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { linkUrl = "#" } = $$props;
  let { linkColor = "var(--color-text-dark)" } = $$props;
  if ($$props.linkUrl === void 0 && $$bindings.linkUrl && linkUrl !== void 0)
    $$bindings.linkUrl(linkUrl);
  if ($$props.linkColor === void 0 && $$bindings.linkColor && linkColor !== void 0)
    $$bindings.linkColor(linkColor);
  $$result.css.add(css);
  return `<a${add_attribute("href", linkUrl, 0)} class="${"link " + escape($$props.class, true) + " svelte-19ztez9"}"${add_styles({ "color": linkColor })}>${slots.default ? slots.default({}) : ``}
</a>`;
});
export {
  Link as L
};
