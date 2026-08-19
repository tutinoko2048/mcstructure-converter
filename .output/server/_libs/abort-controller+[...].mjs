import { n as __esmMin, r as __exportAll } from "../_runtime.mjs";
//#region node_modules/.pnpm/event-target-shim@5.0.1/node_modules/event-target-shim/dist/event-target-shim.mjs
/**
* Get private data.
* @param {Event} event The event object to get private data.
* @returns {PrivateData} The private data of the event.
* @private
*/
function pd(event) {
	const retv = privateData.get(event);
	console.assert(retv != null, "'this' is expected an Event object, but got", event);
	return retv;
}
/**
* https://dom.spec.whatwg.org/#set-the-canceled-flag
* @param data {PrivateData} private data.
*/
function setCancelFlag(data) {
	if (data.passiveListener != null) {
		if (typeof console !== "undefined" && typeof console.error === "function") console.error("Unable to preventDefault inside passive event listener invocation.", data.passiveListener);
		return;
	}
	if (!data.event.cancelable) return;
	data.canceled = true;
	if (typeof data.event.preventDefault === "function") data.event.preventDefault();
}
/**
* @see https://dom.spec.whatwg.org/#interface-event
* @private
*/
/**
* The event wrapper.
* @constructor
* @param {EventTarget} eventTarget The event target of this dispatching.
* @param {Event|{type:string}} event The original event to wrap.
*/
function Event(eventTarget, event) {
	privateData.set(this, {
		eventTarget,
		event,
		eventPhase: 2,
		currentTarget: eventTarget,
		canceled: false,
		stopped: false,
		immediateStopped: false,
		passiveListener: null,
		timeStamp: event.timeStamp || Date.now()
	});
	Object.defineProperty(this, "isTrusted", {
		value: false,
		enumerable: true
	});
	const keys = Object.keys(event);
	for (let i = 0; i < keys.length; ++i) {
		const key = keys[i];
		if (!(key in this)) Object.defineProperty(this, key, defineRedirectDescriptor(key));
	}
}
/**
* Get the property descriptor to redirect a given property.
* @param {string} key Property name to define property descriptor.
* @returns {PropertyDescriptor} The property descriptor to redirect the property.
* @private
*/
function defineRedirectDescriptor(key) {
	return {
		get() {
			return pd(this).event[key];
		},
		set(value) {
			pd(this).event[key] = value;
		},
		configurable: true,
		enumerable: true
	};
}
/**
* Get the property descriptor to call a given method property.
* @param {string} key Property name to define property descriptor.
* @returns {PropertyDescriptor} The property descriptor to call the method property.
* @private
*/
function defineCallDescriptor(key) {
	return {
		value() {
			const event = pd(this).event;
			return event[key].apply(event, arguments);
		},
		configurable: true,
		enumerable: true
	};
}
/**
* Define new wrapper class.
* @param {Function} BaseEvent The base wrapper class.
* @param {Object} proto The prototype of the original event.
* @returns {Function} The defined wrapper class.
* @private
*/
function defineWrapper(BaseEvent, proto) {
	const keys = Object.keys(proto);
	if (keys.length === 0) return BaseEvent;
	/** CustomEvent */
	function CustomEvent(eventTarget, event) {
		BaseEvent.call(this, eventTarget, event);
	}
	CustomEvent.prototype = Object.create(BaseEvent.prototype, { constructor: {
		value: CustomEvent,
		configurable: true,
		writable: true
	} });
	for (let i = 0; i < keys.length; ++i) {
		const key = keys[i];
		if (!(key in BaseEvent.prototype)) {
			const isFunc = typeof Object.getOwnPropertyDescriptor(proto, key).value === "function";
			Object.defineProperty(CustomEvent.prototype, key, isFunc ? defineCallDescriptor(key) : defineRedirectDescriptor(key));
		}
	}
	return CustomEvent;
}
/**
* Get the wrapper class of a given prototype.
* @param {Object} proto The prototype of the original event to get its wrapper.
* @returns {Function} The wrapper class.
* @private
*/
function getWrapper(proto) {
	if (proto == null || proto === Object.prototype) return Event;
	let wrapper = wrappers.get(proto);
	if (wrapper == null) {
		wrapper = defineWrapper(getWrapper(Object.getPrototypeOf(proto)), proto);
		wrappers.set(proto, wrapper);
	}
	return wrapper;
}
/**
* Wrap a given event to management a dispatching.
* @param {EventTarget} eventTarget The event target of this dispatching.
* @param {Object} event The event to wrap.
* @returns {Event} The wrapper instance.
* @private
*/
function wrapEvent(eventTarget, event) {
	return new (getWrapper(Object.getPrototypeOf(event)))(eventTarget, event);
}
/**
* Get the immediateStopped flag of a given event.
* @param {Event} event The event to get.
* @returns {boolean} The flag to stop propagation immediately.
* @private
*/
function isStopped(event) {
	return pd(event).immediateStopped;
}
/**
* Set the current event phase of a given event.
* @param {Event} event The event to set current target.
* @param {number} eventPhase New event phase.
* @returns {void}
* @private
*/
function setEventPhase(event, eventPhase) {
	pd(event).eventPhase = eventPhase;
}
/**
* Set the current target of a given event.
* @param {Event} event The event to set current target.
* @param {EventTarget|null} currentTarget New current target.
* @returns {void}
* @private
*/
function setCurrentTarget(event, currentTarget) {
	pd(event).currentTarget = currentTarget;
}
/**
* Set a passive listener of a given event.
* @param {Event} event The event to set current target.
* @param {Function|null} passiveListener New passive listener.
* @returns {void}
* @private
*/
function setPassiveListener(event, passiveListener) {
	pd(event).passiveListener = passiveListener;
}
/**
* Check whether a given value is an object or not.
* @param {any} x The value to check.
* @returns {boolean} `true` if the value is an object.
*/
function isObject(x) {
	return x !== null && typeof x === "object";
}
/**
* Get listeners.
* @param {EventTarget} eventTarget The event target to get.
* @returns {Map<string, ListenerNode>} The listeners.
* @private
*/
function getListeners(eventTarget) {
	const listeners = listenersMap.get(eventTarget);
	if (listeners == null) throw new TypeError("'this' is expected an EventTarget object, but got another value.");
	return listeners;
}
/**
* Get the property descriptor for the event attribute of a given event.
* @param {string} eventName The event name to get property descriptor.
* @returns {PropertyDescriptor} The property descriptor.
* @private
*/
function defineEventAttributeDescriptor(eventName) {
	return {
		get() {
			let node = getListeners(this).get(eventName);
			while (node != null) {
				if (node.listenerType === ATTRIBUTE) return node.listener;
				node = node.next;
			}
			return null;
		},
		set(listener) {
			if (typeof listener !== "function" && !isObject(listener)) listener = null;
			const listeners = getListeners(this);
			let prev = null;
			let node = listeners.get(eventName);
			while (node != null) {
				if (node.listenerType === ATTRIBUTE) if (prev !== null) prev.next = node.next;
				else if (node.next !== null) listeners.set(eventName, node.next);
				else listeners.delete(eventName);
				else prev = node;
				node = node.next;
			}
			if (listener !== null) {
				const newNode = {
					listener,
					listenerType: ATTRIBUTE,
					passive: false,
					once: false,
					next: null
				};
				if (prev === null) listeners.set(eventName, newNode);
				else prev.next = newNode;
			}
		},
		configurable: true,
		enumerable: true
	};
}
/**
* Define an event attribute (e.g. `eventTarget.onclick`).
* @param {Object} eventTargetPrototype The event target prototype to define an event attrbite.
* @param {string} eventName The event name to define.
* @returns {void}
*/
function defineEventAttribute(eventTargetPrototype, eventName) {
	Object.defineProperty(eventTargetPrototype, `on${eventName}`, defineEventAttributeDescriptor(eventName));
}
/**
* Define a custom EventTarget with event attributes.
* @param {string[]} eventNames Event names for event attributes.
* @returns {EventTarget} The custom EventTarget.
* @private
*/
function defineCustomEventTarget(eventNames) {
	/** CustomEventTarget */
	function CustomEventTarget() {
		EventTarget.call(this);
	}
	CustomEventTarget.prototype = Object.create(EventTarget.prototype, { constructor: {
		value: CustomEventTarget,
		configurable: true,
		writable: true
	} });
	for (let i = 0; i < eventNames.length; ++i) defineEventAttribute(CustomEventTarget.prototype, eventNames[i]);
	return CustomEventTarget;
}
/**
* EventTarget.
*
* - This is constructor if no arguments.
* - This is a function which returns a CustomEventTarget constructor if there are arguments.
*
* For example:
*
*     class A extends EventTarget {}
*     class B extends EventTarget("message") {}
*     class C extends EventTarget("message", "error") {}
*     class D extends EventTarget(["message", "error"]) {}
*/
function EventTarget() {
	if (this instanceof EventTarget) {
		listenersMap.set(this, /* @__PURE__ */ new Map());
		return;
	}
	if (arguments.length === 1 && Array.isArray(arguments[0])) return defineCustomEventTarget(arguments[0]);
	if (arguments.length > 0) {
		const types = new Array(arguments.length);
		for (let i = 0; i < arguments.length; ++i) types[i] = arguments[i];
		return defineCustomEventTarget(types);
	}
	throw new TypeError("Cannot call a class as a function");
}
var privateData, wrappers, listenersMap, CAPTURE, BUBBLE, ATTRIBUTE;
var init_event_target_shim = __esmMin((() => {
	privateData = /* @__PURE__ */ new WeakMap();
	wrappers = /* @__PURE__ */ new WeakMap();
	Event.prototype = {
		/**
		* The type of this event.
		* @type {string}
		*/
		get type() {
			return pd(this).event.type;
		},
		/**
		* The target of this event.
		* @type {EventTarget}
		*/
		get target() {
			return pd(this).eventTarget;
		},
		/**
		* The target of this event.
		* @type {EventTarget}
		*/
		get currentTarget() {
			return pd(this).currentTarget;
		},
		/**
		* @returns {EventTarget[]} The composed path of this event.
		*/
		composedPath() {
			const currentTarget = pd(this).currentTarget;
			if (currentTarget == null) return [];
			return [currentTarget];
		},
		/**
		* Constant of NONE.
		* @type {number}
		*/
		get NONE() {
			return 0;
		},
		/**
		* Constant of CAPTURING_PHASE.
		* @type {number}
		*/
		get CAPTURING_PHASE() {
			return 1;
		},
		/**
		* Constant of AT_TARGET.
		* @type {number}
		*/
		get AT_TARGET() {
			return 2;
		},
		/**
		* Constant of BUBBLING_PHASE.
		* @type {number}
		*/
		get BUBBLING_PHASE() {
			return 3;
		},
		/**
		* The target of this event.
		* @type {number}
		*/
		get eventPhase() {
			return pd(this).eventPhase;
		},
		/**
		* Stop event bubbling.
		* @returns {void}
		*/
		stopPropagation() {
			const data = pd(this);
			data.stopped = true;
			if (typeof data.event.stopPropagation === "function") data.event.stopPropagation();
		},
		/**
		* Stop event bubbling.
		* @returns {void}
		*/
		stopImmediatePropagation() {
			const data = pd(this);
			data.stopped = true;
			data.immediateStopped = true;
			if (typeof data.event.stopImmediatePropagation === "function") data.event.stopImmediatePropagation();
		},
		/**
		* The flag to be bubbling.
		* @type {boolean}
		*/
		get bubbles() {
			return Boolean(pd(this).event.bubbles);
		},
		/**
		* The flag to be cancelable.
		* @type {boolean}
		*/
		get cancelable() {
			return Boolean(pd(this).event.cancelable);
		},
		/**
		* Cancel this event.
		* @returns {void}
		*/
		preventDefault() {
			setCancelFlag(pd(this));
		},
		/**
		* The flag to indicate cancellation state.
		* @type {boolean}
		*/
		get defaultPrevented() {
			return pd(this).canceled;
		},
		/**
		* The flag to be composed.
		* @type {boolean}
		*/
		get composed() {
			return Boolean(pd(this).event.composed);
		},
		/**
		* The unix time of this event.
		* @type {number}
		*/
		get timeStamp() {
			return pd(this).timeStamp;
		},
		/**
		* The target of this event.
		* @type {EventTarget}
		* @deprecated
		*/
		get srcElement() {
			return pd(this).eventTarget;
		},
		/**
		* The flag to stop event bubbling.
		* @type {boolean}
		* @deprecated
		*/
		get cancelBubble() {
			return pd(this).stopped;
		},
		set cancelBubble(value) {
			if (!value) return;
			const data = pd(this);
			data.stopped = true;
			if (typeof data.event.cancelBubble === "boolean") data.event.cancelBubble = true;
		},
		/**
		* The flag to indicate cancellation state.
		* @type {boolean}
		* @deprecated
		*/
		get returnValue() {
			return !pd(this).canceled;
		},
		set returnValue(value) {
			if (!value) setCancelFlag(pd(this));
		},
		/**
		* Initialize this event object. But do nothing under event dispatching.
		* @param {string} type The event type.
		* @param {boolean} [bubbles=false] The flag to be possible to bubble up.
		* @param {boolean} [cancelable=false] The flag to be possible to cancel.
		* @deprecated
		*/
		initEvent() {}
	};
	Object.defineProperty(Event.prototype, "constructor", {
		value: Event,
		configurable: true,
		writable: true
	});
	if (typeof window !== "undefined" && typeof window.Event !== "undefined") {
		Object.setPrototypeOf(Event.prototype, window.Event.prototype);
		wrappers.set(window.Event.prototype, Event);
	}
	listenersMap = /* @__PURE__ */ new WeakMap();
	CAPTURE = 1;
	BUBBLE = 2;
	ATTRIBUTE = 3;
	EventTarget.prototype = {
		/**
		* Add a given listener to this event target.
		* @param {string} eventName The event name to add.
		* @param {Function} listener The listener to add.
		* @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
		* @returns {void}
		*/
		addEventListener(eventName, listener, options) {
			if (listener == null) return;
			if (typeof listener !== "function" && !isObject(listener)) throw new TypeError("'listener' should be a function or an object.");
			const listeners = getListeners(this);
			const optionsIsObj = isObject(options);
			const listenerType = (optionsIsObj ? Boolean(options.capture) : Boolean(options)) ? CAPTURE : BUBBLE;
			const newNode = {
				listener,
				listenerType,
				passive: optionsIsObj && Boolean(options.passive),
				once: optionsIsObj && Boolean(options.once),
				next: null
			};
			let node = listeners.get(eventName);
			if (node === void 0) {
				listeners.set(eventName, newNode);
				return;
			}
			let prev = null;
			while (node != null) {
				if (node.listener === listener && node.listenerType === listenerType) return;
				prev = node;
				node = node.next;
			}
			prev.next = newNode;
		},
		/**
		* Remove a given listener from this event target.
		* @param {string} eventName The event name to remove.
		* @param {Function} listener The listener to remove.
		* @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
		* @returns {void}
		*/
		removeEventListener(eventName, listener, options) {
			if (listener == null) return;
			const listeners = getListeners(this);
			const listenerType = (isObject(options) ? Boolean(options.capture) : Boolean(options)) ? CAPTURE : BUBBLE;
			let prev = null;
			let node = listeners.get(eventName);
			while (node != null) {
				if (node.listener === listener && node.listenerType === listenerType) {
					if (prev !== null) prev.next = node.next;
					else if (node.next !== null) listeners.set(eventName, node.next);
					else listeners.delete(eventName);
					return;
				}
				prev = node;
				node = node.next;
			}
		},
		/**
		* Dispatch a given event.
		* @param {Event|{type:string}} event The event to dispatch.
		* @returns {boolean} `false` if canceled.
		*/
		dispatchEvent(event) {
			if (event == null || typeof event.type !== "string") throw new TypeError("\"event.type\" should be a string.");
			const listeners = getListeners(this);
			const eventName = event.type;
			let node = listeners.get(eventName);
			if (node == null) return true;
			const wrappedEvent = wrapEvent(this, event);
			let prev = null;
			while (node != null) {
				if (node.once) if (prev !== null) prev.next = node.next;
				else if (node.next !== null) listeners.set(eventName, node.next);
				else listeners.delete(eventName);
				else prev = node;
				setPassiveListener(wrappedEvent, node.passive ? node.listener : null);
				if (typeof node.listener === "function") try {
					node.listener.call(this, wrappedEvent);
				} catch (err) {
					if (typeof console !== "undefined" && typeof console.error === "function") console.error(err);
				}
				else if (node.listenerType !== ATTRIBUTE && typeof node.listener.handleEvent === "function") node.listener.handleEvent(wrappedEvent);
				if (isStopped(wrappedEvent)) break;
				node = node.next;
			}
			setPassiveListener(wrappedEvent, null);
			setEventPhase(wrappedEvent, 0);
			setCurrentTarget(wrappedEvent, null);
			return !wrappedEvent.defaultPrevented;
		}
	};
	Object.defineProperty(EventTarget.prototype, "constructor", {
		value: EventTarget,
		configurable: true,
		writable: true
	});
	if (typeof window !== "undefined" && typeof window.EventTarget !== "undefined") Object.setPrototypeOf(EventTarget.prototype, window.EventTarget.prototype);
}));
//#endregion
//#region node_modules/.pnpm/abort-controller@3.0.0/node_modules/abort-controller/dist/abort-controller.mjs
var abort_controller_exports = /* @__PURE__ */ __exportAll({
	AbortController: () => AbortController,
	AbortSignal: () => AbortSignal,
	default: () => AbortController
});
/**
* Create an AbortSignal object.
*/
function createAbortSignal() {
	const signal = Object.create(AbortSignal.prototype);
	EventTarget.call(signal);
	abortedFlags.set(signal, false);
	return signal;
}
/**
* Abort a given signal.
*/
function abortSignal(signal) {
	if (abortedFlags.get(signal) !== false) return;
	abortedFlags.set(signal, true);
	signal.dispatchEvent({ type: "abort" });
}
/**
* Get the associated signal of a given controller.
*/
function getSignal(controller) {
	const signal = signals.get(controller);
	if (signal == null) throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${controller === null ? "null" : typeof controller}`);
	return signal;
}
var AbortSignal, abortedFlags, AbortController, signals;
var init_abort_controller = __esmMin((() => {
	init_event_target_shim();
	AbortSignal = class extends EventTarget {
		/**
		* AbortSignal cannot be constructed directly.
		*/
		constructor() {
			super();
			throw new TypeError("AbortSignal cannot be constructed directly");
		}
		/**
		* Returns `true` if this `AbortSignal`'s `AbortController` has signaled to abort, and `false` otherwise.
		*/
		get aborted() {
			const aborted = abortedFlags.get(this);
			if (typeof aborted !== "boolean") throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? "null" : typeof this}`);
			return aborted;
		}
	};
	defineEventAttribute(AbortSignal.prototype, "abort");
	abortedFlags = /* @__PURE__ */ new WeakMap();
	Object.defineProperties(AbortSignal.prototype, { aborted: { enumerable: true } });
	if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") Object.defineProperty(AbortSignal.prototype, Symbol.toStringTag, {
		configurable: true,
		value: "AbortSignal"
	});
	AbortController = class {
		/**
		* Initialize this controller.
		*/
		constructor() {
			signals.set(this, createAbortSignal());
		}
		/**
		* Returns the `AbortSignal` object associated with this object.
		*/
		get signal() {
			return getSignal(this);
		}
		/**
		* Abort and signal to any observers that the associated activity is to be aborted.
		*/
		abort() {
			abortSignal(getSignal(this));
		}
	};
	signals = /* @__PURE__ */ new WeakMap();
	Object.defineProperties(AbortController.prototype, {
		signal: { enumerable: true },
		abort: { enumerable: true }
	});
	if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") Object.defineProperty(AbortController.prototype, Symbol.toStringTag, {
		configurable: true,
		value: "AbortController"
	});
}));
//#endregion
export { init_abort_controller as n, abort_controller_exports as t };
