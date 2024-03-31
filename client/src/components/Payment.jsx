import React, { useState } from "react";
import axios from "axios"; 

function Payment() {
  const [form, setForm] = useState({ amount: "" });

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => { 
    e.preventDefault();
    axios.post("/api/payment", form)
      .then((res) => {
        const { result } = res.data;
        window.location.href = result.link;
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-4">
      <h2>payment page</h2>
      <form className="m-4" onSubmit={onSubmit}>
        <input
          type="text"
          name="amount"
          className="form-control"
          value={form.amount}
          onChange={onChange}
        />
        <button type="submit" className="btn btn-primary mt-4">Pay</button> 
      </form>
    </div>
  );
}

export default Payment;
