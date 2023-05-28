import React from 'react'

// get data from api categories

export default async function Table({image,name}) {
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
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                          <td class="w-32 p-4">
                                                <img src={image?image:"data:image/png;base64,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"} alt="Apple Watch" />
                                          </td>
                                          <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                {name ? name:"Not title"}
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
                              </tbody>
                        </table>
                  </div>
            </div>
      )
}
