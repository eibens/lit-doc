import {ComponentChildren, h} from 'preact'
import intersperse from '@eibens/lit-doc-util-intersperse'
import cloze from '@eibens/lit-doc-vdom-cloze'
import renderCommonmark from '@eibens/lit-doc-vdom-commonmark'

type Template<T> = [
  ReadonlyArray<string>,
  ...ReadonlyArray<T>
]

export default (...[strings, ...results]: Template<ComponentChildren>) => {
  return cloze({
    parts: intersperse(strings, results),
    parse: renderCommonmark,
    blank: i => `<span data-blank="${i}"/>`,
    matchBlank: x => ('data-blank' in x.props)
      ? Number(x.props['data-blank'])
      : null
  })
}
