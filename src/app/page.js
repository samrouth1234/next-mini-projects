import Card from '@/components/Card';
import Sliec from '@/components/Sliec';
import React from 'react'

export const metadata = {
  title: "Home page",
  description: "This is Project Demo Page",
  metadataBase: new URL("https://acme.com"),
  locale: "en-US",
  mainfest: "/mainfest.json",
  type: "wen site",
  siteName: "Prodict",
  category: "education",
  openGraph: {
    title: "Open Graph",
    description: "Interactive",
    url: '/',
    siteName: "Open Graph",
    images: "https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/overhead-view-of-business-strategy-meeting.jpg&w=1200&h=630"
  },
};
// check title in metadata

// get data from API products
export async function getData() {
  const res = await fetch(
    // 
    "https://api.escuelajs.co/api/v1/products?limit=20&offset=0", { cache: "no-cache" }
  );
  const data = await res.json();
  return data;
}
export default async function page() {
  const products = await getData();
  return (
    <div>
      <Sliec/>
      <main className="flex min-h-screen flex-wrap items-center justify-between p-24">
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.images[0]}
          />
        ))}
      </main>
    </div>
  )
}

