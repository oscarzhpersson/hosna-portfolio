export function extractTextFromRichText(richText: any): string {
  if (!richText || !richText.root || !richText.root.children) {
    return ''
  }

  const traverse = (nodes: any[]): string => {
    return nodes
      .map((node) => {
        if (node.type === 'text') {
          return node.text
        } else if (node.children) {
          return traverse(node.children)
        }
        return ''
      })
      .join('')
  }

  return traverse(richText.root.children)
}
