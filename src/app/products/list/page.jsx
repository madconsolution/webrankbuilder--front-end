"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:5001/api/products?page=${page}`
        );
        setProducts(res.data.products);
        setTotalPages(res.data.totalPages);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-12">
        Our Products
      </h1>

      {loading ? (
        <div className="text-center text-white">Loading...</div>
      ) : (
        <>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-red-600 transition"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={`http://localhost:5001/${product.images?.[0]}`}
                    alt={product.name}
                    className="object-contain w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                  {product.isFeatured && (
                    <span className="absolute top-3 left-3 bg-red-600 text-xs px-2 py-1 rounded-full font-semibold">
                      Featured
                    </span>
                  )}
                </div>
                <div className="p-4 flex flex-col justify-between h-60">
                  <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
                  <div
                    className="text-sm text-gray-300 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-red-500">
                      ${product.price}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        product.stock > 0
                          ? "bg-green-800 text-green-300"
                          : "bg-red-800 text-red-300"
                      }`}
                    >
                      {product.stock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>
                  <Link
                    href={`/products/list/${product.slug || product._id}`}
                    className="mt-4 inline-block text-center bg-red-600 hover:bg-red-700 transition text-white py-2 rounded-md font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-10 flex justify-center space-x-3">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-neutral-800 text-gray-300 hover:bg-red-700 disabled:opacity-50 rounded"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setPage(i + 1)}
                className={`px-4 py-2 rounded ${
                  page === i + 1
                    ? "bg-red-600 text-white"
                    : "bg-neutral-800 text-gray-300 hover:bg-red-700"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              className="px-4 py-2 bg-neutral-800 text-gray-300 hover:bg-red-700 disabled:opacity-50 rounded"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
