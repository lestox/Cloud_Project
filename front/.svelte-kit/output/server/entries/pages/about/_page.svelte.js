import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { R as RegisterTemplate } from "../../../chunks/RegisterTemplate.js";
import "../../../chunks/Image.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(RegisterTemplate, "RegisterTemplate").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
