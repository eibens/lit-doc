
// generated by lit-doc
// time: Wed Nov 18 2020 16:51:39 GMT+0100 (Central European Standard Time)

import * as p0 from '@lit-doc/example-mul'
import * as p1 from '@lit-doc/example-plus'

export default {
  '@lit-doc/example-mul': {
    exports: p0,
    source: "export const doc: any = []\nconst lit = (...x: any[]) => doc.push(x)\n\nconst a = 2, b = 3\n\n// language=md\nlit`\n# Mul\n\nThe \\`mul\\` function multiplies two numbers. This is its source code:\n`\n\nexport const mul = (a: number, b: number) => {\n  return a * b\n}\n\nlit`\nExample: ${a} * ${b} = ${mul(a, b)} \n`\n",
    info: {"name":"@lit-doc/example-mul","version":"0.0.0","license":"UNLICENSED","main":"dist/index.js","scripts":{"test":"nyc ts-mocha index.test.ts","build":"tsc","watch":"tsc -w"},"devDependencies":{"@types/chai":"^4.2.12","@types/mocha":"^8.0.3","chai":"^4.2.0","mocha":"^8.1.3","nyc":"^15.1.0","ts-mocha":"^7.0.0","typescript":"^4.0.3"}}
  },
  '@lit-doc/example-plus': {
    exports: p1,
    source: "export const doc: any = []\nconst lit = (...x: any[]) => doc.push(x)\n\nconst a = 2, b = 3\n\n// language=md\nlit`\n# Plus\n\nThe plus function adds two values. This is its source code:\n`\n\nexport const plus = (a: number, b: number) => {\n  return a + b\n}\n\nlit`\nExample: ${a} + ${b} = ${plus(a, b)} \n`\n",
    info: {"name":"@lit-doc/example-plus","version":"0.0.0","license":"UNLICENSED","main":"dist/index.js","scripts":{"test":"nyc ts-mocha index.test.ts","build":"tsc","watch":"tsc -w"},"devDependencies":{"@types/chai":"^4.2.12","@types/mocha":"^8.0.3","chai":"^4.2.0","mocha":"^8.1.3","nyc":"^15.1.0","ts-mocha":"^7.0.0","typescript":"^4.0.3"}}
  }
}
