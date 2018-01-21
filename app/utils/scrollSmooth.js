
/*
    * globals
    */
const Element = window.HTMLElement || window.Element;
const SCROLL_TIME = 468;

/*
     * define timing method
     */
const now = window.performance && window.performance.now
    ? window.performance.now.bind(window.performance) : Date.now;


/**
 * returns result of applying ease math function to a number
 * @method ease
 * @param {Number} k
 * @returns {Number}
 */
function ease(k) {
    return 0.5 * (1 - Math.cos(Math.PI * k));
}

/**
   * changes scroll position inside an element
   * @method scrollElement
   * @param {Number} x
   * @param {Number} y
   */
function scrollElement(x, y) {
    this.scrollLeft = x;
    this.scrollTop = y;
}

/**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     */
function step(context) {
    // call method again on next available frame
    context.frame = window.requestAnimationFrame(step.bind(window, context));

    var time = now();
    var value;
    var currentX;
    var currentY;
    var elapsed = (time - context.startTime) / SCROLL_TIME;

    // avoid elapsed times higher than one
    elapsed = elapsed > 1 ? 1 : elapsed;

    // apply easing to elapsed time
    value = ease(elapsed);

    currentX = context.startX + (context.x - context.startX) * value;
    currentY = context.startY + (context.y - context.startY) * value;

    context.method.call(context.scrollable, currentX, currentY);

    // return when end points have been reached
    if (currentX === context.x && currentY === context.y) {
        window.cancelAnimationFrame(context.frame);
        return;
    }
}

/**
     * scrolls window with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     */
export function smoothScroll(el, x, y) {
    const scrollable = el;
    const startX = el.scrollLeft;
    const startY = el.scrollTop;
    const method= scrollElement;
    const startTime = now();
    var frame;

    // cancel frame when a scroll event's happening
    if (frame) {
        window.cancelAnimationFrame(frame);
    }

    // scroll looping over a frame
    step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y,
        frame: frame
    });
}