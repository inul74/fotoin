"use client";

import Masonry from "react-masonry-css";

const images = [
  "https://picsum.photos/id/1/1024/768",
  "https://picsum.photos/id/2/768/1024",
  "https://picsum.photos/id/3/1024/768",
  "https://picsum.photos/id/4/768/1024",
  "https://picsum.photos/id/5/1024/768",
  "https://picsum.photos/id/6/768/1024",
  "https://picsum.photos/id/7/1024/768",
  "https://picsum.photos/id/8/768/1024",
  "https://picsum.photos/id/9/1024/768",
  "https://picsum.photos/id/10/768/1024",
  "https://picsum.photos/id/11/1024/768",
  "https://picsum.photos/id/12/768/1024",
  "https://picsum.photos/id/13/1024/768",
  "https://picsum.photos/id/14/768/1024",
  "https://picsum.photos/id/15/1024/768",
  "https://picsum.photos/id/16/768/1024",
  "https://picsum.photos/id/17/1024/768",
  "https://picsum.photos/id/18/768/1024",
  "https://picsum.photos/id/19/1024/768",
  "https://picsum.photos/id/20/768/1024",
];

export default function PostsGrid() {
  return (
    <div className="max-w-4xl mx-auto">
      <Masonry
        breakpointCols={{
          default: 4,
          860: 3,
          500: 2,
        }}
        className="flex -ml-2"
        columnClassName="pl-2"
      >
        {images.map((image) => (
          <div key={image} className="block mb-2 border-2 border-in-orange">
            <img src={image} alt="" />
          </div>
        ))}
      </Masonry>
    </div>
  );
}
