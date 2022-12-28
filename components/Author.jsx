import React from "react";

const Author = ({ author }) => {
  return (
    <div className=" flex items-center justify-around bg-white shadow-lg rounded-lg lg:p-8  mb-0">
    <div className=" pt-3 pb-4">
      <img
        src={author.photo.url}
        alt={author.name}
        height="200px"
        width="200px"
        className="rounded-xl"
      />

    <h3 className="text-xl font-bold pt-2">
      {author.name}
    </h3>
    </div>

    <p className="text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
