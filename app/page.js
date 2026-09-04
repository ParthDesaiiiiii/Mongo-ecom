"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Our Products
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Browse our full collection
          </p>
        </header>

        {loading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="aspect-square bg-zinc-200 dark:bg-zinc-800" />
                <div className="space-y-3 p-4">
                  <div className="h-4 w-3/4 rounded bg-zinc-200 dark:bg-zinc-800" />
                  <div className="h-3 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
                  <div className="h-3 w-1/2 rounded bg-zinc-200 dark:bg-zinc-800" />
                </div>
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="rounded-xl border border-dashed border-zinc-300 bg-white px-6 py-16 text-center dark:border-zinc-700 dark:bg-zinc-900">
            <p className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
              No products found
            </p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Check back later or seed the database.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <article
                key={product._id}
                className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="relative aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  {product.category && (
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-medium capitalize text-zinc-700 backdrop-blur-sm dark:bg-zinc-900/90 dark:text-zinc-300">
                      {product.category}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h2 className="line-clamp-1 text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    {product.title}
                  </h2>
                  <p className="mt-1 line-clamp-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {product.description}
                  </p>
                  <p className="mt-3 text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    ${product.price?.toFixed(2)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
