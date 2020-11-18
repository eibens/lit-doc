import intersperse from '.'

it('works for empty arrays', () => {
  expect(intersperse([], [])).toEqual([])
})

it('works if first array is shorter', () => {
  expect(intersperse([1], [2, 3])).toEqual([1, 2, 3])
})

it('works if arrays are equal length', () => {
  expect(intersperse([1, 2], [3, 4])).toEqual([1, 3, 2, 4])
})

it('works if first array is longer', () => {
  expect(intersperse([1, 2], [3])).toEqual([1, 3, 2])
})
