import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPageSize, setTotalPageSize] = useState(0);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=d6d5170182f94a8482c367a00d2e9180&page=${page}&pageSize=10`;
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles);
    setTotalPageSize(parseData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    updateNews();
  }, []);

  // const handlePrev = async () => {
  //   setPage(page - 1);
  //   updateNews();
  // };

  // const handleNext = async () => {
  //   setPage(page + 1);
  //   updateNews();
  // };

  const fetchMoreData = async () => {
    // console.log(totalPageSize)
    // console.log(articles.length)
    setPage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=d6d5170182f94a8482c367a00d2e9180&page=${page}&pageSize=10`;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
  };

  return (
    <>
      <div className="container my-3">
        <h1 className="text-center my-3">News Headlines - Today</h1>
        
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalPageSize}
          loader={<Spinner />}
        >
        <div className="container row row-cols-1 row-cols-md-4">
          {
          articles.map((element) => {
              return (
                <NewsItem
                  key={element.urlToImage}
                  source={element.source.name}
                  publishedAt={element.publishedAt}
                  urlToImage={element.urlToImage}
                  title={element.title}
                  description={element.description}
                />
              );
            })}
        </div>
        </InfiniteScroll>
      </div>
      
    </>
  );
};

export default News;
