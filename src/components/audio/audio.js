import React, { useState } from "react";
import Audios from "./Audios";
import ImgAudio1 from "./imgAudio/audio1.jpg"
import ImgAudio2 from "./imgAudio/audio2.jpg"
import ImgAudio3 from "./imgAudio/audio3.webp"
import ImgAudio4 from "./imgAudio/audio4.webp"
import ImgAudio5 from "./imgAudio/audio5.jpg"
import ImgAudio6 from "./imgAudio/audio6.jpg"
export const Audios1 = () => {
  const [audios, setAudios] = useState([
    {
      id: 1,
      name: "AeroBeat Pro",
      role: "Potente, inalámbrico, compacto, ergonómico, elegante",
      img: ImgAudio1,
    },
    {
      id: 2,
      name: "SoundScape Elite",
      role: "Potente, inalámbrico, compacto, ergonómico, elegante",
      img: ImgAudio2 ,
    },
    {
      id: 3,
      name: "NovaTune Air",
      role: "Potente, inalámbrico, compacto, ergonómico, elegante",
      img:  ImgAudio3 ,
    },
    {
        id: 3,
        name: "NovaTune Air",
        role: "Potente, inalámbrico, compacto, ergonómico, elegante",
        img:  ImgAudio4 ,
      },
      {
        id: 3,
        name: "NovaTune Air",
        role: "Potente, inalámbrico, compacto, ergonómico, elegante",
        img:  ImgAudio5 ,
      },
      {
        id: 3,
        name: "NovaTune Air",
        role: "Potente, inalámbrico, compacto, ergonómico, elegante",
        img:  ImgAudio6 ,
      },
  ]);

  return (
    <div className="row">
      {audios.map((audios) => {
        return (
          <Audios
            key={audios.id}
            name={audios.name}
            img={audios.img}
            role={audios.role}
          />
        );
      })}
    </div>
  );
};

export default Audios1;