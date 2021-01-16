import React from 'react';
import {Link} from "react-router-dom";
import "./searchpage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "./useGoogleSearch";
// import Response from "../response"; //Mock Response
import Search from "./search";



function SearchPage() {

    const [{term}, dispatch] = useStateValue();

    // LIVE API CALL
     const {data} = useGoogleSearch(term);

    // //MOCK API CALL
    // const data = Response;
    // console.log(data);

    return (
        <div className="searchPage">
            <div className = "searchPage_header">
            <Link to="/">
            <img 
            className="searchPage_logo"
            src="https://www.google.it/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"  
            alt="" 
            />
            </Link>   
                <div className="searchPage_headerBody">
                     <Search hideButtons/> 
                </div>
            </div>
            
            {/* {true && ( */}
                <div className="searchPage_results">
                    <p className="searchPage_resultCount">
                        About {data?.searchInformation.formattedTotalResults} 
                        results ( {data?.searchInformation.formattedSearchTime} seconds)
                        for {term}
                    </p>

                    {data?.items.map(item =>(
                        <div classsName="searchPage_result">
                            
                            <a className="searchPage_resultLink" href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img className="searchPage_resultImage" 
                                    src={item.pagemap?.cse_image?.length > 0 &&item.pagemap?.cse_image[0]?.src} 
                                    alt=""/>
                                )}
                                {item.displayLink}▼
                            </a>

                            <a className="searchPage_resultTitle" href={item.link}>
                            <h3>{item.snippet}</h3>  
                            </a> 
                            
                            <p className="searchPage_resultSnippet">{item.snippet}</p>  
                        </div>

                    ))}
                </div>
            {/* )} */}
            
            
        </div>
    )
}

export default SearchPage

