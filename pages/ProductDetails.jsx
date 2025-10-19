import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <section className="py-20 text-center text-gray-500">Loading...</section>
    );
  }

  if (!product) {
    return (
      <section className="py-20 text-center text-red-500">
        Product not found.
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-800 to-black min-h-screen">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Product Image */}
        <div className="w-full md:w-1/2 px-4 mb-8">
          <img
            className="w-full h-auto rounded-lg shadow-md mb-4"
            src={product.thumbnailUrl}
            alt=""
          />
        </div>

        {/* Right - Product Info */}
        <div className="text-white space-y-6">
          <span className="text-1xl font-thin">ID : {product._id}</span>
          <h1 className="text-4xl font-extrabold">{product.name}</h1>
          <p className="text-gray-300 leading-relaxed">
            Description: <br /> {product.description}
          </p>
          <p className="text-2xl font-semibold text-indigo-400">
            ${product.price}
          </p>
          <div class="mb-6">
            <label
              for="quantity"
              className="block text-sm font-medium text-gray-700 mb-4"
            >
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              className="w-4 h-4 text-center rounded-md border-gray-300 text-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition">
              Add To Cart
            </button>
            <Link
              to="/products"
              className="px-6 py-3 bg-indigo-400 text-white rounded-full hover:bg-indigo-300 transition "
            >
              Back to Products
            </Link>
          </div>
          {/*Featured Section*/}
          

            
        </div>
      </div>
    </section>
  );
}
