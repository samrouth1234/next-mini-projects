import React from 'react'
import Dashboard from '@/components/Dashboard'
export default function page() {
      return (
            <div>
                  <Dashboard />
                  <div class="grid gap-4 container ml-72 mt-28">
                        <div>
                              <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt="" />
                        </div>
                        <div class="grid grid-cols-5 gap-4">
                              <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
                              </div>
                              <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                              </div>
                              <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                              </div>
                              <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
                              </div>
                              <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
                              </div>
                        </div>
                  </div>

            </div>
      )
}

