let front = [
	["blue-1", "blue-2", "blue-3"],
	["blue-4", "blue-5", "blue-6"],
	["blue-7", "blue-8", "blue-9"],
]
let right = [
	["orange-1", "orange-2", "orange-3"],
	["orange-4", "orange-5", "orange-6"],
	["orange-7", "orange-8", "orange-9"],
]
let left = [
	["red-1", "red-2", "red-3"],
	["red-4", "red-5", "red-6"],
	["red-7", "red-8", "red-9"],
]
let back = [
	["green-1", "green-2", "green-3"],
	["green-4", "green-5", "green-6"],
	["green-7", "green-8", "green-9"],
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
const applyD = (cube) => {
	let cubeCopy = JSON.parse(JSON.stringify(cube));
	cube.left[2] = cubeCopy.front[2]
	cube.back[2] = cubeCopy.left[2]
	cube.right[2] = cubeCopy.back[2]
	cube.front[2] = cubeCopy.right[2]
	rotateFace(cube.down)
}

const applyDi = (cube) => {
	let cubeCopy = JSON.parse(JSON.stringify(cube));
	cube.left[2] = cubeCopy.back[2]
	cube.back[2] = cubeCopy.right[2]
	cube.right[2] = cubeCopy.front[2]
	cube.front[2] = cubeCopy.left[2]
	rotateFace(cube.down, 1)
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

applyU(cube)
applyR(cube)
applyRi(cube)
applyUi(cube)

console.log(cube);


