/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@newfold-labs/js-utility-ui-analytics/src/hiive/data/namespace.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@newfold-labs/js-utility-ui-analytics/src/hiive/data/namespace.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   namespace: () => (/* binding */ namespace)
/* harmony export */ });
const namespace = {
	urls: {
		single: undefined,
		batch: undefined,
	},
	queue: {
		events: [],
		threshold: 100,
	},
	debounce: {
		time: undefined,
		instance: undefined,
	},
};


/***/ }),

/***/ "./node_modules/@newfold-labs/js-utility-ui-analytics/src/hiive/events/HiiveEvent.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@newfold-labs/js-utility-ui-analytics/src/hiive/events/HiiveEvent.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HiiveEvent: () => (/* binding */ HiiveEvent)
/* harmony export */ });
/**
 * Defines the structure of a Hiive analytics event.
 *
 * @class HiiveEvent
 */
class HiiveEvent {
	/**
	 * Constructor for the HiiveEvent class.
	 *
	 * @param {string} category  The category of the event (This actual value will depend on the URL you are reporting to).
	 * @param {string} action    The action that triggered the event (The actual value will depend on the URL you are reporting to).
	 * @param {Object} data      Data related to the event.
	 * @param {string} namespace The namespace that the event belongs to.
	 */
	constructor( category, action, data, namespace ) {
		this.category = category;
		this.action = action;
		this.data = data;
		this.namespace = namespace;
	}
}


/***/ }),

/***/ "./node_modules/@newfold-labs/js-utility-ui-analytics/src/hiive/events/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@newfold-labs/js-utility-ui-analytics/src/hiive/events/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HiiveEvent: () => (/* reexport safe */ _HiiveEvent__WEBPACK_IMPORTED_MODULE_0__.HiiveEvent)
/* harmony export */ });
/* harmony import */ var _HiiveEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HiiveEvent */ "./node_modules/@newfold-labs/js-utility-ui-analytics/src/hiive/events/HiiveEvent.js");
// Exports related to Hiive events.



/***/ }),

/***/ "./node_modules/@newfold-labs/js-utility-ui-analytics/src/hiive/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@newfold-labs/js-utility-ui-analytics/src/hiive/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HiiveAnalytics: () => (/* binding */ HiiveAnalytics),
/* harmony export */   HiiveEvent: () => (/* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_1__.HiiveEvent)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./node_modules/@newfold-labs/js-utility-ui-analytics/src/hiive/events/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./node_modules/@newfold-labs/js-utility-ui-analytics/src/store/index.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);





/**
 * Determines whether Hiive analytics have been initialized or not for a particular namespace.
 *
 * @param {string} namespace The namespace the check.
 * @return {boolean} whether Hiive analytics have been initialized or not for a particular namespace.
 */
const initialized = ( namespace ) => {
	if ( window?.nfdUIAnalytics?.hiive ) {
		return namespace in window.nfdUIAnalytics.hiive;
	}
	return false;
};

/**
 * Validates that the parameter is an instance of HiiveEvent.
 *
 * @param {Object} event Any valid JS Object.
 * @return {boolean} whether the param is a valid HiiveEvent instance or not.
 */
const validate = ( event ) => {
	if ( ! ( event instanceof _events__WEBPACK_IMPORTED_MODULE_1__.HiiveEvent ) ) {
		return false;
	}

	return true;
};

/**
 * Initializes the module to send out Hiive analytics events.
 *
 * @param {Object} param0                          Data to initialize Hiive analytics.
 * @param {Object} param0.settings                 Settings that define the behavior of HiiveAnalytics.
 * @param {Object} param0.settings.debounce        Settings related to the debounce.
 * @param {number} param0.settings.debounce.time   The interval that must pass once an event has been tracked after which a batch request gets placed automatically to the batch URL.
 * @param {Object} param0.settings.queue           Settings related to the Hiive events queue.
 * @param {number} param0.settings.queue.threshold The limit that the number of events in the queue must cross after which a batch request gets placed automatically to the batch URL.
 * @param {Object} param0.urls                     Contains URL's to report analytics.
 * @param {string} param0.urls.single              The URL that can handle a single event.
 * @param {string} param0.urls.batch               The URL that can handle an array of events.
 * @param {string} param0.namespace                The namespace to initialize.
 * @return {boolean} Whether the module was initialized or not.
 */
const initialize = async ( {
	namespace,
	urls: { single, batch } = {},
	settings: { debounce: { time } = {}, queue: { threshold = 100 } = {} } = {},
} ) => {
	if ( ! namespace ) {
		return false;
	}

	// If the module is already initialized then skip initialization.
	if ( initialized( namespace ) ) {
		return true;
	}

	// If no reporting URL's are defined then fail initialization.
	if ( ! ( single || batch ) ) {
		return false;
	}

	(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)( _store__WEBPACK_IMPORTED_MODULE_2__.store ).initializeNamespace( namespace );

	// Update Redux store with all the required data.
	(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)( _store__WEBPACK_IMPORTED_MODULE_2__.store ).updateHiiveUrls(
		{
			single,
			batch,
		},
		namespace
	);
	(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)( _store__WEBPACK_IMPORTED_MODULE_2__.store ).updateHiiveDebounceTime( time, namespace );
	(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)( _store__WEBPACK_IMPORTED_MODULE_2__.store ).updateHiiveEventsQueueThreshold( threshold, namespace );

	// This helps us quickly determine whether Hiive analytics have been enabled.
	if ( window.nfdUIAnalytics?.hiive ) {
		window.nfdUIAnalytics.hiive[ namespace ] = true;
	} else {
		window.nfdUIAnalytics = {
			hiive: {
				[ namespace ]: true,
			},
		};
	}

	return true;
};

/**
 * Tracks the event by putting it in a queue.
 *
 * @param {HiiveEvent} event The event object to track.
 * @return {boolean} whether the event has been successfully queued for tracking or not.
 */
const track = ( event ) => {
	// Do not perform any activity if the module has not been initialized or the event is not valid.
	if ( ! ( validate( event ) && initialized( event.namespace ) ) ) {
		return false;
	}
	const namespace = event.namespace;
	delete event.namespace;
	// Add the event to a queue of tracked events.
	const events = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)( _store__WEBPACK_IMPORTED_MODULE_2__.store ).getHiiveEventsQueue( namespace );
	events.push( event );
	(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)( _store__WEBPACK_IMPORTED_MODULE_2__.store ).updateHiiveEventsQueue( events, namespace );

	// If the number of events in the queue have crossed the threshold then dispatch all of them.
	const threshold = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)( _store__WEBPACK_IMPORTED_MODULE_2__.store ).getHiiveEventsQueueThreshold( namespace );
	if ( threshold && threshold < events.length ) {
		dispatchEvents( namespace );
	}

	// Reset the debounce setTimeout instance.
	resetDebounceInstance( namespace );

	return true;
};

/**
 * Reports the event to urls.single defined during initialization.
 *
 * @param {HiiveEvent} event The event object to send.
 * @return {Promise<boolean>} whether the event has been successfully sent or not.
 */
const send = async ( event ) => {
	// Do not perform any activity if the module has not been initialized or the event is not valid.
	if ( ! ( validate( event ) && initialized( event.namespace ) ) ) {
		return false;
	}

	const namespace = event.namespace;
	delete event.namespace;

	const url = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)( _store__WEBPACK_IMPORTED_MODULE_2__.store ).getHiiveSingleUrl( namespace );
	if ( ! url ) {
		return false;
	}

	try {
		await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()( {
			url,
			method: 'POST',
			data: event,
		} );
	} catch ( error ) {
		console.error( error );
		return false;
	}
};

/**
 * Reports all the queued events to urls.batch defined during initialization.
 *
 * @param {string} namespace The namespace whose events must be dispatched.
 * @return {Promise<boolean>} whether or not all the events were sent to the batchUrl successfully.
 */
const dispatchEvents = async ( namespace ) => {
	if ( ! namespace || ! initialized( namespace ) ) {
		return false;
	}

	const url = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)( _store__WEBPACK_IMPORTED_MODULE_2__.store ).getHiiveBatchUrl( namespace );
	if ( ! url ) {
		return false;
	}

	// If there are no events to report then return.
	const events = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)( _store__WEBPACK_IMPORTED_MODULE_2__.store ).getHiiveEventsQueue( namespace );
	if ( 0 === events.length ) {
		return true;
	}

	// Rare case: Do this so that any other dispatchEvents calls do not dispatch redundant data.
	(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)( _store__WEBPACK_IMPORTED_MODULE_2__.store ).updateHiiveEventsQueue( [], namespace );

	try {
		await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()( {
			url,
			method: 'POST',
			data: events,
		} );
	} catch ( error ) {
		// [TODO] Figure out a better error handling method and clear the queue.
		console.error( error );
		(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)( _store__WEBPACK_IMPORTED_MODULE_2__.store ).updateHiiveEventsQueue( events, namespace );
	}

	return true;
};

/**
 * Resets the debounce instance countdown.
 *
 * @param {string} namespace The namespace in which the debounce instance should be reset.
 * @return {boolean} whether the reset occurred successfully or not.
 */
const resetDebounceInstance = ( namespace ) => {
	if ( ! namespace ) {
		return false;
	}

	const debounce = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)( _store__WEBPACK_IMPORTED_MODULE_2__.store ).getHiiveDebounce( namespace );

	if ( ! debounce.time ) {
		return false;
	}

	clearInterval( debounce.instance );
	(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)( _store__WEBPACK_IMPORTED_MODULE_2__.store ).updateHiiveDebounceInstance(
		setTimeout( () => {
			dispatchEvents( namespace );
			(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)( _store__WEBPACK_IMPORTED_MODULE_2__.store ).updateHiiveDebounceInstance(
				undefined,
				namespace
			);
		}, debounce.time ),
		namespace
	);
	return true;
};

/**
 * Disables the debounce.
 *
 * @param {string} namespace The namespace in which the debounce instance should be disabled.
 * @return {boolean} whether the debounce has been successfully disabled or not.
 */
const disableDebounce = ( namespace ) => {
	if ( ! namespace ) {
		return false;
	}

	const debounce = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)( _store__WEBPACK_IMPORTED_MODULE_2__.store ).getHiiveDebounce( namespace );
	if ( debounce.instance ) {
		clearInterval( debounce.instance );
		(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)( _store__WEBPACK_IMPORTED_MODULE_2__.store ).updateHiiveDebounceInstance( undefined, namespace );
		(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)( _store__WEBPACK_IMPORTED_MODULE_2__.store ).updateHiiveDebounceTime( undefined, namespace );
	}
	return true;
};

const HiiveAnalytics = {
	initialize,
	initialized,
	validate,
	track,
	send,
	dispatchEvents,
	disableDebounce,
};



/***/ }),

/***/ "./node_modules/@newfold-labs/js-utility-ui-analytics/src/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@newfold-labs/js-utility-ui-analytics/src/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HiiveAnalytics: () => (/* reexport safe */ _hiive__WEBPACK_IMPORTED_MODULE_0__.HiiveAnalytics),
/* harmony export */   HiiveEvent: () => (/* reexport safe */ _hiive__WEBPACK_IMPORTED_MODULE_0__.HiiveEvent)
/* harmony export */ });
/* harmony import */ var _hiive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hiive */ "./node_modules/@newfold-labs/js-utility-ui-analytics/src/hiive/index.js");
// Exports for the Hiive Platform.



/***/ }),

/***/ "./node_modules/@newfold-labs/js-utility-ui-analytics/src/store/actions.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@newfold-labs/js-utility-ui-analytics/src/store/actions.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeNamespace: () => (/* binding */ initializeNamespace),
/* harmony export */   updateHiiveDebounceInstance: () => (/* binding */ updateHiiveDebounceInstance),
/* harmony export */   updateHiiveDebounceTime: () => (/* binding */ updateHiiveDebounceTime),
/* harmony export */   updateHiiveEventsQueue: () => (/* binding */ updateHiiveEventsQueue),
/* harmony export */   updateHiiveEventsQueueThreshold: () => (/* binding */ updateHiiveEventsQueueThreshold),
/* harmony export */   updateHiiveUrls: () => (/* binding */ updateHiiveUrls)
/* harmony export */ });
/**
 * Initialize a Hiive Event namespace.
 *
 * @param {string} namespace The namespace to be initialized.
 * @return {Object} Type of action to perform with data.
 */
function initializeNamespace( namespace ) {
	return {
		type: 'INITIALIZE_NAMESPACE',
		namespace,
	};
}

/**
 * Update the Hiive URLs.
 *
 * @param {Object} urls      The Hiive URLs.
 * @param {string} namespace The namespace in which the URL's must be updated.
 * @return {Object} Type of action to perform with data.
 */
function updateHiiveUrls( urls, namespace ) {
	return {
		type: 'UPDATE_HIIVE_URLS',
		urls,
		namespace,
	};
}

/**
 * Update the Hiive events queue.
 *
 * @param {Array}  events    An array of events to be queued.
 * @param {string} namespace The namespace in which the queue must be updated.
 * @return {Object} Type of action to perform with data.
 */
function updateHiiveEventsQueue( events, namespace ) {
	return {
		type: 'UPDATE_HIIVE_EVENTS_QUEUE',
		events,
		namespace,
	};
}

/**
 *
 * @param {number} threshold The threshold for the queue.
 * @param {string} namespace The namespace in which the threshold must be updated.
 * @return {Object} Type of action to perform with data.
 */
function updateHiiveEventsQueueThreshold( threshold, namespace ) {
	return {
		type: 'UPDATE_HIIVE_EVENTS_QUEUE_THRESHOLD',
		threshold,
		namespace,
	};
}

/**
 * Update the Hiive events dispatch debounce time.
 *
 * @param {number} debounceTime The time to wait.
 * @param {string} namespace    The namespace in which the debounce time must be updated.
 * @return {Object} Type of action to perform with data.
 */
function updateHiiveDebounceTime( debounceTime, namespace ) {
	return {
		type: 'UPDATE_HIIVE_DEBOUNCE_TIME',
		debounceTime,
		namespace,
	};
}

/**
 * Updates the Hiive debounce instance.
 *
 * @param {Object} instance  A setTimeout instance of the debounce.
 * @param {string} namespace The namespace in which the debounce instance must be updated.
 * @return {Object} Type of action to perform with data.
 */
function updateHiiveDebounceInstance( instance, namespace ) {
	return {
		type: 'UPDATE_HIIVE_DEBOUNCE_INSTANCE',
		instance,
		namespace,
	};
}


/***/ }),

/***/ "./node_modules/@newfold-labs/js-utility-ui-analytics/src/store/constants.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@newfold-labs/js-utility-ui-analytics/src/store/constants.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STORE_NAME: () => (/* binding */ STORE_NAME)
/* harmony export */ });
/**
 * The name for the Redux store of this package.
 */
const STORE_NAME = 'newfold/ui-analytics';


/***/ }),

/***/ "./node_modules/@newfold-labs/js-utility-ui-analytics/src/store/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@newfold-labs/js-utility-ui-analytics/src/store/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nfdUIAnalyticsStoreConfig: () => (/* binding */ nfdUIAnalyticsStoreConfig),
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./node_modules/@newfold-labs/js-utility-ui-analytics/src/store/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./node_modules/@newfold-labs/js-utility-ui-analytics/src/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./node_modules/@newfold-labs/js-utility-ui-analytics/src/store/selectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@newfold-labs/js-utility-ui-analytics/src/store/constants.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);







/**
 * The Redux store configuration.
 */
const nfdUIAnalyticsStoreConfig = {
	reducer: _reducer__WEBPACK_IMPORTED_MODULE_0__["default"],
	actions: _actions__WEBPACK_IMPORTED_MODULE_1__,
	selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__,
};

const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.createReduxStore)( _constants__WEBPACK_IMPORTED_MODULE_3__.STORE_NAME, nfdUIAnalyticsStoreConfig );
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.register)( store );


/***/ }),

/***/ "./node_modules/@newfold-labs/js-utility-ui-analytics/src/store/reducer.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@newfold-labs/js-utility-ui-analytics/src/store/reducer.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   hiive: () => (/* binding */ hiive)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hiive_data_namespace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hiive/data/namespace */ "./node_modules/@newfold-labs/js-utility-ui-analytics/src/hiive/data/namespace.js");




/**
 * A reducer for Hiive related actions.
 *
 * @param {Object} state  The current state of the store.
 * @param {Object} action The action to be performed to change the state.
 * @return {Object} state The new state of the store after the action is performed.
 */
const hiive = ( state, action ) => {
	switch ( action.type ) {
		case 'INITIALIZE_NAMESPACE': {
			return {
				...state,
				[ action.namespace ]: _hiive_data_namespace__WEBPACK_IMPORTED_MODULE_1__.namespace,
			};
		}
		case 'UPDATE_HIIVE_URLS':
			return {
				...state,
				[ action.namespace ]: {
					...state[ action.namespace ],
					urls: {
						single: action.urls.single,
						batch: action.urls.batch,
					},
				},
			};
		case 'UPDATE_HIIVE_EVENTS_QUEUE':
			return {
				...state,
				[ action.namespace ]: {
					...state[ action.namespace ],
					queue: {
						events: action.events,
						threshold: state[ action.namespace ].queue.threshold,
					},
				},
			};
		case 'UPDATE_HIIVE_EVENTS_QUEUE_THRESHOLD': {
			return {
				...state,
				[ action.namespace ]: {
					...state[ action.namespace ],
					queue: {
						events: state[ action.namespace ].queue.events,
						threshold: action.threshold,
					},
				},
			};
		}
		case 'UPDATE_HIIVE_DEBOUNCE_TIME':
			return {
				...state,
				[ action.namespace ]: {
					...state[ action.namespace ],
					debounce: {
						time: action.debounceTime,
						instance: state[ action.namespace ].debounce.instance,
					},
				},
			};
		case 'UPDATE_HIIVE_DEBOUNCE_INSTANCE':
			return {
				...state,
				[ action.namespace ]: {
					...state[ action.namespace ],
					debounce: {
						time: state[ action.namespace ].debounce.time,
						instance: action.instance,
					},
				},
			};
	}
	return state;
};

/**
 * Combines all the reducers in this file.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.combineReducers)( {
	hiive,
} ));


/***/ }),

/***/ "./node_modules/@newfold-labs/js-utility-ui-analytics/src/store/selectors.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@newfold-labs/js-utility-ui-analytics/src/store/selectors.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHiiveBatchUrl: () => (/* binding */ getHiiveBatchUrl),
/* harmony export */   getHiiveDebounce: () => (/* binding */ getHiiveDebounce),
/* harmony export */   getHiiveEventsQueue: () => (/* binding */ getHiiveEventsQueue),
/* harmony export */   getHiiveEventsQueueThreshold: () => (/* binding */ getHiiveEventsQueueThreshold),
/* harmony export */   getHiiveSingleUrl: () => (/* binding */ getHiiveSingleUrl)
/* harmony export */ });
/**
 * Retrieves all the queued Hiive events.
 *
 * @param {Object} state     The current state of the redux store.
 * @param {string} namespace The namespace from which the events must be retrieved.
 * @return {Array} events An array of events that are queued.
 */
function getHiiveEventsQueue( state, namespace ) {
	return state.hiive[ namespace ]?.queue.events;
}

/**
 *
 * @param {*}      state     The current state of the redux store.
 * @param {string} namespace The namespace from which the threshold must be read.
 * @return {Array} threshold Threshold of the queue.
 */
function getHiiveEventsQueueThreshold( state, namespace ) {
	return state.hiive[ namespace ]?.queue.threshold;
}

/**
 * Retrieves the default Hiive URL.
 *
 * @param {Object} state     The current state of the redux store.
 * @param {string} namespace The namespace from which the single URL must be read.
 * @return {string} The default URL in the store.
 */
function getHiiveSingleUrl( state, namespace ) {
	return state.hiive[ namespace ]?.urls.single;
}

/**
 * Retrieves the batch Hiive URL.
 *
 * @param {*}      state     The current state of the redux store.
 * @param {string} namespace The namespace from which the batch URL must be read.
 * @return {string} The batch URL in the store.
 */
function getHiiveBatchUrl( state, namespace ) {
	return state.hiive[ namespace ]?.urls.batch;
}

/**
 * Retrieves debounce data.
 *
 * @param {Object} state     The current state of the redux store.
 * @param {string} namespace The namespace from which the Hiive debounce must be read.
 * @return {Object} The debounce data.
 */
function getHiiveDebounce( state, namespace ) {
	return state.hiive[ namespace ]?.debounce;
}


/***/ }),

/***/ "./node_modules/@newfold-labs/wp-module-runtime/build/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@newfold-labs/wp-module-runtime/build/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

(()=>{"use strict";var e={d:(t,i)=>{for(var o in i)e.o(i,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:i[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{NewfoldRuntime:()=>o});const i=window.wp.url,o={hasCapability:e=>!0===window.NewfoldRuntime?.capabilities[e],adminUrl:e=>window.NewfoldRuntime?.admin_url+e,createApiUrl:(e,t={})=>(0,i.addQueryArgs)(window.NewfoldRuntime?.base_url,{rest_route:e,...t}),get siteDetails(){return window.NewfoldRuntime?.site},get sdk(){return window.NewfoldRuntime?.sdk},get isWoo(){return window.NewfoldRuntime?.isWoocommerceActive},get isYithBooking(){return window.NewfoldRuntime?.isYithBookingActive},get ecommerce(){return window.NewfoldRuntime?.ecommerce},get plugin(){return window.NewfoldRuntime?.plugin},get wpversion(){return window.NewfoldRuntime?.wpversion},get siteTitle(){return window.NewfoldRuntime?.siteTitle},get currentTheme(){return window.NewfoldRuntime?.currentTheme}};var r=exports;for(var n in t)r[n]=t[n];t.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})})();

/***/ }),

/***/ "./node_modules/@newfold/ui-component-library/elements/button/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@newfold/ui-component-library/elements/button/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoryComponent: () => (/* binding */ StoryComponent),
/* harmony export */   classNameMap: () => (/* binding */ classNameMap),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spinner */ "./node_modules/@newfold/ui-component-library/elements/spinner/index.js");






const classNameMap = {
  variant: {
    primary: "nfd-button--primary",
    secondary: "nfd-button--secondary",
    error: "nfd-button--error",
    upsell: "nfd-button--upsell"
  },
  size: {
    "default": "",
    small: "nfd-button--small",
    large: "nfd-button--large"
  }
};

/**
 * @param {JSX.node} children Content of the button.
 * @param {string|JSX.Element} [as="button"] Base component.
 * @param {string} [type] Type attribute. Used when `as` is a `button`.
 * @param {string} [variant="primary"] Button variant. See `classNameMap` for the options.
 * @param {string} [size="default"] Button size. See `classNameMap` for the options.
 * @param {boolean} [isLoading=false] Whether to show a spinner.
 * @param {boolean} [disabled=false] Whether the button is disabled.
 * @param {string} [className] CSS class.
 * @returns {JSX.Element} Button component.
 */
const Button = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  children,
  as: Component,
  type,
  variant,
  size,
  isLoading,
  disabled,
  className,
  ...props
}, ref) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component
// eslint-disable-next-line no-undefined
, {
  type: type || Component === "button" && "button" || undefined,
  disabled: disabled,
  ref: ref,
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("nfd-button", classNameMap.variant[variant], classNameMap.size[size], isLoading && "nfd-cursor-wait", disabled && "nfd-button--disabled", className),
  ...props
}, isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_spinner__WEBPACK_IMPORTED_MODULE_3__["default"], {
  size: size === "small" ? "3" : "4",
  className: "nfd-mr-2"
}), children));
const propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node).isRequired,
  as: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType),
  type: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["button", "submit", "reset"]),
  variant: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf((0,lodash__WEBPACK_IMPORTED_MODULE_2__.keys)(classNameMap.variant)),
  size: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf((0,lodash__WEBPACK_IMPORTED_MODULE_2__.keys)(classNameMap.size)),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
Button.propTypes = propTypes;
Button.defaultProps = {
  as: "button",
  // eslint-disable-next-line no-undefined
  type: undefined,
  variant: "primary",
  size: "default",
  isLoading: false,
  disabled: false,
  className: ""
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

// eslint-disable-next-line require-jsdoc
const StoryComponent = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
  ...props
});
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = Button.defaultProps;
StoryComponent.displayName = "Button";

/***/ }),

/***/ "./node_modules/@newfold/ui-component-library/elements/spinner/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@newfold/ui-component-library/elements/spinner/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoryComponent: () => (/* binding */ StoryComponent),
/* harmony export */   classNameMap: () => (/* binding */ classNameMap),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks */ "./node_modules/@newfold/ui-component-library/hooks/use-svg-aria.js");






const classNameMap = {
  variant: {
    // Default is currentColor.
    "default": "",
    primary: "nfd-text-primary-500",
    white: "nfd-text-white"
  },
  size: {
    3: "nfd-w-3 nfd-h-3",
    4: "nfd-w-4 nfd-h-4",
    8: "nfd-w-8 nfd-h-8"
  }
};

/**
 * @param {string} [variant=default] The variant.
 * @param {string} [size] The size.
 * @param {string} [className] The HTML class.
 * @returns {JSX.Element} The spinner.
 */
const Spinner = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  variant,
  size,
  className
}, ref) => {
  const svgAriaProps = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg/",
    fill: "none",
    viewBox: "0 0 24 24",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("nfd-animate-spin", classNameMap.variant[variant], classNameMap.size[size], className),
    ...svgAriaProps
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    className: "nfd-opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    strokeWidth: "4"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    className: "nfd-opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  }));
});
const propTypes = {
  variant: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf((0,lodash__WEBPACK_IMPORTED_MODULE_2__.keys)(classNameMap.variant)),
  size: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf((0,lodash__WEBPACK_IMPORTED_MODULE_2__.keys)(classNameMap.size)),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
Spinner.propTypes = propTypes;
Spinner.defaultProps = {
  variant: "default",
  size: "4",
  className: ""
};

// eslint-disable-next-line require-jsdoc
const StoryComponent = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, {
  ...props
});
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = Spinner.defaultProps;
StoryComponent.displayName = "Spinner";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);

/***/ }),

/***/ "./node_modules/@newfold/ui-component-library/elements/title/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@newfold/ui-component-library/elements/title/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoryComponent: () => (/* binding */ StoryComponent),
/* harmony export */   classNameMap: () => (/* binding */ classNameMap),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);

/* eslint-disable no-undefined */



const classNameMap = {
  size: {
    1: "nfd-title--1",
    2: "nfd-title--2",
    3: "nfd-title--3",
    4: "nfd-title--4",
    5: "nfd-title--5"
  }
};

/**
 * @param {Object} props Props object.
 * @returns {JSX.Element} Title component.
 */
const Title = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  children,
  as: Component,
  size,
  className,
  ...props
}, ref) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("nfd-title", classNameMap.size[size || Component[1]], className),
    ...props
  }, children);
});
const propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node).isRequired,
  as: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().elementType),
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(Object.keys(classNameMap.size)),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
Title.propTypes = propTypes;
Title.defaultProps = {
  as: "h1",
  size: undefined,
  className: ""
};

// eslint-disable-next-line require-jsdoc
const StoryComponent = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Title, {
  ...props
});
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = Title.defaultProps;
StoryComponent.displayName = "Title";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

/***/ }),

/***/ "./node_modules/@newfold/ui-component-library/hooks/use-svg-aria.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@newfold/ui-component-library/hooks/use-svg-aria.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Creates aria attributes for an SVG.
 * @param {boolean|null} [isFocusable] Boolean value to indicate if it should be focusable.
 * @returns {Object} Object with `role` and `aria-hidden` and optionally `focusable`.
 */
const useSvgAria = (isFocusable = null) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const aria = {
      role: "img",
      "aria-hidden": "true"
    };
    if (isFocusable !== null) {
      aria.focusable = isFocusable ? "true" : "false";
    }
    return aria;
  }, [isFocusable]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSvgAria);

/***/ }),

/***/ "./src/components/PluginList.js":
/*!**************************************!*\
  !*** ./src/components/PluginList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PluginList: () => (/* binding */ PluginList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Section */ "./src/components/Section.js");





// import { ReactComponent as GreenTick } from "../icons/green-tick.svg";

function PluginList(props) {
  console.log(props, "props");
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Section__WEBPACK_IMPORTED_MODULE_3__.Section.Container, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Section__WEBPACK_IMPORTED_MODULE_3__.Section.Content, {
    className: "nfd-core-tool-mypluginsntools"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Hi I am translated plugin list component", "wp-module-solutions"))));
}

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Section: () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @newfold/ui-component-library */ "./node_modules/@newfold/ui-component-library/elements/button/index.js");
/* harmony import */ var _newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @newfold/ui-component-library */ "./node_modules/@newfold/ui-component-library/elements/title/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);



const Container = ({
  className,
  children,
  id = "",
  showShadowBox = true
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("nfd-app-section-container nfd-bg-white nfd-w-full nfd-rounded-lg", className),
    id: id
  }, children);
};
const Header = ({
  title,
  subTitle,
  className,
  primaryAction = {
    title: false,
    className: false,
    onClick: false
  },
  secondaryAction = {
    title: false,
    className: false,
    onClick: false
  }
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("nfd-app-section-header nfd-p-8 nfd-border-b nfd-border-line", "nfd-flex nfd-flex-col xl:nfd-flex-row nfd-items-baseline nfd-gap-4", className)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "xl:nfd-w-7/12 nfd-flex nfd-flex-col nfd-gap-3"
  }, title && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "nfd-text-2xl nfd-font-medium nfd-text-title"
  }, title), subTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, subTitle)), (primaryAction.title || secondaryAction.title) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "xl:nfd-w-5/12 nfd-flex nfd-flex-row-reverse nfd-flex-wrap nfd-gap-3"
  }, primaryAction.title && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_2__["default"], {
    as: "button",
    variant: "primary",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("nfd-w-full min-[400px]:nfd-w-auto", primaryAction.className),
    onClick: primaryAction.onClick
  }, primaryAction.title), secondaryAction.title && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_2__["default"], {
    as: "button",
    variant: "secondary",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("nfd-w-full min-[400px]:nfd-w-auto", secondaryAction.className),
    onClick: secondaryAction.onClick
  }, secondaryAction.title)));
};
const Content = ({
  separator = false,
  className,
  subClassName,
  children
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("nfd-app-section-content nfd-p-8 nfd-pb-0", className),
    id: className
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("nfd-pb-8", separator && "nfd-border-b nfd-border-[#CBD5E1]", subClassName)
  }, children));
};
function Block({
  title,
  subtitle,
  children,
  className
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nfd-bg-white ${className}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "4"
  }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      height: "10px"
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "nfd-text-sm"
  }, subtitle), children);
}
const Settings = ({
  className,
  children,
  title,
  description
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("nfd-grid 2xl:nfd-grid-cols-3 2xl:nfd-gap-12", className)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "nfd-col-span-1"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "nfd-max-w-screen-sm"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_3__["default"], {
    as: "h4",
    size: "4"
  }, title), description && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "nfd-mt-2"
  }, description))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", {
    className: "nfd-min-w-0 nfd-mt-8 2xl:nfd-mt-0 2xl:nfd-col-span-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", {
    className: "nfd-sr-only"
  }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "nfd-space-y-4"
  }, children)));
};
const Section = {
  Block,
  Container,
  Content,
  Header,
  Settings
};

/***/ }),

/***/ "./src/sdk/Analytics.js":
/*!******************************!*\
  !*** ./src/sdk/Analytics.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsSdk: () => (/* binding */ AnalyticsSdk)
/* harmony export */ });
/* harmony import */ var _newfold_labs_js_utility_ui_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @newfold-labs/js-utility-ui-analytics */ "./node_modules/@newfold-labs/js-utility-ui-analytics/src/index.js");
/* harmony import */ var _newfold_labs_wp_module_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @newfold-labs/wp-module-runtime */ "./node_modules/@newfold-labs/wp-module-runtime/build/index.js");
/* harmony import */ var _newfold_labs_wp_module_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_newfold_labs_wp_module_runtime__WEBPACK_IMPORTED_MODULE_1__);


const AnalyticsSdk = {
  track(category, action, value) {
    const hiiveEvent = new _newfold_labs_js_utility_ui_analytics__WEBPACK_IMPORTED_MODULE_0__.HiiveEvent(category, action, value, "wp-module-solutions");
    _newfold_labs_js_utility_ui_analytics__WEBPACK_IMPORTED_MODULE_0__.HiiveAnalytics.send(hiiveEvent);
  },
  initialize() {
    _newfold_labs_js_utility_ui_analytics__WEBPACK_IMPORTED_MODULE_0__.HiiveAnalytics.initialize({
      namespace: "wp-module-solutions",
      urls: {
        single: _newfold_labs_wp_module_runtime__WEBPACK_IMPORTED_MODULE_1__.NewfoldRuntime.createApiUrl("/newfold-data/v1/events"),
        batch: _newfold_labs_wp_module_runtime__WEBPACK_IMPORTED_MODULE_1__.NewfoldRuntime.createApiUrl("/newfold-data/v1/events/batch")
      },
      settings: {
        debounce: {
          time: 3000
        }
      }
    });
  }
};

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewfoldSolutions: () => (/* binding */ NewfoldSolutions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sdk_Analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk/Analytics */ "./src/sdk/Analytics.js");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_PluginList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PluginList */ "./src/components/PluginList.js");







_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3___default()(() => {
  _sdk_Analytics__WEBPACK_IMPORTED_MODULE_2__.AnalyticsSdk.initialize();
});

/** @type {import ("..").NewfoldSolutions} */
function NewfoldSolutions(props) {
  // const purchasedSolution = "";

  // useEffect(() => {

  //   purchasedSolution = "ecommerce";

  // }, []);

  // if (purchasedSolution === "") {
  //   return (
  //     <div className="nfd-flex nfd-items-center nfd-text-center nfd-justify-center nfd-h-full">
  //       <Spinner size="8" className="nfd-text-primary" />
  //     </div>
  //   );
  // }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_PluginList__WEBPACK_IMPORTED_MODULE_5__.PluginList, {
    keyword: "all"
  });
}
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=index.js.map