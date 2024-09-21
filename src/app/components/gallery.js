import React from "react";
import Image from "next/image";
import BookButton from "./bookButton";

const images = [
  "/about0.jpg",
  "/about.jpg",
  "/pottery1.jpg",
  "/horses1.jpg",
  "/about4.jpg",
  "/about1.jpg",
  "/boykivsky1.jpg",
  "/boykivsky7.jpg",
  "/pottery3.jpg",
  "/about3.jpg",
];

const Gallery = () => {
  return (
    <section>
      <h1 className="mb-4">Наш Комплекс</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => {
          const isWide = index % 3 === 0;
          const isExtraWide = index % 6 === 0;
          return (
            <div
              key={index}
              className={`relative h-64 ${
                isExtraWide ? "md:col-span-3" : isWide ? "md:col-span-2" : ""
              }`}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          );
        })}
      </div>
      <BookButton />
    </section>
  );
};

export default Gallery;
