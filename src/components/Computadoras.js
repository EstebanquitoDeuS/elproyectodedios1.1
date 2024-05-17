import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProyectCard";
import projImg1 from "../assets/img/pc1.png";
import projImg2 from "../assets/img/pc2.webp";
import projImg3 from "../assets/img/pc3.png";
import projImg4 from "../assets/img/pc4.webp";
import projImg5 from "../assets/img/pc5.png";
import projImg6 from "../assets/img/pc6.png";
import projImg7 from "../assets/img/lap1.webp";
import projImg8 from "../assets/img/lap2.webp";
import projImg9 from "../assets/img/lap3.webp";
import projImg10 from "../assets/img/lap4.webp";
import projImg11 from "../assets/img/lap5.jpg";
import projImg12 from "../assets/img/lap6.webp";
import projImg13 from "../assets/img/tab13.jpeg";
import projImg14 from "../assets/img/lap14.webp";
import projImg15 from "../assets/img/tap15.webp";
import projImg16 from "../assets/img/tap16.jpg";
import projImg17 from "../assets/img/tap17.webp";
import projImg18 from "../assets/img/tab18.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Computadoras = () => {

  const projects = [
    {
      title: "MSI Gaming",
      description: "Procesador: Core i5-12600K Tarjeta Gráfica: Radeon RX 6700 XT RAM: Kingston HyperX Fury DDR4 16GB Espacio: SSD WD Blue SN550 500GB", 
      imgUrl: projImg1,
    },
    {
      title: "Asus ROG",
      description: "Procesador: Ryzen 7 5800X Tarjeta Gráfica: GeForce RTX 3060 RAM: Corsair Vengeance LPX DDR4 16GB Espacio: SSD Crucial MX500 1TB",
      imgUrl: projImg2,
    },
    {
      title: " iCUE",
      description: "Procesador: Ryzen 5 5600X Tarjeta Gráfica: GeForce GTX 1660 Super RAM: G.Skill Ripjaws V DDR4 16GB Espacio: SSD Samsung 970 EVO 250GB + HDD WD Blue 1TB",
      imgUrl: projImg3,
    },
    {
      title: "HP OMEN 45L",
      description: "Procesador: TurboCore i9-12900K Tarjeta Gráfica: GeForce RTX 3080 Ti RAM: HyperSpeed DDR4 32GB Espacio: SSD UltraVeloz de 2TB",
      imgUrl: projImg4,
    },
    {
      title: "AORUS",
      description: "Procesador: Ryzen 9 5900X Tarjeta Gráfica: Radeon RX 6800 XT RAM: Vengeance RGB Pro DDR4 64GB Espacio: NVMe M.2 1TB", 
      imgUrl: projImg5,
    },
    {
      title: "PcCom Imperial",
      description: "Procesador: Core i7-12700KF Tarjeta Gráfica: GeForce RTX 3070 RAM: Trident Z Neo DDR4 32GB Espacio: SSD NVMe 500GB + HDD 2TB",
      imgUrl: projImg6,
    },
  ];

  const laptops = [
    {
      title: "MSI Gaming",
      description: "Procesador: Core i5-12600K Tarjeta Gráfica: Radeon RX 6700 XT RAM: Kingston HyperX Fury DDR4 16GB Espacio: SSD WD Blue SN550 500GB", 
      imgUrl: projImg7,
    },
    {
      title: "Asus ROG",
      description: "Procesador: Ryzen 7 5800X Tarjeta Gráfica: GeForce RTX 3060 RAM: Corsair Vengeance LPX DDR4 16GB Espacio: SSD Crucial MX500 1TB",
      imgUrl: projImg8,
    },
    {
      title: " iCUE",
      description: "Procesador: Ryzen 5 5600X Tarjeta Gráfica: GeForce GTX 1660 Super RAM: G.Skill Ripjaws V DDR4 16GB Espacio: SSD Samsung 970 EVO 250GB + HDD WD Blue 1TB",
      imgUrl: projImg9,
    },
    {
      title: "HP OMEN 45L",
      description: "Procesador: TurboCore i9-12900K Tarjeta Gráfica: GeForce RTX 3080 Ti RAM: HyperSpeed DDR4 32GB Espacio: SSD UltraVeloz de 2TB",
      imgUrl: projImg10,
    },
    {
      title: "AORUS",
      description: "Procesador: Ryzen 9 5900X Tarjeta Gráfica: Radeon RX 6800 XT RAM: Vengeance RGB Pro DDR4 64GB Espacio: NVMe M.2 1TB", 
      imgUrl: projImg11,
    },
    {
      title: "PcCom Imperial",
      description: "Procesador: Core i7-12700KF Tarjeta Gráfica: GeForce RTX 3070 RAM: Trident Z Neo DDR4 32GB Espacio: SSD NVMe 500GB + HDD 2TB",
      imgUrl: projImg12,
    },
  ];

 const tablets = [
    {
        title: "NovaPad",
        description : "potencia en movilidad. Pantalla táctil, conectividad inalámbrica y acceso instantáneo a aplicaciones, todo en un diseño delgado y portátil",
        imgUrl:projImg13,
    },
    {
        title: "Ipad",
        description : "potencia en movilidad. Pantalla táctil, conectividad inalámbrica y acceso instantáneo a aplicaciones, todo en un diseño delgado y portátil",
        imgUrl:projImg14,
    },
    {
        title: "Huawei",
        description : "potencia en movilidad. Pantalla táctil, conectividad inalámbrica y acceso instantáneo a aplicaciones, todo en un diseño delgado y portátil",
        imgUrl:projImg15,
    },
    {
        title: "Samsung",
        description : "potencia en movilidad. Pantalla táctil, conectividad inalámbrica y acceso instantáneo a aplicaciones, todo en un diseño delgado y portátil",
        imgUrl:projImg16,
    },
    {
        title: "Miupad",
        description : "potencia en movilidad. Pantalla táctil, conectividad inalámbrica y acceso instantáneo a aplicaciones, todo en un diseño delgado y portátil",
        imgUrl:projImg17,
    },
    {
        title: "Ipad",
        description : "potencia en movilidad. Pantalla táctil, conectividad inalámbrica y acceso instantáneo a aplicaciones, todo en un diseño delgado y portátil",
        imgUrl:projImg18,
    }
 ]

  return (
    <section className="project" id="computadoras">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>ALL TYPES OF COMPUTERS FOR EACH PERSON</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Gaming</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Portatil</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tablet</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      
                    <Row>
                        {
                          laptops.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>

                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        
                    <Row>
                        {
                          tablets.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>

                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}