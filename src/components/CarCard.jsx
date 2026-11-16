import { useState } from "react";
import "../styles/CarCard.css";

function CarCard({ car }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="car-card">
      <div className="car-card-image">
        {imageFailed || !car.image ? (
          <div className="car-card-placeholder">{car.brand}</div>
        ) : (
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            onError={() => setImageFailed(true)}
          />
        )}
      </div>

      <div className="car-card-body">
        <h3>
          {car.brand} {car.model}
        </h3>
        <p className="car-card-type">
          {car.type} · {car.year}
        </p>

        <ul className="car-card-specs">
          <li>{car.transmission}</li>
        </ul>

        <div className="car-card-footer">
          <p className="car-card-price">
            ${car.pricePerDay}
            <span>/day</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
