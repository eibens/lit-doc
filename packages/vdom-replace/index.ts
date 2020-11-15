import {ComponentChildren, h, VNode} from 'preact'

const isNode = (x: any) => {
  return typeof x === 'object'
    && x !== null
    && 'type' in x
    && typeof x.props === 'object'
}

export type RuleProps<T> = {
  match: (x: VNode<any>) => ({value: T} | null)
  apply: (y: T) => ComponentChildren
}

export default <T extends any> ({match, apply}: RuleProps<T>) => {
  const replace = (x: ComponentChildren): ComponentChildren => {
    if (Array.isArray(x)) {
      return x
        .map(replace)
        .reduce((a: ComponentChildren[], xi) => [...a, xi], [])
    }
    if (isNode(x)) {
      const v = x as VNode
      const result = match(v)
      if (result) return apply(result.value)

      // Preserve current node and recurse.
      return h(
        v.type as any,
        v.props,
        replace(v.props.children)
      )
    }
    return x
  }
  return replace
}
