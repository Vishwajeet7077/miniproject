import React from "react";
import Navbar from "../navbar/navbar";
import SearchBar from "./searchBar/searchBar";
import Div1 from './homeDiv1/homeDiv1'
import Div2 from "./homeDiv2/homeDiv2";
import Div3 from "./homeDiv3/homeDiv3";
import Div4 from "./homeDiv4/homeDiv4";
import Footer from './footer/footer'

function Home(){
    return(
        <>
        <Navbar />
        <SearchBar />
        <Div1 />
        <Div3 />
        <Div2 />
        <Div4 />
        <Footer />
        </>
    );
}

export default Home;