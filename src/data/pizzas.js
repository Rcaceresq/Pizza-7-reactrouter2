export const pizzas = [
  {
    id: "P001",
    name: "Napolitana",
    price: 5950,
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
  },
  {
    id: "P002",
    name: "Española",
    price: 7250,
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
  },
  {
    id: "P003",
    name: "Salame",
    price: 5990,
    ingredients: ["mozzarella", "salame", "orégano"],
    img: "https://i.pinimg.com/1200x/34/f8/3f/34f83fe254c00c10ff3f8adfdda9b8c8.jpg",
  },
  {
    id: "P004",
    name: "Vegetariana",
    price: 6550,
    ingredients: ["mozzarella", "pimentón", "aceitunas", "choclo"],
    img: "https://yayaya.com.ec/wp-content/uploads/2021/07/pizza-vegetariana-1024x684.jpg",
  },
  {
    id: "P005",
    name: "Hawaiana",
    price: 7450,
    ingredients: ["mozzarella", "piña", "jamón", "orégano"],
    img: "https://www.hola.com/horizon/landscape/a17cd68660e0-pizza-hawaiana-t.jpg?im=Resize=(960),type=downsize",
  },
  {
    id: "P006",
    name: "Cuatro Quesos",
    price: 7950,
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
    img: "https://www.hola.com/horizon/landscape/e8bb41b65869-pizzacuatroquesos-adob-t.jpg?im=Resize=(960),type=downsize",
  },
];


export const pizzaCart = [
  { id: "P001", name: "Napolitana", price: 5950, qty: 1, img: pizzas[0].img },
  { id: "P002", name: "Española",  price: 7250, qty: 1, img: pizzas[1].img },
  { id: "P003", name: "Salame",    price: 5990, qty: 1, img: pizzas[2].img },
  { id: "P004", name: "Vegetariana", price: 6550, qty: 1, img: pizzas[3].img },
  { id: "P005", name: "Hawaiana",  price: 7450, qty: 1, img: pizzas[4].img },
  { id: "P006", name: "Cuatro Quesos",    price: 7950, qty: 1, img: pizzas[5].img },
];