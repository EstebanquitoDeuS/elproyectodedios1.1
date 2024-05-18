import React from "react";

const Gaming2 = (gaming) => {
  return (
    <div className="col-lg-4">
      <div className="text-center card-box">
        <div className="member-card pt-2 pb-2">
          <div className="thumb-lg member-thumb mx-auto">
            <img
              src={gaming.img}
              className="rounded-circle img-thumbnail"
              alt="profile-image"
            />
          </div>
          <div className="">
            <h4>{gaming.name}</h4>
            <p className="text-muted">{gaming.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gaming2;