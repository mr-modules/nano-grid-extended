export const nano = "nn-";

export function createNode(obj) {
  const type = obj.type || 'div';
  const parent = obj.parent || document.body;
  const node = document.createElement(type);

  const hasText = obj.text !== undefined;
  if (hasText) {
    node.appendChild(document.createTextNode(obj.text));
  }

  const hasAttributes = obj.attributes !== '';
  if (hasAttributes) {
    for (const currentAttribute in obj.attributes) {
      const attr = document.createAttribute(obj.attributes[currentAttribute].name);
      attr.value = obj.attributes[currentAttribute].value;
      node.setAttributeNode(attr);
    }
  }

  parent.appendChild(node);
  return node;
}