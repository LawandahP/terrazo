import React from 'react'
import Image from 'next/image';

const facts = [
    {
        img: "/images/icon-image/fact1.png",
        data: "800",
        text: "Total Projects"
    },
    {
        img: "/images/icon-image/fact2.png",
        data: "78",
        text: "Satff Members"
    },
    {
        img: "/images/icon-image/fact3.png",
        data: "3200",
        text: "Hours of Work"
    },
    {
        img: "/images/icon-image/fact4.png",
        data: "36",
        text: "Counties Covered"
    },

]
const Facts = () => {
    return (
        <section id="facts" className="facts-area dark-bg">
            <div className="container">
                <div className="facts-wrapper">
                    <div className="row">
                        {facts.map((fact) => (
                            <div key={fact.text} className="col-md-3 col-sm-6 ts-facts mt-5 mt-sm-0">
                                <div className="ts-facts-img">
                                    <Image
                                        src={fact.img}
                                        alt="prevics"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="ts-facts-content">
                                    <h2 className="ts-facts-num"><span className="counterUp" data-count={fact.data}>0</span></h2>
                                    <h3 className="ts-facts-title">{fact.text}</h3>
                                </div>
                            </div>
                        ))}
                        
                    </div> 
                </div>

            </div>
        </section>
    )
}

export default Facts