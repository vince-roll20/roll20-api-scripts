import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const scriptJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, "script.json"), "utf8"),
);
const buildTimestamp = new Date().toISOString();

const banner = [
  "/**",
  " * GENERATED FILE - DO NOT EDIT DIRECTLY.",
  " * Source files live under src/ and are bundled with `npm run build`.",
  ` * Built: ${buildTimestamp}`,
  " */",
].join("\n");

export default {
  input: path.join(__dirname, "src", "index.js"),
  output: [
    {
      file: path.join(__dirname, `${scriptJson.name}.js`),
      format: "iife",
      banner,
    },
    {
      file: path.join(__dirname, scriptJson.version, `${scriptJson.name}.js`),
      format: "iife",
      banner,
    },
  ],
};
