var React = require("react");
var ReactPropTypes = React.PropTypes;
var AppAction = require("../actions/AppAction");

var Header = React.createClass({
	displayName: "Header",
	
	propTypes: {
    CBtoggle: ReactPropTypes.array.isRequired,
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
	
	render: function(){
		// ===============================================================================
		// Generate checkbox list
		// ===============================================================================
		var checkboxlist = [
		"小口径主砲", "中口径主砲", "大口径主砲", "副砲", "魚雷", "電探",
		"ソナー", "爆雷", "対艦強化弾", "対空機銃", "高射装置", "探照灯"
		];
		var buttonClassActive = "mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary";
		var buttonClassInactive = "mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent";
		var idStringTemp = "";
		var classTemp = "";
		var checkTemp;
		var checkOutput = [];
		
		for ( var i = 0; i < checkboxlist.length; i++) {
			idStringTemp = "checkbox" + i.toString();
			
			if ( this.props.CBtoggle[i] == 1 ) {
				classTemp = buttonClassActive;
			} else {
				classTemp = buttonClassInactive;
			}
			
			checkTemp = (
				<div key={idStringTemp}>
					<button id={idStringTemp} className={classTemp} onClick={this.handleToggle}>
						{checkboxlist[i]}
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