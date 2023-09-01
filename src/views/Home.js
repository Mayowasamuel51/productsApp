import  List  from "../components/List";
import { useState, useEffect } from "react";
import { Circles } from "react-loader-spinner";
import { useQuery } from "react-query";

const api = 'https://dummyjson.com/products?limit=100';
function Home() {
    const [maidata,setMaindata] = useState([])
    // const [data, setData] = useState([]);
    // const [loader, setLoader] = useState(false)
    // const [error, setError] = useState("")
    // const fetchproducts = async () => {
    //     try {
    //         setError("")
    //         setLoader(true)  //loading will start from here 
    //         const resposne = await fetch(api)
    //         if (!resposne.ok) {
    //             throw new Error("something happened")
    //         }
    //         const data = await resposne.json()
    //         setData(data.products)
    //         setLoader(false)  // remove the true 
    //         setError("")
    //         console.log(data.products)
    //     } catch (err) {
    //         console.log(err.message)
    //         setError(err.message) /// set the error state 
    //     }
    // }
    // useEffect(() => {
    //     fetchproducts()
    // }, []);
    const { isLoading, error,  data} = useQuery('products', () =>
        fetch(api).then(res => {
           return res.json()
        }).then((data) => {
            console.log(data.products)  
            setMaindata(data.products)
        })
    )
    if (isLoading) return <h1>LOADING products..............</h1>
    if (error) return 'An error has occurred: ' + error.message
    
    return (
        <div className="container ">   
            {<List list={maidata}/>}
        </div>
    )
}

export default Home;