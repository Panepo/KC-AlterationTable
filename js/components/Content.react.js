var React = require("react");
var ReactPropTypes = React.PropTypes;
var AltList = require("./AltList.react");
var data = require("../../raw/data.json");

var Content = React.createClass({
	displayName: "Content",
	
	propTypes: {
		CBtoggle: ReactPropTypes.array.isRequired,
  },
		
	render: function(){
		// ===============================================================================
		// Day calculation
		// ===============================================================================
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
		
		// ===============================================================================
		// Generate tab data
		// ===============================================================================
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
		for ( var i = 0; i < DayList.length; i++) {
			var TabString = "#" + DayList[i] + "-panel";
			if (DateDay == i) {
				Panel[i] = PanelClassActive;
				Tab[i] = <a href={TabString} className={TabClassActive} key={TabString}>{DayDisp[i]}</a>;
			} else {
				Panel[i] = PanelClass;
				Tab[i] = <a href={TabString} className={TabClass} key={TabString}>{DayDisp[i]}</a>;
			}
			TabData.push(Tab[i]);
		}		
		// ===============================================================================
		// Generate panel data
		// ===============================================================================
		var PanelData = [];
		var PanelCont;
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
		
		for ( var i = 0; i < DayList.length; i++) {
			var PanelString = DayList[i] + "-panel"
			PanelCont = (
				<div className={Panel[i]} id={PanelString} key={PanelString}>
					<p></p>
					<table className={TableClass}>
						{TableHead}
					</table>
					<AltList day={i} list={data[0]} display={this.props.CBtoggle[0]} tableId={"0"} tableClass={TableClass}/>
					<AltList day={i} list={data[1]} display={this.props.CBtoggle[1]} tableId={"1"} tableClass={TableClass}/>
					<AltList day={i} list={data[2]} display={this.props.CBtoggle[2]} tableId={"2"} tableClass={TableClass}/>
					<AltList day={i} list={data[3]} display={this.props.CBtoggle[3]} tableId={"3"} tableClass={TableClass}/>
					<AltList day={i} list={data[4]} display={this.props.CBtoggle[4]} tableId={"4"} tableClass={TableClass}/>
					<AltList day={i} list={data[5]} display={this.props.CBtoggle[5]} tableId={"5"} tableClass={TableClass}/>
					<AltList day={i} list={data[6]} display={this.props.CBtoggle[6]} tableId={"6"} tableClass={TableClass}/>
					<AltList day={i} list={data[7]} display={this.props.CBtoggle[7]} tableId={"7"} tableClass={TableClass}/>
					<AltList day={i} list={data[8]} display={this.props.CBtoggle[8]} tableId={"8"} tableClass={TableClass}/>
					<AltList day={i} list={data[9]} display={this.props.CBtoggle[9]} tableId={"9"} tableClass={TableClass}/>
					<AltList day={i} list={data[10]} display={this.props.CBtoggle[10]} tableId={"10"} tableClass={TableClass}/>
					<AltList day={i} list={data[11]} display={this.props.CBtoggle[11]} tableId={"11"} tableClass={TableClass}/>
				</div>
			);
			PanelData.push(PanelCont);
		}
		
		// ===============================================================================
		// return
		// ===============================================================================
		return(
			<div className="ContentOut">
				<h4>艦これ装備改修表曜日別逆引き</h4>
				更新: 2015/11/23
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

module.exports = Content;