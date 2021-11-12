import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      myFavNum: Math.random() * 10,
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { name: "pageA" },
      },
      { params: { name: "pageB" } },
    ],
    fallback: true,
  };
};

export default function Fruits(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>laoding</h1>;
  }

  function takeMeHome() {
    router.push("/");
  }

  return (
    <div>
      <h3>the query passed is {router.query.name} </h3>

      <h5>the prop passed is{props.myFavNum} </h5>

      <button onClick={takeMeHome}>Take me home</button>
    </div>
  );
}
