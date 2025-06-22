import { PopularProducts } from './PopularProducts'

export function ProductsGrid() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">All Products</h2>
        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Name: A to Z</option>
        </select>
      </div>
      
      <PopularProducts />
    </div>
  )
}
