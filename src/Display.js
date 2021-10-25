import React, { useEffect, useState, Fragment } from "react";

export default function Display({ state }) {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch(
        `https://sheet.best/api/sheets/${process.env.REACT_APP_GOOGLE_API_KEY}`
      );
      const data = await res.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [state]);

  return (
    <>
      <h1>data from google sheets</h1>
      <ul>
        {data.map((item, i) => (
          <Fragment key={i}>
            <li>Name -- {item.name}</li>
            <li>Age - {item.age}</li>
            <li>Salary - {item.salary}</li>
            <li>Hobby - {item.hobby}</li>
            <br />
          </Fragment>
        ))}
      </ul>
    </>
  );
}
