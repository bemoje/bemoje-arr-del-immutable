import arrClone from '@bemoje/arr-clone'
import arrDel from '@bemoje/arr-del'

/**
 * Immnutably remove an element from an array if it is present.
 * @param {Array} arr - The array
 * @param {*} element - The element to remove
 * @return {Array} A shallow clone of the passed array with the element removed
 */
export default function arrDelImmutable(arr, element) {
	return arrDel(arrClone(arr), element)
}
