export const doc: any = []
const lit = (...x: any[]) => doc.push(x)

const a = 2, b = 3

// language=md
lit`
# Plus

The plus function adds two values. This is its source code:
`

export const plus = (a: number, b: number) => {
  return a + b
}

lit`
Example: ${a} + ${b} = ${plus(a, b)} 
`
