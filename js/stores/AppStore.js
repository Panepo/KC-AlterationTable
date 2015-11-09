var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require("object-assign");

var CHANGE_EVENT = 'change';
var _value = 0;

function _increase(){
	_value++;
}

function _decrease(){
	_value--;
}

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

AppDispatcher.register(function(action){
	switch(action.actionType){
		case "Increase":
			_increase();
			AppStore.emitChange();
			break;
		case "Decrease":
			_decrease();
			AppStore.emitChange();
			break;
		default:
	}
});

module.exports = AppStore;