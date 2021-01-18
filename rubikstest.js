let face1 = document.getElementById("1")
let face2 = document.getElementById("2")
let face3 = document.getElementById("3")
let face4 = document.getElementById("4")
let face5 = document.getElementById("5")
let face6 = document.getElementById("6")
let face7 = document.getElementById("7")
let face8 = document.getElementById("8")
let face9 = document.getElementById("9")

let btnFront = document.getElementById("btnFront")
let btnBack = document.getElementById("btnBack")
let btnLeft = document.getElementById("btnLeft")
let btnRight = document.getElementById("btnRight")
let btnUp = document.getElementById("btnUp")
let btnDown = document.getElementById("btnDown")

let faceHeading = document.getElementById("face")

let front = [
	["green-1", "green-2", "green-3"],
	["green-4", "green-5", "green-6"],
	["green-7", "green-8", "green-9"],
]
let right = [
	["red-1", "red-2", "red-3"],
	["red-4", "red-5", "red-6"],
	["red-7", "red-8", "red-9"],
]
let left = [
	["orange-1", "orange-2", "orange-3"],
	["orange-4", "orange-5", "orange-6"],
	["orange-7", "orange-8", "orange-9"],
]
let back = [
	["blue-1", "blue-2", "blue-3"],
	["blue-4", "blue-5", "blue-6"],
	["blue-7", "blue-8", "blue-9"],
]
let up = [
	["white-1", "white-2", "white-3"],
	["white-4", "white-5", "white-6"],
	["white-7", "white-8", "white-9"],
]
let down = [
	["yellow-1", "yellow-2", "yellow-3"],
	["yellow-4", "yellow-5", "yellow-6"],
	["yellow-7", "yellow-8", "yellow-9"],
]

let cube = {front, right, left, back, up, down}
const displayCube = (face) => {
	face1.innerHTML= getNum(face[0][0])
	face2.innerHTML= getNum(face[0][1])
	face3.innerHTML= getNum(face[0][2])
	face4.innerHTML= getNum(face[1][0])
	face5.innerHTML= getNum(face[1][1])
	face6.innerHTML= getNum(face[1][2])
	face7.innerHTML= getNum(face[2][0])
	face8.innerHTML= getNum(face[2][1])
	face9.innerHTML= getNum(face[2][2])

	face1.style.backgroundColor= getColour(face[0][0])
	face2.style.backgroundColor= getColour(face[0][1])
	face3.style.backgroundColor= getColour(face[0][2])
	face4.style.backgroundColor= getColour(face[1][0])
	face5.style.backgroundColor= getColour(face[1][1])
	face6.style.backgroundColor= getColour(face[1][2])
	face7.style.backgroundColor= getColour(face[2][0])
	face8.style.backgroundColor= getColour(face[2][1])
	face9.style.backgroundColor= getColour(face[2][2])

}
const getNum = (block) => {
	let num = block.split("-")
	return (num[1])
}

const getColour = (block) => {
	let col = block.split("-")
	switch (col[0]) {
		case "blue":
			return "#0000ff"
		case "yellow":
			return "#ffff00"
		case "red":
			return "#ff0000"
		case "green":
			return "#00ff00"
		case "white":
			return "#ffffff"
		case "orange":
			return "#FFA500"
		default:
			break;
	}
}



const rotateFace = (face, dir=0) => {
	let faceCopy = JSON.parse(JSON.stringify(face));
	n = 3

	for (let i = 0; i < n; ++i) {
		for (let j = 0; j < n; ++j) {
			if (dir == 0)
				face[i][j] = faceCopy[n - j - 1][i];
			else if (dir == 1)
				face[j][i] = faceCopy[i][n - j - 1];
		}
	}
}

//Up
/*-------------------------------------------------------*/
const applyU = (cube) => {
	let cubeCopy = JSON.parse(JSON.stringify(cube));
	cube.left[0] = cubeCopy.front[0]
	cube.back[0] = cubeCopy.left[0]
	cube.right[0] = cubeCopy.back[0]
	cube.front[0] = cubeCopy.right[0]
	rotateFace(cube.up)
}

const applyUi = (cube) => {
	let cubeCopy = JSON.parse(JSON.stringify(cube));
	cube.left[0] = cubeCopy.back[0]
	cube.back[0] = cubeCopy.right[0]
	cube.right[0] = cubeCopy.front[0]
	cube.front[0] = cubeCopy.left[0]
	rotateFace(cube.up, 1)
}
/*-------------------------------------------------------*/

//Down
/*-------------------------------------------------------*/
const applyDi = (cube) => {
	let cubeCopy = JSON.parse(JSON.stringify(cube));
	cube.left[2] = cubeCopy.front[2]
	cube.back[2] = cubeCopy.left[2]
	cube.right[2] = cubeCopy.back[2]
	cube.front[2] = cubeCopy.right[2]
	rotateFace(cube.down, 1)
}

const applyD = (cube) => {
	let cubeCopy = JSON.parse(JSON.stringify(cube));
	cube.left[2] = cubeCopy.back[2]
	cube.back[2] = cubeCopy.right[2]
	cube.right[2] = cubeCopy.front[2]
	cube.front[2] = cubeCopy.left[2]
	rotateFace(cube.down)
}
/*-------------------------------------------------------*/

//Right
/*-------------------------------------------------------*/
const applyR = (cube) => {
	let cubeCopy = JSON.parse(JSON.stringify(cube));
	cube.front[0][2] = cubeCopy.down[0][2]
	cube.front[1][2] = cubeCopy.down[1][2]
	cube.front[2][2] = cubeCopy.down[2][2]

	cube.up[0][2] = cubeCopy.front[0][2]
	cube.up[1][2] = cubeCopy.front[1][2]
	cube.up[2][2] = cubeCopy.front[2][2]

	cube.back[0][0] = cubeCopy.up[2][2]
	cube.back[1][0] = cubeCopy.up[1][2]
	cube.back[2][0] = cubeCopy.up[0][2]

	cube.down[0][2] = cubeCopy.back[2][0]
	cube.down[1][2] = cubeCopy.back[1][0]
	cube.down[2][2] = cubeCopy.back[0][0]
	
	rotateFace(cube.right)
}

const applyRi = (cube) => {
	let cubeCopy = JSON.parse(JSON.stringify(cube));
	cube.down[0][2] = cubeCopy.front[0][2]
	cube.down[1][2] = cubeCopy.front[1][2]
	cube.down[2][2] = cubeCopy.front[2][2]

	cube.front[0][2] = cubeCopy.up[0][2]
	cube.front[1][2] = cubeCopy.up[1][2]
	cube.front[2][2] = cubeCopy.up[2][2]

	cube.up[0][2] = cubeCopy.back[2][0]
	cube.up[1][2] = cubeCopy.back[1][0]
	cube.up[2][2] = cubeCopy.back[0][0]

	cube.back[0][0] = cubeCopy.down[2][2]
	cube.back[1][0] = cubeCopy.down[1][2]
	cube.back[2][0] = cubeCopy.down[0][2]
	
	rotateFace(cube.right, 1)
}
/*-------------------------------------------------------*/

//Left
/*-------------------------------------------------------*/
const applyL = (cube) => {
	let cubeCopy = JSON.parse(JSON.stringify(cube));
	cube.down[0][0] = cubeCopy.front[0][0]
	cube.down[1][0] = cubeCopy.front[1][0]
	cube.down[2][0] = cubeCopy.front[2][0]

	cube.front[0][0] = cubeCopy.up[0][0]
	cube.front[1][0] = cubeCopy.up[1][0]
	cube.front[2][0] = cubeCopy.up[2][0]

	cube.up[0][0] = cubeCopy.back[2][2]
	cube.up[1][0] = cubeCopy.back[1][2]
	cube.up[2][0] = cubeCopy.back[0][2]

	cube.back[0][2] = cubeCopy.down[2][0]
	cube.back[1][2] = cubeCopy.down[1][0]
	cube.back[2][2] = cubeCopy.down[0][0]
	
	rotateFace(cube.left)
}

const applyLi = (cube) => {
	let cubeCopy = JSON.parse(JSON.stringify(cube));
	cube.front[0][0] = cubeCopy.down[0][0]
	cube.front[1][0] = cubeCopy.down[1][0]
	cube.front[2][0] = cubeCopy.down[2][0]

	cube.up[0][0] = cubeCopy.front[0][0]
	cube.up[1][0] = cubeCopy.front[1][0]
	cube.up[2][0] = cubeCopy.front[2][0]

	cube.back[0][2] = cubeCopy.up[2][0]
	cube.back[1][2] = cubeCopy.up[1][0]
	cube.back[2][2] = cubeCopy.up[0][0]

	cube.down[0][0] = cubeCopy.back[2][2]
	cube.down[1][0] = cubeCopy.back[1][2]
	cube.down[2][0] = cubeCopy.back[0][2]
	
	rotateFace(cube.left, 1)
}
/*-------------------------------------------------------*/

//Front
/*-------------------------------------------------------*/
const applyF = (cube) => {
	let cubeCopy = JSON.parse(JSON.stringify(cube));
	cube.up[2][0] = cubeCopy.left[2][2]
	cube.up[2][1] = cubeCopy.left[1][2]
	cube.up[2][2] = cubeCopy.left[0][2]

	cube.right[0][0] = cubeCopy.up[2][0]
	cube.right[1][0] = cubeCopy.up[2][1]
	cube.right[2][0] = cubeCopy.up[2][2]

	cube.down[0][0] = cubeCopy.right[2][0]
	cube.down[0][1] = cubeCopy.right[1][0]
	cube.down[0][2] = cubeCopy.right[0][0]

	cube.left[0][2] = cubeCopy.down[0][0]
	cube.left[1][2] = cubeCopy.down[0][1]
	cube.left[2][2] = cubeCopy.down[0][2]

	rotateFace(cube.front)
}

const applyFi = (cube) => {
	let cubeCopy = JSON.parse(JSON.stringify(cube));
	cube.up[2][0] = cubeCopy.right[0][0]
	cube.up[2][1] = cubeCopy.right[1][0]
	cube.up[2][2] = cubeCopy.right[2][0]

	cube.right[0][0] = cubeCopy.down[0][2]
	cube.right[1][0] = cubeCopy.down[0][1]
	cube.right[2][0] = cubeCopy.down[0][0]

	cube.down[0][0] = cubeCopy.left[0][2]
	cube.down[0][1] = cubeCopy.left[1][2]
	cube.down[0][2] = cubeCopy.left[2][2]

	cube.left[0][2] = cubeCopy.up[2][2]
	cube.left[1][2] = cubeCopy.up[2][1]
	cube.left[2][2] = cubeCopy.up[2][0]
	
	rotateFace(cube.front, 1)
}
/*-------------------------------------------------------*/

//Back
/*-------------------------------------------------------*/
const applyBi = (cube) => {
	let cubeCopy = JSON.parse(JSON.stringify(cube));
	cube.up[0][0] = cubeCopy.left[2][0]
	cube.up[0][1] = cubeCopy.left[1][0]
	cube.up[0][2] = cubeCopy.left[0][0]

	cube.right[0][2] = cubeCopy.up[0][0]
	cube.right[1][2] = cubeCopy.up[0][1]
	cube.right[2][2] = cubeCopy.up[0][2]

	cube.down[2][0] = cubeCopy.right[2][2]
	cube.down[2][1] = cubeCopy.right[1][2]
	cube.down[2][2] = cubeCopy.right[0][2]

	cube.left[0][0] = cubeCopy.down[2][0]
	cube.left[1][0] = cubeCopy.down[2][1]
	cube.left[2][0] = cubeCopy.down[2][2]

	rotateFace(cube.back, 1)
}

const applyB = (cube) => {
	let cubeCopy = JSON.parse(JSON.stringify(cube));
	cube.up[0][0] = cubeCopy.right[0][2]
	cube.up[0][1] = cubeCopy.right[1][2]
	cube.up[0][2] = cubeCopy.right[2][2]

	cube.right[0][2] = cubeCopy.down[2][2]
	cube.right[1][2] = cubeCopy.down[2][1]
	cube.right[2][2] = cubeCopy.down[2][0]

	cube.down[2][0] = cubeCopy.left[0][0]
	cube.down[2][1] = cubeCopy.left[1][0]
	cube.down[2][2] = cubeCopy.left[2][0]

	cube.left[0][0] = cubeCopy.up[0][2]
	cube.left[1][0] = cubeCopy.up[0][1]
	cube.left[2][0] = cubeCopy.up[0][0]
	
	rotateFace(cube.back)
}
/*-------------------------------------------------------*/

displayCube(cube.front)
btnFront.onclick = () => {
	displayCube(cube.front);
	faceHeading.innerHTML="Front"
}

btnBack.onclick = () => {
	displayCube(cube.back)
	faceHeading.innerHTML="Back"
}
btnLeft.onclick = () => {
	displayCube(cube.left)
	faceHeading.innerHTML="Left"
}
btnRight.onclick = () => {
	displayCube(cube.right)
	faceHeading.innerHTML="Right"
}
btnUp.onclick = () => {
	displayCube(cube.up)
	faceHeading.innerHTML="Up"
}
btnDown.onclick = () => {
	displayCube(cube.down)
	faceHeading.innerHTML="Down"
}
