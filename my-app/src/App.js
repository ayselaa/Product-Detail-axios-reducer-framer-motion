import Layout from "./components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import Routing from "./components/Layout/Routing";
import React, { useState, useEffect } from 'react'
import axios from "axios";

const App = () => {

   const [hits, setHits] = useState([])


   // Use Effect ve  Axiosla Api dan data cekmek

   useEffect(() => {
      const fetchData = async () => {
         const { data } = await axios.get
            (`https://hn.algolia.com/api/v1/search?query=covid19`);
         setHits(data.hits)
      };
      
      fetchData();
   }, []);

   return (
      <div className="App">
        
         <div style={{ marginLeft: "100px", backgroundColor: "lightBlue" }}>
            <ul>

               {/* {hits.map((hit) => {
                  return (
                     <li key={hit.objectID}>
                        {hit.title}</li>
                  )
               })} */}

            </ul>
         </div>


         <BrowserRouter>
            <Layout>
               <Routing />
            </Layout>
         </BrowserRouter>

      </div>
   )
}

export default App;
