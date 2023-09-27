//Object property shorthand

const userName = 'Andrew';
const userAge = 27;
const userLocation = 'Philadelphia';

const user = {
	userName,
	userAge,
	userLocation,
};

console.log(user);

//Object destructuring

const product = {
	label: 'Red notebook',
	price: 3,
	stock: 201,
	salePrice: undefined,
	rating: 4.2,
};

// const label = product.label;
// const price = product.price;
// const stock = product.stock;
// const salePrice = product.salePrice;

// const { label: productLabel, stock, rating = 5 } = product;
// // console.log(label);
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock }) => {
	console.log(type, label, stock);
};

transaction('order', product);
