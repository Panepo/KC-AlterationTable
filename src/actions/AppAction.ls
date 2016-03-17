require! {
	"../dispatcher/AppDispatcher.ls": AppDispatcher
	"../constants/ConstActions.ls": Constants
}

AppAction = 
	toggleChange: (toggle) !->
		AppDispatcher.dispatch(
			actionType: Constants.toggleChange
			toggle: toggle
			)
	dayChange: (day) !->
		AppDispatcher.dispatch(
			actionType: Constants.dayChange
			day: day
			)

module.exports = AppAction
