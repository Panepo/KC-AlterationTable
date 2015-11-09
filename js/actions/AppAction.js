var AppDispatcher = require("../dispatcher/AppDispatcher");
var AppAction = {
	increase: function(){
		AppDispatcher.dispatch({
			actionType: "Increase"
		});
	},

	decrease: function(){
		AppDispatcher.dispatch({
			actionType: "Decrease"
		});
	}
};

module.exports = AppAction;