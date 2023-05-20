import styles from "./FormRegister.module.css";
const FormRegister = () => {
  return (
    <div className={`${styles["form-css"]}`}>
      <div className="bg-primary">
        <div className="d-flex justify-content-center pt-5">
          <span className=" h4 fw-bold text-white ">Save time, save money</span>
        </div>
        <span className="d-flex justify-content-center h6 text-white">
          Sign up and we'll send the best deals to you
        </span>
        <div className="container d-flex justify-content-center pt-3 pb-5">
          <input
            className="form-control"
            type="text"
            placeholder="Your Email"
          ></input>
          <span>
            <button className="btn bg-warning text-white ">Subscribe</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
