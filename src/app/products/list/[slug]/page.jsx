// /products/list/[slug]/page.jsx

import axios from "axios";

// Fetch product by slug
export async function getData(slug) {
  try {
    const res = await axios.get(
      `http://localhost:5001/api/products/slug/${slug}`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function ProductDetailPage({ params }) {
  const product = await getData(params.slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-red-500 text-xl">
        ❌ Product not found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white px-4 py-20 sm:px-8 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left - Image Gallery */}
        <div className="space-y-6">
          {/* Main Image */}
          <div className="w-full h-[450px] rounded-xl overflow-hidden bg-neutral-900 shadow-xl flex items-center justify-center">
            <img
              src={`http://localhost:5001/${product.images[0]}`}
              alt={product.name}
              className="object-contain h-full w-full transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-3">
            {product.images.map((img, idx) => (
              <div
                key={idx}
                className="h-24 bg-neutral-900 border border-neutral-700 rounded-md overflow-hidden hover:shadow-md"
              >
                <img
                  src={`http://localhost:5001/${img}`}
                  alt={`thumb-${idx}`}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right - Product Details */}
        <div className="space-y-6">
          {/* Title + Price */}
          <div>
            <h1
              className="text-4xl md:text-5xl font-semibold text-white mb-3"
              style={{ lineHeight: "5rem" }}
            >
              {product.name}
            </h1>
            <p className="text-2xl text-red-500 font-bold">${product.price}</p>
          </div>

          {/* Stock Status */}
          <div>
            <span
              className={`inline-block text-sm font-medium px-3 py-1 rounded-full tracking-wide ${
                product.stock > 0
                  ? "bg-green-800 text-green-200"
                  : "bg-red-800 text-red-200"
              }`}
            >
              {product.stock > 0 ? "✔ In Stock" : "❌ Out of Stock"}
            </span>
          </div>

          {/* Description */}
          <div className="text-gray-300 text-base leading-relaxed prose prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
          </div>

          {/* Meta Info */}
          <div className="pt-6 mt-6 border-t border-neutral-800 text-sm text-gray-500 space-y-2">
            <p>
              Published:{" "}
              <span className="text-gray-400">
                {new Date(product.createdAt).toLocaleDateString()}
              </span>
            </p>
            <p>
              Product ID: <span className="text-gray-500">{product._id}</span>
            </p>
            <p>
              Slug: <span className="text-gray-500">{product.slug}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
