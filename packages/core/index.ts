import * as fs from 'fs'
import * as path from 'path'
import generate from '@lit-doc/generate'

export type Config = {
  timestamp: string
  baseDir: string
  packages: {
    [key: string]: {
      path: string
      entry: string
    }
  }
}

export default (config: Config) => {

  const packages = Object.entries(config.packages).map(([name, pkg]) => {
    const pkgRoot = path.join(config.baseDir, pkg.path)
    const sourceFile = path.join(pkgRoot, pkg.entry)
    const infoFile = path.join(pkgRoot, 'package.json')
    const source = fs.readFileSync(sourceFile, 'utf-8')
    const info = JSON.parse(fs.readFileSync(infoFile, 'utf8'))

    if (info.name !== name) {
      throw new Error(`lit-doc config error: name in package.json ('${info.name}') does not match name in config ('${name}')`)
    }

    return {source, info}
  })

  return generate({
    timestamp: config.timestamp,
    packages
  })
}
