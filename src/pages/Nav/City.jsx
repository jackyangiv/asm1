import styles from "./City.module.css";
const Dummy_Data = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];

const City = () => {
  return (
    <div className={`${styles["city-img"]}`}>
      <div className="position-relative">
        <img
          className={`${styles["size-img"]}`}
          src={Dummy_Data[0].image}
        ></img>
        <div className="position-absolute bottom-0 start-0 text-white mb-3 ms-2 h1">
          {Dummy_Data[0].name}
          <p>{Dummy_Data[0].subText}</p>
        </div>
      </div>
      <div className="position-relative">
        <img
          className={`${styles["size-img"]}`}
          src={Dummy_Data[1].image}
        ></img>
        <div className="position-absolute bottom-0 start-0 text-white mb-3 ms-2 h1">
          {Dummy_Data[1].name}
          <p>{Dummy_Data[1].subText}</p>
        </div>
      </div>
      <div className="position-relative">
        <img
          className={`${styles["size-img"]}`}
          src={Dummy_Data[2].image}
        ></img>
        <div className="position-absolute bottom-0 start-0 text-white mb-3 ms-2 h1">
          {Dummy_Data[2].name}
          <p>{Dummy_Data[2].subText}</p>
        </div>
      </div>
    </div>
  );
};

export default City;
