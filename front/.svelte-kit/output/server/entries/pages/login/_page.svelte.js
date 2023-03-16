import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/index.js";
import { T as Text } from "../../../chunks/Text.js";
import { I as Input, B as Button } from "../../../chunks/Button.js";
import { L as Link } from "../../../chunks/Link.js";
import { I as Image } from "../../../chunks/Image.js";
import { P as ProjectIcon } from "../../../chunks/logo_white.js";
const LoginForm_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".loginForm.svelte-16ytx7y{max-width:380px;display:block;text-align:center}",
  map: null
};
const LoginForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { method = "" } = $$props;
  let { action = "" } = $$props;
  if ($$props.method === void 0 && $$bindings.method && method !== void 0)
    $$bindings.method(method);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  $$result.css.add(css$2);
  return `<form class="${"loginForm " + escape($$props.class, true) + " svelte-16ytx7y"}"${add_attribute("method", method, 0)}${add_attribute("action", action, 0)}>${validate_component(Text, "Text").$$render(
    $$result,
    {
      textTag: "h3",
      textStyle: "text-semibold"
    },
    {},
    {
      default: () => {
        return `Please enter your details`;
      }
    }
  )}
    ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "email",
      id: "email",
      class: "margin-top-2",
      name: "email",
      placeholder: "Email",
      required: true
    },
    {},
    {}
  )}
    ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "password",
      id: "password",
      class: "margin-top-1",
      name: "password",
      placeholder: "Password",
      required: true
    },
    {},
    {}
  )}
    ${validate_component(Link, "Link").$$render(
    $$result,
    {
      linkUrl: "/reset-password",
      class: "margin-top-1"
    },
    {},
    {
      default: () => {
        return `Forgot Password ?`;
      }
    }
  )}
    ${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "margin-top-2",
      buttonWidth: "button--full"
    },
    {},
    {
      default: () => {
        return `Log in`;
      }
    }
  )}
    ${validate_component(Text, "Text").$$render(
    $$result,
    {
      textTag: "p",
      class: "text-light margin-top-1"
    },
    {},
    {
      default: () => {
        return `Don&#39;t have an account? ${validate_component(Link, "Link").$$render(
          $$result,
          {
            class: "text-semibold",
            linkUrl: "/register"
          },
          {},
          {
            default: () => {
              return `Register`;
            }
          }
        )}`;
      }
    }
  )}
</form>`;
});
const Login_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".login-section.svelte-uu97t2{max-width:380px;display:block;text-align:center}",
  map: null
};
const Login_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"login-section " + escape($$props.class, true) + " svelte-uu97t2"}">${validate_component(Text, "Text").$$render($$result, { textTag: "h1", textStyle: "main-title" }, {}, {
    default: () => {
      return `Welcome back 👋`;
    }
  })}
    ${validate_component(LoginForm, "Login").$$render(
    $$result,
    {
      class: "margin-top-3",
      method: "Post",
      action: "/login"
    },
    {},
    {}
  )}
</div>`;
});
const LoginTemplate_svelte_svelte_type_style_lang = "";
const css = {
  code: "body.svelte-mrn1vq{background-color:var(--color-background-secondary)}.global-card.svelte-mrn1vq{width:92vw;height:94vh;margin:3vh auto;display:grid;grid-template-columns:50% 50%;background-color:var(--color-background-primary);border-radius:var(--large-radius)}.login-section.svelte-mrn1vq{display:flex;justify-content:center}.logo-section.svelte-mrn1vq{background-color:var(--color-primary);border-radius:0 var(--large-radius) var(--large-radius) 0}",
  map: null
};
const LoginTemplate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="svelte-mrn1vq"><div class="global-card svelte-mrn1vq"><div class="login-section svelte-mrn1vq">${validate_component(Login_1, "Login").$$render($$result, { class: "margin-top-3" }, {}, {})}</div>
        <div class="logo-section svelte-mrn1vq">${validate_component(Image, "Image").$$render(
    $$result,
    {
      imageSrc: ProjectIcon,
      imageAlt: "Sky Cloud",
      imageStyle: "image--regular block-center"
    },
    {},
    {}
  )}</div></div>
</body>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LoginTemplate, "LoginTemplate").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
