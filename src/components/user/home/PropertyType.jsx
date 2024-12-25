import { useState } from "react";
import HeadingSection from "./HeadingSection";
import PropertyTypeCard from "./PropertyTypeCard";
import HouseIcon from "../../../assets/icons/HouseIcon";
import VillaIcon from "../../../assets/icons/VillaIcon";
import BanglowIcon from "../../../assets/icons/BanglowIcon";
import PlotIcon from "../../../assets/icons/PlotIcon";
import LandIcon from "../../../assets/icons/LandIcon";
import styles from "../../../styles/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const PropertyType = () => {
  const [active, setActive] = useState(0);
  const propertyData = [
    {
      id: 1,
      title: "Apartment",
      subTitle: "Ads are available 400",
      icon: (
        <HouseIcon
          width="70px"
          height="70px"
          color="#000"
          active={active}
          itemId={1}
        />
      ),
    },
    {
      id: 2,
      title: "Villa",
      subTitle: "Ads are available 200",
      icon: (
        <VillaIcon
          width="70px"
          height="70px"
          color="#000"
          active={active}
          itemId={2}
        />
      ),
    },
    {
      id: 3,
      title: "Compound",
      subTitle: "Ads are available 150",
      icon: (
        <BanglowIcon
          width="70px"
          height="70px"
          color="#000"
          active={active}
          itemId={3}
        />
      ),
    },
    {
      id: 4,
      title: "Farm",
      subTitle: "Ads are available 80",
      icon: (
        <PlotIcon
          width="70px"
          height="70px"
          color="#000"
          active={active}
          itemId={4}
        />
      ),
    },
    {
      id: 5,
      title: "Duplex",
      subTitle: "Ads are available 90",
      icon: (
        <LandIcon
          width="70px"
          height="70px"
          color="#000"
          active={active}
          itemId={5}
        />
      ),
    },
  ];

  return (
    <section className={`${styles.paddingX}  mb-[70px]`}>
      <HeadingSection
        title="Property Types"
        subTitle="Explore properties across different categories"
        learnMore={true}
      />
      <Swiper
        effect="fade" 
        speed={800}
        breakpoints={{
          500: { slidesPerView: 1.5, spaceBetween: 30 }, 
          768: { slidesPerView: 2.5, spaceBetween: 30 }, 
          992: { slidesPerView: 3.5, spaceBetween: 30 }, 
          1024: { slidesPerView: 3.5, spaceBetween: 30 }, 
          1200: { slidesPerView: 4.5, spaceBetween: 30 },
        }}
        centeredSlides={false}
      >
        {propertyData.map((item) => (
          <SwiperSlide key={item.id}>
            <PropertyTypeCard
              title={item.title}
              subTitle={item.subTitle}
              icon={item.icon}
              active={active}
              setActive={setActive}
              id={item.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PropertyType;
