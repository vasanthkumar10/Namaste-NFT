import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import DesktopNav from "../../components/Navbar/DesktopNav";
import DesktopBanner from "../Banner.jsx/DesktopBanner";
import MobileBanner from "../Banner.jsx/MobileBanner";
import CardSlider from "../Utils/CardSlider";
import CountDown from "../Utils/CountDown";
import NamasteButton from "../Utils/NamasteButton";
import LogoBlack from "../../assets/banner/Namastey_black.png";
import DropDown from "../Utils/DropDown";
import Mission from "../../assets/banner/mission-art.png";
import Poap from "../../assets/banner/poap-art.png";
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
      content:
        "Namastey NFT is a community of like-minded and forward-thinking individuals that aim to empower and support emerging creators through an artist driven community fund.",
    },
    {
      title: "Our purpose?",
      content: `We provide mentorship and access to creators looking to enter the world of NFTs, and are proud advocates of building an inclusive space through community! \n
      Namastey NFT-Bengaluru 2022 intends to democratize the understanding of the world of NFTs by bringing together artists, collectors, developers, influencers and pioneers of the web 3.0 industry.
      `,
    },
    {
      title: "Why should I participate?",
      content:
        "The secret to success in the NFT space is community. We invest time, share ideas, collaborate, get to know each other on Twitter Spaces, support and buy each other’s art and projects. This power of community is unlike anything we’ve seen before. Whether you’re new to the space, or whether you’re a veteran, Namastey NFT and its members will welcome you with open arms!",
    },
    {
      title: "What will be the mint price?",
      content: "To be announced.",
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
          <ScrollAnimation animateIn="fadeInLeft">
            <h2 className="mission-title">NAMASTE NFT's MISSION</h2>
            <p>We are Indian community of early web 3.0 adopters!</p>
            <p>
              As a group of like-minded & forward-thinking individuals, we aim
              to empower and support emerging creators.
            </p>
            <p>
              We provide mentorship and access to those who need it, and are
              proud advocates of building an inclusive space through community!
            </p>
            <p>
              Namastey NFT-Bengaluru 2022 is intended to democratize the
              understading of the world of NFTs by bringing together artists,
              collectors, developers, influencers and pioneers of the Web 3.0
              industry
            </p>
          </ScrollAnimation>
        </div>
        <img src={Mission} alt="" />
      </section>
      <section className="poap-wrapper">
        <img src={Poap} alt="" />
        <div className="poap">
          <ScrollAnimation animateIn="fadeInRight">
            <p className="poap-header">
              Let's celebrate a special shared memory
            </p>
            <p className="poap-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              suscipit sunt aut cum? Quis deserunt delectus repudiandae autem
              tempore reprehenderit voluptatibus rem ipsa repellat voluptas
              earum quas placeat, eius repellendus ad impedit exercitationem
              vero consectetur numquam sequi. Voluptates, ducimus placeat.
            </p>
          </ScrollAnimation>
          <NamasteButton text={"Collect a poap"} />
        </div>
      </section>
      <section className="artists">
        <div className="artists-content">
          <ScrollAnimation animateIn="fadeInLeft">
            <h2 className="artists-title">
              300 NFTs from Artists all over the world
            </h2>
            <p className="artists-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              facere beatae saepe iusto, nesciunt assumenda ab quae nobis dicta
              quas ipsam laboriosam molestiae pariatur libero maxime eos?
              Fugiat, dolorem molestiae.
            </p>
          </ScrollAnimation>
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
          <ScrollAnimation animateIn="fadeIn">
            <span>
              <p className="volunteer-header">
                Want to be a part of this cool community?
              </p>
              <p className="volunteer-text">
                We are always looking for volunteers to help us make our vision
                a reality. We'll help you fid a way to volunteer that best suits
                you.
              </p>
            </span>
          </ScrollAnimation>
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
            <span className="media-links-footer">
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
