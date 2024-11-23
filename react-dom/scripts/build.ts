import {existsSync, mkdirSync, writeFileSync, copyFileSync} from "fs";
import path, {dirname} from "path";

const schema = {
  "name": "react-dom",
  "libName": "ReactDOM",
  "version": "18.3.1",
  "author": "Marvin",
  "description": "",
  "keywords": [],
  "schema": [],
  "defaultValue": {},
  "manifest": {
    "umd": {
      "src/index.tsx": {
        "file": "index.production.umd.js",
        "name": "index",
        "src": "src/index.tsx",
        "isEntry": true
      }
    }
  },
  "assets": {
    "umd": [
      "umd/index.production.umd.js"
    ]
  }
}

const checkAndCreateDir = (directory: string) => {
  if (!existsSync(directory)) {
    const parentDir = dirname(directory);
    if (!existsSync(parentDir)) {
      checkAndCreateDir(parentDir);
    }
    mkdirSync(directory);
  }
}

const checkAndCreateFile = (filePath: string) => {
  if (!existsSync(filePath)) {
    const parentDir = dirname(filePath);
    if (!existsSync(parentDir)) {
      checkAndCreateDir(parentDir);
    }
    writeFileSync(filePath, '');
  }
}

const build = () => {
  return new Promise((resolve, reject) => {
    const schemaJsonPath = path.resolve(process.cwd(), 'lib/schema.json')
    try {
      checkAndCreateDir(path.resolve(process.cwd(), 'lib/umd'));
      checkAndCreateFile(schemaJsonPath);
      writeFileSync(schemaJsonPath, JSON.stringify(schema, null, 2), 'utf-8');
      copyFileSync(path.resolve(process.cwd(), 'source/index.production.umd.js'), path.resolve(process.cwd(), 'lib/umd/index.production.umd.js'))
      copyFileSync(path.resolve(process.cwd(), 'source/index.development.umd.js'), path.resolve(process.cwd(), 'lib/umd/index.development.umd.js'))
      resolve(true)
    }catch (e) {
      reject(e)
    }
  })
}

build().then(() => {
  process.exit(0)
}).catch((e) => {
  console.log(e)
  process.exit(1)
})