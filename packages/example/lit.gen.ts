import {writeFileSync} from 'fs'
import LitDoc from '@lit-doc/core'

writeFileSync('lit.doc.ts', LitDoc({
  timestamp: String(new Date()),
  baseDir: __dirname,
  packages: {
    '@lit-doc/example-mul': {
      path: '../example-mul',
      entry: 'index.ts'
    },
    '@lit-doc/example-plus': {
      path: '../example-plus',
      entry: 'index.ts'
    }
  }
}))
