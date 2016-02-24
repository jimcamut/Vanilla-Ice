/* Vanilla Ice */

function ready(fn) {
	if (document.readyState != 'loading'){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

function hasClass(el, className) {
	//return el.className.indexOf( className ) != -1;
	if (el.classList) {
		el.classList.contains(className);
	} else {
		new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	}
}

function addClass(el, className) {
	if (el.classList) {
		el.classList.add(className);
	} else {
		el.className += ' ' + className;
	}
}

function removeClass(el, className) {
	if (el.classList) {
		el.classList.remove(className);
	} else{
		el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	}
}