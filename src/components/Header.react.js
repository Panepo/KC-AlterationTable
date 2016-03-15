var React = require("react");
var ReactPropTypes = React.PropTypes;
var AppAction = require("../actions/AppAction");
var Constants = require("../constants/constants");

var Header = React.createClass({
	displayName: "Header",
	
	propTypes: {
		CBtoggle: ReactPropTypes.array.isRequired,
	},
	
	getInitialState: function(){
		return{
			toggleAll: true
		};
	},
	
	handleToggle: function(event){
		var CBtoggle = this.props.CBtoggle;
		var CBnumber = parseInt(event.target.id.slice(8));
		
		if ( CBtoggle[CBnumber] == 1 ) {
			CBtoggle[CBnumber] = 0;
		} else {
			CBtoggle[CBnumber] = 1;
		}
		
		AppAction.CBtoggleC(CBtoggle);
	},
	
	handleToggleAll: function(){
		var CBtoggle = this.props.CBtoggle;
		
		if ( this.state.toggleAll == true ) {
			this.setState({
				toggleAll: false
			});
			for ( var i = 0; i < CBtoggle.length; i++) {
				CBtoggle[i] = 0;
			}
		} else {
			this.setState({
				toggleAll: true
			});
						for ( var i = 0; i < CBtoggle.length; i++) {
				CBtoggle[i] = 1;
			}
		}
		AppAction.CBtoggleC(CBtoggle);
	},
	
	render: function(){
		// ===============================================================================
		// Generate checkbox list
		// ===============================================================================
		var buttonClassActive = "mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary";
		var buttonClassInactive = "mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent";
		var idStringTemp = "";
		var classTemp = "";
		var checkTemp;
		var checkOutput = [];
		
		if ( this.state.toggleAll == true ) {
			classTemp = buttonClassActive;
		} else {
			classTemp = buttonClassInactive;
		}
		
		checkTemp = (
			<div key="checkboxAll">
				<button className={classTemp} onClick={this.handleToggleAll}>
					全選
				</button>
			</div>
		);
		checkOutput.push(checkTemp);
		
		for ( var i = 0; i < Constants.listType.length; i++) {
			idStringTemp = "checkbox" + i.toString();
			
			if ( this.props.CBtoggle[i] == 1 ) {
				classTemp = buttonClassActive;
			} else {
				classTemp = buttonClassInactive;
			}
			
			checkTemp = (
				<div key={idStringTemp}>
					<button id={idStringTemp} className={classTemp} onClick={this.handleToggle}>
						{Constants.listType[i]}
					</button>
				</div>
			);
			checkOutput.push(checkTemp);
		}
		
		// ===============================================================================
		// return
		// ===============================================================================
		return(
		<div className="Header">
      <header className="demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
        <div className="mdl-layout__header-row">
          <div className="mdl-layout-spacer"></div>
        </div>
      </header>
      <nav className="floating-menu mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
				{checkOutput}
			</nav>
      <div className="demo-ribbon"></div>
		</div>
		);
	}
});

module.exports = Header;