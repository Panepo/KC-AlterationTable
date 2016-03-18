require! {
	"react": React
	"react": { PropTypes: ReactPropTypes }
	"./AltList.react.ls": AltList
	"../constants/constants.ls": Constants
	"../actions/AppAction.ls": AppAction
}

{div, button, table, thead, tr, th, a, h4} = React.DOM

AltList = React.createFactory AltList

listTab = ["日 (Sun)" "月 (Mon)" "火 (Tue)" "水 (Wed)" "木 (Thu)" "金 (Fri)" "土 (Sat)"]
listThead = ["" "" "分類" "装備名" "二番艦"]
listTheadClass = ["th0" "th1" "th2" "th3" "th4 mdl-data-table__cell--non-numeric"]

Content = React.createClass do
	displayName: "Content"
	
	propTypes:
		toggle: ReactPropTypes.array.isRequired
		day: ReactPropTypes.number.isRequired
		output: ReactPropTypes.array.isRequired

	handleDayChange: (event) !->
		AppAction.dayChange parseInt event.target.id

	render: ->
		div null,
			h4 null, "艦これ装備改修表曜日別逆引き"
			"更新: 2016/03/07"
			div className: "mdl-tabs mdl-js-tabs mdl-js-ripple-effect",
				div className: "mdl-tabs__tab-bar",
					for list, i in listTab
						if @props.day is i
							button className: Constants.buttonClassActive, key:i, id:i, onClick: @handleDayChange, list
						else
							button className: Constants.buttonClassInactive, key:i, id:i, onClick: @handleDayChange, list
			table className: Constants.TableClass,
				thead null,
					tr null,
						for list, i in listThead
							th className: listTheadClass[i], key:"thead" + i.toString(),, list
			for toggle, i in @props.toggle
				if toggle is 1
					AltList {
						key:"alt" + i.toString(),
						display: true,
						tableId:i.toString(),
						output: @props.output[i], 
					}, null
				else
					AltList {
						key:"alt" + i.toString(),
						display: false,
						tableId:i.toString(),
						output: @props.output[i], 
					}, null

module.exports = Content