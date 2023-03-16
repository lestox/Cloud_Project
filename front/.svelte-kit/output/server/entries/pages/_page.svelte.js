import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { I as Image } from "../../chunks/Image.js";
/* empty css                                               */import { P as ProjectIcon } from "../../chunks/logo_white.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Image, "Image").$$render(
    $$result,
    {
      imageSrc: ProjectIcon,
      imageAlt: "Hello",
      imageStyle: "image--larg"
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
