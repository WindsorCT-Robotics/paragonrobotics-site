import "clsx";
import { N as Navbar } from "../../../../chunks/Navbar.js";
import { I as fallback, J as attr_class, S as attr, K as bind_props, M as stringify } from "../../../../chunks/index.js";
const r23 = "/paragonrobotics-site/app/immutable/assets/2023robot.CNb6onnC.jpg";
function _3r($$payload, $$props) {
  let className = fallback($$props["className"], "");
  $$payload.out += `<div${attr_class(`outline-2 outline-white p-4 bg-zinc-900 rounded-lg shadow-lg border border-gray-700 ${stringify(className)}`)}><h1 class="text-2xl font-bold">2023 Robot "Reddy"</h1> <img alt="2024 Robot"${attr("src", r23)}></div>`;
  bind_props($$props, { className });
}
const r24 = "/paragonrobotics-site/app/immutable/assets/2024robot.DBCrl-EW.jpg";
function _4r($$payload, $$props) {
  let className = fallback($$props["className"], "");
  $$payload.out += `<div${attr_class(`outline-2 outline-white p-4 bg-zinc-900 rounded-lg shadow-lg border border-gray-700 ${stringify(className)}`)}><h1 class="text-2xl font-bold">2024 Robot "Hi-fi"</h1> <img alt="2024 Robot"${attr("src", r24)}></div>`;
  bind_props($$props, { className });
}
function _page($$payload) {
  $$payload.out += `<div id="bg" class="bg-zinc-800 text-white min-h-screen">`;
  Navbar($$payload, {});
  $$payload.out += `<!----> <div class="p-8 mt-20"><div class="grid gap-6 md:grid-cols-3">`;
  _4r($$payload, {});
  $$payload.out += `<!----> `;
  _3r($$payload, {});
  $$payload.out += `<!----></div></div></div>`;
}
export {
  _page as default
};
