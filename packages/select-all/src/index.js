import createMany from '@domp/create-many'

/**
 * @param {string | Node | Node[] | NodeList | HTMLCollection}
 * @returns {Node[] | null}
 */
export default function selectAll(ufo, context) {
  if (typeof ufo === 'string') {
    // if it seems to be HTML, create an elements
    if (/^\s*</.test(ufo)) {
      return createMany(ufo)
    }

    if (context) {
      return selectAll(context).reduce(
        (result, element) => result.concat(Array.from(element.querySelectorAll(ufo))),
        [],
      )
    }

    return Array.from(document.querySelectorAll(ufo))
  } else if (ufo instanceof Node) {
    return [ufo]
  } else if (ufo instanceof Array) {
    return ufo
  } else if (ufo instanceof NodeList || ufo instanceof HTMLCollection) {
    return Array.from(ufo)
  }

  return []
}
