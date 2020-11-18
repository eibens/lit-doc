import {Children} from 'preact/compat'
import {h} from 'preact'
import Rule from '.'

it('replaces node', () => {
  const rule = Rule({
    match: node => node.type === 'old' ? {value: node} : null,
    apply: () => h('new', {})
  })
  const result = Children.toArray(rule(h('root', {}, h('old', {}))))
  const children = Children.toArray(result[0].props.children)
  expect(children.length).toEqual(1)
  expect(children[0].type).toEqual('new')
  expect(children[0].props).toEqual({})
})

it('replaces in children', () => {
  const rule = Rule({
    match: node => node.type === 'old' ? {value: node} : null,
    apply: () => h('new', {})
  })
  const children = Children.toArray(rule(['text', null, false, h('old', null)]))
  expect(children.length).toEqual(2)
  expect(children[0]).toEqual('text')
  expect(children[1].type).toEqual('new')
})
