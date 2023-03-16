import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "./index.js";
import { T as Text } from "./Text.js";
import { I as Input, B as Button } from "./Button.js";
import { L as Link } from "./Link.js";
import { I as Image } from "./Image.js";
import { P as ProjectIcon } from "./logo_white.js";
const RegisterForm_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".loginForm.svelte-16ytx7y{max-width:380px;display:block;text-align:center}",
  map: null
};
const RegisterForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      type: "text",
      id: "fullName",
      class: "margin-top-2",
      name: "fullName",
      placeholder: "Full name",
      required: true
    },
    {},
    {}
  )}
    ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "email",
      id: "email",
      class: "margin-top-1",
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
    ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "password",
      id: "password",
      class: "margin-top-1",
      name: "password",
      placeholder: "Retype password",
      required: true
    },
    {},
    {}
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
        return `Sign up`;
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
        return `Already have an account ? ${validate_component(Link, "Link").$$render(
          $$result,
          {
            class: "text-semibold",
            linkUrl: "/login"
          },
          {},
          {
            default: () => {
              return `Login`;
            }
          }
        )}`;
      }
    }
  )}
</form>`;
});
const Register_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".login-section.svelte-uu97t2{max-width:380px;display:block;text-align:center}",
  map: null
};
const Register = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"login-section " + escape($$props.class, true) + " svelte-uu97t2"}">${validate_component(Text, "Text").$$render($$result, { textTag: "h1", textStyle: "main-title" }, {}, {
    default: () => {
      return `Welcome 👋`;
    }
  })}
    ${validate_component(RegisterForm, "RegisterForm").$$render(
    $$result,
    {
      class: "margin-top-3",
      method: "Post",
      action: "/register"
    },
    {},
    {}
  )}
</div>`;
});
const RegisterTemplate_svelte_svelte_type_style_lang = "";
const css = {
  code: "body.svelte-6712x6{background-color:var(--color-background-secondary)}.global-card.svelte-6712x6{width:92vw;height:94vh;margin:3vh auto;display:grid;grid-template-columns:50% 50%;background-color:var(--color-background-primary);border-radius:var(--large-radius)}.register-section.svelte-6712x6{display:flex;justify-content:center}.logo-section.svelte-6712x6{background-color:var(--color-primary);border-radius:0 var(--large-radius) var(--large-radius) 0}",
  map: null
};
const RegisterTemplate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="svelte-6712x6"><div class="global-card svelte-6712x6"><div class="register-section svelte-6712x6">${validate_component(Register, "Register").$$render($$result, { class: "margin-top-3" }, {}, {})}</div>
        <div class="logo-section svelte-6712x6">${validate_component(Image, "Image").$$render(
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
export {
  RegisterTemplate as R
};
