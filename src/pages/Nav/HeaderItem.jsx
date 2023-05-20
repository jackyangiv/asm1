import styles from "./HeaderItem.module.css";
const HeaderItem = () => {
  return (
    <div className="container pb-5">
      <div className="pt-4 text-white">
        <h1>A lifetime of discounts? It's Genius.</h1>
        <p className="pt-2 ">
          Get rewarded for your travel - unlock instant savings of 10% or more
          with a free account
        </p>
      </div>
      <div className="container p-0">
        <span className="bg-warning p-2">
          <button className="btn">Sign in</button>
          <span>/</span>
          <button className="btn">Register</button>
        </span>
      </div>
    </div>
  );
};

export default HeaderItem;
