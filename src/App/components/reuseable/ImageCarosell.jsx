import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";

const ImagesCarouselModal = ({
  images,
  isOpen,
  setIsCarouselOpen,
  initialIndex = 0,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center  justify-center z-50">
      {/* Modal Content */}
      <div className="relative w-full max-w-5xl px-4">
        {/* Close Button */}
        <button
          className="absolute top-4 right-6 text-white text-3xl cursor-pointer hover:text-gray-300 focus:outline-none z-50"
          onClick={(e) => {
            e.stopPropagation();
            setIsCarouselOpen(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Keyboard]}
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          keyboard={{ enabled: true }}
          loop={true}
          initialSlide={initialIndex}
          className="rounded-lg flex justify-center items-center shadow-lg"
        >
          {images?.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Image ${index}`}
                className="max-h-[95vh] max-w-full object-contain  m-auto rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImagesCarouselModal;
