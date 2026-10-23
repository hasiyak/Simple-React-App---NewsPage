import React, { useEffect, useState } from 'react';
import NewsItems from './NewsItems';



const NewsBoard = ({category}) => {
const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch(`https://newsdata.io/api/1/latest?apikey=pub_441e9f67067e41ef9e505b901b30d08e&country=lk&language=si&category=${category}`)
      .then(response => response.json())
      .then(data => {
        if (data && data.results) {
          setNewsList(data.results);
        }
      })
      .catch(error => console.error('Error:', error));
  }, [category]);


    return (
        <div>
            <h2 className='text-center'>Top <span className='badge bg-danger'>News</span></h2>
            {newsList.map((news, index)=>{
                return <NewsItems key={index} title={news.title} description={news.description} src={news.image_url} url={news.link}/>
            })}
        </div>
    );
};

export default NewsBoard;
