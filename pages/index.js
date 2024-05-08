// import {Header1,Header2,Header3,Header4,Location,Footer} from "@/components";

import Footer from "@/components/Footer";
import { Header1 } from "@/components/Header1";
import { Header2 } from "@/components/Header2";
import Header3 from "@/components/Header3";
import Header4 from "@/components/Header4";
import Header5 from "@/components/Header5";
import { Location } from "@/components/Location";
import Head from "next/head";

export default function Home() {
  return (
    <div>
     <Head>
        <title>OYO</title>
      </Head>
      <Header1 />
      <Header2 />
      <Header3 />
      <Header4 />
      <Header5/>
      <Location />
      <Footer />
    </div>
  );
}
