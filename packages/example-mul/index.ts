export const doc: any = []
const lit = (...x: any[]) => doc.push(x)

const a = 2, b = 3

// language=md
lit`
# Mul

The \`mul\` function multiplies two numbers. This is its source code:
`

export const mul = (a: number, b: number) => {
  return a * b
}

lit`
Example: ${a} * ${b} = ${mul(a, b)} 
`
