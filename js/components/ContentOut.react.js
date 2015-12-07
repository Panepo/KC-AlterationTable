var React = require("react");

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
		var TableClass = "mdl-data-table mdl-shadow--2dp";
		
		var DayList = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
		var DayDisp = ["日 (Sun)", "月 (Mon)", "火 (Tue)", "水 (Wed)", "木 (Thu)", "金 (Fri)", "土 (Sat)"];

		var Tab = [];
		var Panel = [];
		var TabData = [];
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
					<tr>
					<th className="th0"></th>
					<th className="th1"></th>
					<th className="th2">分類</th>
					<th className="th3">装備名</th>
					<th className="th4 mdl-data-table__cell--non-numeric">二番艦</th>
					</tr>
				</thead>
    );
		
		var Output = this.props.value.Output;
		var TableData = [];
		var TableCont;
		var ImgString = "";
		var checkboxlist = [
		"小口径主砲", "中口径主砲", "大口径主砲", "副砲", "魚雷", "電探",
		"ソナー", "爆雷", "対艦強化弾", "対空機銃", "高射装置", "探照灯"
		];
		var AAlist = [
		"10cm高角砲＋高射装置", "90mm単装高角砲"
		];
		
		for ( var i = 0; i < Output.length; i++)
		{
			TableData[i] = new Array();
			for ( var j = 0; j < Output[i].length; j++)
			{
				for ( var k = 0; k < checkboxlist.length; k++ )
				{
					if ( Output[i][j][0] == checkboxlist[k])
					{
						ImgString = "./img/sit" + (k+1) + ".png";
					}
				}
				for (var k = 0; k < AAlist.length; k++ )
				{
					if ( Output[i][j][1] == AAlist[k])
					{
						ImgString = "./img/sit0.png";
					}
				}
				
				var CheckString = "row" + i.toString() + j.toString();
				
				TableCont = (
						<tr key={i*100+j}>
						<td>
							<label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select" htmlFor={CheckString}>
								<input type="checkbox" id={CheckString} className="mdl-checkbox__input" />
							</label>
						</td>
						<td><img src={ImgString} height="30" width="30"/></td>
						<td>{Output[i][j][0]}</td>
						<td>{Output[i][j][1]}</td>
						<td className="mdl-data-table__cell--non-numeric">{Output[i][j][2]}</td>
						</tr>
				);
				TableData[i].push(TableCont);
			}
		}
		
		var PanelData = [];
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