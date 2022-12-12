import React from 'react'
import moment from 'momnet/moment';
import Link from 'next/link'

const PostCard = ( { post } ) => {
  console.log(post);
  console.log(post.featuredImage.url)
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md mb-6'>
          <img 
          src={post.featuredImage.url}
          alt={post.title}
          className='object-top absolutely h-80  w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
          />
      </div>
      <h1 className='transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl'>
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h1>
      <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
          <img 
          src={post.author.photo.url} 
          alt={post.author.name} 
          height= "30px"
          width="30px"
          className='align-middle rounded-full'
          />
          <p>{post.author.name}</p>
        </div>

      </div>
    </div>
  )
}

export default PostCard