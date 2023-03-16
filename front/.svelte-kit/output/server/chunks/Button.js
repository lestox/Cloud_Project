import { c as create_ssr_component, d as add_attribute, e as escape } from "./index.js";
const Input_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".input.svelte-hwa8ag{color:var(--color-text-medium);border:var(--border-height-regular) solid var(--color-disabled);border-radius:var(--color-disabled);padding:16px;width:calc(100% - 32px);max-width:380px;font-family:var(--font-family-primary);border-radius:var(--small-radius)}.input.svelte-hwa8ag:focus{color:var(--color-text-dark)}.input.svelte-hwa8ag:focus-visible{outline:var(--border-height-thick) solid var(--color-highlight);outline-offset:-1px}.input-valid.svelte-hwa8ag{border:var(--border-height-thick) solid var(--color-highlight)}.input-invalid.svelte-hwa8ag{border:var(--border-height-thick) solid #FF4D4D}",
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "" } = $$props;
  let { id = "" } = $$props;
  let { name = "" } = $$props;
  let { placeholder = "" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  $$result.css.add(css$1);
  return `<input${add_attribute("type", type, 0)}${add_attribute("id", id, 0)}${add_attribute("name", name, 0)}${add_attribute("placeholder", placeholder, 0)} class="${"input " + escape($$props.class, true) + " svelte-hwa8ag"}">`;
});
const Button_svelte_svelte_type_style_lang = "";
const css = {
  code: ".button.svelte-yhyui9{font-family:var(--font-family-primary);font-size:16px;background-color:var(--color-primary);color:var(--color-text-light);border:var(--border-height-thick) solid var(--color-primary);border-radius:var(--small-radius);padding:16px 40px;cursor:pointer}.button.svelte-yhyui9:hover{background-color:var(--color-secondary);border:var(--border-height-thick) solid var(--color-secondary)}.button.svelte-yhyui9:active{background-color:var(--color-highlight);border:var(--border-height-thick) solid var(--color-highlight)}.button.svelte-yhyui9:disabled{background-color:var(--color-disabled);border:var(--border-height-thick) solid var(--color-disabled)}.button.svelte-yhyui9:focus{border:var(--border-height-thick) solid var(--color-highlight)}.button--full.svelte-yhyui9{width:100%}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { buttonWidth } = $$props;
  if ($$props.buttonWidth === void 0 && $$bindings.buttonWidth && buttonWidth !== void 0)
    $$bindings.buttonWidth(buttonWidth);
  $$result.css.add(css);
  return `<button class="${"button " + escape(buttonWidth, true) + " " + escape($$props.class, true) + " svelte-yhyui9"}">${slots.default ? slots.default({}) : ``}
</button>`;
});
export {
  Button as B,
  Input as I
};
