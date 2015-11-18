var React = require("react");
var AppStore = require("../stores/AppStore");
var DataArr = require("../stores/DataArr.js");

var ContentOut = React.createClass({
	displayName: "ContentOut",
		
	render: function(){
		var DateTime = new Date();
		var DateDay = DateTime.getUTCDay();
		var DateHour = DateTime.getUTCHours();

		var PanelClass = "mdl-tabs__panel";
		var PanelClassActive = "mdl-tabs__panel is-active";
		var TabClass = "mdl-tabs__tab";
		var TabClassActive = "mdl-tabs__tab is-active";
		var TableClass = "mdl-data-table mdl-js-data-table mdl-shadow--2dp";
		
		var DayList = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
		var DayDisp = ["日 (Sun)", "月 (Mon)", "火 (Tue)", "水 (Wed)", "木 (Thu)", "金 (Fri)", "土 (Sat)"];

		
		var PanelSun = <a href="#sun-panel" className="mdl-tabs__tab">日 (Sun)</a>;
		var PanelMon = <a href="#mon-panel" className="mdl-tabs__tab">月 (Mon)</a>;
		var PanelTue = <a href="#tue-panel" className="mdl-tabs__tab">火 (Tue)</a>;
		var PanelWed = <a href="#wed-panel" className="mdl-tabs__tab">水 (Wed)</a>;
		var PanelThu = <a href="#thu-panel" className="mdl-tabs__tab">木 (Thu)</a>;
		var PanelFri = <a href="#fri-panel" className="mdl-tabs__tab">金 (Fri)</a>;
		var PanelSat = <a href="#sat-panel" className="mdl-tabs__tab">土 (Sat)</a>;
		
		
		var TabSun = PanelClass;
		var TabMon = PanelClass;
		var TabTue = PanelClass;
		var TabWed = PanelClass;
		var TabThu = PanelClass;
		var TabFri = PanelClass;
		var TabSat = PanelClass;
		
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
			TabSun = PanelClassActive;
		}
		else if (DateDay == 1) {
			PanelMon = <a href="#mon-panel" className="mdl-tabs__tab is-active">月 (Mon)</a>;
			TabMon = PanelClassActive;
		}
		else if (DateDay == 2) {
			PanelTue = <a href="#tue-panel" className="mdl-tabs__tab is-active">火 (Tue)</a>;
			TabTue = PanelClassActive;
		}
		else if (DateDay == 3) {
			PanelWed = <a href="#wed-panel" className="mdl-tabs__tab is-active">水 (Wed)</a>;
			TabWed = PanelClassActive;
		}
		else if (DateDay == 4) {
			PanelThu = <a href="#thu-panel" className="mdl-tabs__tab is-active">木 (Thu)</a>;
			TabThu = PanelClassActive;
		}
		else if (DateDay == 5) {
			PanelFri = <a href="#fri-panel" className="mdl-tabs__tab is-active">金 (Fri)</a>;
			TabFri = PanelClassActive;
		}
		else if (DateDay == 6) {
			PanelSat = <a href="#sat-panel" className="mdl-tabs__tab is-active">土 (Sat)</a>;
			TabSun = PanelClassActive;
		}
		
		var TableHead = (
 				<thead>
					<tr className="mdl-data-table__cell--non-numeric">
					<th className="th1">分類</th>
					<th className="th2">装備名</th>
					<th className="th3">二番艦</th>
					</tr>
				</thead>
    );
		
		var Output = this.props.value.Output;
		var TableData = new Array();
		var TableCont;
		
		for ( var i = 0; i < Output.length; i++)
		{
			TableData[i] = new Array();
			for ( var j = 0; j < Output[i].length; j++)
			{
				TableCont = (
						<tr className="mdl-data-table__cell--non-numeric" key={i*100+j}>
						<td>{Output[i][j][0]}</td>
						<td>{Output[i][j][1]}</td>
						<td>{Output[i][j][2]}</td>
						</tr>
				);
				TableData[i].push(TableCont);
			}
		}
		
		return(
			<div className="ContentOut">
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
				    <table className={TableClass}>
				    	{TableHead}
				    	<tbody>
							{TableData[0]}
				    	</tbody>
				    </table>
				  </div>
				  <div className={TabMon} id="mon-panel">
				  <p></p>
				    <table className={TableClass}>
				    	{TableHead}
				    	<tbody>
							{TableData[1]}
				    	</tbody>
				    </table>
				  </div>
				  <div className={TabTue} id="tue-panel">
				  <p></p>
				    <table className={TableClass}>
				    	{TableHead}
				    	<tbody>
							{TableData[2]}
				    	</tbody>
				    </table>
				  </div>
				  <div className={TabWed} id="wed-panel">
				  <p></p>
				    <table className={TableClass}>
				    	{TableHead}
				    	<tbody>
							{TableData[3]}
				    	</tbody>
				    </table>
				  </div>
				  <div className={TabThu} id="thu-panel">
				  <p></p>
				    <table className={TableClass}>
				    	{TableHead}
				    	<tbody>
							{TableData[4]}
				    	</tbody>
				    </table>
				  </div>
				  <div className={TabFri} id="fri-panel">
				  <p></p>
				    <table className={TableClass}>
				    	{TableHead}
				    	<tbody>
							{TableData[5]}
				    	</tbody>
				    </table>
				  </div>
				  <div className={TabSat} id="sat-panel">
				  <p></p>
				    <table className={TableClass}>
				    	{TableHead}
				    	<tbody>
							{TableData[6]}
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