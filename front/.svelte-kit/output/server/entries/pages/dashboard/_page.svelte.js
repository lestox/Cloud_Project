import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/index.js";
import "../../../chunks/Image.js";
import { I as Icon, S as SidebarMenu } from "../../../chunks/SidebarMenu.js";
import { L as Link } from "../../../chunks/Link.js";
import { T as Text } from "../../../chunks/Text.js";
const UserCard$1 = "";
const InfoCard$1 = "";
const StorageIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<rect width="35" height="35" rx="6" fill="#82BDC4"></rect>
<path d="M25.6667 23.3333C25.6667 23.7754 25.4911 24.1993 25.1785 24.5118C24.866 24.8244 24.442 25 24 25H10.6667C10.2246 25 9.80072 24.8244 9.48816 24.5118C9.17559 24.1993 9 23.7754 9 23.3333V11.6667C9 11.2246 9.17559 10.8007 9.48816 10.4882C9.80072 10.1756 10.2246 10 10.6667 10H14.8333L16.5 12.5H24C24.442 12.5 24.866 12.6756 25.1785 12.9882C25.4911 13.3007 25.6667 13.7246 25.6667 14.1667V23.3333Z" fill="#82BDC4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>`;
});
const InfoCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { infoTitle = "Storage" } = $$props;
  let { infoLabel = "my infos" } = $$props;
  let { infoPercentage = "" } = $$props;
  if ($$props.infoTitle === void 0 && $$bindings.infoTitle && infoTitle !== void 0)
    $$bindings.infoTitle(infoTitle);
  if ($$props.infoLabel === void 0 && $$bindings.infoLabel && infoLabel !== void 0)
    $$bindings.infoLabel(infoLabel);
  if ($$props.infoPercentage === void 0 && $$bindings.infoPercentage && infoPercentage !== void 0)
    $$bindings.infoPercentage(infoPercentage);
  return `<div class="info-card margin-top-1">${validate_component(Icon, "Icon").$$render($$result, { class: "info-card__icon icon--medium" }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}
  ${validate_component(Text, "Text").$$render($$result, { class: "info-card__title" }, {}, {
    default: () => {
      return `${escape(infoTitle)}`;
    }
  })}
  ${validate_component(Text, "Text").$$render(
    $$result,
    {
      class: "info-card__label text-light text-preset-1",
      textColor: "var(--color-text-medium)"
    },
    {},
    {
      default: () => {
        return `${escape(infoLabel)}`;
      }
    }
  )}
  ${validate_component(Text, "Text").$$render($$result, { class: "info-card__percentage" }, {}, {
    default: () => {
      return `${escape(infoPercentage)}`;
    }
  })}</div>`;
});
const UserIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<circle cx="25" cy="25" r="25" fill="#82BDC4"></circle>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.5698 12C29.6134 12 33.6757 16.0629 33.6757 21.1059C33.6757 26.2893 29.6127 30.352 24.5698 30.352C19.3863 30.352 15.3237 26.289 15.3237 21.1059C15.3237 16.0623 19.3866 12 24.5698 12Z" fill="white"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.1449 31.4738H31.855C35.7778 31.4738 39 34.6961 39 38.6187V44.5C39 48.4227 27 49.5 25 49.5L17.1449 48.5C13.5 46 9.5 45 10 44.5V38.6187C10 34.696 13.2223 31.4738 17.1449 31.4738Z" fill="white"></path>
<circle cx="25" cy="25" r="24.5" stroke="#82BDC4" fill="transparent"></circle>`;
});
const UserCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="user-card">${validate_component(Icon, "Icon").$$render($$result, { class: "user-card__icon icon--large" }, {}, {
    default: () => {
      return `${validate_component(UserIcon, "UserIcon").$$render($$result, {}, {}, {})}`;
    }
  })}
  ${validate_component(Link, "Link").$$render(
    $$result,
    {
      class: "user-card__link",
      linkUrl: "/about"
    },
    {},
    {
      default: () => {
        return `Matt Doe
  `;
      }
    }
  )}
  ${validate_component(Text, "Text").$$render($$result, { class: "user-card__text" }, {}, {
    default: () => {
      return `matt.doe@gmail.com 
  `;
    }
  })}</div>`;
});
const DatabaseIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<rect width="35" height="35" rx="6" fill="#82BDC4"></rect>
<path d="M17.75 14.5C21.4779 14.5 24.5 13.4926 24.5 12.25C24.5 11.0074 21.4779 10 17.75 10C14.0221 10 11 11.0074 11 12.25C11 13.4926 14.0221 14.5 17.75 14.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="transparent"></path>
<path d="M24.5 17.5C24.5 18.745 21.5 19.75 17.75 19.75C14 19.75 11 18.745 11 17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="transparent"></path>
<path d="M11 12.25V22.75C11 23.995 14 25 17.75 25C21.5 25 24.5 23.995 24.5 22.75V12.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="transparent"></path>`;
});
const BackupIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<rect width="35" height="35" rx="6" fill="#82BDC4"></rect>
<path d="M8 10.8316V15.8329H13.0013" fill="#82BDC4"></path>
<path d="M8 10.8316V15.8329H13.0013" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M26.3381 24.1684V19.1671H21.3368" fill="#82BDC4"></path>
<path d="M26.3381 24.1684V19.1671H21.3368" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M24.2459 14.9993C23.8232 13.8047 23.1047 12.7366 22.1575 11.8947C21.2103 11.0528 20.0653 10.4646 18.8293 10.185C17.5933 9.9053 16.3066 9.9433 15.0892 10.2954C13.8719 10.6475 12.7635 11.3023 11.8677 12.1986L8 15.8329M26.3382 19.1671L22.4705 22.8014C21.5746 23.6977 20.4663 24.3525 19.2489 24.7046C18.0316 25.0567 16.7449 25.0947 15.5089 24.815C14.2729 24.5354 13.1278 23.9472 12.1807 23.1053C11.2335 22.2634 10.515 21.1953 10.0922 20.0007" fill="#82BDC4"></path>
<path d="M24.2459 14.9993C23.8232 13.8047 23.1047 12.7366 22.1575 11.8947C21.2103 11.0528 20.0653 10.4646 18.8293 10.185C17.5933 9.9053 16.3066 9.9433 15.0892 10.2954C13.8719 10.6475 12.7635 11.3023 11.8677 12.1986L8 15.8329M26.3382 19.1671L22.4705 22.8014C21.5746 23.6977 20.4663 24.3525 19.2489 24.7046C18.0316 25.0567 16.7449 25.0947 15.5089 24.815C14.2729 24.5354 13.1278 23.9472 12.1807 23.1053C11.2335 22.2634 10.515 21.1953 10.0922 20.0007" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="transparent"></path>`;
});
const SidebarInfos_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".sidebar-infos.svelte-16xl99p{width:10%;min-width:280px;height:100vh;padding:var(--spacing-2);background-color:var(--color-background-primary)}",
  map: null
};
const SidebarInfos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="sidebar-infos svelte-16xl99p">${validate_component(UserCard, "UserCard").$$render($$result, {}, {}, {})}
  <hr class="margin-top-1">  

  <div class="margin-top-3">${validate_component(Text, "Text").$$render($$result, { textTag: "h2", class: "section-title" }, {}, {
    default: () => {
      return `Usage 
    `;
    }
  })}

    ${validate_component(InfoCard, "InfoCard").$$render(
    $$result,
    {
      infoTitle: "Storage",
      infoLabel: "10.73go use",
      infoPercentage: "22%"
    },
    {},
    {
      default: () => {
        return `${validate_component(StorageIcon, "StorageIcon").$$render($$result, {}, {}, {})}`;
      }
    }
  )}

    ${validate_component(InfoCard, "InfoCard").$$render(
    $$result,
    {
      infoTitle: "Database size",
      infoLabel: "392.2 mo use",
      infoPercentage: "69%",
      infoIcon: DatabaseIcon
    },
    {},
    {
      default: () => {
        return `${validate_component(DatabaseIcon, "DatabaseIcon").$$render($$result, {}, {}, {})}`;
      }
    }
  )}

    ${validate_component(InfoCard, "InfoCard").$$render(
    $$result,
    {
      infoTitle: "Last backup",
      infoLabel: "Today at 5:23PM"
    },
    {},
    {
      default: () => {
        return `${validate_component(BackupIcon, "BackupIcon").$$render($$result, {}, {}, {})}`;
      }
    }
  )}</div>
  
  <div class="margin-top-2"><hr class="margin-top-1">
    ${validate_component(Text, "Text").$$render(
    $$result,
    {
      textTag: "p",
      class: "text-preset-1 text-light margin-top-1",
      textColor: "var(--color-text-medium)"
    },
    {},
    {
      default: () => {
        return `Project created the 13.03.2023
    `;
      }
    }
  )}
    ${validate_component(Text, "Text").$$render(
    $$result,
    {
      textTag: "p",
      class: "text-preset-1 text-light",
      textColor: "var(--color-text-medium)"
    },
    {},
    {
      default: () => {
        return `by Matt Doe
    `;
      }
    }
  )}
    ${validate_component(Text, "Text").$$render(
    $$result,
    {
      textTag: "p",
      class: "text-preset-1 text-light",
      textColor: "var(--color-text-medium)"
    },
    {},
    {
      default: () => {
        return `Last update : 14.03.2023
    `;
      }
    }
  )}</div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page.svelte-orq6tg{background-color:var(--color-background-secondary);display:flex}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="page svelte-orq6tg">${validate_component(SidebarMenu, "SidebarMenu").$$render($$result, {}, {}, {})}
  <h1>Dashboard Page</h1>
  ${validate_component(SidebarInfos, "SidebarInfos").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
