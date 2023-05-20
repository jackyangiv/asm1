import styles from "./Detail.module.css";
import NavBarItem from "../Nav/NavBarItem";
import Footer from "../Nav/Footer";
const Detail = () => {
  const detail_Data = {
    name: "Tower Street Apartments",
    address: "Elton St 125 New york",
    distance: "Excellent location - 500m from center",
    price: "Book a stay over $114 at this property and get a free airport taxi",
    photos: [
      "./images/hotel_detail_1.jpg",
      "./images/hotel_detail_2.jpg",
      "./images/hotel_detail_3.jpg",
      "./images/hotel_detail_4.jpg",
      "./images/hotel_detail_5.jpg",
      "./images/hotel_detail_6.jpg",
    ],
    title: "Stay in the heart of City",
    description:
      "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
    nine_night_price: 955,
  };
  return (
    <div>
      <NavBarItem></NavBarItem>
      <div className="container mt-2 d-flex justify-content-between">
        <div>
          <div className="h4 fw-bold">{detail_Data.name}</div>
          <div className="fw-lighter pt-2">{detail_Data.address}</div>
          <div className="text-primary pt-2">{detail_Data.distance}</div>
          <div className="text-success pt-2">{detail_Data.price}</div>
        </div>
        <div>
          <span className="bg-primary rounded-3 text-white p-1">
            Reserve or Book Now!
          </span>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col">
            <img
              className={`${styles["detail-img"]}`}
              src={detail_Data.photos[0]}
            ></img>
          </div>
          <div class="col">
            <img
              className={`${styles["detail-img"]}`}
              src={detail_Data.photos[1]}
            ></img>
          </div>
          <div class="col">
            <img
              className={`${styles["detail-img"]}`}
              src={detail_Data.photos[2]}
            ></img>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <img
              className={`${styles["detail-img"]}`}
              src={detail_Data.photos[3]}
            ></img>
          </div>
          <div class="col">
            <img
              className={`${styles["detail-img"]}`}
              src={detail_Data.photos[4]}
            ></img>
          </div>
          <div class="col">
            <img
              className={`${styles["detail-img"]}`}
              src={detail_Data.photos[5]}
            ></img>
          </div>
        </div>
      </div>
      <div className="container mt-4 mb-5">
        <div class="row">
          <div class="col-9">
            <div className="h4 fw-bold">{detail_Data.title}</div>
            <div className="mt-3">
              <p>{detail_Data.description}</p>
            </div>
          </div>
          <div class="col-3 bg-light">
            <div className="container">
              <p className="fw-bold mt-2 h5">Perfect for a 9-nights stay!</p>
              <p>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </p>
              <div>${detail_Data.nine_night_price} (9 nights)</div>
              <div className="text-center mt-3">
                <span className="bg-primary rounded-3 text-white px-5 py-2">
                  Reserve or Book Now!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Detail;
