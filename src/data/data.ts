import { ProductResponse, Category, Unit } from "../interfaces/response";

export const categories: Category[] = [
  { id: 1, name: "Lácteos" },
  { id: 2, name: "Gaseosas" },
  { id: 3, name: "Aguas" },
  { id: 4, name: "Energizantes" },
  { id: 5, name: "Cervezas" },
  //{ id: 5, name: "Snacks y Golosinas" },
  { id: 6, name: "Panadería" },
  { id: 7, name: "Limpieza" },
  { id: 8, name: "Cuidado Personal" },
  { id: 9, name: "Accesorios personales" },
  { id: 10, name: "Embutidos" },
  { id: 11, name: "Verduras y Frutas" },
  { id: 12, name: "Condimentos y Salsas" },
  { id: 13, name: "Librería" },
  { id: 14, name: "Mascotas" },
  { id: 15, name: "jugos" },
];

export const units: Unit[] = [
  { id: 1, name: "Kilogramo", symbol: "kg" },
  { id: 2, name: "Unidad", symbol: "u" },
  { id: 3, name: "Litro", symbol: "L" },
  { id: 4, name: "Paquete", symbol: "paq" },
  { id: 5, name: "Gramos", symbol: "g" },
  { id: 6, name: "Mililitros", symbol: "ml" },
];

const findCategoryById = (id: number): Category => {
  return categories.find((category) => category.id === id) as Category;
};

const findUnitById = (id: number): Unit => {
  return units.find((unit) => unit.id === id) as Unit;
};

const products: ProductResponse[] = [
  // lacteos
  {
    id: 1,
    name: "Leche Gloria azúl caja",
    price: 5.8,
    amount: 1,
    category: findCategoryById(1),
    unit: findUnitById(3),
  },
  {
    id: 2,
    name: "Leche Gloria roja caja",
    price: 6.0,
    amount: 1,
    category: findCategoryById(1),
    unit: findUnitById(3),
  },
  {
    id: 3,
    name: "Bonlé azul",
    price: 3.8,
    amount: 480,
    category: findCategoryById(1),
    unit: findUnitById(5),
  },
  {
    id: 4,
    name: "Gloria zero lactosa lata",
    price: 4.3,
    amount: 390,
    category: findCategoryById(1),
    unit: findUnitById(5),
  },
  {
    id: 5,
    name: "Bonlé defensis rosada",
    price: 2.5,
    amount: 390,
    category: findCategoryById(1),
    unit: findUnitById(5),
  },
  {
    id: 6,
    name: "Laive sin lactosa caja",
    price: 5.8,
    amount: 946,
    category: findCategoryById(1),
    unit: findUnitById(6),
  },
  {
    id: 7,
    name: "Leche gloria amarilla lata",
    price: 4.2,
    amount: 390,
    category: findCategoryById(1),
    unit: findUnitById(5),
  },
  {
    id: 8,
    name: "Leche gloria roja lata",
    price: 4.2,
    amount: 390,
    category: findCategoryById(1),
    unit: findUnitById(5),
  },
  {
    id: 9,
    name: "Leche ideal cremosita",
    price: 3.8,
    amount: 390,
    category: findCategoryById(1),
    unit: findUnitById(5),
  },
  {
    id: 10,
    name: "Leche pura vida",
    price: 3.2,
    amount: 390,
    category: findCategoryById(1),
    unit: findUnitById(5),
  },
  {
    id: 11,
    name: "Leche Gloria azúl lata",
    price: 4.0,
    amount: 390,
    category: findCategoryById(1),
    unit: findUnitById(5),
  },
  {
    id: 12,
    name: "Yogurt gloria",
    price: 6.5,
    amount: 1,
    category: findCategoryById(1),
    unit: findUnitById(3),
  },
  {
    id: 13,
    name: "Yogurt gloria",
    price: 2.0,
    amount: 180,
    category: findCategoryById(1),
    unit: findUnitById(5),
  },
  {
    id: 14,
    name: "Batti mix",
    price: 3.5,
    amount: 146,
    category: findCategoryById(1),
    unit: findUnitById(5),
  },
  {
    id: 15,
    name: "yopi",
    price: 3.0,
    amount: 100,
    category: findCategoryById(1),
    unit: findUnitById(5),
  },
  {
    id: 16,
    name: "Mantequilla sello de oro",
    price: 1.5,
    amount: 45,
    category: findCategoryById(1),
    unit: findUnitById(5),
  },
  {
    id: 17,
    name: "Mantequilla sello de oro",
    price: 2.5,
    amount: 90,
    category: findCategoryById(1),
    unit: findUnitById(5),
  },
  {
    id: 18,
    name: "Mantequilla sello de oro",
    price: 4.0,
    amount: 200,
    category: findCategoryById(1),
    unit: findUnitById(5),
  },
  {
    id: 19,
    name: "Mantequilla Gloria",
    price: 6.0,
    amount: 90,
    category: findCategoryById(1),
    unit: findUnitById(5),
  },
  {
    id: 20,
    name: "Mantequilla Manty",
    price: 5.5,
    amount: 300,
    category: findCategoryById(1),
    unit: findUnitById(5),
  },

  // jugos
  {
    id: 21,
    name: "Frugos del Valle botella",
    price: 5.0,
    amount: 1,
    category: findCategoryById(15),
    unit: findUnitById(3),
  },
  {
    id: 22,
    name: "Frugos del valle botella",
    price: 2.5,
    amount: 300,
    category: findCategoryById(15),
    unit: findUnitById(6),
  },
  {
    id: 23,
    name: "Pulp caja",
    price: 4.5,
    amount: 1,
    category: findCategoryById(15),
    unit: findUnitById(3),
  },
  {
    id: 24,
    name: "Pulp caja",
    price: 1.5,
    amount: 315,
    category: findCategoryById(15),
    unit: findUnitById(6),
  },
  {
    id: 25,
    name: "Frugos del Valle caja",
    price: 6.0,
    amount: 1.45,
    category: findCategoryById(15),
    unit: findUnitById(3),
  },

  // Gaseosas
  // coca cola
  {
    id: 26,
    name: "Coca Cola",
    price: 1.5,
    amount: 237,
    category: findCategoryById(2),
    unit: findUnitById(6),
  },
  {
    id: 27,
    name: "Coca Cola",
    price: 3.2,
    amount: 600,
    category: findCategoryById(2),
    unit: findUnitById(6),
  },
  {
    id: 28,
    name: "Coca Cola vidrio",
    price: 4.0,
    amount: 1,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  {
    id: 29,
    name: "Coca Cola vidrio",
    price: 5.5,
    amount: 1.5,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  {
    id: 30,
    name: "Coca Cola plástico",
    price: 7.2,
    amount: 1.5,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  {
    id: 40,
    name: "Coca Cola retornable",
    price: 7.0,
    amount: 2.5,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  {
    id: 41,
    name: "Coca Cola no retornable",
    price: 9.5,
    amount: 2.25,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  {
    id: 42,
    name: "Coca Cola",
    price: 12.0,
    amount: 3,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  // inca kola
  {
    id: 43,
    name: "Inca Kola",
    price: 1.5,
    amount: 237,
    category: findCategoryById(2),
    unit: findUnitById(6),
  },
  {
    id: 44,
    name: "Inca Kola",
    price: 3.2,
    amount: 600,
    category: findCategoryById(2),
    unit: findUnitById(6),
  },
  {
    id: 45,
    name: "Inca Kola vidrio",
    price: 3.0,
    amount: 600,
    category: findCategoryById(2),
    unit: findUnitById(6),
  },
  {
    id: 46,
    name: "Inca Kola vidrio",
    price: 4.0,
    amount: 1,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  {
    id: 47,
    name: "Inca Kola vidrio",
    price: 5.5,
    amount: 1.5,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  {
    id: 48,
    name: "Inca Kola plástico",
    price: 7.2,
    amount: 1.5,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  {
    id: 49,
    name: "Inca Kola retornable",
    price: 7.0,
    amount: 2.5,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  {
    id: 50,
    name: "Inca Kola no retornable",
    price: 9.5,
    amount: 2.25,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  {
    id: 51,
    name: "Inca Kola",
    price: 12.0,
    amount: 3,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  // pepsi:
  {
    id: 52,
    name: "Pepsi",
    price: 2.0,
    amount: 450,
    category: findCategoryById(2),
    unit: findUnitById(6),
  },
  {
    id: 53,
    name: "Pepsi",
    price: 3.0,
    amount: 750,
    category: findCategoryById(2),
    unit: findUnitById(6),
  },
  {
    id: 54,
    name: "Pepsi",
    price: 4.2,
    amount: 1,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  {
    id: 55,
    name: "Pepsi",
    price: 5.2,
    amount: 2,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  {
    id: 56,
    name: "Pepsi",
    price: 9.5,
    amount: 3,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  // guaraná
  {
    id: 57,
    name: "Guaraná",
    price: 2.0,
    amount: 450,
    category: findCategoryById(2),
    unit: findUnitById(6),
  },
  {
    id: 58,
    name: "Guaraná",
    price: 3.5,
    amount: 1,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  {
    id: 59,
    name: "Guaraná",
    price: 5.5,
    amount: 2,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  {
    id: 60,
    name: "Guaraná",
    price: 8.5,
    amount: 3,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  // Kr
  {
    id: 61,
    name: "Kola Real KR",
    price: 1.2,
    amount: 350,
    category: findCategoryById(2),
    unit: findUnitById(6),
  },
  {
    id: 62,
    name: "Kola Real KR",
    price: 3.0,
    amount: 1.035,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  // oro
  {
    id: 63,
    name: "Oro",
    price: 1.2,
    amount: 350,
    category: findCategoryById(2),
    unit: findUnitById(6),
  },
  {
    id: 64,
    name: "Oro",
    price: 3.0,
    amount: 1.035,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  // big cola
  {
    id: 65,
    name: "Big Cola",
    price: 1.2,
    amount: 350,
    category: findCategoryById(2),
    unit: findUnitById(6),
  },
  {
    id: 66,
    name: "Big Cola",
    price: 3.0,
    amount: 1.035,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  // concordia
  {
    id: 67,
    name: "Concordia",
    price: 2.0,
    amount: 500,
    category: findCategoryById(2),
    unit: findUnitById(6),
  },
  {
    id: 68,
    name: "Concordia",
    price: 4.2,
    amount: 1.5,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  {
    id: 69,
    name: "Concordia",
    price: 7.5,
    amount: 3,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  // sprite:
  {
    id: 70,
    name: "Sprite",
    price: 2.5,
    amount: 500,
    category: findCategoryById(2),
    unit: findUnitById(6),
  },
  {
    id: 71,
    name: "Sprite",
    price: 8.5,
    amount: 3,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  // fanta
  {
    id: 72,
    name: "Fanta",
    price: 2.5,
    amount: 500,
    category: findCategoryById(2),
    unit: findUnitById(6),
  },
  {
    id: 73,
    name: "Fanta",
    price: 8.5,
    amount: 3,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  // frugos del valle fresh
  {
    id: 74,
    name: "Frugos del valle fresh",
    price: 2.0,
    amount: 500,
    category: findCategoryById(2),
    unit: findUnitById(6),
  },
  {
    id: 75,
    name: "Frugos del valle fresh",
    price: 4.0,
    amount: 1.5,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  // cifrut
  {
    id: 76,
    name: "Cifrut",
    price: 1.8,
    amount: 500,
    category: findCategoryById(2),
    unit: findUnitById(6),
  },
  {
    id: 77,
    name: "Cifrut",
    price: 4.0,
    amount: 1.5,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  {
    id: 78,
    name: "San Luis sabores",
    price: 2.0,
    amount: 625,
    category: findCategoryById(2),
    unit: findUnitById(6),
  },
  {
    id: 79,
    name: "San Luis sabores",
    price: 4.5,
    amount: 1.5,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  // seven up
  {
    id: 80,
    name: "Seven up (7up)",
    price: 4.2,
    amount: 1.5,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },
  // everest
  {
    id: 81,
    name: "Everest",
    price: 6.5,
    amount: 1.5,
    category: findCategoryById(2),
    unit: findUnitById(3),
  },

  // aguas
  {
    id: 82,
    name: "San Carlos",
    price: 1.0,
    amount: 500,
    category: findCategoryById(3),
    unit: findUnitById(6),
  },
  {
    id: 83,
    name: "Cielo",
    price: 1.2,
    amount: 625,
    category: findCategoryById(3),
    unit: findUnitById(6),
  },
  {
    id: 84,
    name: "Cielo",
    price: 2.3,
    amount: 1,
    category: findCategoryById(3),
    unit: findUnitById(3),
  },
  {
    id: 85,
    name: "Cielo",
    price: 3.2,
    amount: 2.5,
    category: findCategoryById(3),
    unit: findUnitById(3),
  },
  {
    id: 86,
    name: "Cielo",
    price: 8.0,
    amount: 7,
    category: findCategoryById(3),
    unit: findUnitById(3),
  },
  {
    id: 87,
    name: "San Mateo sin gas",
    price: 1.8,
    amount: 600,
    category: findCategoryById(3),
    unit: findUnitById(6),
  },
  {
    id: 88,
    name: "San Mateo con gas",
    price: 2.0,
    amount: 600,
    category: findCategoryById(3),
    unit: findUnitById(6),
  },
  {
    id: 89,
    name: "San Luis",
    price: 1.2,
    amount: 500,
    category: findCategoryById(3),
    unit: findUnitById(6),
  },
  {
    id: 90,
    name: "San Luis",
    price: 1.8,
    amount: 750,
    category: findCategoryById(3),
    unit: findUnitById(6),
  },
  {
    id: 91,
    name: "Gloria",
    price: 3.2,
    amount: 3,
    category: findCategoryById(3),
    unit: findUnitById(3),
  },
  // energizantes
  {
    id: 92,
    name: "Sporade",
    price: 2.5,
    amount: 500,
    category: findCategoryById(4),
    unit: findUnitById(6),
  },
  {
    id: 93,
    name: "Sporade",
    price: 5.5,
    amount: 1.5,
    category: findCategoryById(4),
    unit: findUnitById(3),
  },
  {
    id: 94,
    name: "Gatorade",
    price: 2.5,
    amount: 500,
    category: findCategoryById(4),
    unit: findUnitById(6),
  },
  {
    id: 95,
    name: 'Volt',
    price: 2.5,
    amount: 300,
    category: findCategoryById(4),
    unit: findUnitById(6),
  },
  // cervezas
  {
    id: 96,
    name: 'Pilsen lata grande',
    price: 5.50,
    amount: 473,
    category: findCategoryById(5),
    unit: findUnitById(6),
  },
  {
    id: 97,
    name: 'Pilsen botella',
    price: 6.50,
    amount: 630,
    category: findCategoryById(5),
    unit: findUnitById(6),
  },
  {
    id: 98,
    name: 'Pilsen botella',
    price: 9.00,
    amount: 1,
    category: findCategoryById(5),
    unit: findUnitById(3),
  },
  {
    id: 99,
    name: 'Tres cruces lata grande',
    price: 4.00,
    amount: 473,
    category: findCategoryById(5),
    unit: findUnitById(6),
  },
  {
    id: 100,
    name: 'Pum Pum',
    price: 4.00,
    amount: 473,
    category: findCategoryById(5),
    unit: findUnitById(6),
  },
  {
    id: 101,
    name: 'Cusqueña trigo',
    price: 6.00,
    amount: 473,
    category: findCategoryById(5),
    unit: findUnitById(6),
  },
  {
    id: 102,
    name: 'Cusqueña trigo',
    price: 7.00,
    amount: 620,
    category: findCategoryById(5),
    unit: findUnitById(6),
  },
  {
    id: 103,
    name: 'Cusqueña negra',
    price: 4.50,
    amount: 310,
    category: findCategoryById(5),
    unit: findUnitById(6),
  },
  {
    id: 104,
    name: 'Cusqueña negra',
    price: 7.00,
    amount: 620,
    category: findCategoryById(5),
    unit: findUnitById(6),
  },
  {
    id: 105,
    name: 'Corona',
    price: 5.00,
    amount: 330,
    category: findCategoryById(5),
    unit: findUnitById(6),
  },


  // { id: 2, name: 'Queso Fresco', price: 8.0, amount: 5, category: categories[0], unit: units[0] },
  // { id: 3, name: 'Yogur Fresa', price: 3.5, amount: 15, category: categories[0], unit: units[2] },
  // { id: 4, name: 'Mantequilla Laive', price: 6.0, amount: 8, category: categories[0], unit: units[1] },
  // { id: 5, name: 'Coca Cola 1L', price: 6.0, amount: 20, category: categories[1], unit: units[2] },
  // { id: 6, name: 'Agua Cielo 2L', price: 3.0, amount: 30, category: categories[1], unit: units[2] },
  // { id: 7, name: 'Inca Kola', price: 5.5, amount: 25, category: categories[1], unit: units[2] },
  // { id: 8, name: 'Cerveza Pilsen', price: 6.5, amount: 18, category: categories[1], unit: units[2] },
  // { id: 9, name: 'Arroz Costeño', price: 3.2, amount: 50, category: categories[2], unit: units[0] },
  // { id: 10, name: 'Lentejas', price: 2.8, amount: 40, category: categories[2], unit: units[0] },
  // { id: 11, name: 'Frijoles', price: 3.0, amount: 35, category: categories[2], unit: units[0] },
  // { id: 12, name: 'Maíz mote', price: 2.5, amount: 45, category: categories[2], unit: units[0] },
  // { id: 13, name: 'Azúcar Rubia', price: 2.5, amount: 60, category: categories[2], unit: units[0] },
  // { id: 14, name: 'Aceite Primor', price: 7.5, amount: 25, category: categories[3], unit: units[2] },
  // { id: 15, name: 'Sal Lobos', price: 1.5, amount: 50, category: categories[3], unit: units[0] },
  // { id: 16, name: 'Fideos Don Vittorio', price: 4.0, amount: 35, category: categories[3], unit: units[3] },
  // { id: 17, name: 'Atún Florida', price: 6.0, amount: 18, category: categories[3], unit: units[1] },
  // { id: 18, name: 'Pan Molde Bimbo', price: 7.0, amount: 22, category: categories[3], unit: units[3] },
  // { id: 19, name: 'Café Altomayo', price: 9.5, amount: 12, category: categories[3], unit: units[1] },
  // { id: 20, name: 'Galletas Oreo', price: 3.5, amount: 40, category: categories[4], unit: units[1] },
  // { id: 21, name: 'Chizitos', price: 2.0, amount: 45, category: categories[4], unit: units[1] },
  // { id: 22, name: 'Papitas Lay’s', price: 4.0, amount: 25, category: categories[4], unit: units[1] },
  // { id: 23, name: 'Chocolate Sublime', price: 2.5, amount: 30, category: categories[4], unit: units[1] },
  // { id: 24, name: 'Galletas Casino', price: 3.2, amount: 28, category: categories[4], unit: units[1] },
  // { id: 25, name: 'Mermelada Gloria', price: 5.5, amount: 16, category: categories[3], unit: units[1] },
  // { id: 26, name: 'Harina Blanca Flor', price: 3.8, amount: 20, category: categories[3], unit: units[0] },
  // { id: 27, name: 'Cereal Angel', price: 4.5, amount: 14, category: categories[4], unit: units[3] },
  // { id: 28, name: 'Néctar Frugos', price: 4.0, amount: 19, category: categories[1], unit: units[2] },
  // { id: 29, name: 'Queso Edam', price: 10.0, amount: 6, category: categories[0], unit: units[0] },
  // { id: 30, name: 'Milo Sachet', price: 1.0, amount: 50, category: categories[4], unit: units[1] },
];

export const productsData = () => {
  // return products order by category name
  return [...products].sort((a, b) =>
    a.category.name.localeCompare(b.category.name)
  );
};
