import React, { useState, useEffect } from 'react'
import moment from 'moment';
function TopNews(props) {
    let [newsArr, setNewsArr] = useState([]);
    


    useEffect(() => {
        const apikey = '86cc46fb6da4448ba0395a6b9114eeca';
        const url = `https://newsapi.org/v2/top-headlines?q=${props.topic}${props.useCountry}${props.category}&apiKey=${apikey}`;
        props.setloading(true);

        let fetchData = async () => {
            let response = await fetch(url);
            let json = await response.json();
            setNewsArr(json.articles);
            props.setloading(false);
        };
        fetchData();
    }
        , [props.topic, props.category, props.useCountry]);

    return !props.loading && newsArr.map((element) => {

        return (
            <div className='container my-4 text-start' key={element.url} >
                <div className="card mx-auto flex-row col-xl-10 col-md-12 col-lg-12 col-sm-12" style={{ borderRadius: '8px' }}>
                    <div className="card-body col-sd-12" style={{ width: '70%' }}>
                        <a style={{ textDecoration: 'none', color: 'black' }} target="_blank" href={element.url} > <h5 className="card-title">{element.title}</h5></a>
                        <p className="card-text">{element.description}</p>
                        <p>{moment.utc(element.publishedAt).local().startOf('day').fromNow()}</p>
                    </div>
                    <img className='img-fluid' src={element.urlToImage} alt="" style={{ width: '20%', padding: '1% 1% 1%', borderRadius: '22px' }} />
                </div>
            </div>
        )
    });

}

export default TopNews
