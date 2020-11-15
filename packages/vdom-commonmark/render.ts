import {Node, NodeType} from 'commonmark'
import {ComponentChildren} from 'preact'

export type Handler = (node: Node, children: ComponentChildren) => ComponentChildren

export type Handlers = {
  [k in (NodeType | 'default')]: Handler
}

export const render = (node: Node, handlers: Partial<Handlers>) => {
  const children: ComponentChildren[] = []
  let child: Node | null = node.firstChild
  while (child) {
    children.push(render(child, handlers))
    child = child?.next
  }

  const handler = handlers[node.type]
    || handlers.default
    || (() => null)

  return handler(node, children)
}
