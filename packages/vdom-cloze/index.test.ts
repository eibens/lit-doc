import cloze from '.'
import {h} from 'preact'

it('passes text with blanks to parser', done => {
  cloze({
    parts: ['head ', {}, ' middle ', {}, ' tail'],
    blank: i => String(i),
    matchBlank: () => null,
    parse: source => {
      expect(source).toEqual('head 1 middle 3 tail')
      done()
      return []
    }
  })
})

it('replaces multiple blanks', () => {
  const result = cloze({
    parts: [21, 42],
    blank: () => '',
    matchBlank: x => x.type === 'blank' ? x.props.i : null,
    parse: () => [
      h('blank', {i: 0}),
      'raw text',
      h('blank', {i: 1})
    ]
  })
  expect(result).toEqual([21, 'raw text', 42])
})

it('replaces deep blanks', () => {
  const result = cloze({
    parts: [42],
    blank: () => '',
    matchBlank: x => x.type === 'blank' ? 0 : null,
    parse: () => h('custom', null, h('blank', {i: 0}))
  })
  expect((result as any).props.children).toEqual(42)
})

it('ignores non blank nodes', () => {
  const result = cloze({
    parts: [42],
    blank: () => '',
    matchBlank: x => x.type === 'blank' ? 0 : null,
    parse: () => h('not-blank', null)
  })
  expect((result as any).type).toEqual('not-blank')
})
