/**
 * javascript Array Object is best
 */
function array () {
	return []
}

/**
 * polyfill : ECMAScript2015
 */
(function (A) {
	/**
	 * Method
	 * 	from
	 * 	of
	 * 
	 * Prototype
	 * 	copyWithin
	 * 	fill
	 * 	find
	 * 	findIndex
	 */

	A.prototype.copyWithin = function () {}
	A.prototype.fill = function () {}
	A.prototype.find = function () {}
	A.prototype.findIndex = function () {}

})
(array())