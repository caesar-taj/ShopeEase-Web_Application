import React from 'react'
import { Link } from 'react-router-dom';

// **/_ LocationSprade _/**

const title = "More Then 60,000 Customers";

const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From North America',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From Greenland',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From Asia',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From South America',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From Africa',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From Oceania',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From Siberia',
    },
]


const LocationSprade = () => {
    return (
        <div className="clients-section style-2 padding-tb">
            <div className="conainer">
                <div className="section-header text-center">
                    <h2 className="title">{title}</h2>
                    <p>{desc}</p>
                </div>
                {/* main content */}
                <div className="section-wrapper">
                    <div className="clients">
                        {
                            clientsList.map((val, i) => (
                                <div key={i} className="client-list">
                                    <Link to="/sign-up" className="client-content">
                                        <span>{val.text}</span>
                                    </Link>
                                    <div className="client-thumb">
                                        <img src={val.imgUrl}></img>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationSprade