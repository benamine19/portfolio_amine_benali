// Compile le CV : `npm run cv`
// pdflatex (MiKTeX) deux fois, puis copie le PDF vers public/cv/Amine_Benali_CV.pdf,
// l'adresse utilisée par le bouton "Télécharger le CV" du portfolio (app/lib/config.ts).
import { spawnSync } from "node:child_process";
import { copyFileSync, mkdirSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(dir, "..");
for (let pass = 1; pass <= 2; pass++) {
  const r = spawnSync("pdflatex", ["-interaction=nonstopmode", "-halt-on-error", "--enable-installer", "cv.tex"], { cwd: dir, stdio: "inherit" });
  if (r.status !== 0) {
    console.error("\nÉchec de pdflatex : voir cv/cv.log.");
    process.exit(r.status ?? 1);
  }
}
const target = path.join(root, "public", "cv", "Amine_Benali_CV.pdf");
mkdirSync(path.dirname(target), { recursive: true });
copyFileSync(path.join(dir, "cv.pdf"), target);
for (const ext of ["aux", "log", "out", "toc"]) rmSync(path.join(dir, `cv.${ext}`), { force: true });
console.log(`\n✔ ${path.relative(root, target)}`);
