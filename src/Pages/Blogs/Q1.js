import React from "react";

const Q1 = () => {
  return (
    <div>
      <p>
        <b>Q1.Authentication vs Authorization</b>
      </p>
      <p>
        Authentication is a process which determines the identity of a
        particular user or object. Whether the object is enlisted in the system
        or not.
        <br />
        <b>For example:</b> A person might or might not have an account on 'ABC
        bank'.
        <br />
        On the otherhand-
        <br />
        Authorization determines the level of accessability.
        <br />
        <b>For example:</b> All the customers and employess's of 'ABC bank' are
        authenticated by the authority. But an employee has access to the
        internel files but a customer doesn't. Again the <b>Manager</b> has more
        power than the ordinary employees though all of them belongs to the same
        class 'employee'.
      </p>
    </div>
  );
};

export default Q1;
