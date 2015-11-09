var React = require("react");

var ContentOut = React.createClass({
	render: function(){
		var DateTime = new Date();
		var DateDay = DateTime.getDay();
		var DateHour = DateTime.getHours();
		
		var PanelSun = <a href="#sun-panel" className="mdl-tabs__tab">日</a>;
		var PanelMon = <a href="#mon-panel" className="mdl-tabs__tab">月</a>;
		var PanelTue = <a href="#tue-panel" className="mdl-tabs__tab">火</a>;
		var PanelWed = <a href="#wed-panel" className="mdl-tabs__tab">水</a>;
		var PanelThu = <a href="#thu-panel" className="mdl-tabs__tab">木</a>;
		var PanelFri = <a href="#fri-panel" className="mdl-tabs__tab">金</a>;
		var PanelSat = <a href="#sat-panel" className="mdl-tabs__tab">土</a>;
		
		if (DateHour == 23){
			DateDay = DateDay + 1;
		}
		
		if (DateDay == 0) {
			PanelSun = <a href="#sun-panel" className="mdl-tabs__tab is-active">日</a>;
		}
		else if (DateDay == 1) {
			PanelMon = <a href="#mon-panel" className="mdl-tabs__tab is-active">月</a>;
		}
		else if (DateDay == 2) {
			PanelTue = <a href="#tue-panel" className="mdl-tabs__tab is-active">火</a>;
		}
		else if (DateDay == 3) {
			PanelWed = <a href="#wed-panel" className="mdl-tabs__tab is-active">水</a>;
		}
		else if (DateDay == 4) {
			PanelThu = <a href="#thu-panel" className="mdl-tabs__tab is-active">木</a>;
		}
		else if (DateDay == 5) {
			PanelFri = <a href="#fri-panel" className="mdl-tabs__tab is-active">金</a>;
		}
		else if (DateDay == 6) {
			PanelSat = <a href="#sat-panel" className="mdl-tabs__tab is-active">土</a>;
		}
		
		return(
			<div>
				<div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
				  <div className="mdl-tabs__tab-bar">
				    {PanelSun}
				    {PanelMon}
				    {PanelTue}
				    {PanelWed}
				    {PanelThu}
				    {PanelFri}
				    {PanelSat}
				  </div>
				
				  <div className="mdl-tabs__panel is-active" id="sun-panel">
				    <ul>
				      <li>Eddard</li>
				      <li>Catelyn</li>
				      <li>Robb</li>
				      <li>Sansa</li>
				      <li>Brandon</li>
				      <li>Arya</li>
				      <li>Rickon</li>
				    </ul>
				  </div>
				  <div className="mdl-tabs__panel" id="mon-panel">
				    <ul>
				      <li>Tywin</li>
				      <li>Cersei</li>
				      <li>Jamie</li>
				      <li>Tyrion</li>
				    </ul>
				  </div>
				  <div className="mdl-tabs__panel" id="tue-panel">
				    <ul>
				      <li>Viserys</li>
				      <li>Daenerys</li>
				    </ul>
				  </div>
				  <div className="mdl-tabs__panel" id="wed-panel">
				    <ul>
				      <li>Viserys</li>
				      <li>Daenerys</li>
				    </ul>
				  </div>
				  <div className="mdl-tabs__panel" id="thu-panel">
				    <ul>
				      <li>Tywin</li>
				      <li>Cersei</li>
				      <li>Jamie</li>
				      <li>Tyrion</li>
				    </ul>
				  </div>
				  <div className="mdl-tabs__panel" id="fri-panel">
				    <ul>
				      <li>Viserys</li>
				      <li>Daenerys</li>
				    </ul>
				  </div>
				  <div className="mdl-tabs__panel" id="sat-panel">
				    <ul>
				      <li>Viserys</li>
				      <li>Daenerys</li>
				    </ul>
				  </div>
				</div>
			</div>
		)
	}
});

module.exports = ContentOut;