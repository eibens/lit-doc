const intersperse = function* <A, B> (a: ReadonlyArray<A>, b: ReadonlyArray<B>) {
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (i < a.length) yield a[i]
    if (i < b.length) yield b[i]
  }
}

export default <A, B> (a: ReadonlyArray<A>, b: ReadonlyArray<B>) => {
  return Array.from(intersperse(a, b))
}
