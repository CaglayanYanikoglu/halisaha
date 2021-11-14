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
  const response = await fetch("http://localhost:3000/api/feed?type=JF");
  const { matches, players } = await response.json();
  return {
    props: { matches, players },
  };
};

export default JotformSoccer;
