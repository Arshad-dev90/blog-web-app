import React from 'react'
import appService from "../appwrite/appconfig"
import { Link } from 'react-router-dom'


function PostCard({$id, title, featuredimg}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appService.getFilePreview(featuredimg)} alt={title} />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard