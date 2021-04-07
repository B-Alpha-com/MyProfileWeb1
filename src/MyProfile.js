import React from "react";
import "./WebPage.css";
const MyProfile = ({ onshow }) => {
  return (
    <div className="container1">
      <section className="sec-1">
        <h1 className="h1">You are Welcome to Olasode Mubarak's Page</h1>
        <p className="p">
          I am a graduate of Yaba College of Technology,disciplined in the field
          of <span className="business-span">Business Administration</span>.
          <br />
          I completed my National Youth Service Corps in the year
          2019.Subsequently, i hunted for several jobs but with no positive
          returns.
          <br />
          My passion for technology, especially in the field of Computer
          Programming started becoming consuming and a knock on my consciousness
          to become awake to my potential in this field.
          <br />I was highly motivated by my passion for problem solving, as it
          become more glaring that technology is the leading tool in solving
          emerging humanity challenges in this era and era to come.
        </p>
      </section>
      <section className="sec-2">
        <p className="p1">
          I am married, with three lovely kids, two boys and a girl
        </p>
      </section>
      <div className="button-div">
        <button type="button" onClick={onshow} className="pagebutton">
          Home
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
