import  List  from "../components/List";
import { useState, useEffect } from "react";
import { Circles } from "react-loader-spinner";
import { useQuery } from "@tanstack/react-query";

const api = 'https://dummyjson.com/products?limit=100';
function Home() {
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch(api).then((res) => res.json())
    })
    if (isLoading) return <h1>LOADING products..............</h1>
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className="container ">   
            {<List list={data.products}/>}
        </div>
    )
}

export default Home;