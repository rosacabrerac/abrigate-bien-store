import { execSync } from "node:child_process";

try {
  const branch = execSync("git branch --show-current", {
    encoding: "utf8",
  }).trim();

  if (branch === "main") {
    console.log(
      "Actualización en main detectada. Compilando y desplegando a Netlify...",
    );
    execSync("pnpm run build && pnpm exec netlify deploy --prod --dir=dist", {
      stdio: "inherit",
    });
  } else {
    console.log(`Rama actual (${branch}) no es main. Se omite el deploy.`);
  }
} catch (error) {
  console.error("Error al ejecutar el script de deploy:", error.message);
  process.exit(1);
}
