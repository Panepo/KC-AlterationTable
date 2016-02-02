var React = require("react");
var ReactPropTypes = React.PropTypes;
var Constants = require("../const/const");

var AltList = React.createClass({
	displayName: "AltList",
	
	propTypes: {
    list: ReactPropTypes.array.isRequired,
		display: ReactPropTypes.number.isRequired,
		tableId: ReactPropTypes.string.isRequired,
		tableClass: ReactPropTypes.string.isRequired,
		day: ReactPropTypes.number.isRequired,
  },

	render: function(){
		var TableData = [];
		var TableCont;
		var ImgString = "";
		var CheckString = "";
		var KeyString = "";

		for ( var i = 0; i < this.props.list.length; i++) {
			TableData[i] = [];
			for ( var j = 0; j < this.props.list[i].length; j++) {
				for ( var k = 0; k < Constants.checkboxlist.length; k++ ) {
					if ( this.props.list[i][j][0] == Constants.checkboxlist[k]) {
						ImgString = "./img/sit" + (k+1) + ".png";
					}
				}
				
				for (var k = 0; k < Constants.AAlist.length; k++ ) {
					if ( this.props.list[i][j][1] == Constants.AAlist[k]) {
						ImgString = "./img/sit0.png";
					}
				}
				
				CheckString = this.props.tableId + " row" + i.toString() + j.toString();
				KeyString = this.props.tableId + i.toString() + j.toString();
				
				TableCont = (
					<tr key= {KeyString} >
					<td className="th0">
						<label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select" htmlFor={CheckString}>
							<input type="checkbox" id={CheckString} className="mdl-checkbox__input" />
						</label>
					</td>
					<td className="th1"><img src={ImgString} height="30" width="30"/></td>
					<td className="th2">{this.props.list[i][j][0]}</td>
					<td className="th3">{this.props.list[i][j][1]}</td>
					<td className="th4 mdl-data-table__cell--non-numeric">{this.props.list[i][j][2]}</td>
					</tr>
				);
				TableData[i].push(TableCont);
			}
		}
		
		if ( this.props.display === 1 ) {
			return(
				<div className="AltList">
					<table className={this.props.tableClass}>
						<tbody>
							{TableData[this.props.day]}
						</tbody>
					</table>
				</div>
			)
		} else {
			return null;
		}
	}
});

module.exports = AltList;