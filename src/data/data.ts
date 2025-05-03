import { ProductResponse, Category, Unit } from "../interfaces/response";

export const categories: Category[] = [
  { id: 1, name: "Lácteos" },
  { id: 2, name: "Bebidas" },
  { id: 3, name: "Granos y Cereales" },
  { id: 4, name: "Abarrotes" },
  { id: 5, name: "Snacks y Golosinas" },
  { id: 6, name: "Panadería" },
  { id: 7, name: "Limpieza" },
  { id: 8, name: "Cuidado Personal" },
  { id: 9, name: "Accesorios personales" },
  { id: 10, name: "Embutidos" },
  { id: 11, name: "Verduras y Frutas" },
  { id: 12, name: "Condimentos y Salsas" },
  { id: 13, name: "Librería" },
  { id: 14, name: "Mascotas" },
];

export const units: Unit[] = [
  { id: 1, name: "Kilogramo", symbol: "kg" },
  { id: 2, name: "Unidad", symbol: "u" },
  { id: 3, name: "Litro", symbol: "L" },
  { id: 4, name: "Paquete", symbol: "paq" },
  { id: 5, name: "Gramos", symbol: "g" },
  { id: 6, name: "Mililitros", symbol: "ml" }
];

const findCategoryById = (id: number): Category => {
  return categories.find((category) => category.id === id) as Category;
};

const findUnitById = (id: number): Unit => {
  return units.find((unit) => unit.id === id) as Unit;
};

export const products: ProductResponse[] = [
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
    name: 'Gloria zero lactosa',
    price: 4.30,
    amount: 390,
    category: findCategoryById(1),
    unit: findUnitById(5),
  },
  {
    id: 5,
    name: 'Bonlé defensis rosada',
    price: 2.50,
    amount: 390,
    category: findCategoryById(1),
    unit: findUnitById(5),
  },
  {
    id: 6,
    name: 'Laive sin lactosa caja',
    price: 5.80,
    amount: 946,
    category: findCategoryById(1),
    unit: findUnitById(6),
  },
  {
    id: 7,
    name: 'Leche gloria amarilla lata',
    price: 4.20,
    amount: 390,
    category: findCategoryById(1),
    unit: findUnitById(5),
  },
  {
    id: 8,
    name: 'Leche gloria roja lata',
    price: 4.20,
    amount: 390,
    category: findCategoryById(1),
    unit: findUnitById(5),
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
