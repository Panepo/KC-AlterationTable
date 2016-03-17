require! {
	"react-dom": ReactDOM
	"react": React
	"./components/KCFactoryApp.react.ls": KCFactoryApp
}
ReactDOM.render (React.createElement KCFactoryApp, null), document.getElementById "KCFactoryApp"
