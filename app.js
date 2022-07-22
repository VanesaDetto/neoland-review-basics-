//iteracion #1//

const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

for (movie of movies) {
  for (category of movie.categories) {
    if (!categorias.includes(category)) {
      categorias.push(category);
    } /*else {
                categorias.push("duplicado")
            }*/
  }
}
console.log(categorias);

//ITERACION #2//
const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let arrayNuevo = [];
for (const usuarios of users) {
  for (const key in usuarios.favoritesSounds) {
    arrayNuevo.push(usuarios.favoritesSounds[key].volume);
  }
}

let acumulador = 0;
let valorArray = arrayNuevo.length;
arrayNuevo.forEach((e) => {
  acumulador += e;
});
console.log("la media total es:", acumulador / valorArray);

//ITERACION #3//
const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

//ITERACION #4//

const animales = ["Caracol", "Mosquito", "Salamandra", "Axolotl"];

const buscador = (array, text) => {
  array.forEach((element, index) => {
    if (text == element) {
      console.log(index);
    }
  });
};

buscador(animales, "Caracol");
buscador(animales, "Salamandra");
buscador(animales, "Axolotl");
buscador(animales, "Mosquito");
buscador(animales, "PV");

//ITERACION 5//

console.log();
const rollDice = (caras) => {
  console.log(parseInt(Math.random() * caras));
};

rollDice(6);

//ITERACION #6//

const array1 = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

const swap = (array, index1, index2) => {
  const item1 = array[index1];
  const item2 = array[index2];
  array[index1] = item2;
  array[index2] = item1;
  console.log(array);
};

swap(array1, 2, 0);
