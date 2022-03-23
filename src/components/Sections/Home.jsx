import React from "react";
import DesktopNav from "../../components/Navbar/DesktopNav";
import CardSlider from "../Utils/CardSlider";
import ArrowLeft from "../../assets/icons/svgs/arrow_left.svg";
import ArrowRight from "../../assets/icons/svgs/arrow_right.svg";
import CountDown from "../Utils/CountDown";
import NamasteButton from "../Utils/NamasteButton";
import Logo from "../../assets/icons/svgs/namaste-logo.svg";
import DropDown from "../Utils/DropDown";
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
        <div className="home-content">
          <div className="home-text">
            <h2 className="home-header">Namastey NFT presents</h2>
            <h2 className="home-header red">NFT Bengaluru 2022</h2>
            <p className="home-description">
              Namastey NFT is a space for all of us to hang out, share ideas,
              have fun, and engage in meaningful discussions. We believe in
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{" "}
            </p>
          </div>
          <CardSlider />
        </div>
        <div className="sponsor-logo">
          <img className="left arrow" src={ArrowLeft} alt="" />
          <p className="sponsor-text">Sponsor Logos</p>
          <img className="right arrow" src={ArrowRight} alt="" />
        </div>
      </section>
      <section className="event">
        <p className="event-text">14-15th May, 2022</p>
        <p className="event-text place">Bengaluru Exhibition Hall</p>
        <CountDown />
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
      <section className="poap">
        <p className="poap-header">Let's celebrate a special shared memory</p>
        <p className="poap-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          suscipit sunt aut cum? Quis deserunt delectus repudiandae autem
          tempore reprehenderit voluptatibus rem ipsa repellat voluptas earum
          quas placeat, eius repellendus ad impedit exercitationem vero
          consectetur numquam sequi. Voluptates, ducimus placeat.
        </p>
        <NamasteButton text={"Collect a poap"} />
      </section>
      <section className="footer">
        <div className="footer-logo">
          <img src={Logo} alt="" />
          <h2 className="logo-text">Namaste NFT</h2>
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
                <InstagramOutlined className="icon instagram" />
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
