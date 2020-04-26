(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/arr-clone'), require('@bemoje/arr-del')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/arr-clone', '@bemoje/arr-del'], factory) :
	(global = global || self, global['arr-del-immutable'] = factory(global.arrClone, global.arrDel));
}(this, (function (arrClone, arrDel) { 'use strict';

	arrClone = arrClone && Object.prototype.hasOwnProperty.call(arrClone, 'default') ? arrClone['default'] : arrClone;
	arrDel = arrDel && Object.prototype.hasOwnProperty.call(arrDel, 'default') ? arrDel['default'] : arrDel;

	/**
	 * Immnutably remove an element from an array if it is present.
	 * @param {Array} arr - The array
	 * @param {*} element - The element to remove
	 * @return {Array} A shallow clone of the passed array with the element removed
	 */
	function arrDelImmutable(arr, element) {
		return arrDel(arrClone(arr), element)
	}

	return arrDelImmutable;

})));
