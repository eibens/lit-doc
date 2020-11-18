export type Config = {
  packages: {
    [key: string]: {
      path: string
      entry: string
    }
  }
}

const checkType = (path: string, value: unknown, type: string) => {
  const message = (msg: string) => `lit-doc config error: path <root>${path} ${msg}`
  if (value === undefined) {
    throw new Error(message('must be defined'))
  }
  if (typeof value !== type) {
    throw new Error(message('must be of type ' + type))
  }
}

export default (config: unknown): Config => {
  checkType('', config, 'object')

  const packages = (config as any)['packages']
  checkType('.packages', packages, 'object')

  const packageNames = Object.keys(packages)
  packageNames.forEach(packageName => {
    const pkg = packages[packageName]
    checkType(`packages['${packageName}']`, pkg, 'object')

    const {path, entry} = pkg
    checkType(`packages['${packageName}'].path`, path, 'string')
    checkType(`packages['${packageName}'].entry`, entry, 'string')
  })

  return config as Config
}
