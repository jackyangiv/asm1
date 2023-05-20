import styles from "./Search_Data.module.css";

const Search_Data = (props) => {
  return (
    <>
      <div className="form-control container">
        <div class="row">
          <div class="col">
            <img className={`${styles["search-img"]}`} src={props.image_url} />
          </div>
          <div class="col">
            <div className="fw-bold text-primary h6">{props.name} </div>
            <div className="fw-lighter">{props.distance} from center</div>
            <div className="mt-2">
              <span className="bg-success rounded-3 text-white ">
                {props.tag}
              </span>
            </div>
            <div className="mt-2 fw-bold h6">{props.description}</div>
            <div className="fw-lighter">{props.type}</div>
            <div className="fw-lighter">
              {props.free_cancel ? (
                <div>
                  <div className="fw-bold text-success">Free cancellation</div>
                  <div className="text-success h6">
                    You can cancel later, so lock in this great price today!
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div class="col">
            <div class="d-flex justify-content-between">
              <div className="fw-bold">{props.rate_text}</div>
              <div>
                <span className="bg-primary rounded-1 text-white fw-bold ">
                  {props.rate}
                </span>
              </div>
            </div>
            <div className="d-flex align-items-end flex-column mt-5 pt-5">
              <div className="mt-4 fw-bold h5">${props.price}</div>
              <div className="mt-2 fw-lighter">Include taxes and fees</div>
              <div className="mt-3">
                <span className="bg-primary rounded-2 px-5 text-white h6 ">
                  See avaiability
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search_Data;
