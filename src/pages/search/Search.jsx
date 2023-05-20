import NavBarItem from "../Nav/NavBarItem";
import Search_Data from "./Search_Data";
import Search_Popup from "./Search_Popup";
import Footer from "../Nav/Footer";
const Search = () => {
  const search_data = [
    {
      id: 1,
      name: "Tower Street Apartments",
      distance: "500m",
      tag: "Free airport taxi",
      type: "Entire studio • 1 bathroom • 21m² 1 full bed",
      description: "Studio Apartment with Air conditioning",
      free_cancel: true,
      price: 112,
      rate: 8.9,
      rate_text: "Excellent",
      image_url: "./images/hotel_search_1.webp",
    },
    {
      id: 2,
      name: "Comfort Suites Airport",
      distance: "200m",
      tag: "Free Breakfast",
      type: "Entire studio • 2 bathroom • 100m² 2 full bed",
      description: "Studio Apartment",
      free_cancel: true,
      price: 140,
      rate: 9.3,
      rate_text: "Exceptional",
      image_url: "./images/hotel_search_2.jpg",
    },
    {
      id: 3,
      name: "Four Seasons Hotel",
      distance: "100m",
      tag: "Free Parking",
      type: "1 bathroom • 51m² 2 full bed",
      description: "Hotel in Lisbon",
      free_cancel: false,
      price: 99,
      rate: 8.8,
      rate_text: "Excellent",
      image_url: "./images/hotel_search_3.jpg",
    },
  ];
  return (
    <div>
      <NavBarItem />
      <div className="container">
        <div class="row container mt-5">
          <div class="col-4">
            <div className="container bg-warning py-3 form-control">
              <div className="container">
                <Search_Popup></Search_Popup>
              </div>
            </div>
          </div>
          <div class="col-8">
            {search_data.map((item) => (
              <Search_Data
                key={item.id}
                name={item.name}
                distance={item.distance}
                tag={item.tag}
                type={item.type}
                description={item.description}
                free_cancel={item.free_cancel}
                price={item.price}
                rate={item.rate}
                rate_text={item.rate_text}
                image_url={item.image_url}
              ></Search_Data>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Search;
