const products = [
  { name: 'Laptop', price: 1200, rating: 4.5 },
  { name: 'Phone', price: 800, rating: 4.7 },
  { name: 'Tablet', price: 600, rating: 4.5 },
  { name: 'Monitor', price: 300, rating: 4.2 },
  { name: 'Keyboard', price: 50, rating: 4.7 },
];

products.sort((a, b) => {
  if (a.rating !== b.rating) {
    return b.rating - a.rating;
  } else {
    return a.price - b.price;
  }
});

console.log(products);
