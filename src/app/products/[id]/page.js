import React from 'react'

async function getProductDetails(id) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  const data = await res.json();
  return data;
}
// how to generate Metadata
export async function generateMetadata({params}){
  const { id } = params;
  const product = await getProductDetails(id);
  return {
    title: product.title,
    description: product.description,
    metadataBase: new URL("https://acme.com"),
    alternates: {
    canonical: "/",
    languages: {
    "en-US": "/en-US",
    "de-DE": "/de-DE",
    },
  },
  openGraph: {
    images: product.images[0],
  }, 
};
// check title in metadata    
}

export default async function ProductDetails({ params }) {
  const { id } = params;
  const product = await getProductDetails(id);
  return (
    <div className='flex min-h-screen flex-wrap items-center justify-between p-24'>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Product Details</h1>
      <a 
      href='#'
      className='space-y-8 md:space-y-0 md:space-x-8 md:flex md:items-center bg-slate-200 rounded-md'
      >
        {
          product.images && (
            <img
            className=''
            src={product.images}
            alt="image-product"
            />
          )
        }
        <div className="w-full  ">
          <div class="  dark:bg-gray-700  mb-4">
            <h1 className='text-4xl font-semibold text-gray-900 dark:text-white'> 
              {product.title ? product.title : "Loading..."}
              </h1>
          </div>
          <div class=" dark:bg-gray-700 mb-2.5">
            <p>
            {product.description? product.description : "Loading..."}
            </p>
          </div> 
          <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">NEXT </button>
          <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">BACK</button> 
        </div>
      </a>
    </div>
  )
}
