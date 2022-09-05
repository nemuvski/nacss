import fs from "node:fs";
import path from "node:path";
import CleanCSS from "clean-css";

const OUTPUT_DIR_PATH = path.resolve("dist");
const LOAD_CSS_PATH = path.resolve("src", "index.css");

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf8"));

if (!fs.existsSync(OUTPUT_DIR_PATH)) {
  fs.mkdirSync(OUTPUT_DIR_PATH, { recursive: true });
}

const statements = `/*! nacss v${pkg.version} ${pkg.license} ${pkg.homepage} */\n`;
const inputCss = statements + fs.readFileSync(LOAD_CSS_PATH, "utf8");

const outputCss = new CleanCSS({
  format: "beautify",
  breakWith: "\n",
  indentWith: "space",
}).minify(inputCss);
const outputMinCss = new CleanCSS({}).minify(inputCss);

fs.writeFileSync(path.join(OUTPUT_DIR_PATH, "nacss.css"), outputCss.styles);
fs.writeFileSync(path.join(OUTPUT_DIR_PATH, "nacss.min.css"), outputMinCss.styles);

console.info("build version:", pkg.version);
console.info("output dir:", OUTPUT_DIR_PATH);
