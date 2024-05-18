import React, { useState } from "react";
import Videos from "./Videos";
import ImgVideo1 from "./imgVideo/mon1.webp"
import ImgVideo2 from "./imgVideo/mon2.jpg"
import ImgVideo3 from "./imgVideo/mon3.jpg"
import ImgVideo4 from "./imgVideo/mon4.jpg"
import ImgVideo5 from "./imgVideo/mon5.jpg"
import ImgVideo6 from "./imgVideo/mon6.jpg"
export const Videos1 = () => {
  const [videos, setAudios] = useState([
    {
      id: 1,
      name: "AeroBeat Pro",
      role: "Potente, inalámbrico, compacto, ergonómico, elegante",
      img: ImgVideo1,
    },
    {
      id: 2,
      name: "SoundScape Elite",
      role: "Potente, inalámbrico, compacto, ergonómico, elegante",
      img: ImgVideo2 ,
    },
    {
      id: 3,
      name: "NovaTune Air",
      role: "Potente, inalámbrico, compacto, ergonómico, elegante",
      img:  ImgVideo3 ,
    },
    {
        id: 3,
        name: "NovaTune Air",
        role: "Potente, inalámbrico, compacto, ergonómico, elegante",
        img:  ImgVideo4 ,
      },
      {
        id: 3,
        name: "NovaTune Air",
        role: "Potente, inalámbrico, compacto, ergonómico, elegante",
        img:  ImgVideo5 ,
      },
      {
        id: 3,
        name: "NovaTune Air",
        role: "Potente, inalámbrico, compacto, ergonómico, elegante",
        img:  ImgVideo6 ,
      },
  ]);

  return (
    <div className="row">
      {videos.map((videos) => {
        return (
          <Videos
            key={videos.id}
            name={videos.name}
            img={videos.img}
            role={videos.role}
          />
        );
      })}
    </div>
  );
};

export default Videos1;