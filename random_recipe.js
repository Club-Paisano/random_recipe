const foods = [
	{
		name: "Ceviche",
		image:
			"https://cdn.tasteatlas.com/Images/Dishes/385f61bf908247b5ac663e6dc3beb95b.jpg?mw=1300nstein",
		url: "https://www.tasteatlas.com/ceviche",
	},
	{
		name: "Pollo a la Brasa",
		image:
			"https://cdn.tasteatlas.com/Images/Dishes/f785d68dec86440f84fe510a351b5830.jpg?mw=1300",
		url: "https://www.tasteatlas.com/pollo-a-la-brasa",
	},
	{
		name: "Lomo Saltado",
		image:
			"https://cdn.tasteatlas.com/Images/Dishes/9bdbd996c9354b65b855a9d0f6f0fdfa.jpg?mw=1300",
		url: "https://www.tasteatlas.com/lomo-saltado",
	},
	{
		name: "Aji de Gallina",
		image:
			"https://cdn.tasteatlas.com/images/dishes/b4748c90658d4d749553075bc0ff18ef.jpg?mw=1300",
		url: "https://www.tasteatlas.com/aji-de-gallina",
	},
	{
		name: "Arroz Chaufa",
		image:
			"https://cdn.tasteatlas.com/images/dishes/a6a2596c26dc476596e4aa787c88eb66.jpg?mw=1300",
		url: "https://www.tasteatlas.com/arroz-chaufa",
	},
];

function randomRecipe(foods){
  //generate random number
  
  let num = Math.floor(Math.random()*foods.length)
  //chose recipe based on random number
  let recipe = foods[num]

  console.log(recipe)
  //update DOM with recipe info
  let recipeTitle = document.querySelector('h2');
  let recipePic = document.querySelector('img');
  let recipeLink = document.querySelector('a');
  recipeTitle.textContent = recipe.name
  recipePic.src = recipe.image
  recipeLink = recipe.url
}


window.onload(randomRecipe(foods));