// import React from 'react'

import Banner from "./components/Banner"
import ReadyProject from "./components/ReadyProject"
import GoingProject from "./components/GoingProject"
import CommingProject from "./components/CommingProject"
import Query from "./components/Query"
import Team from "./components/Team"
import Partner from "./components/Partner"
import Promotion from "./components/Promotion"
import News from "./components/News"

export default function Home() {
  return (
    <>
        <Banner></Banner>
        {/* <!--======= Ready Flat portion =========--> */}
        <ReadyProject></ReadyProject>
        {/* <!--=======On Going Flat portion=========--> */}
        <GoingProject></GoingProject>
        <CommingProject></CommingProject>
        {/* <!--======= Box of Loan,Query =========--> */}
        <Query></Query>
        {/* <!--======= TEAM =========--> */}
        <Team></Team>      
        {/* <!--======= PARTHNER =========--> */}
        <Partner></Partner>
        {/* <!-- ads portion --> */}
        <Promotion></Promotion>
        {/* <!--======= news/media =========--> */}
        <News></News>
    </>
  )
}
