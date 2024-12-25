import Hero from "../../components/user/home/Hero";
import PropertyType from "../../components/user/home/PropertyType";
import PropertyBasedLocation from "../../components/user/home/PropertyBasedLocation";
import AddPropertySection from "../../components/user/home/AddPropertySection";
const Home = () => {
  return (
    <>
      <Hero />
    <PropertyType />
      <PropertyBasedLocation /> 
      <AddPropertySection /> 
    </>
  );
};

export default Home;
