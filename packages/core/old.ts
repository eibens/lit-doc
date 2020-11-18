import {ComponentChildren, h} from 'preact'
import intersperse from '@lit-doc/util-intersperse'
import cloze from '@lit-doc/vdom-cloze'
import parseTypescript from '@lit-doc/util-parse-typescript'
import renderCommonmark from '@lit-doc/vdom-commonmark'



/*
type Template<T = any> = [
  ReadonlyArray<string>,
  ...ReadonlyArray<T>
]

const fromSources = (source: string, doc: Template[]): ComponentChildren => {
  const docs = doc.map(([strings, results]) => {
    return cloze({
      parts: intersperse(strings, results || []),
      parse: renderCommonmark,
      blank: i => `<span data-blank="${i}"/>`,
      matchBlank: x => ('data-blank' in x.props)
        ? Number(x.props['data-blank'])
        : null
    })
  })

  const parsed = parseTypescript(source)
  return parsed.map(x => {
    switch (x.type) {
      case 'code':
        return h('pre', null, h('code', null, x.source))
      case 'doc':
        return docs.shift()
    }
  })
}

type LitDocConfig = {

}

type LitDocDoc = {
  source: string
  module: {
    doc: Template[]
  }
}

type LitDocDocs = Record<string, LitDocDoc>

type LitDocProps = {
  docs: LitDocDocs
}

export default (props: LitDocProps) => {
  return props
}
*/