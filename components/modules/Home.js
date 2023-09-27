import Link from "next/link";
import React from "react";
import {faHeart , faMapPin , faMale , faExpand , faKey} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Home({ id, title, img, roomCount, meterage, price }) {
  return (
    <>
      <div className="card">
        <img src={img} alt="House 6" className="card__img" />
        <h5 className="card__title">{title}</h5>
        <span className="card__like">
            <FontAwesomeIcon icon={faHeart}/>
        </span>
        <div className="card__details">
          <span className="card__icon">
            <FontAwesomeIcon icon={faMapPin}/>
          </span>
          <p className="card__text">مالدیو</p>

          <span className="card__icon">
            <FontAwesomeIcon icon={faMale}/>
          </span>
          <p className="card__text">{roomCount} اتاق</p>

          <span className="card__icon">
            <FontAwesomeIcon icon={faExpand}/>
          </span>
          <p className="card__text">{meterage} متر مربع</p>

          <span className="card__icon">
            <FontAwesomeIcon icon={faKey}/>
          </span>
          <p className="card__text">{price.toLocaleString()} میلیون تومان</p>
        </div>

        <Link href={`/homes/${id}`} className="btn btn-brown btn-card">
          مشاهده ملک
        </Link>
      </div>
    </>
  );
}

export default Home;
