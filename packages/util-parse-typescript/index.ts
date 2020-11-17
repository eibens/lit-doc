import * as ts from 'typescript'

type Part = {
  type: 'code' | 'doc'
  source: string
}

export const isLitDocExpression = (node: ts.Node, sourceFile: ts.SourceFile) => {

  // A lit doc expression is an expression
  if (node.kind !== ts.SyntaxKind.ExpressionStatement) return false

  // ...that contains a tagged template literal as the first child
  const template = node.getChildren(sourceFile)[0]
  if (!template || template.kind !== ts.SyntaxKind.TaggedTemplateExpression) return false

  // ...that contains an identifier as the first child
  const identifier = template.getChildren(sourceFile)[0]
  if (!identifier || identifier.kind !== ts.SyntaxKind.Identifier) return false

  // ...that has the value 'lit'.
  return identifier.getText(sourceFile) === 'lit'
}

export default (source: string): Part[] => {

  let sourceFile = ts.createSourceFile(
    'this-is-not-a-real-file.ts',
    source,
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS
  )

  const parts: Part[] = []
  ts.forEachChild(sourceFile, (child: ts.Node) => {
    const partSource = source.substr(child.pos, child.end - child.pos).trim()
    if (!partSource) return
    parts.push({
      type: isLitDocExpression(child, sourceFile) ? 'doc' : 'code',
      source: partSource
    })
  })
  return parts
}
