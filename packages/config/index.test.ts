import {expect} from 'chai'
import Config from '.'

it('throws if root is not an object', () => {
  const config = 42
  expect(() => Config(config)).throws(/root.+object/)
})

it('throws if root lacks packages key', () => {
  const config = {}
  expect(() => Config(config)).throws(/packages.+defined/)
})

it('throws if packages is not an object', () => {
  const config = {packages: 42}
  expect(() => Config(config)).throws(/packages.+object/)
})

it('throws if package is not an object', () => {
  const config = {packages: {foo: 42}}
  expect(() => Config(config)).throws(/packages.+foo.+object/)
})

it('throws if package lacks path key', () => {
  const config = {packages: {foo: {entry: ''}}}
  expect(() => Config(config)).throws(/packages.+foo.+path.+defined/)
})

it('throws if package path is not a string', () => {
  const config = {packages: {foo: {entry: '', path: 42}}}
  expect(() => Config(config)).throws(/packages.+foo.+path.+string/)
})

it('throws if package lacks entry key', () => {
  const config = {packages: {foo: {path: ''}}}
  expect(() => Config(config)).throws(/packages.+foo.+entry.+defined/)
})

it('throws if package entry is not a string', () => {
  const config = {packages: {foo: {path: '', entry: 42}}}
  expect(() => Config(config)).throws(/packages.+foo.+entry.+string/)
})

it('works for valid config', () => {
  const config = {packages: {foo: {path: '', entry: ''}}}
  expect(Config(config)).eqls(config)
})
