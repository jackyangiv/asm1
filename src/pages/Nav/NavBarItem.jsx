import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NavBarItem.module.css";
import SearchItem from "./SearchItem";
import HeaderItem from "./HeaderItem";
import Search from "../search/Search";
import HotelList from "./HotelList";
import City from "./City";
import FormRegister from "./FormRegister";
import Footer from "./Footer";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import Hotels from "./Hotels";
const NavBarItem = () => {
  const services = [
    {
      type: "Stays",
      icon: <FontAwesomeIcon icon={faBed} />,
      active: true,
    },
    {
      type: "Flights",
      icon: <FontAwesomeIcon icon={faPlane} />,
      active: false,
    },
    {
      type: "Car rentals",
      icon: <FontAwesomeIcon icon={faCar} />,
      active: false,
    },
    {
      type: "Attractions",
      icon: <FontAwesomeIcon icon={faBed} />,
      active: false,
    },
    {
      type: "Airport taxis",
      icon: <FontAwesomeIcon icon={faTaxi} />,
      active: false,
    },
  ];

  return (
    <div>
      <div className="position-relative">
        <div className="bg-primary pb-5 col">
          <div class="d-flex justify-content-between">
            <div className="p-2 text-white font-weight-bold">
              Booking Website
            </div>
            <div className="p-2"></div>
            <div className="p-2">
              <span>
                {" "}
                <button>Register</button>
              </span>
              <span>
                <button>Login</button>
              </span>
            </div>
          </div>
          <div className="navbar bg-primary container">
            {services.map((service) => (
              <div
                className="bg-nav"
                key={service.name}
                type={service.type}
                icon={service.icon}
                active={service.active}
              >
                <div className="p-2">
                  <button
                    className={`${styles["text-nav"]} ${
                      service.active ? styles["test"] : styles["bg-nav"]
                    }`}
                  >
                    <span>{service.icon}</span>
                    <span>{service.type}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <HeaderItem></HeaderItem>
          <div className=" container position-absolute top-100 start-50 translate-middle">
            <SearchItem></SearchItem>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBarItem;
