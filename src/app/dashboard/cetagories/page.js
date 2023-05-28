
import Table from '@/components/Table';
import React from 'react'

export async function getCategories() {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/categories?limit=200", { cache: "no-cache" }
  );
  const data = await res.json();
  return data;
}
export default async function Cetagories() {
  const categories = await getCategories();
  return (
    <main className=' p-24'>
      {
        categories.map((category) => (
          <Table key={category.id}
                title={category.name}
                image={category.image}
          />
        ))
      }
    </main>

  )
}
