import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import "../../../chunks/Image.js";
import { S as SidebarMenu } from "../../../chunks/SidebarMenu.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SidebarMenu, "SidebarMenu").$$render($$result, { current: "account" }, {}, {})}
<h1>Profil infos</h1>`;
});
export {
  Page as default
};
