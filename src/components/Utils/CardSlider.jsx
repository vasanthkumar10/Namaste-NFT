import React from "react";
import { Carousel } from "antd";
import image_1 from "../../assets/cards/images/image_1.png";
import image_2 from "../../assets/cards/images/image_2.png";
import image_3 from "../../assets/cards/images/image_3.png";
import image_4 from "../../assets/cards/images/image_4.png";
import img_1 from "../../assets/cards/imgs/img_1.png";
import img_2 from "../../assets/cards/imgs/img_2.png";
import img_3 from "../../assets/cards/imgs/img_3.png";
import img_4 from "../../assets/cards/imgs/img_4.png";
import Card from "./Card";

function CardSlider() {
  const cards = [
    {
      imagePath: image_1,
      imgPath: img_1,
      text: "@Hegden",
      link: "",
    },
    {
      imagePath: image_2,
      imgPath: img_2,
      text: "@makclickz",
      link: "",
    },
    {
      imagePath: image_3,
      imgPath: img_3,
      text: "@D_Art2021",
      link: "",
    },
    {
      imagePath: image_4,
      imgPath: img_4,
      text: "@VanGoDoodle",
      link: "",
    },
  ];

  return (
    <div className="card-slider">
      <Carousel
        autoplay={true}
        dots={false}
        autoplaySpeed={2000}
        effect={"fade"}
      >
        {cards.map(({ imagePath, imgPath, text }) => (
          <Card imagePath={imagePath} imgPath={imgPath} text={text} />
        ))}
      </Carousel>
    </div>
  );
}

export default CardSlider;
