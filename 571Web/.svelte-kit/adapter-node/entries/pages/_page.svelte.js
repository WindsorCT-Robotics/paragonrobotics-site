import "clsx";
import { N as Navbar } from "../../chunks/Navbar.js";
import { I as fallback, J as attr_class, K as bind_props, M as stringify } from "../../chunks/index.js";
function Article2025Update1($$payload, $$props) {
  let className = fallback($$props["className"], "");
  $$payload.out += `<div${attr_class(`outline-2 outline-white p-4 bg-zinc-900 rounded-lg shadow-lg border border-gray-700 ${stringify(className)}`)}><h1 class="text-2xl font-bold">2025 Robot Update 1</h1> <p><br> We recently got a Swerve Drive Mechanism for our robot. 
    This allows for a very percise and agile movement system. 
    It is very useful for our robot to be able to move around 
    the arena with very precise movements. We are currently 
    working on the software for the Swerve Drive Mechanism. <br> <br> Early Febuary 2025</p></div>`;
  bind_props($$props, { className });
}
function Article2025Update2($$payload, $$props) {
  let className = fallback($$props["className"], "");
  $$payload.out += `<div${attr_class(`outline-2 outline-white p-4 bg-zinc-900 rounded-lg shadow-lg border border-gray-700 ${stringify(className)}`)}><h1 class="text-2xl font-bold">2025 Robot Update 2</h1> <p><br> At the end of Febuary, the build team finished our competition robot,
    and gave it to the programming team to finish tuning the drivetrain and elevator.
    Our first competition is at Western New England University on the 15th and 
    16th of March. You can view our stats <a id="link" href="https://www.thebluealliance.com/team/571" class="text-blue-700">here</a>. <br> <br> Early March 2025</p></div>`;
  bind_props($$props, { className });
}
function _page($$payload) {
  $$payload.out += `<div id="bg" class="bg-zinc-800 text-white min-h-screen">`;
  Navbar($$payload, {});
  $$payload.out += `<!----> <div class="p-8 mt-20"><div class="grid gap-6 md:grid-cols-3">`;
  Article2025Update2($$payload, {});
  $$payload.out += `<!----> `;
  Article2025Update1($$payload, {});
  $$payload.out += `<!----></div></div></div>`;
}
export {
  _page as default
};
