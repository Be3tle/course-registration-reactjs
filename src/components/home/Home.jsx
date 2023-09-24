/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";

const Home = () => {
  const [allCourse, setAllCourse] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const budget = 20;

  useEffect(() => {
    fetch("public/data.json")
      .then((res) => res.json())
      .then((data) => setAllCourse(data));
  }, []);

  const handleSelectCourse = (course) => {
    const isExist = selectedCourse.find((item) => item.id === course.id);

    if (isExist) {
      return alert("Already selected");
    }

    const updatedSelectedCourse = [...selectedCourse, course];
    let totalCredit = 0;

    updatedSelectedCourse.forEach((item) => {
      totalCredit += parseInt(item.credit);
    });

    const remaining = budget - totalCredit;

    if (remaining < 0) {
      return alert("Sorry, you reached your credit limit.");
    }

    setSelectedCourse(updatedSelectedCourse);
    setTotalCredit(totalCredit);
    setRemaining(remaining);
  };

  return (
    <div className="container mx-auto">
      <div className="home-container flex justify-between gap-5">
        <div className="card-container grid grid-cols-3 gap-4">
          {allCourse.map((course) => (
            <div
              key={course.id}
              className="card w-64 border-2 bg-gray-50 rounded-lg p-2 mb-4 "
            >
              <img className="rounded-md w-full" src={course.img} alt="" />
              <h2 className="pt-2 px-2 text-sm font-semibold">
                {course.title}
              </h2>
              <p className="text-sm font-normal text-gray-500 px-2">
                {course.description}
              </p>
              <div className="flex justify-between px-2">
                <p>Price: {course.price}</p>
                <p>Credit: {course.credit} hr</p>
              </div>
              <button
                onClick={() => handleSelectCourse(course)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mt-2 mx-2"
              >
                Select
              </button>
            </div>
          ))}
        </div>

        <div className="cart-container">
          <Cart
            selectedCourse={selectedCourse}
            remaining={remaining}
            totalCredit={totalCredit}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
