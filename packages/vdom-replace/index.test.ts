import {expect} from 'chai'
import React from 'preact/compat'
import {h} from 'preact'
import Rule from '.'

it('replaces node', () => {
  const rule = Rule({
    match: node => node.type === 'old' ? {value: node} : null,
    apply: () => h('new', {})
  })
  const result = React.Children.toArray(rule(h('root', {}, h('old', {}))))
  const children = React.Children.toArray(result[0].props.children)
  expect(children.length).eqls(1)
  expect(children[0].type).eqls('new')
  expect(children[0].props).eqls({})
})

it('replaces in children', () => {
  const rule = Rule({
    match: node => node.type === 'old' ? {value: node} : null,
    apply: () => h('new', {})
  })
  const children = React.Children.toArray(rule(['text', null, false, h('old', null)]))
  expect(children.length).eqls(2)
  expect(children[0]).eqls('text')
  expect(children[1].type).eqls('new')
})
