import React from 'react'


const NewsItem = (props) => {

    let {urlToImage,title,description,url,publishedAt,source} = props
    
    return (
  
      <div className="col mb-3">
        <div className="card" id = {url}>
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1",left:"87%"}}>
          {source}
          <span class="visually-hidden">unread messages</span>
        </span>
          <img src={urlToImage?urlToImage:"https://dims.apnews.com/dims4/default/1e69744/2147483647/strip/true/crop/3368x1895+0+175/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ff6%2Fbb%2F06417857f11ae73b8025aac66588%2Fb117b1d48f0945f1b89c47744eb9c158"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description?description:""}</p>
            <p class="card-text my-1"><small class="text-muted">{new Date(publishedAt).toGMTString()}</small></p>
            <a href={url} className="btn btn-primary" target="_blank" rel="noreferrer">Read more</a>
          </div>
        </div>
      </div>
         
    )
  
}

export default NewsItem



        