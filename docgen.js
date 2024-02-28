const TypeDoc = require("typedoc");
const path = require("path");
const fs = require("fs");

async function main() {

  const baseDir = "src/components";
  const outputDir = "src/type-schemas";

  // Recursively find all type.ts files in the component directory
  const typeFiles = findTypeFiles(baseDir);

  for (const typeFile of typeFiles) {
    const relativePath = path.relative(baseDir, typeFile);
    const componentName = path.dirname(relativePath);

    // Generate JSON for each component
    const app = await TypeDoc.Application.bootstrapWithPlugins({
      "readme": "none",
      "exclude": "**/node_modules/**",
      entryPoints: [typeFile],
    });

    const project = await app.convert();

    if (project) {
      const componentOutputDir = path.join(outputDir, componentName);
      const jsonOutput = path.join(componentOutputDir, componentName + "Type.json");

      // Ensure the output directory exists
      fs.mkdirSync(componentOutputDir, { recursive: true });

      // Generate JSON output for the component
      await app.generateJson(project.children[0]?.children, jsonOutput);
    }
  }
}
function findTypeFiles(directory) {
  const typeFiles = [];

  function traverse(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const fullPath = path.join(dir, file);

      if (fs.statSync(fullPath).isDirectory()) {
        traverse(fullPath);
      } else if (file === "type.ts") {

        typeFiles.push(fullPath);
      }
    }
  }

  traverse(directory);
  return typeFiles;
}

main().catch(console.error);
