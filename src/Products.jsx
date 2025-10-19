import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/products/allproducts");
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
      <section className="py-32 text-center text-white bg-gradient-to-b from-[#1b0079] to-black">
        Loading...
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#1b0079] via-black to-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          Our <span className="text-[#E80BFF]">Digital Products</span> 💻
        </motion.h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.slice(0, 9).map((product, i) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative bg-[#0c0c0f] border border-[#1b0079]/50 rounded-2xl p-6 shadow-xl hover:shadow-[0_0_20px_#E80BFF55] hover:-translate-y-2 transition-transform duration-300"
            >
              <img
                src={product.thumbnailUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl mb-5 border border-[#E80BFF30]"
              />

              <h3 className="text-xl font-bold mb-2 text-white">
                {product.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {product.description.slice(0, 60)}...
              </p>

              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-[#E80BFF]">
                  ${product.price}
                </span>
                <Link
                  to={`/products/${product._id}`}
                  className="px-4 py-2 bg-[#E80BFF] text-black font-semibold rounded-full hover:bg-[#ff4fff] transition"
                >
                  See Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link
            to="/products"
            className="px-8 py-3 bg-white text-[#1b0079] font-bold rounded-full shadow-lg hover:bg-[#E80BFF] hover:text-white transition-all"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
