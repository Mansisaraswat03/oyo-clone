// import {Header1,Header2,Header3,Header4,Location,Footer} from "@/components";

import Footer from "@/components/Footer";
import { Header1 } from "@/components/Header1";
import {Header2} from "@/components/Header2";
import Header3 from "@/components/Header3";
import Header4 from "@/components/Header4";
import { Location } from "@/components/Location";

export default function Home() {
  return (
   <div>
   <Header1/>
   <Header2/>
   <Header3/>
   <Header4/>
   <Location/>
   <Footer/>
   </div>
  );
}
