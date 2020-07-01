var x = 3
let y = 9
{
	var x = 300
	let y = 900
	console.log('x in block:', x)
	console.log('y in block:', y)
}
console.log('x outside block:', x)
console.log('y outside block:', y)