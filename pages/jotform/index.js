import React from "react";
import SoccerMain from "../../components/SoccerMain";

const JotformSoccer = (props) => {
  console.log(props);
  return (
    <>
      <SoccerMain {...props} />
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: process.env.API_URL + "feed?type=JF",
  });
  const { matches, players } = await response.json();
  return {
    props: { matches, players },
  };
};

export default JotformSoccer;
