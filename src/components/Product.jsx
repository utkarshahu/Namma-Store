import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // 🛒 Import Cart Context

const Product = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart(); // ✅ Access Cart Context

  // 📦 Fetch Data from API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  // 🔍 Filter & Sort Products
  const filteredProducts = data
    .filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) => (category ? item.category === category : true))
    .filter((item) => (rating ? item.rating?.rate >= parseFloat(rating) : true))
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="text-center p-6 bg-gray-200 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Fetched Products</h2>

      {/* 🔍 Search Bar & Filters */}
      <div className="flex flex-col text-black sm:flex-row justify-around gap-4 mb-6">
        <input
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-4 border rounded-full w-4/6 h-14 "
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-4 border rounded-full "
        >
          <option value="">All Categories</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelry</option>
          <option value="electronics">Electronics</option>
        </select>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="p-4 border rounded-full "
        >
          <option value="">All Ratings</option>
          <option value="4">4★ & Above</option>
          <option value="3">3★ & Above</option>
          <option value="2">2★ & Above</option>
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-4 border rounded-full "
        >
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      {/* 📦 Product Grid */}
      <div className="grid bg-gray-500 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div
              key={item.id}
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
              {/* 🛒 Add to Cart Button */}
              <button
                onClick={() => addToCart(item)}
                className="absolute bottom-0 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Link to="/cart">Add To Cart</Link>
              </button>
            </div>
          ))
        ) : (
          <p className="text-lg text-red-500 col-span-full">No products found!</p>
        )}
      </div>
    </div>
  );
};

export default Product;
