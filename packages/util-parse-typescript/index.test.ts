import parse from '.'

it('recognizes a lit expression', () => {
  expect(parse('lit``')).toEqual([{
    type: 'doc',
    source: 'lit``'
  }])
})

it('ignores top-level non-template expressions', () => {
  expect(parse('unlit()')).toEqual([{
    type: 'code',
    source: 'unlit()'
  }])
})

it('ignores top-level template expressions without identifier', () => {
  expect(parse('(unlit())``')).toEqual([{
    type: 'code',
    source: '(unlit())``'
  }])
})

it('ignores top-level template expression with wrong identifier', () => {
  expect(parse('unlit``')).toEqual([{
    type: 'code',
    source: 'unlit``'
  }])
})

it('ignores nested lit doc expression', () => {
  expect(parse('const x = lit``')).toEqual([{
    type: 'code',
    source: 'const x = lit``'
  }])
})

it('works with TSX', () => {
  expect(parse('const x = <div/>')).toEqual([{
    type: 'code',
    source: 'const x = <div/>'
  }])
})

it('it fails with TSX if type is not tsx', () => {
  expect(parse('const x = <div/>')).toEqual([{
    type: 'code',
    source: 'const x = <div/>'
  }])
})

it('parses source with lit doc expressions and normal code', () => {
  expect(parse('lit``\nconst x = 42')).toEqual([{
    type: 'doc',
    source: 'lit``'
  }, {
    type: 'code',
    source: 'const x = 42'
  }])
})
