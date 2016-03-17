require! {
	"react": React
	"react": { PropTypes: ReactPropTypes }
	"../constants/constants.ls": Constants
	"../actions/AppAction.ls": AppAction
}

{div, button, table, thead, tr, th} = React.DOM

listTab = ["日 (Sun)" "月 (Mon)" "火 (Tue)" "水 (Wed)" "木 (Thu)" "金 (Fri)" "土 (Sat)"]
listThead = ["" "" "分類" "装備名" "二番艦"]
listTheadClass = ["th0" "th1" "th2" "th3" "th4 mdl-data-table__cell--non-numeric"]

Content = React.createClass do
	displayName: "Content"
	
	propTypes:
		toggle: ReactPropTypes.array.isRequired
		day: ReactPropTypes.number.isRequired
	
	handleDayChange: (event) !->
		AppAction.dayChange parseInt event.target.id

	render: ->
		div className: "Content",
			for list, i in listTab
				if @props.day is i
					button className: Constants.buttonClassActive, key:i, id:i, onClick: @handleDayChange, list
				else
					button className: Constants.buttonClassInactive, key:i, id:i, onClick: @handleDayChange, list
			table className: Constants.TableClass,
				thead null,
					tr null,
						for list, i in listThead
							th className: listTheadClass[i], key:i, list


module.exports = Content