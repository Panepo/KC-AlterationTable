var AppDispatcher = require("../dispatcher/AppDispatcher");
var AppAction = {
	CBtoggleC: function(CBtoggle){
		AppDispatcher.dispatch({
			actionType: "CBtoggleC",
			CBtoggle: CBtoggle
		});
	}
};

module.exports = AppAction;