import {ComponentChildren, h} from 'preact'
import intersperse from '@lit-doc/util-intersperse'
import commonmark from '@lit-doc/vdom-commonmark'
import parseTypescript from '@lit-doc/util-parse-typescript'
import cloze from '@lit-doc/vdom-cloze'

type Template<T = any> = [
  ReadonlyArray<string>,
  ...ReadonlyArray<T>
]

export default (source: string, doc: Template[]): ComponentChildren => {
  const parsed = parseTypescript(source)
  const docs = doc.map(([strings, results]) => {
    return cloze({
      parts: intersperse(strings, results || []),
      parse: commonmark,
      blank: i => `<span data-blank="${i}"/>`,
      matchBlank: x => ('data-blank' in x.props)
        ? Number(x.props['data-blank'])
        : null
    })
  })
  console.log(parsed)
  console.log(docs)
  return parsed.map(x => {
    switch (x.type) {
      case 'code':
        return h('pre', null, h('code', null, x.source))
      case 'doc':
        return docs.shift()
    }
  })
}
