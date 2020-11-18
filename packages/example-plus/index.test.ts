import {expect} from 'chai'
import {plus} from '.'

it('adds two numbers', () => {
  expect(plus(2, 3)).eqls(5)
})
