import {expect} from 'chai'
import {mul} from '.'

it('multiplies two numbers', () => {
  expect(mul(2, 3)).eqls(6)
})
