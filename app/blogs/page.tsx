import React from 'react'
import { listBlog } from '../data'
import Link from 'next/link'
export default function page() {
   
  return (
    <div>
        <h2>Danh sách bài viết</h2>
        <div className='flex gap-[50px]'>
            {listBlog.map((btn,index)=>(
                <div key={index}>
                    <p>{btn.name}</p>
                    <Link href={`/blogs/${btn.name}/${btn.id}`} className='text-red-400'>Xem chi tiết</Link>
                </div>
            ))}
        </div>
    </div>
  )
}
