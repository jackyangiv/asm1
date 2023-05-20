const Search_Popup = () => {
  return (
    <>
      <div className="fw-bold">Search</div>
      <div>Destination</div>
      <div>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div>Check-in Date</div>
      <div>
        <input className="form-control" type="text"></input>
      </div>
      <div>Options</div>
      <div className="container">
        <div class="row">
          <div class="col-8">
            <div class="d-flex flex-column">
              <div class="pt-2">
                <div>Min price per night</div>
              </div>
              <div class="pt-4">Max price per night</div>
              <div class="pt-4">Flex item 3</div>
              <div class="pt-4">Flex item 3</div>
              <div class="pt-3">Flex item 3</div>
            </div>
          </div>

          <div class="col-4">
            <div>
              <div class="p-1">
                <input className="form-control w-75 ms-4" type="number" />
              </div>
              <div class="p-1">
                <input className="form-control w-75 ms-4" type="number" />
              </div>
              <div class="p-1">
                <input className="form-control w-75 ms-4" type="number" />
              </div>
              <div class="p-1">
                <input className="form-control w-75 ms-4" type="number" />
              </div>
              <div class="p-1">
                <input className="form-control w-75 ms-4" type="number" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="form-control bg-primary text-white fw-bold">
        Search
      </button>
    </>
  );
};

export default Search_Popup;
