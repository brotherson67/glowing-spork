import React from "react";

function News() {


    
    function getNews() {
        fetch("https://google-news.p.rapidapi.com/v1/topic_headlines?lang=en&country=US&topic=technology", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "google-news.p.rapidapi.com",
                "x-rapidapi-key": "9d3c447c71mshab965b88bda44e4p18105cjsn02f6b2ade870"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
    }
    return (
        <div>

        </div>
    )
}