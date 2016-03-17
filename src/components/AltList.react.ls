require! {
	"react": React
	"react": { PropTypes: ReactPropTypes }
	"../constants/constants.ls": Constants
}

{div, button, table, tbody, tr, td, label, input, img} = React.DOM

AltList = React.createClass do
	displayName: "AltList"
	
	propTypes:
		output: ReactPropTypes.array.isRequired
		tableId: ReactPropTypes.string.isRequired
	
	handleChange: (event) !->
	
	componentDidUpdate: !->
		componentHandler.upgradeDom()
	
	render: ->
		div null,
			table className: Constants.TableClass,
				tbody null,
					for data, i in @props.output
						tr key:i,
							td className: "th0",
								label className: "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select", htmlFor: @props.tableId + " row" + i.toString(),
									input type: "checkbox" id: @props.tableId + " row" + i.toString(), className: "mdl-checkbox__input", null
							td className: "th1",
								for type, i in Constants.listType
									for listAA in Constants.listAA
										if data.type is type
											if data.name is listAA
												img src: "./img/sit0.png", height: "30", width: "30", null
											else
												img src: "./img/sit" + Constants.listTypeNumber[i] + ".png", height: "30", width: "30", null
							td className: "th2", data.type
							td className: "th3", data.name
							td className: "th4 mdl-data-table__cell--non-numeric", data.owner


module.exports = AltList