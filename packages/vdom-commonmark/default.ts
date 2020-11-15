import {h} from 'preact'
import {Handler, Handlers} from './render'

const attr = <K extends string> (key: K, value: any) => {
  return value ? {[key]: value} : {}
}

const htmlHandler: Handler = node => {
  const {literal} = node
  const pattern = new RegExp(`^<blank index="([0-9]+)"/>$`)
  const match = (literal || '').match(pattern)
  if (!match) return h('code', {}, node.literal)
  const index = Number(match[1])
  return h('span', {
    'data-blank': index,
    style: {color: 'red'}
  }, `[blank #${index}]`)
}

const anchorHandler: Handler = (node, children) => {
  const href = node.destination || ''
  const isExternal = href.startsWith('http://')
    || href.startsWith('https://')

  return h('a', {
    ...(isExternal ? {target: '_blank'} : {}),
    ...attr('href', href)
  }, children)
}

const listHandler: Handler = (node, children) => {
  const {listType, listTight, listDelimiter, listStart} = node
  return h(listType === 'ordered' ? 'ol' : 'ul', {
    ...attr('data-tight', listTight),
    ...attr('data-delimiter', listDelimiter),
    ...attr('data-start', listStart)
  }, children)
}

const defaultHandler: Handler = () => h('span', {
  style: {color: 'red'}
}, '[unhandled CommonMark node]')

// noinspection SpellCheckingInspection
const defaultHandlers: Partial<Handlers> = {
  document: (_, children) => children,
  block_quote: (_, children) => h('blockquote', {}, children),
  emph: (_, children) => h('em', {}, children),
  item: (_, children) => h('li', {}, children),
  paragraph: (_, children) => h('p', {}, children),
  strong: (_, children) => h('strong', {}, children),
  heading: ({level}, children) => h('h' + (level || 6), {}, children),
  thematic_break: () => h('hr', {}),
  softbreak: () => h('span', {}),
  text: ({literal}) => literal,
  code: ({literal}) => h('code', {}, literal),
  code_block: ({literal}) => h('pre', {}, h('code', {}, literal)),
  link: anchorHandler,
  html_block: htmlHandler,
  html_inline: htmlHandler,
  list: listHandler,
  default: defaultHandler
}

export default defaultHandlers
