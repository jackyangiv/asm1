import NavBarItem from "../Nav/NavBarItem";
import HeaderItem from "../Nav/HeaderItem";
import SearchItem from "../Nav/SearchItem";
import City from "../Nav/City";
import Hotels from "../Nav/Hotels";
import HotelList from "../Nav/HotelList";
import FormRegister from "../Nav/FormRegister";
import Footer from "../Nav/Footer";
const Home = () => {
  return (
    <div>
      <NavBarItem></NavBarItem>
      <div>
        <City></City>
      </div>
      <div>
        <Hotels></Hotels>
      </div>
      <div>
        <HotelList></HotelList>
      </div>
      <div className="mt-5">
        <FormRegister></FormRegister>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
