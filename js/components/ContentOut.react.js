var React = require("react");
var AppStore = require("../stores/AppStore");

var ContentOut = React.createClass({
	render: function(){
		var DateTime = new Date();
		var DateDay = DateTime.getUTCDay();
		var DateHour = DateTime.getUTCHours();
				
		var PanelSun = <a href="#sun-panel" className="mdl-tabs__tab">日 (Sun)</a>;
		var PanelMon = <a href="#mon-panel" className="mdl-tabs__tab">月 (Mon)</a>;
		var PanelTue = <a href="#tue-panel" className="mdl-tabs__tab">火 (Tue)</a>;
		var PanelWed = <a href="#wed-panel" className="mdl-tabs__tab">水 (Wed)</a>;
		var PanelThu = <a href="#thu-panel" className="mdl-tabs__tab">木 (Thu)</a>;
		var PanelFri = <a href="#fri-panel" className="mdl-tabs__tab">金 (Fri)</a>;
		var PanelSat = <a href="#sat-panel" className="mdl-tabs__tab">土 (Sat)</a>;
		
		var TabClass = "mdl-tabs__panel";
		var TabClassActive = "mdl-tabs__panel is-active";
		
		var TabSun = TabClass;
		var TabMon = TabClass;
		var TabTue = TabClass;
		var TabWed = TabClass;
		var TabThu = TabClass;
		var TabFri = TabClass;
		var TabSat = TabClass;
		
		DateHour = DateHour + 9;
		if ( DateHour >= 24 ){
			DateHour = DateHour - 24;
			DateDay = DateDay + 1;
			if ( DateDay >= 7 ){
				DateDay = DateDay - 7;
			}
		}
		
		if (DateDay == 0) {
			PanelSun = <a href="#sun-panel" className="mdl-tabs__tab is-active">日 (Sun)</a>;
			TabSun = TabClassActive;
		}
		else if (DateDay == 1) {
			PanelMon = <a href="#mon-panel" className="mdl-tabs__tab is-active">月 (Mon)</a>;
			TabMon = TabClassActive;
		}
		else if (DateDay == 2) {
			PanelTue = <a href="#tue-panel" className="mdl-tabs__tab is-active">火 (Tue)</a>;
			TabTue = TabClassActive;
		}
		else if (DateDay == 3) {
			PanelWed = <a href="#wed-panel" className="mdl-tabs__tab is-active">水 (Wed)</a>;
			TabWed = TabClassActive;
		}
		else if (DateDay == 4) {
			PanelThu = <a href="#thu-panel" className="mdl-tabs__tab is-active">木 (Thu)</a>;
			TabThu = TabClassActive;
		}
		else if (DateDay == 5) {
			PanelFri = <a href="#fri-panel" className="mdl-tabs__tab is-active">金 (Fri)</a>;
			TabFri = TabClassActive;
		}
		else if (DateDay == 6) {
			PanelSat = <a href="#sat-panel" className="mdl-tabs__tab is-active">土 (Sat)</a>;
			TabSun = TabClassActive;
		}
		
		var TableHead = (
 				<thead>
					<tr className="mdl-data-table__cell--non-numeric">
					<th>分類</th>
					<th>装備名</th>
					<th>二番艦</th>
					</tr>
				</thead>
    );
		
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
				
				  <div className={TabSun} id="sun-panel">
				  <p></p>
				    <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
				    	{TableHead}
				    	<tbody>
				    	</tbody>
				    </table>
				  </div>
				  <div className={TabMon} id="mon-panel">
				  <p></p>
				    <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
				    	{TableHead}
				    	<tbody>
				    	</tbody>
				    </table>
				  </div>
				  <div className={TabTue} id="tue-panel">
				  <p></p>
				    <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
				    	{TableHead}
				    	<tbody>
				    	</tbody>
				    </table>
				  </div>
				  <div className={TabWed} id="wed-panel">
				  <p></p>
				    <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
				    	{TableHead}
				    	<tbody>
				    	</tbody>
				    </table>
				  </div>
				  <div className={TabThu} id="thu-panel">
				  <p></p>
				    <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
				    	{TableHead}
				    	<tbody>
				    	</tbody>
				    </table>
				  </div>
				  <div className={TabFri} id="fri-panel">
				  <p></p>
				    <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
				    	{TableHead}
				    	<tbody>
				    	</tbody>
				    </table>
				  </div>
				  <div className={TabSat} id="sat-panel">
				  <p></p>
				    <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
				    	{TableHead}
				    	<tbody>
				    	</tbody>
				    </table>
				  </div>
				</div>
			</div>
		)
	},
	
	componentDidUpdate: function() {
    componentHandler.upgradeDom();
  }
	
});

module.exports = ContentOut;