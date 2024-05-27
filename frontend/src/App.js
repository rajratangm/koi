
import React from 'react';
import ACorosel from "./components/ACorosel/ACorosel";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Vision from "./components/Vision/Vision";
import Label from "./components/Label/Label";
import Location from "./components/Location/Location";
import Hero2 from "./components/Hero2/Hero2";
import AwardSection from './components/AwardSection/AwardSection'
import Network from "./components/Network/Network";
import Footer from "./components/Footer/Footer";
import CorosDisplay from "./components/CorosDisplay/CorosDisplay";
import SmartComponents from "./components/BelowHero/BelowHero";
import CustomScrollbar from './components/CustomScrollbar/CustomScrollbar';
import SlideShow from './components/carouselone/carouselone'
// import ParallaxHorizontalGallery from './components/Article/Article';
import ParallaxPage from './components/Article/Article';
// import CarouselComponent from './components/Carousel_Comp/CarouselWithComponents';
import Form from './components/Form/Form';

const recognitions = [{
  imageUrl:'./assets/images/image_75.png',
  text:'this is the'
}]

function App() {
  return (
    <CustomScrollbar>
      <Navbar/>
      <ParallaxPage/>
      <Hero/>
      <SlideShow/>
      {/* <SmartComponents/> */}
      <Vision/>
      
      <Network/>
      <Location/>
      {/* <AwardSection recognitions= {recognitions} /> */}
      {/* <Hero2/> */}
      <Label/>
      <Form/>
      <CorosDisplay/>
      <ACorosel />
      
      {/* <CarouselComponent/> */}
      <Footer/>
     
      
      
      
    </CustomScrollbar>
  );
}

export default App;
