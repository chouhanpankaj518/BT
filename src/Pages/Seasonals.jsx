import React, { useState } from 'react';
import { Sun, Cloud, Leaf, Snowflake } from 'lucide-react';

const seasonalData = {
  seasons: [
    { id: 'summer', name: 'Summer', icon: Sun },
    { id: 'spring', name: 'Spring', icon: Cloud },
    { id: 'fall', name: 'Fall', icon: Leaf },
    { id: 'winter', name: 'Winter', icon: Snowflake },
  ],
  products: {
    summer: [
      { id: 1, name: 'Bright Graphic Tee', price: 24.99, image: 'https://3000:localhost/api/placeholder/800/600' },
      { id: 2, name: 'Light Wash Denim Shorts', price: 39.99, image: 'https://3000:localhost/api/placeholder/800/600' },
      { id: 3, name: 'Sleeveless Cotton Shirt', price: 19.99, image: 'https://3000:localhost/api/placeholder/800/600' },
      { id: 4, name: 'Ripped Jean Shorts', price: 44.99, image: 'https://3000:localhost/api/placeholder/800/600' },
    ],
    spring: [
      { id: 5, name: 'Pastel Color Tee', price: 22.99, image: 'https://e7.pngegg.com/pngimages/955/88/png-clipart-jacket-coat-winter-clothing-zipper-jacket-zipper-fashion-thumbnail.png' },
      { id: 6, name: 'Light Denim Jacket', price: 59.99, image: 'https://e7.pngegg.com/pngimages/955/88/png-clipart-jacket-coat-winter-clothing-zipper-jacket-zipper-fashion-thumbnail.png' },
      { id: 7, name: 'Floral Print Shirt', price: 29.99, image: 'https://e7.pngegg.com/pngimages/955/88/png-clipart-jacket-coat-winter-clothing-zipper-jacket-zipper-fashion-thumbnail.png' },
      { id: 8, name: 'Slim Fit Colored Jeans', price: 49.99, image: 'https://e7.pngegg.com/pngimages/955/88/png-clipart-jacket-coat-winter-clothing-zipper-jacket-zipper-fashion-thumbnail.png' },
    ],
    fall: [
      { id: 9, name: 'Long Sleeve Henley', price: 34.99,
         image: 'https://media.istockphoto.com/id/618979846/photo/autumn-or-winter-childrens-outfit-clothes.jpg?s=612x612&w=0&k=20&c=ZneMidxoqgy0Mpc4wSntFprNDISUGRcGv8ntZl5E8kE=' },
      { id: 10, name: 'Dark Wash Jeans', price: 54.99,
         image: 'https://media.istockphoto.com/id/618979846/photo/autumn-or-winter-childrens-outfit-clothes.jpg?s=612x612&w=0&k=20&c=ZneMidxoqgy0Mpc4wSntFprNDISUGRcGv8ntZl5E8kE=' },
      { id: 11, name: 'Plaid Flannel Shirt', price: 39.99,
         image: 'https://media.istockphoto.com/id/618979846/photo/autumn-or-winter-childrens-outfit-clothes.jpg?s=612x612&w=0&k=20&c=ZneMidxoqgy0Mpc4wSntFprNDISUGRcGv8ntZl5E8kE=' },
      { id: 12, name: 'Distressed Denim Jacket', price: 69.99,
         image: 'https://media.istockphoto.com/id/618979846/photo/autumn-or-winter-childrens-outfit-clothes.jpg?s=612x612&w=0&k=20&c=ZneMidxoqgy0Mpc4wSntFprNDISUGRcGv8ntZl5E8kE=' },
    ],
    winter: [
      { id: 13, name: 'Thermal Long Sleeve Tee', price: 29.99, image: 'https://e7.pngegg.com/pngimages/955/88/png-clipart-jacket-coat-winter-clothing-zipper-jacket-zipper-fashion-thumbnail.png' },
      { id: 14, name: 'Fleece-Lined Jeans', price: 64.99, image: 'https://e7.pngegg.com/pngimages/955/88/png-clipart-jacket-coat-winter-clothing-zipper-jacket-zipper-fashion-thumbnail.png' },
      { id: 15, name: 'Wool Blend Sweater', price: 49.99, image: 'https://e7.pngegg.com/pngimages/955/88/png-clipart-jacket-coat-winter-clothing-zipper-jacket-zipper-fashion-thumbnail.png' },
      { id: 16, name: 'Insulated Denim Jacket', price: 79.99, image: 'https://e7.pngegg.com/pngimages/955/88/png-clipart-jacket-coat-winter-clothing-zipper-jacket-zipper-fashion-thumbnail.png' },
    ],
  },
};

export default function Seasonals() {
  const [selectedSeason, setSelectedSeason] = useState('summer');

  return (
    <div className='w-full  mt-10 xl:ml-0'>
      <h1 className="text-3xl font-bold mb-8 text-center">Seasonal Collections</h1>

      {/* Season Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {seasonalData.seasons.map((season) => (
          <button
            key={season.id}
            onClick={() => setSelectedSeason(season.id)}
            className={`flex flex-col items-center mx-4 p-4 rounded-lg transition-colors ${
              selectedSeason === season.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <season.icon size={32} className="mb-2" />
            <span>{season.name}</span>
          </button>
        ))}
      </div>

      {/* Seasonal Products */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {seasonalData.products[selectedSeason].map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
           <div  className="h-32 sm:h-40 md:h-48 lg:h-52 xl:h-60 2xl:h-64">
           <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-2">
              <h3 className="text-lg font-semibold mb-1 line-clamp-1  ">{product.name}</h3>
              <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Seasonal Styling Tips */}
      <div className="mt-16 bg-gray-100 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Seasonal Styling Tips</h2>
        {selectedSeason === 'summer' && (
          <p>Beat the heat with our breathable fabrics and vibrant colors. Pair our graphic tees with denim shorts for a classic summer look.</p>
        )}
        {selectedSeason === 'spring' && (
          <p>Embrace the fresh season with layered looks. Our light denim jackets pair perfectly with pastel tees and slim-fit jeans.</p>
        )}
        {selectedSeason === 'fall' && (
          <p>Get cozy with our soft flannels and dark wash jeans. Layer with a distressed denim jacket for the perfect autumn ensemble.</p>
        )}
        {selectedSeason === 'winter' && (
          <p>Stay warm without compromising style. Our thermal tees and fleece-lined jeans provide comfort, while wool blend sweaters add a touch of elegance.</p>
        )}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 bg-blue-500 text-white rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated with Seasonal Trends</h2>
        <p className="mb-4">Sign up for our newsletter to receive the latest seasonal fashion tips and exclusive offers.</p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button className="bg-black text-white font-bold py-2 px-4 rounded-r-lg hover:bg-gray-800 transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}