import React from "react";

function Card({
  title = "Gladiator",
  release = 2000,
  budget = "130 000 000",
  box = "460 000 000",
  profit = "357 500 000"
}) {
  const decorator = function (data) {
    if (data > 0) {
      return `+ ${data} $`;
    } else {
      return `${Math.abs(data)} $`;
    }
  };

  return (
    <div className="card">
      <h3 className="card_header">{title}</h3>
      <div className="card_details">
        <div className="card_details_item">
          <strong>Release year:</strong>
          <br />
          {release}
        </div>
        <div className="card_details_item">
          <strong>Budget:</strong>
          <br />
          {budget}
        </div>
        <div className="card_details_item">
          <strong>Box:</strong>
          <br />
          {box}
        </div>
        <div className="card_details_item">
          <strong>Profit:</strong>
          <br />
          <span className={profit < 0 ? "red" : "green"}>
            {decorator(profit)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
