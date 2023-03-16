import { c as create_ssr_component, d as add_attribute, e as escape, f as null_to_empty, v as validate_component } from "./index.js";
import { L as Link } from "./Link.js";
/* empty css                                    */import { I as Image } from "./Image.js";
const css$2 = {
  code: ".icon--small.svelte-1xdgerd{height:20px;width:25px}.icon--medium.svelte-1xdgerd{height:35px;width:35px;object-fit:cover}.icon--large.svelte-1xdgerd{height:50px;width:50px}.icon-project.svelte-1xdgerd{height:70px;width:75px}",
  map: null
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { color = "currentColor" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$2);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("aria-labelledby", name, 0)} role="presentation" class="${escape(null_to_empty($$props.class), true) + " svelte-1xdgerd"}"><title${add_attribute("id", name, 0)} lang="en">${escape(`${name} icon`)}</title><g${add_attribute("fill", color, 0)}>${slots.default ? slots.default({}) : ``}</g></svg>`;
});
const HomeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<path fill-rule="evenodd" clip-rule="evenodd" d="M23.0014 9.10325C22.9496 8.61544 22.7085 8.17978 22.3227 7.87672L12.9195 0.490337C12.0871 -0.163446 10.9246 -0.163446 10.0922 0.490337L0.688969 7.87672C0.303245 8.17978 0.0621432 8.61544 0.0102844 9.10325C-0.0414017 9.59122 0.102903 10.0678 0.416714 10.4457C1.03421 11.1887 2.16459 11.2998 2.93667 10.6933L3.38725 10.3394V17.9563C3.38725 19.0833 4.30399 20 5.43095 20H8.65174C8.91242 20 9.12365 19.7888 9.12365 19.5283V16.6434C9.12365 15.3516 10.1745 14.3007 11.4664 14.3007C12.7583 14.3007 13.8092 15.3516 13.8092 16.6434V19.5283C13.8092 19.7888 14.0206 20 14.2811 20H17.5809C18.7079 20 19.6246 19.0833 19.6246 17.9563V10.3394L20.075 10.6933C20.8474 11.2999 21.9778 11.1887 22.5951 10.4457C22.9089 10.0678 23.0532 9.59122 23.0015 9.10325" fill="#007381"></path>`;
});
const AccountIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<path fill-rule="evenodd" clip-rule="evenodd" d="M6.41959 0C8.64181 0 10.4317 1.79016 10.4317 4.0121C10.4317 6.29597 8.64153 8.08599 6.41959 8.08599C4.13572 8.08599 2.3457 6.29583 2.3457 4.0121C2.3457 1.78987 4.13586 0 6.41959 0Z" fill="#007381"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.14811 8.58026H9.62947C11.3578 8.58026 12.7776 10 12.7776 11.7284V16.8519C12.7776 18.5803 11.3578 20 9.62947 20H3.14811C1.41973 20 0 18.5802 0 16.8519V11.7284C0 10 1.41977 8.58026 3.14811 8.58026Z" fill="#007381"></path>`;
});
const LogoutIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<path d="M18.4653 9.99418C18.4651 9.95904 18.4616 9.92374 18.4548 9.88907C18.4506 9.86951 18.4436 9.85123 18.4379 9.8323C18.4331 9.81592 18.4293 9.79907 18.4228 9.78301C18.413 9.75947 18.4002 9.73848 18.3881 9.71686C18.3819 9.70636 18.3775 9.69491 18.3708 9.68473C18.3492 9.65261 18.3247 9.62272 18.2973 9.59536L14.4553 5.75311C14.2325 5.53032 13.8718 5.53032 13.6493 5.75311C13.4265 5.97558 13.4265 6.33656 13.6493 6.55903L16.52 9.43013H6.45953C6.14466 9.43013 5.8896 9.68519 5.8896 10.0001C5.8896 10.3149 6.14466 10.57 6.45953 10.57H16.5204L13.649 13.4411C13.4262 13.6635 13.4262 14.0245 13.649 14.247C13.7603 14.3583 13.9061 14.4138 14.0521 14.4138C14.1981 14.4138 14.3437 14.3582 14.4552 14.247L18.2992 10.4035C18.3027 10.4 18.3049 10.396 18.3081 10.3925C18.3307 10.3688 18.3517 10.344 18.37 10.3168C18.3809 10.3006 18.3884 10.2831 18.3975 10.2658C18.4059 10.2503 18.4153 10.2352 18.4223 10.2189C18.4307 10.1982 18.436 10.1767 18.4418 10.1554C18.446 10.1411 18.4517 10.1271 18.4546 10.1123C18.4619 10.0754 18.466 10.0381 18.466 10.0007V10.0005C18.466 9.99798 18.4655 9.99591 18.4652 9.99417L18.4653 9.99418ZM11.4319 12.5081C11.1171 12.5081 10.862 12.7632 10.862 13.0781V18.2901C10.862 18.6044 10.6065 18.86 10.2921 18.86L1.70978 18.8601C1.3954 18.8601 1.13986 18.6046 1.13986 18.2902V1.70978C1.13986 1.3954 1.3954 1.13986 1.70978 1.13986H10.2921C10.6065 1.13986 10.862 1.3954 10.862 1.70978V6.77034C10.862 7.0852 11.1171 7.34027 11.4319 7.34027C11.7468 7.34027 12.0019 7.0852 12.0019 6.77034V1.70978C12.0019 0.76696 11.2349 0 10.2921 0H1.70978C0.766961 0 0 0.76696 0 1.70978V18.2902C0 19.233 0.766961 20 1.70978 20H10.2921C11.2349 20 12.0019 19.233 12.0019 18.2902V13.0778C12.0019 12.7631 11.7466 12.5079 11.4319 12.5079V12.5081Z" fill="#007381"></path>`;
});
const Menu_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".menu.svelte-iidi1d{width:225px;margin-top:85px}.menu-el.svelte-iidi1d{display:flex;align-items:center;column-gap:10px;margin:10px 0;padding:10px 15px}.menu-el--active.svelte-iidi1d{background-color:var(--color-background-secondary);border-radius:var(--x-small-radius)}",
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { current = "home" } = $$props;
  if ($$props.current === void 0 && $$bindings.current && current !== void 0)
    $$bindings.current(current);
  $$result.css.add(css$1);
  return `<div class="menu svelte-iidi1d"><div class="${"menu-el " + escape(current === "home" ? "menu-el--active" : "", true) + " svelte-iidi1d"}">${validate_component(Icon, "Icon").$$render($$result, { name: "home", class: "icon--small" }, {}, {
    default: () => {
      return `${validate_component(HomeIcon, "HomeIcon").$$render($$result, {}, {}, {})}`;
    }
  })}
    ${validate_component(Link, "Link").$$render($$result, { linkUrl: "/reset-password" }, {}, {
    default: () => {
      return `My cloud
    `;
    }
  })}</div>

  <div class="${"menu-el " + escape(current === "account" ? "menu-el--active" : "", true) + " svelte-iidi1d"}">${validate_component(Icon, "Icon").$$render($$result, { name: "account", class: "icon--small" }, {}, {
    default: () => {
      return `${validate_component(AccountIcon, "AccountIcon").$$render($$result, {}, {}, {})}`;
    }
  })}
    ${validate_component(Link, "Link").$$render($$result, { linkUrl: "/reset-password" }, {}, {
    default: () => {
      return `Account 
    `;
    }
  })}</div>

  <div class="menu-el svelte-iidi1d">${validate_component(Icon, "Icon").$$render($$result, { name: "logout", class: "icon--small" }, {}, {
    default: () => {
      return `${validate_component(LogoutIcon, "LogoutIcon").$$render($$result, {}, {}, {})}`;
    }
  })}
    ${validate_component(Link, "Link").$$render($$result, { linkUrl: "/reset-password" }, {}, {
    default: () => {
      return `Logout
    `;
    }
  })}</div>
</div>`;
});
const Logo = "data:image/png;base64,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";
const SidebarMenu_svelte_svelte_type_style_lang = "";
const css = {
  code: ".sidebar-menu.svelte-1yow0nw{width:10%;min-width:280px;height:100vh;padding-left:40px;padding-top:50px;background-color:var(--color-background-primary)}",
  map: null
};
const SidebarMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { current = "home" } = $$props;
  if ($$props.current === void 0 && $$bindings.current && current !== void 0)
    $$bindings.current(current);
  $$result.css.add(css);
  return `<div class="sidebar-menu svelte-1yow0nw">${validate_component(Image, "Image").$$render(
    $$result,
    {
      imageSrc: Logo,
      imageAlt: "SkyCloud Logo",
      imageWidth: "225"
    },
    {},
    {}
  )}
  ${validate_component(Menu, "Menu").$$render($$result, { current }, {}, {})}
</div>`;
});
export {
  Icon as I,
  SidebarMenu as S
};
