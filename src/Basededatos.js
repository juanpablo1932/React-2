export const BaseDeDatos = [
  {
    id: "01",
    name: "Condominio",
    costo: 1,
    stock: 5,
    vista: "https://i.ibb.co/zf5qwsq/condominio-cenital.png",
  },
  {
    id: "02",
    name: "Playa Cristal",
    costo: 1.5,
    stock: 5,
    vista: "https://i.ibb.co/09LpJ4L/DJI-0936-1.jpg",
  },
  {
    id: "03",
    name: "Playa Cristal",
    costo: 1.3,
    stock: 5,
    vista: "https://i.ibb.co/tZPX8KP/DJI-0958.jpg",
  },
  {
    id: "04",
    name: "Playa del Muerto",
    costo: 2,
    stock: 2,
    vista: "https://i.ibb.co/MhF70gr/DJI-0985.jpg",
  },
  {
    id: "05",
    name: "Laguna Negra",
    costo: 2,
    stock: 5,
    vista: "https://i.ibb.co/FXSFzbm/DJI-0327.jpg",
  },
  {
    id: "06",
    name: "Nevado del Ruiz",
    costo: 2,
    stock: 5,
    vista: "https://i.ibb.co/HxxVYZk/DJI-0343.jpg",
  },
  {
    id: "07",
    name: "Isla Pelicano",
    costo: 1.5,
    stock: 10,
    vista: "https://i.ibb.co/NVyTZ6C/DJI-0036.jpg",
  },
  {
    id: "08",
    name: "Playa Blanca",
    costo: 1.5,
    stock: 10,
    vista: "https://i.ibb.co/fxF0YJY/DJI-0048.jpg",
  },
  {
    id: "09",
    name: "Hotel Cascada",
    costo: 1.2,
    stock: 10,
    vista: "https://i.ibb.co/02tCnkC/DJI-0057.jpg",
  },
  {
    id: "10",
    name: "Calles Cenital",
    costo: 0.5,
    stock: 20,
    vista: "https://i.ibb.co/2q1Bnz6/default.jpg",
  },
  {
    id: "11",
    name: "El Rodadero",
    costo: 2,
    stock: 10,
    vista: "https://i.ibb.co/9WptNw6/DJI-0047.jpg",
  },
  {
    id: "12",
    name: "Santa Rosa de Cabal",
    costo: 1.2,
    stock: 5,
    vista: "https://i.ibb.co/H4T0QkW/default.jpg",
  },
  {
    id: "13",
    name: "Calles Nocturnas Cenital",
    costo: 2,
    stock: 2,
    vista: "https://i.ibb.co/7GBq80Y/DJI-0715.jpg",
  },
  {
    id: "14",
    name: "Pereira Nocturna",
    costo: 2.5,
    stock: 1,
    vista: "https://i.ibb.co/wRSB2Xn/DJI-0719.jpg",
  },
];

let is_ok = true;
export const getBaseDeDatos = (data, timeout) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (is_ok) {
        resolve(data);
      } else {
        reject(console.log("Error base de datos"));
      }
    }, timeout)
  );
