/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Cart = ({ selectedCourse, remaining, totalCredit }) => {
  return (
    <div className="w-64 border-2 bg-gray-50 rounded-lg p-4 mb-4">
      <h5 className="py-2 text-blue-500 font-semibold text-base">
        Credit Hour Remaining {remaining}hr
      </h5>
      <hr />

      <h3 className="py-2 font-semibold text-base">Course Name: </h3>
      <ol>
        {selectedCourse.map((course, index) => (
          <li className="text-gray-500" key={course.id}>
            {index + 1}. {course.title}
          </li>
        ))}
      </ol>
      <hr className="my-2" />
      <h5>Total Credit Hour : {totalCredit}</h5>
    </div>
  );
};

export default Cart;
