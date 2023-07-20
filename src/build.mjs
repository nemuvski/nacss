import fs from "node:fs";
import path from "node:path";
import * as csso from "csso";

const OUTPUT_DIR_PATH = path.resolve("dist");
const LOAD_CSS_PATH = path.resolve("src", "index.css");

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf8"));

if (!fs.existsSync(OUTPUT_DIR_PATH)) {
  fs.mkdirSync(OUTPUT_DIR_PATH, { recursive: true });
}

const statements = `/*! nacss v${pkg.version} ${pkg.license} */\n`;
const inputCss = statements + fs.readFileSync(LOAD_CSS_PATH, "utf8");

/**
 * @type {import('csso').MinifyOptions & import('csso').CompressOptions}
 */
const minifyOptions = {
  restructure: false,
  sourceMap: false,
  debug: false,
  // TO keep the license comment
  comments: "first-exclamation",
};

const result = csso.minify(inputCss, minifyOptions);

fs.writeFileSync(path.join(OUTPUT_DIR_PATH, "nacss.min.css"), result.css, { encoding: "utf8" });

console.info("build version:", pkg.version);
console.info("output dir:", OUTPUT_DIR_PATH);
