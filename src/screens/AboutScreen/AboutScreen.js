import React from "react";
import Footer from "../../components/Footer.js/Footer";
import PageHero from "../../components/PageHero/PageHero";
import "./AboutScreen.css";

const AboutScreen = () => {
  return (
    <>
      <main>
        <PageHero title="about" />
        <section className="page section section-center about">
          <img
            src={process.env.PUBLIC_URL + "/images/hero-bcg.jpeg"}
            alt="nice desk"
          />
          <article>
            <div className="title">
              <h2>our story</h2>
              <div className="underline"></div>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              accusantium sapiente tempora sed dolore esse deserunt eaque
              excepturi, delectus error accusamus vel eligendi, omnis beatae.
              Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
              dolore, obcaecati incidunt sequi blanditiis est exercitationem
              molestiae delectus saepe odio eligendi modi porro eaque in libero
              minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
              ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
              similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
              iste.
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutScreen;
