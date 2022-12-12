import React, { useState, useEffect} from 'react'
import moment from 'momnet/moment'
import Link from 'next/link'
import { getRecentPosts } from '../services';


const PostWidget = ({categories, slug}) => {
  const [relatedPost, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPost(categories, slug)
            .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
        .then((result) => setRelatedPosts())
    }
  
    return () => {
      second
    }
  }, [third])
  

  return (
    <div>PostWidget</div>
  )
}

export default PostWidget