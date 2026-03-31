const Cart = require('./cartModel');
const Product = require('../product/productModel'); // you need this

const addToCart = async (userId, productId, quantity) => {

  let cart = await Cart.findOne({ user: userId });

  if (!cart) {
    cart = new Cart({
      user: userId,
      items: []
    });
  }

  const existingItem = cart.items.find(
    item => item.product.toString() === productId.toString()
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {

    const product = await Product.findById(productId);

    cart.items.push({
      product: productId,
      quantity,
      price: product.price
    });
  }

  await cart.save();

  return cart;
};