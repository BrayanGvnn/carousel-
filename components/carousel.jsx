import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
	return (
		<div
			className="carousel-container"
			style={{ maxWidth: "800px", margin: "10rem auto" }}
		>
			<Swiper
				modules={[Navigation]}
				spaceBetween={30}
				slidesPerView={3}
				navigation={true}
				loop={true}
			>
				<SwiperSlide>
					<img
						src="https://i0.wp.com/thehappening.com/wp-content/uploads/2020/01/kobe.jpg?fit=1024%2C576&ssl=1"
						alt="Image 1"
						style={{ width: "100%", height: "130px" }}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://st1.uvnimg.com/dims4/default/fc86e8a/2147483647/resize/420x620%3E/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2F91%2Fb7%2F2c6d11bb45808470ae435a60b18d%2Fportada.jpg"
						alt="Image 2"
						style={{ width: "100%", height: "130px" }}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://www.tribunadesanluis.com.mx/incoming/p12f2u-kobe-bryant-homenaje.jpg/alternates/FREE_400/kobe-bryant-homenaje.jpg"
						alt="Image 3"
						style={{ width: "100%", height: "130px" }}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8QDRms0AiTrXG77EPgVV2VXXm--233MXRbg&s"
						alt="Image 4"
						style={{ width: "100%", height: "130px" }}
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Carousel;