var React = require("react");

var ContentInp = React.createClass({
	displayName: "ContentInp",
		
	render: function(){
		
		return(
		<div className="ContentInp">
			<div className="demo-crumbs mdl-color-text--grey-500">
      	Panepo.Github.io &gt; Yabushirazu &gt; KanColle alteration
      </div>
			<h4>艦これ装備改修表曜日別逆引き</h4>
		</div>
		);
	}
});

module.exports = ContentInp;