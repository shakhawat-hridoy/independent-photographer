import React from "react";
import avatar from "../../images/male-avatar.jpg";

const About = () => {
  return (
    <div className="w-100">
      <div className="d-flex   justify-content-center align-items-center w-50 mx-auto m-4 border rounded-3 shadow-lg">
        <div className="text-center w-50">
          <img
            height={250}
            width={250}
            className="rounded-circle"
            src={avatar}
            alt=""
          />
          <h5>
            <b>Shakhawat Hossain Hridoy</b>
          </h5>
          <p>
            Being a student of computer science my goal is to pursue my career
            in that particular field.Thats why i have joid this course so that i
            can scale up my skills and make my future smoother through the
            knowledge i gained from here.As its all about my own field and
            potential carrer option i'm trying really hard to pay full
            concentration on this course and to learn as much as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
