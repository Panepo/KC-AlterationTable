var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require("object-assign");

var CHANGE_EVENT = 'change';
var _value = {
	CBtoggle: [1,1,1,1,1,1,1,1,1,1,1,1,1],
	};
	
// ===============================================================================
// APP STORE FUNCTIONS
// ===============================================================================
function _CBtoggleC(CBtoggle){
	_value.CBtoggle = CBtoggle;
}



// ===============================================================================
// APP STORE MAIN
// ===============================================================================
var AppStore = assign({}, EventEmitter.prototype, {
	getValue: function(){
		return _value;
	},

	emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// ===============================================================================
// APP DISPATCHER
// ===============================================================================
AppDispatcher.register(function(action){
	switch(action.actionType){
		case "CBtoggleC":
			_CBtoggleC(action.CBtoggle);
			AppStore.emitChange();
			break;

		default:
	}
});

module.exports = AppStore;