require! {
	"fs": fs
	"./data": data
}
slot = ["type" "name" "owner" "sun" "mon" "tue" "wed" "thu" "fri" "sat"]

output = []

for dataValue, i in data
	output[i] = {}
	for slotValue, j in slot
		output[i][slotValue] = data[i][j]

output = JSON.stringify output
console.log "dataLoki.json arrange complete!"
fs.writeFileSync "./src/raw/dataLoki.json", output