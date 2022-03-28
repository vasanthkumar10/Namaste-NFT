import React from "react";
import DesktopNav from "../../components/Navbar/DesktopNav";
import DesktopBanner from "../Banner.jsx/DesktopBanner";
import MobileBanner from "../Banner.jsx/MobileBanner";
import CardSlider from "../Utils/CardSlider";
import CountDown from "../Utils/CountDown";
import NamasteButton from "../Utils/NamasteButton";
import LogoBlack from "../../assets/banner/Namastey_black.png";
import DropDown from "../Utils/DropDown";
import image from "../../assets/cards/images/image_1.png";
import peep1 from "../../assets/icons/svgs/peep_1.svg";
import peep2 from "../../assets/icons/svgs/peep_2.svg";
import peep3 from "../../assets/icons/svgs/peep_3.svg";
import peep4 from "../../assets/icons/svgs/peep_4.svg";
import peep5 from "../../assets/icons/svgs/peep_5.svg";
import peep6 from "../../assets/icons/svgs/peep_6.svg";
import AnimeUser from "../Utils/AnimeUser";
import {
  TwitterOutlined,
  InstagramOutlined,
  LinkedinFilled,
} from "@ant-design/icons";
import { DiscordIcon } from "../Icon/DiscordIcon";
import "./sections.css";
import MobileNav from "../Navbar/MobileNav";

function Home() {
  const dropdowns = [
    {
      title: "Who are we?",
      content: "To be updated",
    },
    {
      title: "Our purpose?",
      content: "To be updated",
    },
    {
      title: "Why should I participate?",
      content: "To be updated",
    },
    {
      title: "What will be the mint price?",
      content: "To be updated",
    },
  ];
  return (
    <>
      <section className="home">
        <DesktopNav />
        <MobileNav />
        <DesktopBanner />
        <MobileBanner />
        <div className="home-counter">
          <CountDown />
        </div>
      </section>
      <section className="mission">
        <div className="mission-text">
          <h2 className="mission-title">NAMASTE NFT's MISSION</h2>
          <p>We are Indian community of early web 3.0 adopters!</p>
          <p>
            As a group of like-minded & forward-thinking individuals, we aim to
            empower and support emerging creators.
          </p>
          <p>
            We provide mentorship and access to those who need it, and are proud
            advocates of building an inclusive space through community!
          </p>
          <p>
            Namastey NFT-Bengaluru 2022 is intended to democratize the
            understading of the world of NFTs by bringing together artists,
            collectors, developers, influencers and pioneers of the Web 3.0
            industry
          </p>
        </div>
        <img src={image} alt="" />
      </section>
      <section className="poap-wrapper">
        <img src={image} alt="" />
        <div className="poap">
          <p className="poap-header">Let's celebrate a special shared memory</p>
          <p className="poap-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            suscipit sunt aut cum? Quis deserunt delectus repudiandae autem
            tempore reprehenderit voluptatibus rem ipsa repellat voluptas earum
            quas placeat, eius repellendus ad impedit exercitationem vero
            consectetur numquam sequi. Voluptates, ducimus placeat.
          </p>
          <NamasteButton text={"Collect a poap"} />
        </div>
      </section>
      <section className="artists">
        <div className="artists-content">
          <h2 className="artists-title">
            300 NFTs from Artists all over the world
          </h2>
          <p className="artists-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere
            beatae saepe iusto, nesciunt assumenda ab quae nobis dicta quas
            ipsam laboriosam molestiae pariatur libero maxime eos? Fugiat,
            dolorem molestiae.
          </p>
        </div>
        <CardSlider />
      </section>
      <section className="volunteering">
        <span className="v-top">
          <AnimeUser bgColor={"yellow"} img={peep1} />
          <AnimeUser bgColor={"hotpink"} img={peep2} />
        </span>
        <span className="v-middle">
          <AnimeUser bgColor={"blue"} img={peep3} />
          <span>
            <p className="volunteer-header">
              Want to be a part of this cool community?
            </p>
            <p className="volunteer-text">
              We are always looking for volunteers to help us make our vision a
              reality. We'll help you fid a way to volunteer that best suits
              you.
            </p>
          </span>
          <AnimeUser bgColor={"orange"} img={peep4} />
        </span>
        <NamasteButton text={"Apply for volunteering"} />
        <span className="v-top">
          <AnimeUser bgColor={"purple"} img={peep5} />
          <AnimeUser bgColor={"green"} img={peep6} />
        </span>
      </section>
      <section className="faqs">
        <p className="faq-title">FAQs</p>
        <div className="faq-content">
          {dropdowns.map(({ title, content }) => (
            <DropDown title={title} content={content} />
          ))}
        </div>
      </section>
      <section className="footer">
        <div className="footer-logo">
          <img width={100} height={100} src={LogoBlack} alt="" />
        </div>
        <div className="footer-content">
          <div className="footer-links">
            <li>Home</li>
            <li>Event</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </div>
          <div className="footer-media">
            <p>Follow us on</p>
            <span className="media-links">
              <a href="" key={"instagram"}>
                <InstagramOutlined color="#222222" className="icon instagram" />
              </a>
              <a href="" key={"linkedin"}>
                <LinkedinFilled className="icon linkedin" />
              </a>
              <a href="" key={"discord"}>
                <DiscordIcon className="icon discord" />
              </a>
              <a href="" key={"twitter"}>
                <TwitterOutlined className="icon twitter" />
              </a>
            </span>
          </div>
        </div>
        <p className="copyright">
          Copyright © 2022 Namastey NFT - All Rights Reserved.
        </p>
      </section>
    </>
  );
}

export default Home;
