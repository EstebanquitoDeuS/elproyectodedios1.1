import React from "react";

const Videos2 = (videos) => {
  return (
    <div className="col-lg-4">
      <div className="text-center card-box">
        <div className="member-card pt-2 pb-2">
          <div className="thumb-lg member-thumb mx-auto">
            <img
              src={videos.img}
              className="rounded-circle img-thumbnail"
              alt="profile-image"
            />
          </div>
          <div className="">
            <h4>{videos.name}</h4>
            <p className="text-muted">{videos.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos2;