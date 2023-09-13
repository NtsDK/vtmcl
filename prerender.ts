import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p: string) => path.resolve(__dirname, p);

const ruTemplate = fs.readFileSync(
  toAbsolute("dist/static/index.html"),
  "utf-8",
);
const enTemplate = fs.readFileSync(
  toAbsolute("dist/static/index-en.html"),
  "utf-8",
);

(async () => {
  async function preRenderRoute(
    outFile: string,
    template: string,
    lang: string,
  ) {
    const context = {};
    const { render, CURRENT_VERSION } = await import(
      "./dist/server/entry-server.js"
    );
    const appHtml = await render("/", lang);
    const html1 = template.replace(`<!--app-html-->`, appHtml);
    const html = html1.replace(`<!--version-->`, `v${CURRENT_VERSION}`);
    const filePath = `dist/static/${outFile}.html`;
    fs.writeFileSync(toAbsolute(filePath), html);
    console.log("📦 pre-rendered:", filePath);
  }
  await preRenderRoute("index", ruTemplate, "ru");
  await preRenderRoute("index-en", enTemplate, "en");
})();
