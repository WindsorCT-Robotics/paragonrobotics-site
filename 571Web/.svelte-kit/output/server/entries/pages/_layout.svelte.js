import "clsx";
function _layout($$payload, $$props) {
  let { children } = $$props;
  children($$payload);
  $$payload.out += `<!----> <head><link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&amp;display=swap" rel="stylesheet"></head>`;
}
export {
  _layout as default
};
