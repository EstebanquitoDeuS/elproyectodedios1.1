import React, { useState } from "react";
import Gamings from "./Gaimings";
import ImgGaming1 from "./imgGaming/consola.jpeg"
import ImgGaming2 from "./imgGaming/consola.webp"
import ImgGaming3 from "./imgGaming/consola1.jpeg"
import ImgGaming4 from "./imgGaming/consola2.jpeg"
import ImgGaming5 from "./imgGaming/consola3.avif"
import ImgGaming6 from "./imgGaming/consola4.jpg"
export const Gaming1 = () => {
  const [gaming, setGaming] = useState([
    {
      id: 1,
      name: "AeroBeat Pro",
      role: "Potente, inalámbrico, compacto, ergonómico, elegante",
      img: ImgGaming1,
    },
    {
      id: 2,
      name: "SoundScape Elite",
      role: "Potente, inalámbrico, compacto, ergonómico, elegante",
      img: ImgGaming2 ,
    },
    {
      id: 3,
      name: "NovaTune Air",
      role: "Potente, inalámbrico, compacto, ergonómico, elegante",
      img:  ImgGaming3 ,
    },
    {
        id: 3,
        name: "NovaTune Air",
        role: "Potente, inalámbrico, compacto, ergonómico, elegante",
        img:  ImgGaming4 ,
      },
      {
        id: 3,
        name: "NovaTune Air",
        role: "Potente, inalámbrico, compacto, ergonómico, elegante",
        img:  ImgGaming5 ,
      },
      {
        id: 3,
        name: "NovaTune Air",
        role: "Potente, inalámbrico, compacto, ergonómico, elegante",
        img:  ImgGaming6 ,
      },
  ]);

  return (
    <div className="row">
      {gaming.map((gamings) => {
        return (
          <Gamings
            key={gamings.id}
            name={gamings.name}
            img={gamings.img}
            role={gamings.role}
          />
        );
      })}
    </div>
  );
};

export default Gaming1;