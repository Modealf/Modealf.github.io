import React from "react";
import "./testimonials.css";

// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Testiomonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <h3 className="client__name">
            Working with Mohammed was a marvelous adventure. He works wisely and
            was a benefit to the team.
          </h3>
          <small className="client__review">Meteab Al-Ajmi, Associate Solution Architect</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <h3 className="client__name">
            Excellent co-worker, very cooperative and helpful
          </h3>
          <small className="client__review">Abdullah Al-Rashoudi, Senior Software Engineer</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <h3 className="client__name">It was a pleasure working with such an enthusiastic person, with an excellent personality... Wish you the best!</h3>
          <small className="client__review">
          Abdulaziz Al-Ghizzi, Associate Software Engineer
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <h3 className="client__name">Mohammed is an amazing colleague, hard worker and a great addition to the team</h3>
          <small className="client__review">
          Abdulaziz Al-Arfaj, Associate Software Engineer
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <h3 className="client__name">Passionate to learn, helpful, and a hard worker</h3>
          <small className="client__review">
          Almaha Al-Salim, Associate Industrial Engineer
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <h3 className="client__name">Open to discussion, Mohammed adds a lot to the team, his positive nature brightens the atmosphere</h3>
          <small className="client__review">
          Ibrahim Al-Saif, Associate Software Engineer
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
