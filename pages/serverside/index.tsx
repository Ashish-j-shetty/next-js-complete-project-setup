import { GetServerSideProps } from "next";
import React from "react";

//executed on server
//called always on every page request. Even on production

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      myFavNum: Math.random(),
    },
  };
};

export default function ServerSide(props) {
  return <div>Dynamic number {props.myFavNum}</div>;
}
