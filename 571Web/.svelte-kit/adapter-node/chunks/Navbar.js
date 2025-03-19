import { _ as fallback, a7 as ensure_array_like, $ as attr, Z as escape_html, a1 as stringify, a8 as store_get, a9 as unsubscribe_stores, a0 as bind_props, W as pop, T as push } from "./index.js";
import { w as writable } from "./index2.js";
const logo = "/_app/immutable/assets/logo.C2OPpdzW.png";
function Navbar($$payload, $$props) {
  push();
  var $$store_subs;
  let navItems = fallback(
    $$props["navItems"],
    () => [
      { name: "Home", link: "/" },
      //{ name: 'About', link: '/pages/about' },
      { name: "Robots", link: "/pages/robots" },
      { name: "Contact", link: "/pages/contact" }
    ],
    true
  );
  let selectedNavItem = fallback($$props["selectedNavItem"], () => writable(navItems[0].name), true);
  let menuOpen = fallback($$props["menuOpen"], () => writable(false), true);
  const each_array = ensure_array_like(navItems);
  $$payload.out += `<nav id="nav" class="shadow-xl p-4 fixed w-full top-0 left-0 z-40 bg-gray-900 text-white svelte-13me9iw"><div class="container mx-auto flex items-center justify-between"><div class="flex items-center gap-4"><img${attr("src", logo)} alt="Logo" class="w-12 h-12 object-contain"> <h1 class="text-2xl text-amber-50">Paragon Robotics</h1></div> <button class="md:hidden">☰</button> <ul class="hidden md:flex gap-8 text-lg svelte-13me9iw"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<li><a${attr("class", `cursor-pointer p-2 svelte-13me9iw ${stringify([
      store_get($$store_subs ??= {}, "$selectedNavItem", selectedNavItem) === item.name ? "selected" : ""
    ].filter(Boolean).join(" "))}`)}${attr("href", item.link)}>${escape_html(item.name)}</a></li>`;
  }
  $$payload.out += `<!--]--></ul></div> `;
  if (store_get($$store_subs ??= {}, "$menuOpen", menuOpen)) {
    $$payload.out += "<!--[-->";
    const each_array_1 = ensure_array_like(navItems);
    $$payload.out += `<ul class="md:hidden flex flex-col items-center bg-red-700 text-lg p-4 svelte-13me9iw"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let item = each_array_1[$$index_1];
      $$payload.out += `<li><a class="cursor-pointer p-2 hover:bg-white/20 w-full text-center"${attr("href", item.link)}>${escape_html(item.name)}</a></li>`;
    }
    $$payload.out += `<!--]--></ul>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></nav>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { navItems, selectedNavItem, menuOpen });
  pop();
}
export {
  Navbar as N
};
