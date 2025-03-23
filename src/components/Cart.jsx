import { useCart } from "../context/CartContext"; // 🛒 Import Cart Context

const Cart = () => {
  const { cart, removeFromCart } = useCart(); // ✅ Access Cart Items & Remove Function

  return (
    <div className="p-6 text-center bg-gray-200 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">🛒 Your Cart</h2>

      {cart.length > 0 ? (
        <div className="grid bg-gray-500 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2 relative group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-contain p-4"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-bold uppercase text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-sm capitalize text-gray-600 mb-2">
                  {item.category}
                </p>
                <p className="text-lg font-bold text-gray-800 mb-2">
                  Price: ${item.price}
                </p>
                <p className="text-sm text-gray-700">
                  Rating: {item.rating?.rate} ⭐ ({item.rating?.count} reviews)
                </p>
              </div>
              {/* 🗑 Remove from Cart Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="absolute bottom-0 left-0 w-full bg-red-600 text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Remove from Cart ❌
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-black">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
