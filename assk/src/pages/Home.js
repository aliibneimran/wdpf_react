import React from "react";
import News from "../components/News";
import Portion from "../components/Portion";
import Partner from "../components/Partner";
import Team from "../components/Team";
import Query from "../components/Query";
import UpComing from "../components/UpComing";
import OnGoing from "../components/OnGoing";
import Slider from "../components/Slider";
import ReadyFlat from "../components/ReadyFlat";


export default function Home() {
  return (
    <>
    <Slider></Slider>
    <ReadyFlat></ReadyFlat>
    <OnGoing></OnGoing>
    <UpComing></UpComing>
    <Query></Query>
    <Team></Team>
    <Partner></Partner>
    <Portion></Portion>
    <News></News>
    </>
  );
}
