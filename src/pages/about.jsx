import Head from "next/head";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <Main page="About"/>
    </>
  );
}
