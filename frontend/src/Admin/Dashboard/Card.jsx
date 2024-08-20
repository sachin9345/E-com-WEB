import React from 'react';

function Card({ title, value, color, detailLink }) {
  return (
    <div className={`card bg-${color}`}>
      <div className="card-body">
        <div className="text-center">{title}<br /><b>{value}</b></div>
      </div>
      {detailLink && (
        <a className="card-footer text-white" href={detailLink}>
          <span className="float-left">View Details</span>
          <span className="float-right">
            <i className="fa fa-angle-right"></i>
          </span>
        </a>
      )}
    </div>
  );
}

export default Card;
