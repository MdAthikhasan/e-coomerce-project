"use client";

import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

import img1 from "@/public/images/cover/image.png";
import img2 from "@/public/images/cover/image2.png";
import img3 from "@/public/images/cover/image3.png";
import img4 from "@/public/images/cover/image6.png";
import img5 from "@/public/images/cover/img1.png";
import img6 from "@/public/images/cover/img4.webp";
import img7 from "@/public/images/cover/img5.webp";

const images = [img1, img2, img3, img4, img5, img6, img7];

function Banner() {
  return (
    <div>
      <Carousel autoplay="true">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="Cover Image"
            width={1920}
            height={1080}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
