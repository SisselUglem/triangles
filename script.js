//In this assignment you should calculate the area of two trianglesand then
//compare the values of the result to see which one hasthe biggest area. Code one example for each test data that youare provided. That means one case (code example) for the firsttest data, one for the second and so on. Use template literals tooutput the result to the console.
//You can calculate the area of a triangle using the formula:
//area = (base * height) / 2


//OBS!
//In this case you actually have to use the parentheseswhen doing the area calculation.
//Answer the question why JavaScript needs the parentheses in thiscase? You can put your answer as plain text when you hand in theassignment.

//TEST DATA
//Case 1
//triangleOne: base = 10cm, height = 13cm
//triangleTwo: base = 16,5cm, height = 20,3cm
//Case 2
//triangleThree: base = 16,5cm, height = 20,3cm
//triangleFour: base = 20,3cm, height = 16,5cm
//Case 3
//triangleFive: base = 7,8cm, height = 5,6cm
//triangleSix: base = 9,3cm, height = 12,4cm


//Print the total area for each triangle together with the result ofwhich one that has the biggest are. Example:
//`Triangle One has an area of xx cm2 and Triangle Two has an areaof xx cm2. The triangle with the biggest area is Triangle xx.`
//Code an example for each case of test data.
//Hand in a link to your GitHub repo for your assignment and don'tforget to answer the question above.



//QUESTION
//Answer the question why JavaScript needs the parentheses in thiscase?



//CASE 1-----------------------------------------------------------
//triangleOne: base = 10cm, height = 13cm
//triangleTwo: base = 16,5cm, height = 20,3cm

//Declaring variables with the values of each triangles measures
const triangleOneBase = 10;
const triangleOneHeight = 13;

const triangleTwoBase = 16.5;
const triangleTwoHeight = 20.3;

//Calculate the area of each triangle 

const triangleOneArea = (triangleOneBase * triangleOneHeight) / 2;
const triangleTwoArea = (triangleTwoBase * triangleTwoHeight) / 2;

//Displays the values of triangle one and two in html div by id

//Triangle One
var baseTriangleOneDiv = document.getElementById('baseTriangleOne');
baseTriangleOneDiv.textContent = `Base: ${triangleOneBase} cm`;

var heightTriangleOneDiv = document.getElementById('heightTriangleOne');
heightTriangleOneDiv.textContent = `Height: ${triangleOneHeight} cm`;


var areaTriangleOneDiv = document.getElementById('areaTriangleOne');
areaTriangleOneDiv.textContent = `Area: ${triangleOneArea} `;

//Triangle Two
var baseTriangleTwoDiv = document.getElementById('baseTriangleTwo');
baseTriangleTwoDiv.textContent = `Base: ${triangleTwoBase} cm`;

var heightTriangleTwoDiv = document.getElementById('heightTriangleTwo');
heightTriangleTwoDiv.textContent = `Height: ${triangleTwoHeight} cm`;


var areaTriangleTwoDiv = document.getElementById('areaTriangleTwo');
areaTriangleTwoDiv.textContent = `Area: ${triangleTwoArea}`;



//CASE 2-----------------------------------------------------------
//triangleThree: base = 16,5cm, height = 20,3cm
//triangleFour: base = 20,3cm, height = 16,5cm

//Declaring variables with the values of each triangles measures
const triangleThreeBase = 16.5;
const triangleThreeHeight = 20.3;

const triangleFourBase = 20.3;
const triangleFourHeight = 16.5;

//Calculate the area of each triangle 

const triangleThreeArea = (triangleThreeBase * triangleThreeHeight) / 2;
const triangleFourArea = (triangleFourBase * triangleFourHeight) / 2;

//Displays the values of triangle one and two in html div by id

//Triangle One
var baseTriangleThreeDiv = document.getElementById('baseTriangleThree');
baseTriangleThreeDiv.textContent = `Base: ${triangleThreeBase} cm`;

var heightTriangleThreeDiv = document.getElementById('heightTriangleThree');
heightTriangleThreeDiv.textContent = `Height: ${triangleThreeHeight} cm`;


var areaTriangleThreeDiv = document.getElementById('areaTriangleThree');
areaTriangleThreeDiv.textContent = `Area: ${triangleThreeArea}`;

//Triangle Two
var baseTriangleFourDiv = document.getElementById('baseTriangleFour');
baseTriangleFourDiv.textContent = `Base: ${triangleFourBase} cm`;

var heightTriangleFourDiv = document.getElementById('heightTriangleFour');
heightTriangleFourDiv.textContent = `Height: ${triangleFourHeight} cm`;


var areaTriangleFourDiv = document.getElementById('areaTriangleFour');
areaTriangleFourDiv.textContent = `Area: ${triangleFourArea}`;



//CASE 3-----------------------------------------------------------
//triangleFive: base = 7,8cm, height = 5,6cm
//triangleSix: base = 9,3cm, height = 12,4cm

//Declaring variables with the values of each triangles measures
const triangleFiveBase = 7.2;
const triangleFiveHeight = 5.6;

const triangleSixBase = 9.3;
const triangleSixHeight = 12.4;

//Calculate the area of each triangle 

const triangleFiveArea = (triangleThreeBase * triangleThreeHeight) / 2;
const triangleSixArea = (triangleFourBase * triangleFourHeight) / 2;

//Displays the values of triangle one and two in html div by id

//Triangle One
var baseTriangleFiveDiv = document.getElementById('baseTriangleFive');
baseTriangleFiveDiv.textContent = `Base: ${triangleFiveBase} cm`;

var heightTriangleFiveDiv = document.getElementById('heightTriangleFive');
heightTriangleFiveDiv.textContent = `Height: ${triangleFiveHeight} cm`;


var areaTriangleFiveDiv = document.getElementById('areaTriangleFive');
areaTriangleFiveDiv.textContent = `Area: ${triangleFiveArea}`;

//Triangle Two
var baseTriangleSixDiv = document.getElementById('baseTriangleSix');
baseTriangleSixDiv.textContent = `Base: ${triangleSixBase} cm`;

var heightTriangleSixDiv = document.getElementById('heightTriangleSix');
heightTriangleSixDiv.textContent = `Height: ${triangleSixHeight} cm`;


var areaTriangleSixDiv = document.getElementById('areaTriangleSix');
areaTriangleSixDiv.textContent = `Area: ${triangleSixArea} `;

