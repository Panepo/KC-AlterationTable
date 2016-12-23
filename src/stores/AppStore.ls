require! {
	"lokijs": lokijs
	"events": { EventEmitter: EventEmitter }
	"object-assign": assign
	"../dispatcher/AppDispatcher.ls": AppDispatcher
	"../constants/ConstActions.ls": ConstActions
	"../../raw/dataLoki.json": RawData
	"../constants/constants.ls": Constants
}

CHANGE_EVENT = 'change'

# ===============================================================================
# GLOBAL VARIABLES
# ===============================================================================
_data = {
	toggle: [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]
	day: 0
	output: []
}

for toggle, i in _data.toggle
	_data.output[i] = []

# ===============================================================================
# INITIAL DATABASE
# ===============================================================================
db = new lokijs "db"
altTable = db.addCollection "altTable"

for data, i in RawData
	altTable.insert data

sun = []
mon = []
tue = []
wed = []
thu = []
fri = []
sat = []

for list, i in Constants.listType
	sun[i] = altTable.chain().find({ 'sun': 1 }).find({ 'type': list }).data()
	mon[i] = altTable.chain().find({ 'mon': 1 }).find({ 'type': list }).data()
	tue[i] = altTable.chain().find({ 'tue': 1 }).find({ 'type': list }).data()
	wed[i] = altTable.chain().find({ 'wed': 1 }).find({ 'type': list }).data()
	thu[i] = altTable.chain().find({ 'thu': 1 }).find({ 'type': list }).data()
	fri[i] = altTable.chain().find({ 'fri': 1 }).find({ 'type': list }).data()
	sat[i] = altTable.chain().find({ 'sat': 1 }).find({ 'type': list }).data()


# ===============================================================================
# APP STORE FUNCTIONS
# ===============================================================================
toggleChange = (toggle) !->
	_data.toggle = toggle
	
dayChange = (day) !->
	_data.day = day
	if day is 0
		_data.output = sun
	else if day is 1
		_data.output = mon
	else if day is 2
		_data.output = tue
	else if day is 3
		_data.output = wed
	else if day is 4
		_data.output = thu
	else if day is 5
		_data.output = fri
	else if day is 6
		_data.output = sat

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
	case ConstActions.toggleChange
		toggleChange(action.toggle)
		AppStore.emitChange()
	case ConstActions.dayChange
		dayChange(action.day)
		AppStore.emitChange()
)

module.exports = AppStore