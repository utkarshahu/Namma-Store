import { useEffect, useState } from "react";

const Product = () => {
  const [data, setData] = useState([]); // Store fetched products
  const [search, setSearch] = useState(""); // Search term
  const [category, setCategory] = useState(""); // Selected category
  const [rating, setRating] = useState(""); // Selected rating
  const [sortOrder, setSortOrder] = useState(""); // Sorting order (asc/desc)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
      item.title.toLowerCase().includes(search.toLowerCase()) // Search by title
    )
    .filter((item) => (category ? item.category === category : true)) // Filter by category
    .filter((item) => (rating ? item.rating.rate >= parseFloat(rating) : true)) // Filter by rating
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="text-center p-6 bg-gray-200 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Fetched Products</h2>

      {/* ✅ Filter Options */}
      <div className="h-20 flex items-center px-8 justify-between rounded-full text-black mb-6">
        {/* 🔍 Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          className="px-8 text-xl border h-16  bg-gray-500  rounded-full text-black w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* 🏷️ Category Dropdown */}
        <select
          className="p-4 border text-center rounded-full  w-40"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {[...new Set(data.map((item) => item.category))].map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* ⭐ Rating Filter */}
        <select
          className="p-4 text-center border rounded-full w-40"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">All Ratings</option>
          <option value="4">4+ Stars</option>
          <option value="3">3+ Stars</option>
          <option value="2">2+ Stars</option>
        </select>

        {/* 💲 Price Sorting */}
        <select
          className="p-4 text-center border rounded-full w-40"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      {/* ✅ Product Grid */}
      <div className="grid bg-gray-500 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2"
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
                  Rating: {item.rating.rate} ⭐ ({item.rating.count} reviews)
                </p>
              </div>
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
