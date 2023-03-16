import { c as create_ssr_component, d as add_attribute, e as escape } from "./index.js";
const global = "";
const Image_svelte_svelte_type_style_lang = "";
const css = {
  code: ".image.svelte-t27egx{object-fit:contain}.image--large.svelte-t27egx{height:775px;width:895px;object-fit:cover;border-radius:var(--border-radius)}.image--regular.svelte-t27egx{width:375px}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imageSrc = "" } = $$props;
  let { imageAlt = "image" } = $$props;
  let { imageStyle } = $$props;
  let { imageWidth = "auto" } = $$props;
  let { imageHeight = "auto" } = $$props;
  if ($$props.imageSrc === void 0 && $$bindings.imageSrc && imageSrc !== void 0)
    $$bindings.imageSrc(imageSrc);
  if ($$props.imageAlt === void 0 && $$bindings.imageAlt && imageAlt !== void 0)
    $$bindings.imageAlt(imageAlt);
  if ($$props.imageStyle === void 0 && $$bindings.imageStyle && imageStyle !== void 0)
    $$bindings.imageStyle(imageStyle);
  if ($$props.imageWidth === void 0 && $$bindings.imageWidth && imageWidth !== void 0)
    $$bindings.imageWidth(imageWidth);
  if ($$props.imageHeight === void 0 && $$bindings.imageHeight && imageHeight !== void 0)
    $$bindings.imageHeight(imageHeight);
  $$result.css.add(css);
  return `<img${add_attribute("src", imageSrc, 0)}${add_attribute("alt", imageAlt, 0)} class="${"image " + escape(imageStyle, true) + " svelte-t27egx"}"${add_attribute("width", imageWidth, 0)}${add_attribute("height", imageHeight, 0)}>`;
});
export {
  Image as I
};
