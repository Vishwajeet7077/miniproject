import React from "react";
import SearchBar from "./searchBar/searchBar";
import Div1 from './homeDiv1/homeDiv1'
import Div2 from "./homeDiv2/homeDiv2";
import Div3 from "./homeDiv3/homeDiv3";
import footer from "./footer/footer";

function Home(){
    return(
        <>
        <SearchBar />
        <Div1 />
        <Div2 />
        <Div3 />
        <footer />
        </>
    );
}

export default Home;