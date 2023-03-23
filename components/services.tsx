import React from 'react'
import Image from 'next/image'


const services1 = [
    {
        img: "/images/icon-image/service-icon1.png",
        service: "Floor Installation",
        description: "Expert installation of high-quality terrazzo floors."
    },
    {
        img: "/images/icon-image/service-icon2.png",
        service: "Design",
        description: "Custom design and fabrication of terrazzo floors for unique spaces"
    },
    {
        img: "/images/icon-image/service-icon3.png",
        service: "Wall Panels",
        description: "Installation of decorative terrazzo wall panels for interior and exterior spaces."
    },

]

const services2 = [
    {
        img: "/images/icon-image/service-icon4.png",
        service: "Repair",
        description: "Repair of cracks, chips, and other damage to terrazzo floors."
    },
    {
        img: "/images/icon-image/service-icon5.png",
        service: "Polishing",
        description: "Polishing of terrazzo floors to a high-gloss finish"
    },
    {
        img: "/images/icon-image/service-icon6.png",
        service: "Sealing",
        description: "Application of sealants to protect and preserve the terrazzo floors"
    },
]

const Services = () => {
    return (
        <section id="ts-service-area" className="ts-service-area pb-0">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                    <h2 className="section-title">We Are Specialists In</h2>
                    <h3 className="section-sub-title">What We Do</h3>
                    </div>
                </div>
                
                
                <div className="row">
                    <div className="col-lg-4">
                        {services1.map((service) => (
                            <div key={service.service} className="ts-service-box d-flex">
                                <div className="ts-service-box-img">
                                    <Image
                                        // loader={myLoader}
                                        src={service.img}
                                        alt="prevics"
                                        width={50}
                                        height={50}
                                    />
                                </div>
                                <div className="ts-service-box-info">
                                    <h3 className="service-box-title"><a href="#">{service.service}</a></h3>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))}
                        

                        {/* <div className="ts-service-box d-flex">
                            <div className="ts-service-box-img">
                                <img loading="lazy" src="images/icon-image/service-icon2.png" alt="service-icon">
                            </div>
                            <div className="ts-service-box-info">
                                <h3 className="service-box-title"><a href="#">Building Remodels</a></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                            </div>
                        </div>

                        <div className="ts-service-box d-flex">
                            <div className="ts-service-box-img">
                                <img loading="lazy" src="images/icon-image/service-icon3.png"  alt="service-icon">
                            </div>
                            <div className="ts-service-box-info">
                                <h3 className="service-box-title"><a href="#">Interior Design</a></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                            </div>
                        </div> */}
                    </div>

                    <div className="col-lg-4 text-center">
                        <Image
                            // loader={myLoader}
                            src="/images/services/service-center2.png"
                            alt="prevics"
                            width={400}
                            height={500}
                        />
            
                    </div>

                    <div className="col-lg-4 mt-5 mt-lg-0 mb-4 mb-lg-0">
                        

                    {services2.map((service) => (
                        <div key={service.service} className="ts-service-box d-flex">
                            <div className="ts-service-box-img">
                                <Image
                                    // loader={myLoader}
                                    src={service.img}
                                    alt="prevics"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div className="ts-service-box-info">
                                <h3 className="service-box-title"><a href="#">{service.service}</a></h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                        
                    </div>
                </div>

            </div>
        </section>

    )
}

export default Services