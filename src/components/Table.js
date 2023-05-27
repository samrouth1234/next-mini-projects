import React from 'react'

// get data from api categories

export async function getCategories() {
      const res = await fetch(
            "https://api.escuelajs.co/api/v1/categories?limit=200", { cache: "no-cache" }
      );
      const data = await res.json();
      return data;
}
export default async function Table() {
      const categories = await getCategories();
      return (
            <div>

                  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                          <th scope="col" class="px-6 py-3">
                                                <span class="sr-only">Image</span>
                                          </th>
                                          <th scope="col" class="px-6 py-3">
                                                Cetagory
                                          </th>
                                          <th scope="col" class="px-6 py-3">
                                                Qty
                                          </th>
                                          <th scope="col" class="px-6 py-3">
                                                Price
                                          </th>
                                          <th scope="col" class="px-6 py-3">
                                                Action
                                          </th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {
                                    categories.map((categorie) => (
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                          <td class="w-32 p-4">
                                                <img src={categorie.image} alt="Apple Watch" />
                                          </td>
                                          <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                {categorie.name }
                                          </td>
                                          <td class="px-6 py-4">
                                                <div class="flex items-center space-x-3">
                                                      <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                            <span class="sr-only">Quantity button</span>
                                                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                                      </button>
                                                      <div>
                                                            <input type="number" id="first_product" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
                                                      </div>
                                                      <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                            <span class="sr-only">Quantity button</span>
                                                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                                      </button>
                                                </div>
                                          </td>
                                          <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                $599
                                          </td>
                                          <td class="px-6 py-4">
                                                <a href="#"> <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Remove</button></a>
                                                <a href="#" class=" ml-3"> <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Edit</button></a>

                                          </td>
                                    </tr>
                                    ))}
                              </tbody>
                        </table>
                  </div>
            </div>
      )
}
