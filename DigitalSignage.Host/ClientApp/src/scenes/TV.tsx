import React, { useState, useEffect } from "react";
import useAxios from "../lib/axios/useAxios";
import styled from "@emotion/styled";

type DisplayContentProps = {
  data: any;
  index: number;
};

// const fakeData = ["https://reports.itsutra.com/managerReport/seth?hide=true", "https://reports.itsutra.com/challengeRank?hide=true"]

const DisplayContent: React.SFC<DisplayContentProps> = ({ data, index }) => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        width="100%"
        height="100%"
        src={data && data[index].webUrl}
        title="Some"  
        style={{border: "none"}}
      ></iframe>
    </div>
  );
};

const TV: React.SFC = () => {
  const [index, setIndex] = useState(0);

  const [{ data }] = useAxios({
    url: "api/DigitalSignageDemo/Get",
  });

  data && console.log(data);

  const handleChange = () => {
    let dataLength = data && data.length;
    if (dataLength - 1 === index) {
      setIndex(0);
    } else {
      setIndex((prev: number) => prev + 1);
    }
  };

  useEffect(() => {
    let seconds = data ? data[index].seconds * 1000 : 1000;
    let interval = setInterval(handleChange, seconds);
    return () => {
      clearInterval(interval);
    };
  }, [data, index]);

  return <DisplayContent data={data} index={index} />;
};

export default TV;
