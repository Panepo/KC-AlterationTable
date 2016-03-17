require! {
	"../dispatcher/AppDispatcher.ls": AppDispatcher
	"events": { EventEmitter: EventEmitter }
	"object-assign": assign
	"../constants/ConstActions.ls": Constants
}

CHANGE_EVENT = 'change'

# ===============================================================================
# GLOBAL VARIABLES
# ===============================================================================
_data = {
	toggle:  [1,1,1,1,1,1,1,1,1,1,1,1,1]
	day: 0
}

# ===============================================================================
# APP STORE FUNCTIONS
# ===============================================================================
toggleChange = (toggle) !->
	_data.toggle = toggle
	
dayChange = (day) !->
	_data.day = day

# ===============================================================================
# APP STORE MAIN
# ===============================================================================
AppStore = assign({}, EventEmitter.prototype, {
	getData: ->
		_data
	emitChange: !->
		@emit(CHANGE_EVENT)
	addChangeListener: (callback) !->
		@on(CHANGE_EVENT, callback)
	removeChangeListener: (callback) !->
		@removeListener(CHANGE_EVENT, callback)
})

# ===============================================================================
# APP DISPATCHER
# ===============================================================================
AppDispatcher.register( (action) !->
	switch action.actionType
	case Constants.toggleChange
		toggleChange(action.toggle)
		AppStore.emitChange()
	case Constants.dayChange
		dayChange(action.day)
		AppStore.emitChange()
)

module.exports = AppStore