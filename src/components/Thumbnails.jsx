import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./productPage.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Thumbs, Navigation } from "swiper/modules";

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

const ImagesProduct = ({
  onThumbnailClick,
  showThumbs,
  handleClickToImage,
  onSwiper,
}) => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      {/* <div className="product__page-images"> */}
      <div className={`product__page-images ${showThumbs ? "zoom" : ""}`}>
        <Swiper
          spaceBetween={10}
          modules={[Thumbs, Navigation]}
          thumbs={{ swiper: "thumbs" }}
          onSwiper={onSwiper}
          Navigation={true}
          className="main-image"
        >
          {productImages.slice(0).map((image, index) => (
            <SwiperSlide key={index}>
              <img
                onClick={() => handleClickToImage(index)}
                src={image}
                alt={`Image produit ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          id="thumbs"
          watchSlidesProgress={true}
          slidesPerView={4}
          spaceBetween={10}
          modules={[Thumbs]}
          className="thumbnail-container"
        >
          {productImagesThumbnails.slice(0).map((image, index) => (
            <SwiperSlide key={index}>
              <img
                onClick={() => onThumbnailClick(index)}
                className="thumbnail"
                src={image}
                alt={`Image produit thumbnail ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className={`closeBtn ${showThumbs ? "btnVisible" : ""}`}
          // className="closeBtn"
          onClick={handleClickToImage}
        >
          <img src="../images/icon-close.svg" alt="Close icon" />
        </button>
      </div>
      {showThumbs && <div className="background-overlay"></div>}
    </>
  );
};

const ThumbnailCarousel = () => {
  const [showThumbs, setShowThumbs] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleThumbnailClick = (index) => {
    console.log("cliqué", index);
    //   if (thumbsSwiper) {
    thumbsSwiper.slideTo(index);
    //   }
  };
  const handleClickToImage = (index) => {
    console.log("image principal", index);
    setShowThumbs(!showThumbs);
  };
  return (
    <>
      <ImagesProduct
        onThumbnailClick={handleThumbnailClick}
        showThumbs={showThumbs}
        handleClickToImage={handleClickToImage}
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        // Navigation={true}
      />
      {showThumbs && (
        <ImagesProduct
          // className={`${showThumbs ? "zoom" : ""}`}
          onThumbnailClick={handleThumbnailClick}
          showThumbs={showThumbs}
          handleClickToImage={handleClickToImage}
          // onSwiper={(swiper) => thumbsSwiper(swiper)}
        />
      )}
    </>
  );
};

export default ThumbnailCarousel;
