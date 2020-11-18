import {VNode, ComponentChildren} from 'preact'
import Rule from '@lit-doc/vdom-replace'

export default ({
  parts,
  blank,
  matchBlank,
  parse
}: {
  parts: (string | ComponentChildren)[]
  blank: (i: number) => string
  matchBlank: (x: VNode<any>) => number | null
  parse: (source: string) => ComponentChildren
}) => {
  const source = parts
    .map((x, i) => typeof x === 'string' ? x : blank(i))
    .join('')

  const replaceBlanks = Rule<number>({
    match: x => {
      const value = matchBlank(x)
      return value === null ? null : {value}
    },
    apply: index => parts[index]
  })

  return replaceBlanks(parse(source))
}
