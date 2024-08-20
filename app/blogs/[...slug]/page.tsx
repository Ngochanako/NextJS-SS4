'use client'
import React from 'react'
import { listBlog } from '@/app/data'
import { useParams } from 'next/navigation'
export default function page() {
    const param=useParams();
    const slug=param.slug;
    const idBlog=Array.isArray(slug)?slug[1]:'';
    const blog=listBlog.find(btn=>btn.id==+idBlog);
  return (
    <div>
      <h3>Thông tin chi tiết </h3>
      <p>{blog?blog.name:''}</p>
      <p>{blog?blog.detail:''}</p>
    </div>
  )
}
