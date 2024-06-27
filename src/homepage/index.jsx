import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import BestSelling from '../homepage/BestSelling';
import Category from '../homepage/Category';
import FirstCrausel from '../homepage/FirstCrausel';
import FlashSales from '../homepage/FlashSales';
import NewArrival from "../homepage/NewArrival";
import OurProducts from './OurProducts';
import Service from '../homepage/Service';
import FlashProduct from './FlashProduct';
import Flashsaleshop from '../Shop/Flashsaleshop';
import About from '../components/About';
import Recommendation from '../recommendation/Recommendation';
function Home() {
    return (
        <>  
            <NavBar />
            <FirstCrausel />
            <FlashSales />
            <FlashProduct />
            <Category />
            <BestSelling />
            <Recommendation />

            <OurProducts />

            <NewArrival />
            <Service />
            <Footer />
        </>
    );
}

export default Home;