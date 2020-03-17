
// Исходный массив с числовыми данными

var amy = new Array(5, 12, -20, 67, 9, 78, 50); 


// Функция, которая определяет минимальный элемент в массиве

function getMin(arr) {

var minEl = arr[0];

for(let i=0; i<=arr.length; i++) {
 
	if(minEl > arr[i]) { minEl = arr[i]; task2.innerText = minEl; }
   
								} 
}


getMin(amy);



// Функция, которая определяет четные элементы в массиве и создает из них новый массив

function getEven(arr) {

var empty = new Array(); 

for(let i=0; i<=arr.length; i++) {

	if(arr[i] % 2 === 0) {empty.push(arr[i]);}

}

task3.innerText = empty;

}


getEven(amy);



// Исходный массив обьектов

var amoba = new Array({name: 'Jonny Walker', birthDate: '1995-12-17'}, {name: 'Andrew', birthDate: '2001-10-29'}, {name: 'Viktor', birthDate: '2011-05-09'}, {name: 'Andrew', birthDate: '2011-05-09'});



// Функция для задания 4


function SearchByName(name) {

	empty2 = new Array();
	
	
	for (var i = 0; i <= amoba.length; i++) {

		var k = amoba[i]["name"];


		if (k === name) {empty2.push(amoba[i]);}

		console.log(empty2);
	}

} 



SearchByName('Andrew');
	

	