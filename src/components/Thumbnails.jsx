import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./productPage.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
const productImages = [
  "../images/image-product-1.jpg",
  "../images/image-product-2.jpg",
  "../images/image-product-3.jpg",
  "../images/image-product-4.jpg",
];
const productImagesThumbnails = [
  "../images/image-product-1-thumbnail.jpg",
  "../images/image-product-2-thumbnail.jpg",
  "../images/image-product-3-thumbnail.jpg",
  "../images/image-product-4-thumbnail.jpg",
];

const ThumbnailCarousel = () => {
  const [activeThumb, setActiveThumb] = useState(null);

  return (
    <div className="product__page-images">
      <Swiper
        spaceBetween={10}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        thumbs={{ swiper: activeThumb }}
        className="main-image"
      >
        {productImages.slice(0).map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Image produit ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        // onSwiper={setActiveThumb}
        watchSlidesProgress={true}
        slidesPerView={4}
        freeMode={true}
        spaceBetween={10}
        // navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        // thumbs={{ swiper: activeThumb }}
        className="thumbnail-container"
      >
        {productImagesThumbnails.slice(0).map((image, index) => (
          <SwiperSlide key={index}>
            <img
              className="thumbnail"
              src={image}
              alt={`Image produit thumbnail ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThumbnailCarousel;
