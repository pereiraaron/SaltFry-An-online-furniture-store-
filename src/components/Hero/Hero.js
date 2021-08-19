import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="section-center">
        <article className="content">
          <h1>
            design your <br />
            comfort zone
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <Link to="/products" className="btn hero-btn">
            shop now
          </Link>
        </article>
        <article className="img-container">
          <img
            src={process.env.PUBLIC_URL + "/images/hero-bcg.jpeg"}
            alt="nice table"
            className="main-img"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/hero-bcg-2.jpeg"}
            alt="person working"
            className="accent-img"
          />
        </article>
      </div>
    </div>
  );
};

export default Hero;
