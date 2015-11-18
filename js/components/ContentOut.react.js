var React = require("react");
var AppStore = require("../stores/AppStore");
var DataArr = require("../stores/DataArr.js");

var ContentOut = React.createClass({
	displayName: "ContentOut",
		
	render: function(){
		var DateTime = new Date();
		var DateDay = DateTime.getUTCDay();
		var DateHour = DateTime.getUTCHours();

		DateHour = DateHour + 9;
		if ( DateHour >= 24 ){
			DateHour = DateHour - 24;
			DateDay = DateDay + 1;
			if ( DateDay >= 7 ){
				DateDay = DateDay - 7;
			}
		}
		
		var PanelClass = "mdl-tabs__panel";
		var PanelClassActive = "mdl-tabs__panel is-active";
		var TabClass = "mdl-tabs__tab";
		var TabClassActive = "mdl-tabs__tab is-active";
		var TableClass = "mdl-data-table mdl-js-data-table mdl-shadow--2dp";
		
		var DayList = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
		var DayDisp = ["日 (Sun)", "月 (Mon)", "火 (Tue)", "水 (Wed)", "木 (Thu)", "金 (Fri)", "土 (Sat)"];

		var Tab = new Array();
		var Panel = new Array();
		var TabData = new Array();
		for ( var i = 0; i < DayList.length; i++)
		{
			var TabString = "#" + DayList[i] + "-panel";
			if (DateDay == i)
			{
				Panel[i] = PanelClassActive;
				Tab[i] = <a href={TabString} className={TabClassActive} key={TabString}>{DayDisp[i]}</a>;
			}
			else
			{
				Panel[i] = PanelClass;
				Tab[i] = <a href={TabString} className={TabClass} key={TabString}>{DayDisp[i]}</a>;
			}
			TabData.push(Tab[i]);
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
		
		var PanelData = new Array();
		var PanelCont;
		
		for ( var i = 0; i < DayList.length; i++)
		{
			var PanelString = DayList[i] + "-panel"
			PanelCont = (
				<div className={Panel[i]} id={PanelString} key={PanelString}>
				  <p></p>
				    <table className={TableClass}>
				    	{TableHead}
				    	<tbody>
							{TableData[i]}
				    	</tbody>
				    </table>
				</div>
			);
			PanelData.push(PanelCont);
		}
		
		return(
			<div className="ContentOut">
				<div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
				  <div className="mdl-tabs__tab-bar">
				    {TabData}
				  </div>
					{PanelData}
				</div>
			</div>
		)
	},
	
	componentDidUpdate: function() {
    componentHandler.upgradeDom();
  }
	
});

module.exports = ContentOut;