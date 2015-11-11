var React = require("react");
var AppAction = require("../actions/AppAction");

var ContentInp = React.createClass({
		
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
		var checkboxoutputA = [];
		var checkboxoutputB = [];
		var checkboxtemp, IDstringtemp, cbtoggle;
		var i;
		for ( i = 0; i < 6; i++)
		{
			IDstringtemp = "checkbox" + i.toString();
			if ( this.props.value.CBtoggle[i] == 1 ) {
				cbtoggle = <input type="checkbox" id={IDstringtemp} className="mdl-checkbox__input" onClick={this.handleToggle} defaultChecked/>;
			} else {
				cbtoggle = <input type="checkbox" id={IDstringtemp} className="mdl-checkbox__input" onClick={this.handleToggle} />;
			}			
			checkboxtemp = (
				<td className="mdl-data-table__cell--non-numeric" key={IDstringtemp} >
					<label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor={IDstringtemp}>
  					{cbtoggle}
  					<span className="mdl-checkbox__label">{checkboxlist[i]}</span>
					</label>
				</td>
			);
			checkboxoutputA.push(checkboxtemp);
			
			IDstringtemp = "checkbox" + (i+6).toString();
			if ( this.props.value.CBtoggle[i+6] == 1 ) {
				cbtoggle = <input type="checkbox" id={IDstringtemp} className="mdl-checkbox__input" onClick={this.handleToggle} defaultChecked/>;
			} else {
				cbtoggle = <input type="checkbox" id={IDstringtemp} className="mdl-checkbox__input" onClick={this.handleToggle} />;
			}	
			checkboxtemp = (
				<td className="mdl-data-table__cell--non-numeric" key={IDstringtemp}>
					<label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor={IDstringtemp}>
  					{cbtoggle}
  					<span className="mdl-checkbox__label">{checkboxlist[i+6]}</span>
					</label>
				</td>
			);
			checkboxoutputB.push(checkboxtemp);
		}
		
		return(
		<div>
			<div className="demo-crumbs mdl-color-text--grey-500">
      	Panepo.Github.io &gt; NērēÏdes Garden &gt; KanColle alteration
      </div>
			<h4>艦これ装備改修表曜日別逆引き</h4>
			<table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
				<tbody>
					<tr>{checkboxoutputA}</tr>
					<tr>{checkboxoutputB}</tr>
				</tbody>
			</table>
		</div>
		);
	}
});

module.exports = ContentInp;