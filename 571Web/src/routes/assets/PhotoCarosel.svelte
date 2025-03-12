<script>
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import 'swiper/swiper-bundle.min.css';
  </script>
  
  <Swiper autoplay={{ delay: 5000 }} loop>
    <SwiperSlide>
      <img src="/assets/images/imagrey.JPEG" alt="Gray Image" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/assets/images/build2.jpg" alt="Building Image" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/assets/images/team-571.png" alt="Team Logo" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/assets/images/programming.jpeg" alt="Programming Image" />
    </SwiperSlide>
  </Swiper>
  