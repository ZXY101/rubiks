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
				console.log('Why');
				
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
const applyU = () => {
	let cubeCopy = JSON.parse(JSON.stringify(cube));
	cube.left[0] = cubeCopy.front[0]
	cube.back[0] = cubeCopy.left[0]
	cube.right[0] = cubeCopy.back[0]
	cube.front[0] = cubeCopy.right[0]
	rotateFace(cube.up)
	console.log("Applying: U");
}

const applyUi = () => {
	let cubeCopy = JSON.parse(JSON.stringify(cube));
	cube.left[0] = cubeCopy.back[0]
	cube.back[0] = cubeCopy.right[0]
	cube.right[0] = cubeCopy.front[0]
	cube.front[0] = cubeCopy.left[0]
	rotateFace(cube.up, 1)
	console.log("Applying: Ui");
}
/*-------------------------------------------------------*/

//Down
/*-------------------------------------------------------*/
const applyDi = () => {
	let cubeCopy = JSON.parse(JSON.stringify(cube));
	cube.left[2] = cubeCopy.front[2]
	cube.back[2] = cubeCopy.left[2]
	cube.right[2] = cubeCopy.back[2]
	cube.front[2] = cubeCopy.right[2]
	rotateFace(cube.down, 1)
	console.log("Applying: Di");
}

const applyD = () => {
	let cubeCopy = JSON.parse(JSON.stringify(cube));
	cube.left[2] = cubeCopy.back[2]
	cube.back[2] = cubeCopy.right[2]
	cube.right[2] = cubeCopy.front[2]
	cube.front[2] = cubeCopy.left[2]
	rotateFace(cube.down)
	console.log("Applying: D");
}
/*-------------------------------------------------------*/

//Right
/*-------------------------------------------------------*/
const applyR = () => {
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
	console.log("Applying: R");
}

const applyRi = () => {
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
	console.log("Applying: Ri");
}
/*-------------------------------------------------------*/

//Left
/*-------------------------------------------------------*/
const applyL = () => {
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
	console.log("Applying: L");
}

const applyLi = () => {
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
	console.log("Applying: Li");
}
/*-------------------------------------------------------*/

//Front
/*-------------------------------------------------------*/
const applyF = () => {
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
	console.log("Applying: F");
}

const applyFi = () => {
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
	console.log("Applying: Fi");
}
/*-------------------------------------------------------*/

//Back
/*-------------------------------------------------------*/
const applyBi = () => {
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
	console.log("Applying: Bi");
}

const applyB = () => {
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
	console.log("Applying: B");
}

const applyU2 = () => {applyU(); applyU();}
const applyD2 = () => {applyD(); applyD();}
const applyR2 = () => {applyR(); applyR();}
const applyL2 = () => {applyL(); applyL();}
const applyF2 = () => {applyF(); applyF();}
const applyB2 = () => {applyB(); applyB();}

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
		applyF()
		applyF()
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
	console.log(edge);
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


const solveCube = () => {
	solveWhiteEdges()
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


//R2 D’ B’ D F2 R F2 R2 U L’ F2 U’ B’ L2 R D B’ R’ B2 L2 F2 L2 R2 U2 D2
//R2 D' B' D F2 R F2 R2 U L' F2 U' B' L2 R D B' R' B2 L2 F2 L2 R2 U2 D2
