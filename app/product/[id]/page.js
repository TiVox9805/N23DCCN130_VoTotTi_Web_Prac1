async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

export default async function ProductDetail({ params }) {
  // ✅ Unwrap params (Next.js mới)
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-sm object-contain"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-2xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-600 mb-4">
            {product.description}
          </p>

          <p className="text-xl font-semibold mb-6">
            ${product.price}
          </p>

          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}