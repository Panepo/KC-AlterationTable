require! {
	"fs": fs
	"./data.ls": data
	"../src/constants/constants.ls": Constants
}
slot = ["type" "name" "owner" "sun" "mon" "tue" "wed" "thu" "fri" "sat"]

output = []

for dataValue, i in data
	output[i] = {}
	for slotValue, j in slot
		output[i][slotValue] = data[i][j]

for data, i in output
	for type, j in Constants.listType
		if data.type is type
			imgSrc = "http://panepo.github.io/KCData/image/icon/sit" + Constants.listTypeNumber[j] + ".png"
	
	for listAA in Constants.listAA
		if data.name is listAA
			imgSrc = "http://panepo.github.io/KCData/image/icon/sit16.png"
	
	for listBoat in Constants.listBoat
		if data.name is listBoat
			imgSrc = "http://panepo.github.io/KCData/image/icon/sit36.png"
	
	data.img = imgSrc

output = JSON.stringify output
console.log "dataLoki.json arrange complete!"
fs.writeFileSync "./raw/dataLoki.json", output