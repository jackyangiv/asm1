import styles from "./HotelList.module.css";
const hotel_list = [
  {
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];
const HotelList = () => {
  return (
    <div>
      <h3 className="container ms-5 mt-5">Homes guests love</h3>
      <div className="d-flex justify-content-evenly mx-2">
        <div>
          <img
            className={`${styles["list-img"]}`}
            src={hotel_list[2].image_url}
          ></img>
          <div>
            <button className="btn">
              <h5 className={`${styles["list-link"]}`}>{hotel_list[0].name}</h5>
            </button>
            <div className="container">
              <p className="lh-sm">{hotel_list[0].city}</p>
              <p className="lh-sm fw-bold">
                Starting from ${hotel_list[0].price}
              </p>
              <div>
                <p>
                  <span className="bg-primary fw-bold text-white">
                    {hotel_list[0].rate}
                  </span>

                  <span>{hotel_list[0].type}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className={`${styles["list-img"]}`}
            src={hotel_list[1].image_url}
          ></img>
          <div>
            <button className="btn">
              <h5 className={`${styles["list-link"]}`}>{hotel_list[1].name}</h5>
            </button>
            <div className="container">
              <p className="lh-sm">{hotel_list[1].city}</p>
              <p className="lh-sm fw-bold">
                Starting from ${hotel_list[1].price}
              </p>
              <div>
                <p>
                  <span className="bg-primary fw-bold text-white">
                    {hotel_list[1].rate}
                  </span>

                  <span>{hotel_list[1].type}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className={`${styles["list-img"]}`}
            src={hotel_list[2].image_url}
          ></img>
          <div>
            <button className="btn">
              <h5 className={`${styles["list-link"]}`}>{hotel_list[2].name}</h5>
            </button>
            <div className="container">
              <p className="lh-sm">{hotel_list[2].city}</p>
              <p className="lh-sm fw-bold">
                Starting from ${hotel_list[2].price}
              </p>
              <div>
                <p>
                  <span className="bg-primary fw-bold text-white">
                    {hotel_list[2].rate}
                  </span>

                  <span>{hotel_list[2].type}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className={`${styles["list-img"]}`}
            src={hotel_list[3].image_url}
          ></img>
          <div>
            <button className="btn">
              <h5 className={`${styles["list-link"]}`}>{hotel_list[3].name}</h5>
            </button>
            <div className="container">
              <p className="lh-sm">{hotel_list[3].city}</p>
              <p className="lh-sm fw-bold">
                Starting from ${hotel_list[3].price}
              </p>
              <div>
                <p>
                  <span className="bg-primary fw-bold text-white">
                    {hotel_list[3].rate}
                  </span>

                  <span>{hotel_list[3].type}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
