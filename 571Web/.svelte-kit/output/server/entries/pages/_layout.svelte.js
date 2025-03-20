import { E as bind_props } from "../../chunks/index.js";
function _layout($$payload, $$props) {
  let children = $$props["children"];
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { children });
}
export {
  _layout as default
};
