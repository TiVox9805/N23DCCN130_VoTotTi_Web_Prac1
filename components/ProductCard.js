import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="border p-4 rounded-lg hover:shadow-md cursor-pointer">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-contain mb-2"
        />

        <h2 className="text-sm font-semibold">
          {product.title}
        </h2>

        <p className="text-blue-500 font-bold">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}