const initialState = [
  { id: 1, name: "Lounge Chair", price: 2000, category: "Chairs" },
  { id: 2, name: "Dining Chair", price: 1800, category: "Chairs" },
  { id: 3, name: "Dining Chair", price: 1800, category: "Chairs" },
  { id: 4, name: "Table1", price: 3000, category: "Tables" },
  { id: 5, name: "Table2", price: 3200, category: "Tables" },
  { id: 6, name: "Table3", price: 3100, category: "Tables" },
  { id: 7, name: "Dining Top 1", price: 900, category: "Tops" },
  { id: 8, name: "Dining Top 2", price: 900, category: "Tops" },
  { id: 9, name: "Dining Top 3", price: 900, category: "Tops" }
];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
