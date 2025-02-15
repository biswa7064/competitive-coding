// index.js
import { existsSync } from "fs"
import { dirname, join } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const fileName = process.argv[2]
const specificDir = process.argv[3]

if (!fileName) {
  console.error("Please provide a file name")
  console.log("Usage: node index.js fileName [directory]")
  process.exit(1)
}

const directories = [
  "algo/dp",
  "arrays",
  "numbers",
  "others",
  "strings",
  "utils",
  "others/customForInBuilt",
]

async function findAndRunFile(fileName, specificDir) {
  const baseFileName = fileName.replace(/\.(js|mjs)$/, "")
  const dirsToSearch = specificDir ? [specificDir] : directories
  const foundFiles = []

  // Search for both .js and .mjs files
  for (const dir of dirsToSearch) {
    const jsPath = join(__dirname, dir, `${baseFileName}.js`)
    const mjsPath = join(__dirname, dir, `${baseFileName}.mjs`)

    if (existsSync(jsPath)) foundFiles.push(jsPath)
    if (existsSync(mjsPath)) foundFiles.push(mjsPath)
  }

  if (foundFiles.length === 0) {
    console.error(
      `File ${fileName} not found in directories: ${dirsToSearch.join(", ")}`
    )
    return
  }

  if (foundFiles.length > 1) {
    console.log("Multiple matching files found:")
    foundFiles.forEach((file, index) => {
      console.log(`${index + 1}. ${file}`)
    })
    console.log("Please specify a directory or full file name")
    return
  }

  try {
    console.log(`Running file: ${foundFiles[0]}`)
    // Convert file path to URL format
    const fileUrl = new URL(`file://${foundFiles[0]}`).href
    await import(fileUrl)
  } catch (error) {
    console.error("Error running file:", error.message)
  }
}

findAndRunFile(fileName, specificDir)
