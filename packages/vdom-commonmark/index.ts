import {Parser} from 'commonmark'
import {Handlers, render} from './render'
import defaultHandlers from './default'

export default (source: string, {
  handlers = {}
}: {
  handlers?: Partial<Handlers>
} = {}) => {
  const parser = new Parser()
  const root = parser.parse(source)
  return render(root, {...defaultHandlers, ...handlers})
}
