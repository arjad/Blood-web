import React from 'react'
import RightClick from '../special-effects/RightClick';
import Chat from "../special-effects/chat";
import Main from "../home/comp/mains";
import Table from "../home/comp/table";
import FAQS from "../home/comp/FAQS";
import Benefits from '../home/comp/Benifits';
import Team from "../home/comp/Team";
import Footer from "../../common/footer/footer"

export default function Home() 
{
    return (<>
        <RightClick/>
        <Chat/>    
        <Main/>
        <Table/>
        <Benefits/>
        <FAQS/>
        <Team/>
        <Footer/>
    </>)
}
