var React = require("react");
var AppAction = require("../actions/AppAction");

var Header = React.createClass({
	displayName: "Header",
	
	handleToggle: function(event){
		var CBtoggle = this.props.value.CBtoggle;
		var CBnumber = parseInt(event.target.id.slice(8));
		
		if ( CBtoggle[CBnumber] == 1 ) {
			CBtoggle[CBnumber] = 0;
		} else {
			CBtoggle[CBnumber] = 1;
		}
		
		this.props.value.CBtoggle = CBtoggle;
		AppAction.CBtoggleC(CBtoggle);
	},
	
	render: function(){
		var checkboxlist = [
		"小口径主砲", "中口径主砲", "大口径主砲", "副砲", "魚雷", "電探",
		"ソナー", "爆雷", "対艦強化弾", "対空機銃", "高射装置", "探照灯"
		];
		var checkboxoutput = [];
		var checkboxtemp, IDstringtemp, cbtoggle;
		var i;
		for ( i = 0; i < this.props.value.CBtoggle.length; i++)
		{
			IDstringtemp = "checkbox" + i.toString();
			if ( this.props.value.CBtoggle[i] == 1 ) {
				cbtoggle = <input type="checkbox" id={IDstringtemp} className="mdl-checkbox__input" onClick={this.handleToggle} defaultChecked/>;
			} else {
				cbtoggle = <input type="checkbox" id={IDstringtemp} className="mdl-checkbox__input" onClick={this.handleToggle} />;
			}			
			checkboxtemp = (
				<label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor={IDstringtemp} key={IDstringtemp}>
  				{cbtoggle}
  				<span className="mdl-checkbox__label">{checkboxlist[i]}</span>
				</label>
			);
			checkboxoutput.push(checkboxtemp);
		}
		
		return(
		<div className="Header">
      <header className="demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title"><h4>八幡不知藪</h4></span>
          <div className="mdl-layout-spacer"></div>
        </div>
      </header>
      <nav className="floating-menu mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
				{checkboxoutput}
			</nav>
      <div className="demo-ribbon"></div>
		</div>
		);
	}
});

module.exports = Header;