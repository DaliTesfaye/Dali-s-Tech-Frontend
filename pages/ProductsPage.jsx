import { useEffect, useState } from "react";
import cover from "../src/assets/cover.png";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "http://localhost:3000/api/products/allproducts"
        );
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center text-gray-500">Loading...</section>
    );
  }
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-800 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white">
          Digital Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 hover:shadow-xl transition"
            >
              <img
                src={product.thumbnailUrl || cover}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600 mt-2">{product.description.slice(0 , 45)} ...</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-semibold text-indigo-700">
                  ${product.price}
                </span>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
