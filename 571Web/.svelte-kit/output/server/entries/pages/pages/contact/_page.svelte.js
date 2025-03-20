import "clsx";
import { N as sanitize_props, O as rest_props, J as fallback, P as spread_attributes, Q as clsx, R as slot, E as bind_props, C as pop, A as push, K as attr_class, S as attr, M as stringify } from "../../../../chunks/index.js";
import { twMerge } from "tailwind-merge";
import { N as Navbar } from "../../../../chunks/Navbar.js";
function P($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "color",
    "height",
    "align",
    "justify",
    "italic",
    "firstupper",
    "upperClass",
    "opacity",
    "whitespace",
    "size",
    "space",
    "weight"
  ]);
  push();
  let colorAndopacity, classP;
  let color = fallback($$props["color"], "text-gray-900 dark:text-white");
  let height = fallback($$props["height"], "normal");
  let align = fallback($$props["align"], "left");
  let justify = fallback($$props["justify"], false);
  let italic = fallback($$props["italic"], false);
  let firstupper = fallback($$props["firstupper"], false);
  let upperClass = fallback($$props["upperClass"], "first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-left");
  let opacity = fallback($$props["opacity"], () => void 0, true);
  let whitespace = fallback($$props["whitespace"], "normal");
  let size = fallback($$props["size"], "base");
  let space = fallback($$props["space"], () => void 0, true);
  let weight = fallback($$props["weight"], "normal");
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl"
  };
  const weights = {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black"
  };
  const spaces = {
    tighter: "tracking-tighter",
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
    wider: "tracking-wider",
    widest: "tracking-widest"
  };
  const heights = {
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose"
  };
  const aligns = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  const whitespaces = {
    normal: "whitespace-normal",
    nowrap: "whitespace-nowrap",
    pre: "whitespace-pre",
    preline: "whitespace-pre-line",
    prewrap: "whitespace-pre-wrap"
  };
  colorAndopacity = color.split(" ").map((element) => element.trim()).map((element) => element + "/" + String(opacity)).join(" ");
  classP = twMerge(size && sizes[size], opacity && colorAndopacity || color && color, height && heights[height], weight && weights[weight], space && spaces[space], align && aligns[align], justify && "text-justify", italic && "italic", firstupper && upperClass, whitespace && whitespaces[whitespace], $$sanitized_props.class);
  $$payload.out += `<p${spread_attributes({ ...$$restProps, class: clsx(classP) })}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></p>`;
  bind_props($$props, {
    color,
    height,
    align,
    justify,
    italic,
    firstupper,
    upperClass,
    opacity,
    whitespace,
    size,
    space,
    weight
  });
  pop();
}
function Contactbox($$payload, $$props) {
  let formUrl = "https://forms.gle/f1QwBEhH9h3v8NVUA";
  let className = fallback($$props["className"], "");
  $$payload.out += `<div><div${attr_class(`outline-2 outline-white p-4 bg-zinc-900 rounded-lg shadow-lg border border-gray-700 ${stringify(className)}`)}><h1 class="text-2xl font-bold">Contact Us</h1> <div class="text-xl">`;
  P($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Please feel free to contact us directly at <a href="mailto: teamparagon571@att.net">teamparagon571@att.net</a>.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <iframe${attr("src", formUrl)} title="Contact Form" class="w-full h-96 border-none"></iframe></div></div></div>`;
  bind_props($$props, { className });
}
function _page($$payload) {
  Navbar($$payload, {});
  $$payload.out += `<!----> <div class="bg-zinc-800 text-white min-h-screen flex flex-col px-4 py-8"><div class="flex-1 mt-4 pt-16">`;
  Contactbox($$payload, {});
  $$payload.out += `<!----></div></div>`;
}
export {
  _page as default
};
