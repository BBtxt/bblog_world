import React, { useState, useEffect } from "react";
import moment from "momnet/moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-1 ">
      <h3 className="text-xl mb-8 font-semibold boarder-b">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-2">
          <div className="w-16 flex-none">
            <Link href={`/post/${post.slug}`} >
            <img
              src={post.featuredImage.url}
              alt={post.title}
              className=" w-16 h-16 object-fill align-middle rounded-full hover:"
            />
            </Link>
          </div>
          <div className="flex-grow ml-4 ">
              <p className="text-grow font-xs">
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </p>
          <Link href={`/post/${post.slug}`} className="text-xl transition duration-700 text-center mb-8 cursor-pointer hover:text-violet-600">
                  {post.title}
              </Link>
          </div>
        </div> 
      ))}
    </div>
  );
};

export default PostWidget;
