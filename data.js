const data = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

//per popolare la pagina all'esecuzione dello script, chiamiamo la funzione drawGrid
drawGrid(data);


// funzione drawGrid
// prende un array di oggetti che hanno le key name, prefix, family e color corrispondenti a icone di FontAwesome
// e li usa per costruire un div con class 'grid-container' contenente tanti div con classe 'box' quanti gli oggetti nell'array.
// i div contengono l'icona e un paragrafo che contiene il nome.
// il grid-container così creato viene poi piazzato nella pagina sostituendo il grid-container esistente.
function drawGrid(iconArray) {
	//imbrigliamo il grid-container esistente 
	let grid = document.querySelector('.grid-container');
	//creiamo un grid-container pulito
    let newGrid = document.createElement('div');
	newGrid.classList.add('grid-container');
	//per ogni oggetto nell'array
	iconArray.forEach(element => {
		//creiamo un div con classe box
		const newCell = document.createElement('div');
		newCell.classList.add('box');
		// creiamo un i e gli mettiamo le classi necessarie partendo dalle key dell'oggetto.
		const cellIcon = document.createElement('i') ;
		cellIcon.classList.add(element.family);
		cellIcon.classList.add(`${element.prefix}${element.name}`)
		//aggiungiamo il colore come stile css inline
		cellIcon.style.color = element.color;
		//appendiamo l'i al box
		newCell.append(cellIcon)
		//creaimo un paragrafo con il nome dell'oggetto e appendiamo anche lui
		const cellText = document.createElement('p');
		cellText.textContent = element.name.toUpperCase();
		newCell.append(cellText);
		//la nostra cella è pronta, la appendiamo al grid-container
		newGrid.append(newCell);
	});
    //sostituiamo il grid-container esistente con quello generato dal forEach
    grid.parentNode.replaceChild(newGrid, grid);
}

// questa funzione legge il valore del select e lo usa per filtrare l'array 'data'
// usa l'array filtrato per ridisegnare la griglia 
function selectFilter() {
	filterValue = this.value;
	// aggiungiamo elementi all'array filtrato solo se la key "type" dell'oggetto è "all" o uguale al filterValue
	let filteredData = data.filter((element) => filterValue === 'all' || filterValue === element.type);
	drawGrid(filteredData);
}

//aggiungiamo un event listener che chiama la funzione selectFilter quando l'utente modifica il valore del select
document.querySelector('#icon-select').addEventListener('input', selectFilter)