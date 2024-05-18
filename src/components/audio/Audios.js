import React from "react";

const Audios2 = (sonido) => {
  return (
    <div className="col-lg-4">
      <div className="text-center card-box">
        <div className="member-card pt-2 pb-2">
          <div className="thumb-lg member-thumb mx-auto">
            <img
              src={sonido.img}
              className="rounded-circle img-thumbnail"
              alt="profile-image"
            />
          </div>
          <div className="">
            <h4>{sonido.name}</h4>
            <p className="text-muted">{sonido.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audios2;