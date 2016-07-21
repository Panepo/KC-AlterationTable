require! {
	"react": React
	"react": { PropTypes: ReactPropTypes }
	"../constants/constants.ls": Constants
	"../actions/AppAction.ls": AppAction
}

{div, span, nav, button, a, header} = React.DOM

Header = React.createClass do
	displayName: "Header"
	
	propTypes:
		toggle: ReactPropTypes.array.isRequired
		
	getInitialState: -> {
		toggleAll: false
		toggleStart: 0
	}
	
	handleToggle: (event) !->
		toggle = @props.toggle
		toggleNumber = parseInt event.target.id.slice(8)
		if toggle[toggleNumber] is 1
			toggle[toggleNumber] = 0
		else
			toggle[toggleNumber] = 1
		
		AppAction.toggleChange toggle
		
	handleToggleAll: (event) !->
		toggle = @props.toggle
		
		if @state.toggleAll is true
			@setState { toggleAll: false }
			for toggleValue, i in toggle
				toggle[i] = 0
		else
			@setState { toggleAll: true }
			for toggleValue, i in toggle
				toggle[i] = 1
				
		AppAction.toggleChange toggle

	handleUp: (event) !->
		if @state.toggleStart <= 6
			@setState { toggleStart: 0 }
		else
			temp = @state.toggleStart - 6
			@setState { toggleStart: temp }
	
	handleDown: (event) !->
		if @state.toggleStart + 9 > Constants.listType.length
			temp = Constants.listType.length - 9
			@setState { toggleStart: temp }
		else
			temp = @state.toggleStart + 6
			@setState { toggleStart: temp }
	
	render: ->
		header className: "demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800",
			div className: "mdl-layout__header-row",
				span className: "mdl-layout-title", null
				div className: "mdl-layout-spacer", null
				nav className: "mdl-navigation",
					a className: Constants.buttonClassActive, href: "http://wikiwiki.jp/kancolle/", "Wiki"
					a className: Constants.buttonClassActive, href: 'http://wikiwiki.jp/kancolle/?%B2%FE%BD%A4%B9%A9%BE%B3#s_kaisyu', "簡易改修表 "
			nav className: "floating-menu mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col",
				div null,
					if @state.toggleAll is true
						button className: Constants.buttonClassActive, onClick: @handleToggleAll, "全選"
					else
						button className: Constants.buttonClassInactive, onClick: @handleToggleAll, "全選"
				if @state.toggleStart != 0
					div null,
						button id: "checkbox up", className: Constants.buttonClassActive, onClick: @handleUp, "︽"
				for type, i in Constants.listType
					div key: "checkbox" + i.toString(),
						if i >= @state.toggleStart and i <= @state.toggleStart + 10
							if @props.toggle[i] is 1
								button id: "checkbox" + i.toString(), className: Constants.buttonClassActive, onClick: @handleToggle, type
							else
								button id: "checkbox" + i.toString(), className: Constants.buttonClassInactive, onClick: @handleToggle, type
				if @state.toggleStart + 10 < Constants.listType.length
					div null,
						button id: "checkbox down", className: Constants.buttonClassActive, onClick: @handleDown, "︾"

module.exports = Header