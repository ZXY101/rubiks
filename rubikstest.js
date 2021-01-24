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

let btnApply = document.getElementById("btnApply")
let btnSolve = document.getElementById("btnSolve")
let btnReset = document.getElementById("btnReset")
let moveInput = document.getElementById("moveInput")

let faceHeading = document.getElementById("face")

class Cube {
	constructor(){
		this.front = [
				["green", "green", "green"],
				["green", "green", "green"],
				["green", "green", "green"],
			];
		this.right = [
				["red", "red", "red"],
				["red", "red", "red"],
				["red", "red", "red"],
			];
		this.left = [
				["orange", "orange", "orange"],
				["orange", "orange", "orange"],
				["orange", "orange", "orange"],
			];
		this.back = [
				["blue", "blue", "blue"],
				["blue", "blue", "blue"],
				["blue", "blue", "blue"],
			];
		this.up = [
				["white", "white", "white"],
				["white", "white", "white"],
				["white", "white", "white"],
			];
		this.down = [
				["yellow", "yellow", "yellow"],
				["yellow", "yellow", "yellow"],
				["yellow", "yellow", "yellow"],
			];
	}
}

let cube = new Cube();
let moveList = ""
let solving = false

const applyMoves = (moves) => {
	moves.forEach((move) => {
		switch (move) {
			case "U":
				applyU()
				break;
			case "U'":
				applyUi()
				break;
			case "U2":
				applyU2()
				break;

			case "D":
				applyD()
				break;
			case "D'":
				applyDi()
				break;
			case "D2":
				applyD2()
				break;

			case "F":
				applyF()
				break;
			case "F'":
				applyFi()
				break;
			case "F2":
				applyF2()
				break;

			case "L":
				applyL()
				break;
			case "L'":
				applyLi()
				break;
			case "L2":
				applyL2()
				break;

			case "R":
				applyR()
				break;
			case "R'":
				applyRi()
				break;
			case "R2":
				applyR2()
				break;

			case "B":
				applyB()
				break;
			case "B'":
				applyBi()
				break;
			case "B2":
				applyB2()
				break;
			default:
				console.log('Invalid Move');
				break;
		}
	})

}

const displayCube = (face) => {
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

const turnCube = () =>{
	let cubeCopy = JSON.parse(JSON.stringify(cube));
	cube.front = cubeCopy.right
	cube.right = cubeCopy.back
	cube.back = cubeCopy.left
	cube.left = cubeCopy.front
	rotateFace(cube.up)
	rotateFace(cube.down, 1)
	if (solving) moveList += "Y "
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
const applyU = (logging = true) => {
	let cubeCopy = JSON.parse(JSON.stringify(cube));
	cube.left[0] = cubeCopy.front[0]
	cube.back[0] = cubeCopy.left[0]
	cube.right[0] = cubeCopy.back[0]
	cube.front[0] = cubeCopy.right[0]
	rotateFace(cube.up)
	if (solving && logging) moveList += "U "
}

const applyUi = (logging = true) => {
	let cubeCopy = JSON.parse(JSON.stringify(cube));
	cube.left[0] = cubeCopy.back[0]
	cube.back[0] = cubeCopy.right[0]
	cube.right[0] = cubeCopy.front[0]
	cube.front[0] = cubeCopy.left[0]
	rotateFace(cube.up, 1)
	if (solving && logging) moveList += "U' "
}
/*-------------------------------------------------------*/

//Down
/*-------------------------------------------------------*/
const applyDi = (logging = true) => {
	let cubeCopy = JSON.parse(JSON.stringify(cube));
	cube.left[2] = cubeCopy.front[2]
	cube.back[2] = cubeCopy.left[2]
	cube.right[2] = cubeCopy.back[2]
	cube.front[2] = cubeCopy.right[2]
	rotateFace(cube.down, 1)
	if (solving && logging) moveList += "D' "
}

const applyD = (logging = true) => {
	let cubeCopy = JSON.parse(JSON.stringify(cube));
	cube.left[2] = cubeCopy.back[2]
	cube.back[2] = cubeCopy.right[2]
	cube.right[2] = cubeCopy.front[2]
	cube.front[2] = cubeCopy.left[2]
	rotateFace(cube.down)
	if (solving && logging) moveList += "D "
}
/*-------------------------------------------------------*/

//Right
/*-------------------------------------------------------*/
const applyR = (logging = true) => {
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
	if (solving && logging) moveList += "R "
}

const applyRi = (logging = true) => {
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
	if (solving && logging) moveList += "R' "
}
/*-------------------------------------------------------*/

//Left
/*-------------------------------------------------------*/
const applyL = (logging = true) => {
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
	if (solving && logging) moveList += "L "
}

const applyLi = (logging = true) => {
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
	if (solving && logging) moveList += "L' "
}
/*-------------------------------------------------------*/

//Front
/*-------------------------------------------------------*/
const applyF = (logging = true) => {
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
	if (solving && logging) moveList += "F "
}

const applyFi = (logging = true) => {
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
	if (solving && logging) moveList += "F' "
}
/*-------------------------------------------------------*/

//Back
/*-------------------------------------------------------*/
const applyBi = (logging = true) => {
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
	if (solving && logging) moveList += "B' "
}

const applyB = (logging = true) => {
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
	if (solving && logging) moveList += "B "
}

const applyU2 = () => {applyU(false); applyU(false); if (solving) moveList += "U2 ";}
const applyD2 = () => {applyD(false); applyD(false); if (solving) moveList += "D2 ";}
const applyR2 = () => {applyR(false); applyR(false); if (solving) moveList += "R2 ";}
const applyL2 = () => {applyL(false); applyL(false); if (solving) moveList += "L2 ";}
const applyF2 = () => {applyF(false); applyF(false); if (solving) moveList += "F2 ";}
const applyB2 = () => {applyB(false); applyB(false); if (solving) moveList += "B2 ";}

/*-------------------------------------------------------*/

const isWhiteEdgeSolved = (edge) =>{
	if (cube.front[0][1] == edge && cube.up[2][1] == "white"){
		return true
	}
}

const placeWhiteFromFront = (edge) => {
	if (cube.front[1][2] == edge && cube.right[1][0] == "white"){
		applyFi()
		return true
	}
	if (cube.front[1][0] == edge && cube.left[1][2] == "white"){
		applyF()
		return true
	}
	if (cube.front[2][1] == edge && cube.down[0][1] == "white"){
		applyF2()
		return true
	}

	if (cube.front[0][1] == "white" && cube.up[2][1] == edge){
		applyF2()
		applyD()
		applyR()
		applyFi()
		applyRi()
		return true
	}

	if (cube.front[1][2] == "white" && cube.right[1][0] == edge){
		applyF()
		applyD()
		applyR()
		applyFi()
		applyRi()
		return true
	}

	if (cube.front[1][0] == "white" && cube.left[1][2] == edge){
		applyFi()
		applyD()
		applyR()
		applyFi()
		applyRi()
		return true
	}

	if (cube.front[2][1] == "white" && cube.down[0][1] == edge){
		applyD()
		applyR()
		applyFi()
		applyRi()
		return true
	}
}

const solveWhiteEdge = (edge) => {
	if (!isWhiteEdgeSolved(edge)){
		if (placeWhiteFromFront(edge)){
			return
		}
		else{
			if ((cube.right[0][1] == "white" || cube.right[0][1] == edge) && (cube.up[1][2] == "white" || cube.up[1][2] == edge)){
				applyRi();
				placeWhiteFromFront(edge)
			}
			if ((cube.right[2][1] == "white" || cube.right[2][1] == edge) && (cube.down[1][2] == "white" || cube.down[1][2] == edge)){
				applyDi();
				placeWhiteFromFront(edge)
			}
			if ((cube.right[1][2] == "white" || cube.right[1][2] == edge) && (cube.back[1][0] == "white" || cube.back[1][0] == edge)){
				applyR()
				applyDi()
				applyRi()
				placeWhiteFromFront(edge)
			}

			if ((cube.left[0][1] == "white" || cube.left[0][1] == edge) && (cube.up[1][0] == "white" || cube.up[1][0] == edge)){
				applyL();
				placeWhiteFromFront(edge)
			}
			if ((cube.left[2][1] == "white" || cube.left[2][1] == edge) && (cube.down[1][0] == "white" || cube.down[1][0] == edge)){
				applyD();
				placeWhiteFromFront(edge)
			}
			if ((cube.left[1][0] == "white" || cube.left[1][0] == edge) && (cube.back[1][2] == "white" || cube.back[1][2] == edge)){
				applyLi()
				applyD()
				applyL()
				placeWhiteFromFront(edge)
			}

			if ((cube.back[0][1] == "white" || cube.back[0][1] == edge) && (cube.up[0][1] == "white" || cube.up[0][1] == edge)){
				applyB2()
				applyD2()
				placeWhiteFromFront(edge)
			}
			
			if ((cube.back[2][1] == "white" || cube.back[2][1] == edge) && (cube.down[2][1] == "white" || cube.down[2][1] == edge)){
				applyD2()
				placeWhiteFromFront(edge)
			}
		}
	}
}

const cornerAlgo = () => {
	applyRi()
	applyDi()
	applyR()
	applyD()
}

// const isWantedCorner = (corner, adj, mainCorner, adjCorner, upperCorner) => {
// 	let lookingFor = [corner, adj, "white"]

	// if (lookingFor.includes(cube.front[0][2]) && lookingFor.includes(cube.right[0][0]) &&lookingFor.includes(cube.up[2][2]))
// 		return true
// 	else if (lookingFor.includes(cube.front[2][2]) && lookingFor.includes(cube.right[2][0]) &&lookingFor.includes(cube.down[0][2]))
// 		return true
// 	return false
// }

const isWantedCorner = (corner, adj, mainCorner, adjCorner, upperCorner) => {
	let lookingFor = [corner, adj, "white"]

	if (lookingFor.includes(mainCorner) && lookingFor.includes(adjCorner) &&lookingFor.includes(upperCorner))
		return true
	return false
}

const solveWhiteCorner = (corner, adj) =>{
	if (!isWantedCorner(corner, adj, cube.front[0][2], cube.right[0][0], cube.up[2][2]) &&
	!isWantedCorner(corner, adj, cube.front[2][2], cube.right[2][0], cube.down[0][2])){
		if (isWantedCorner(corner, adj, cube.left[2][2], cube.front[2][0], cube.down[0][0])){
			applyD()
		}

		if (isWantedCorner(corner, adj, cube.back[2][2], cube.left[2][0], cube.down[2][0])){
			applyD2()
		}

		if (isWantedCorner(corner, adj, cube.right[2][2], cube.back[2][0], cube.down[2][2])){
			applyDi()
		}

		if (isWantedCorner(corner, adj, cube.left[0][2], cube.front[0][0], cube.up[2][0])){
			applyFi()
			applyD()
			applyF()
			applyD()
		}

		if (isWantedCorner(corner, adj, cube.back[0][2], cube.left[0][0], cube.up[0][0])){
			applyLi()
			applyD()
			applyL()
			applyD()
			applyD()
		}

		if (isWantedCorner(corner, adj, cube.right[0][2], cube.back[0][0], cube.up[0][2])){
			applyR()
			applyDi()
			applyRi()
			applyDi()
		}
	}

	while (!(cube.front[0][2] == corner && cube.right[0][0] == adj && cube.up[2][2] == "white")) {
		cornerAlgo()
	}
}
const solveLeft = () =>{
	applyD()
	applyL()
	applyDi()
	applyLi()
	applyDi()
	applyFi()
	applyD()
	applyF()
}

const solveRight = () =>{
	applyDi()
	applyRi()
	applyD()
	applyR()
	applyD()
	applyF()
	applyDi()
	applyFi()
}

const getRight = (main, right) =>{
}

const solveCenterLayer = (main, left, right) => {
	while (true) {
		if (cube.front[1][2] == main && cube.right[1][0] == right) break

		if ((cube.front[2][1] == main || cube.front[2][1] == right) && (cube.down[0][1] == main || cube.down[0][1] == right)){
			solveRight()
		}

		if ((cube.right[2][1] == main || cube.right[2][1] == right) && (cube.down[1][2] == main || cube.down[1][2] == right)){
			applyDi()
			solveRight()
		}

		if ((cube.back[2][1] == main || cube.back[2][1] == right) && (cube.down[2][1] == main || cube.down[2][1] == right)){
			applyD2()
			solveRight()
		}

		if ((cube.left[2][1] == main || cube.left[2][1] == right) && (cube.down[1][0] == main || cube.down[1][0] == right)){
			applyD()
			solveRight()
		}

		if (cube.front[1][2] == right && cube.right[1][0] == main){
			solveRight()
		}

		if ((cube.front[1][0] == main || cube.front[1][0] == right) && (cube.left[1][2] == main || cube.left[1][2] == right)){
			solveLeft()
		}

		if ((cube.right[1][2] == main || cube.right[1][2] == right) && (cube.back[1][0] == main || cube.back[1][0] == right)){
			turnCube()
			solveRight()
			turnCube()
			turnCube()
			turnCube()
		}

		if ((cube.left[1][0] == main || cube.left[1][0] == right) && (cube.back[1][2] == main || cube.back[1][2] == right)){
			
			turnCube()
			turnCube()
			turnCube()
			solveLeft()
			turnCube()
			
		}
		
	}

	while (true) {
		if (cube.front[1][0] == main && cube.left[1][2] == left) break
		if ((cube.front[2][1] == main || cube.front[2][1] == left) && (cube.down[0][1] == main || cube.down[0][1] == left)){
			solveLeft()
		}

		if ((cube.right[2][1] == main || cube.right[2][1] == left) && (cube.down[1][2] == main || cube.down[1][2] == left)){
			applyDi()
			solveLeft()

		}

		if ((cube.back[2][1] == main || cube.back[2][1] == left) && (cube.down[2][1] == main || cube.down[2][1] == left)){
			applyD2()
			solveLeft()
		}

		if ((cube.left[2][1] == main || cube.left[2][1] == left) && (cube.down[1][0] == main || cube.down[1][0] == left)){
			applyD()
			solveLeft()
		}
		
		if (cube.front[1][0] == left && cube.left[1][2] == main){
			solveLeft()
			
		}
		
		if ((cube.front[1][2] == main || cube.front[1][2] == left) && (cube.right[1][0] == main || cube.right[1][0] == left)){
			solveRight()
		}
		
		if ((cube.right[1][2] == main || cube.right[1][2] == left) && (cube.back[1][0] == main || cube.back[1][0] == left)){
			turnCube()
			solveRight()
			turnCube()
			turnCube()
			turnCube()
		}

		if ((cube.left[1][0] == main || cube.left[1][0] == left) && (cube.back[1][2] == main || cube.back[1][2] == left)){
			turnCube()
			turnCube()
			turnCube()
			solveLeft()
			turnCube()
		}
	}

}

//R2 L2 U B F
const solveWhiteEdges = () => {
	solveWhiteEdge("green")
	turnCube()
	solveWhiteEdge("red")
	turnCube()
	solveWhiteEdge("blue")
	turnCube()
	solveWhiteEdge("orange")
	turnCube()
}

const solveWhiteCorners = () =>{
	solveWhiteCorner("green", "red")
	turnCube()
	solveWhiteCorner("red", "blue")
	turnCube()
	solveWhiteCorner("blue", "orange")
	turnCube()
	solveWhiteCorner("orange", "green")
	turnCube()
}

const solveCenterLayers = () =>{
	solveCenterLayer("green", "orange", "red")
	turnCube()
	solveCenterLayer("red", "green", "blue")
	turnCube()
	solveCenterLayer("blue", "red", "orange")
	turnCube()
	solveCenterLayer("orange", "blue", "green")
	turnCube()
}

const yellowCrossAlgo = () =>{
	applyF()
	applyD()
	applyL()
	applyDi()
	applyLi()
	applyFi()
}

const yellowEdgeAlgo = () =>{
	applyL()
	applyD()
	applyLi()
	applyD()
	applyL()
	applyD2()
	applyLi()
	applyD()
}

const cycleCornerAlgo = () =>{
	applyD()
	applyL()
	applyDi()
	applyRi()
	applyD()
	applyLi()
	applyDi()
	applyR()
}

const orientCornersAlgo = () =>{
	applyLi()
	applyUi()
	applyL()
	applyU()
}

const solveYellowCross = () =>{
	if (cube.down[0][1] == "yellow" && cube.down[1][0] == "yellow" && cube.down[1][2] == "yellow" && cube.down[2][1] == "yellow"){
		return
	}

	if (cube.down[1][0] == "yellow" && cube.down[1][2] == "yellow"){
		yellowCrossAlgo()
	}

	if (cube.down[0][1] == "yellow" && cube.down[2][1] == "yellow"){
		applyD()
		yellowCrossAlgo()
	}

	if (cube.down[2][1] == "yellow" && cube.down[1][2] == "yellow"){
		yellowCrossAlgo()
		return
	}

	if (cube.down[2][1] == "yellow" && cube.down[1][0] == "yellow"){
		applyDi()
		yellowCrossAlgo()
		return
	}

	if (cube.down[1][0] == "yellow" && cube.down[0][1] == "yellow"){
		applyD2()
		yellowCrossAlgo()
		return
	}

	if (cube.down[0][1] == "yellow" && cube.down[1][2] == "yellow"){
		applyD()
		yellowCrossAlgo()
		return
	}

	yellowCrossAlgo()
	solveYellowCross()
}

const solveYellowEdges = () =>{
	while (!(cube.front[2][1] == "green" && cube.back[2][1] == "blue" && cube.left[2][1] == "orange" && cube.right[2][1] == "red")){
		while (cube.front[2][1] != "green") applyD()
		if (cube.back[2][1] == "blue"){
			turnCube()
			turnCube()
			yellowEdgeAlgo()
			turnCube()
			turnCube()
		}
		yellowEdgeAlgo()
		while (cube.front[2][1] != "green") applyD()
	}
}

let c1Solved
let c2Solved
let c3Solved
let c4Solved

let corner1
let corner2
let corner3
let corner4

const checkCorners = () => {
	corner1 = [cube.front[1][1], cube.left[1][1], "yellow"]
	corner2 = [cube.left[1][1], cube.back[1][1], "yellow"]
	corner3 = [cube.back[1][1], cube.right[1][1], "yellow"]
	corner4 = [cube.right[1][1], cube.front[1][1], "yellow"]

	c1Solved = false
	c2Solved = false
	c3Solved = false
	c4Solved = false

	if (corner1.includes(cube.front[2][0]) && corner1.includes(cube.left[2][2])  && corner1.includes(cube.down[0][0])){
		c1Solved = true
	}
	if (corner2.includes(cube.left[2][0]) && corner2.includes(cube.back[2][2])  && corner2.includes(cube.down[2][0])){
		c2Solved = true
	}
	if (corner3.includes(cube.back[2][0]) && corner3.includes(cube.right[2][2])  && corner3.includes(cube.down[2][2])){
		c3Solved = true
	}
	if (corner4.includes(cube.right[2][0]) && corner4.includes(cube.front[2][2])  && corner4.includes(cube.down[0][2])){
		c4Solved = true
	}
}

const cycleCorners = () =>{
	checkCorners()

	if (c1Solved && c2Solved && c3Solved && c4Solved){
		return
	}
	
	if (!c1Solved && !c2Solved && !c3Solved && !c4Solved){
		cycleCornerAlgo()
	}
	checkCorners()
	
	if (c1Solved){
		while (!(c1Solved && c2Solved && c3Solved && c4Solved)){
			cycleCornerAlgo()
			checkCorners()
		}
		return
	}
	
	if (c2Solved){
		turnCube()
		turnCube()
		turnCube()
		cycleCorners()
		turnCube()
	}

	if (c3Solved){
		turnCube()
		turnCube()
		cycleCorners()
		turnCube()
		turnCube()
	}

	if (c4Solved){
		turnCube()
		cycleCorners()
		turnCube()
		turnCube()
		turnCube()
	}
}

const orientCorners = () =>{
	while (cube.down[0][0] != "yellow"){
		orientCornersAlgo()
	}
	applyD()
	while (cube.down[0][0] != "yellow"){
		orientCornersAlgo()
	}
	applyD()
	while (cube.down[0][0] != "yellow"){
		orientCornersAlgo()
	}
	applyD()
	while (cube.down[0][0] != "yellow"){
		orientCornersAlgo()
	}
	applyD()
}

const solveCube = () => {
	solving = true
	solveWhiteEdges()
	solveWhiteCorners()
	solveCenterLayers()
	solveYellowCross()
	solveYellowEdges()
	cycleCorners()
	orientCorners()

	moveList = moveList.replaceAll("Y Y Y Y ", "")
	moveList = moveList.replaceAll("D D D D ", "")
	console.log(moveList == "" ? "Already Solved" : moveList);
	moveList = ""
	
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

btnApply.onclick = () => {
	let moves = moveInput.value.replaceAll("’", "'")
	applyMoves(moves.split(" "))
	displayCube(cube.front)
}

btnSolve.onclick = () => {
	solveCube()
	displayCube(cube.front)
}

btnReset.onclick = () => {
	moveInput.value = ""
	cube = new Cube()
	displayCube(cube.front)
}

//R2 D' B' D F2 R F2 R2 U L' F2 U' B' L2 R D B' R' B2 L2 F2 L2 R2 U2 D2
//D F2 Y D2 F2 Y L' D L D R F' R' Y L' D L F2 Y D2 R' D'
//R D Y R' D' R D Y Y D' R' D' R D R' D' R D R' D' R D Y

//solve left
//D' R' D R D F D' F'

//solve right
//D L D' L' D' F' D F

//yellow cross
//F D L D' L' F'

//swap edges
//L D L' D L D2 L' D

//cycle corners
//D L D' R' D L' D' R

//orient corners
//L' U' L U