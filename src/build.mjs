// @ts-check

import fs from "node:fs";
import path from "node:path";
import browserslist from "browserslist";
import { browserslistToTargets, transform } from "lightningcss";

const isDevMode = process.env.NODE_ENV === "development";
if (isDevMode) {
  console.info("---- DEVELOPMENT BUILD MODE ----");
} else {
  console.info("---- PRODUCTION BUILD MODE ----");
}

const OUTPUT_DIR_PATH = isDevMode ? path.resolve("dev") : path.resolve("dist");
const OUTPUT_FILE_NAME = isDevMode ? "nacss.css" : "nacss.min.css";
const LOAD_CSS_PATH = path.resolve("src", "index.css");

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf8"));

console.info("build version:", pkg.version);

if (!fs.existsSync(OUTPUT_DIR_PATH)) {
  fs.mkdirSync(OUTPUT_DIR_PATH, { recursive: true });
}

const statements = `/*! nacss v${pkg.version} ${pkg.license} */\n`;
const inputCss = statements + fs.readFileSync(LOAD_CSS_PATH, "utf8");

const targetBroswerList = browserslist("> 0.2% and not dead");

console.info("targets:");
console.info(targetBroswerList.join("\n"));

const result = transform({
  filename: "index.css", // Used for error messages and source maps
  code: Buffer.from(inputCss),
  targets: browserslistToTargets(targetBroswerList),
  minify: !isDevMode,
  sourceMap: false,
  errorRecovery: true,
});

if (result.warnings.length > 0) {
  console.warn(result.warnings);
  process.exit(1);
}

fs.writeFileSync(path.join(OUTPUT_DIR_PATH, OUTPUT_FILE_NAME), result.code, { encoding: "utf8" });
