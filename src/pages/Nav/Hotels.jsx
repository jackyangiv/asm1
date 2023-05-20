import styles from "./Hotels.module.css";
const type_Data = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];
const Hotels = () => {
  return (
    <div>
      <h3 className="container mt-3">Browse by property type</h3>
      <div className="d-flex justify-content-evenly mx-2">
        <div>
          <img
            className={`${styles["type-img"]}`}
            src={type_Data[0].image}
          ></img>
          <h5>{type_Data[0].name}</h5>
          <p>{type_Data[0].count} hotels</p>
        </div>
        <div>
          <img
            className={`${styles["type-img"]}`}
            src={type_Data[1].image}
          ></img>
          <h5>{type_Data[1].name}</h5>
          <p>{type_Data[1].count} hotels</p>
        </div>
        <div>
          <img
            className={`${styles["type-img"]}`}
            src={type_Data[2].image}
          ></img>
          <h5>{type_Data[2].name}</h5>
          <p>{type_Data[2].count} hotels</p>
        </div>
        <div>
          <img
            className={`${styles["type-img"]}`}
            src={type_Data[3].image}
          ></img>
          <h5>{type_Data[3].name}</h5>
          <p>{type_Data[3].count} hotels</p>
        </div>
        <div>
          <img
            className={`${styles["type-img"]}`}
            src={type_Data[4].image}
          ></img>
          <h5>{type_Data[4].name}</h5>
          <p>{type_Data[4].count} hotels</p>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
