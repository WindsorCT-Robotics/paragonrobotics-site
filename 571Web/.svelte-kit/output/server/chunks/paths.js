let base = "/paragonrobotics-site";
let assets = base;
const app_dir = "app";
const initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
export {
  assets as a,
  base as b,
  app_dir as c,
  reset as r,
  set_assets as s
};
