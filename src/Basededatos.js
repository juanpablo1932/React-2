export const BaseDeDatos = [
  {
    id: "01",
    name: "Condominio",
    costo: 1,
    stock: 5,
    vista: "https://i.ibb.co/zf5qwsq/condominio-cenital.png",
    description:
      "Fotografía aérea captada de manera cenital sobre casas de campo",
    clase: "cenital",
    idClase: 2,
  },
  {
    id: "02",
    name: "Playa Cristal",
    costo: 1.5,
    stock: 5,
    vista: "https://i.ibb.co/09LpJ4L/DJI-0936-1.jpg",
    description:
      "Fotografía aérea captada sobre el mar enfoncando a playa Cristal - Santa Marta - Colombia",
    clase: "frontal",
    idClase: 1,
  },
  {
    id: "03",
    name: "Playa Cristal",
    costo: 1.3,
    stock: 5,
    vista: "https://i.ibb.co/tZPX8KP/DJI-0958.jpg",
    description:
      "Fotografía aérea que enfoca un acantilado en playa Cristal - Santa Marta - Colombia",
    clase: "frontal",
    idClase: 1,
  },
  {
    id: "04",
    name: "Playa del Muerto",
    costo: 2,
    stock: 2,
    vista: "https://i.ibb.co/MhF70gr/DJI-0985.jpg",
    description:
      "Fotografía aérea que enfoca el arrecife de coral presente en playa del Muerto del PNN Tayrona - Santa Marta - Colombia",
    clase: "frontal",
    idClase: 1,
  },
  {
    id: "05",
    name: "Laguna Negra",
    costo: 2,
    stock: 5,
    vista: "https://i.ibb.co/FXSFzbm/DJI-0327.jpg",
    description:
      "Fotografía aérea que enfoca la Laguna Negra del PNN de los Nevados - Dep. Caldas - Colombia",
    clase: "frontal",
    idClase: 1,
  },
  {
    id: "06",
    name: "Nevado del Ruiz",
    costo: 2,
    stock: 5,
    vista: "https://i.ibb.co/HxxVYZk/DJI-0343.jpg",
    description:
      "Fotografía aérea que enfoca rocas y suelo formado por erupciones volcanicas en el nevado de Santa Isabel - Colombia",
    clase: "frontal",
    idClase: 1,
  },
  {
    id: "07",
    name: "Isla Pelicano",
    costo: 1.5,
    stock: 10,
    vista: "https://i.ibb.co/NVyTZ6C/DJI-0036.jpg",
    description:
      "Fotografía aérea que enfoca la isla Pelicano en un atardecer desde la playa del Rodadero - Santa Marta - Colombia",
    clase: "frontal",
    idClase: 1,
  },
  {
    id: "08",
    name: "Playa Blanca",
    costo: 1.5,
    stock: 10,
    vista: "https://i.ibb.co/fxF0YJY/DJI-0048.jpg",
    description:
      "Fotografía aérea que enfoca a la distancia la ruta vía maritima que deben atravezar las embarcaciones que van desde la playa del Rodadero hasta Playa Blanca - Santa Marta - Colombia",
    clase: "frontal",
    idClase: 1,
  },
  {
    id: "09",
    name: "Hotel Cascada",
    costo: 1.2,
    stock: 10,
    vista: "https://i.ibb.co/02tCnkC/DJI-0057.jpg",
    description:
      "Fotografía aérea que enfoca a la isla Pelicano y el Hotel Cascada - Santa Marta - Colombia",
    clase: "frontal",
    idClase: 1,
  },
  {
    id: "10",
    name: "Calles Cenital",
    costo: 0.5,
    stock: 20,
    vista: "https://i.ibb.co/2q1Bnz6/default.jpg",
    description:
      "Fotografía aérea captada de manera cenital sobre las calles de la ciudad de Pereira - Colombia",
    clase: "cenital",
    idClase: 2,
  },
  {
    id: "11",
    name: "El Rodadero",
    costo: 2,
    stock: 10,
    vista: "https://i.ibb.co/9WptNw6/DJI-0047.jpg",
    description:
      "Fotografía aérea que enfoca la playa del Rodadero - Santa Marta - Colombia",
    clase: "frontal",
    idClase: 1,
  },
  {
    id: "12",
    name: "Santa Rosa de Cabal",
    costo: 1.2,
    stock: 5,
    vista: "https://i.ibb.co/H4T0QkW/default.jpg",
    description:
      "Fotografía aérea que enfoca la plaza de un tradicional pueblo ubicado en las montañas - Santa Rosa de cabal - Risaralda - Colombia",
    clase: "frontal",
    idClase: 1,
  },
  {
    id: "13",
    name: "Calles Nocturnas Cenital",
    costo: 2,
    stock: 2,
    vista: "https://i.ibb.co/7GBq80Y/DJI-0715.jpg",
    description:
      "Fotografía aérea nocturna captada de manera cenital sobre un barrio de la ciudad de Pereira a 450 metros de altura - Risaralda - Colombia",
    clase: "cenital",
    idClase: 2,
  },
  {
    id: "14",
    name: "Pereira Nocturna",
    costo: 2.5,
    stock: 1,
    vista: "https://i.ibb.co/wRSB2Xn/DJI-0719.jpg",
    description:
      "Fotografía aérea que enfoca a Dosquebradas y Pereira - Risaralda - Colombia",
    clase: "frontal",
    idClase: 1,
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
