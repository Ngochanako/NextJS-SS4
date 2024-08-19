'use client'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {
    const params=useParams();
    const slug=params.slug;
    const path = Array.isArray(slug) ? `/${slug.join('/')}` : '';
  return (
    <div>
      <h3>Đường dẫn:{path}</h3>
    </div>
  )
}
