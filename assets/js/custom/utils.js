/*------- Core Functions --------*/

//wrap function
function wrap( el, wrapper ) {
	if ( wrapper === undefined ) {
		wrapper = document.createElement( 'div' );
	}
	el.parentNode.insertBefore( wrapper, el );
	wrapper.appendChild( el );
	return wrapper;
}

//debounce to slow down an event that users window size or the like
//debounce will wait till the window is resized and then run
function debounce( func, wait, immediate ) {
	let timeout;
	return function() {
		const context = this,
			args = arguments;
		const later = function() {
			timeout = null;
			if ( ! immediate ) {
				func.apply( context, args );
			}
		};
		const callNow = immediate && ! timeout;
		clearTimeout( timeout );
		timeout = setTimeout( later, wait );
		if ( callNow ) {
			func.apply( context, args );
		}
	};
}

//throttle will run every few milliseconds as opposed to every millisecond
function throttle( fn, threshhold, scope ) {
	threshhold = threshhold || 250;
	let last, deferTimer;
	return function() {
		const context = scope || this;

		const now = +new Date(),
			args = arguments;
		if ( last && now < last + threshhold ) {
			// hold on to it
			clearTimeout( deferTimer );
			deferTimer = setTimeout( function() {
				last = now;
				fn.apply( context, args );
			}, threshhold );
		} else {
			last = now;
			fn.apply( context, args );
		}
	};
}

export { wrap, debounce, throttle };
