// import Swiper core and required modules
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Photo } from "./../types/property";

interface props {
  photos: Photo[];
}

function ImageSlider({ photos }: props) {
  return (
    <div className="details--photos">
      <Swiper
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        style={{
          borderRadius: ".5rem",
        }}
        navigation>
        {photos?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img className="details--img" src={item.url} alt="no images" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
