import {expect} from 'chai'
import {LitDoc} from '.'

it('recognizes a lit expression', () => {
  expect(LitDoc('lit``')).eqls([{
    type: 'doc',
    source: 'lit``'
  }])
})

it('only recognizes the "lit" function', () => {
  expect(LitDoc('unlit``')).eqls([{
    type: 'code',
    source: 'unlit``'
  }])
})

it('ignores top-level non-template expressions', () => {
  expect(LitDoc('unlit()')).eqls([{
    type: 'code',
    source: 'unlit()'
  }])
})

it('ignores top-level template expressions without identifier', () => {
  expect(LitDoc('(unlit())``')).eqls([{
    type: 'code',
    source: '(unlit())``'
  }])
})

it('only recognizes lit expressions on the top-level', () => {
  expect(LitDoc('const x = lit``')).eqls([{
    type: 'code',
    source: 'const x = lit``'
  }])
})

it('works with TSX', () => {
  expect(LitDoc('const x = <div/>')).eqls([{
    type: 'code',
    source: 'const x = <div/>'
  }])
})

it('it fails with TSX if type is not tsx', () => {
  expect(LitDoc('const x = <div/>')).eqls([{
    type: 'code',
    source: 'const x = <div/>'
  }])
})

it('recognizes mixed code', () => {
  expect(LitDoc('lit``\nconst x = 42')).eqls([{
    type: 'doc',
    source: 'lit``'
  }, {
    type: 'code',
    source: 'const x = 42'
  }])
})
