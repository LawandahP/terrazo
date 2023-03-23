import React from 'react'


const values = [
    {   
        headingId: "headingOne",
        ariaExpand: "true",
        target: "#collapseOne",
        descId: "collapseOne",
        descShow: "show",
        title: "Safety",
        description: "We prioritize the well-being of our employees, customers, and partners by maintaining a safe working environment through proper training and adherence to protocols."
    },

    {   
        headingId: "headingTwo",
        ariaExpand: "false",
        target: "#collapseTwo",
        descId: "collapseTwo",
        descShow: "",
        title: "Customer Service",
        description: "We strive to exceed our customers' expectations by providing timely, courteous, and knowledgeable service, and by always putting their needs first."
    },

    {   
        headingId: "headingThree",
        ariaExpand: "false",
        target: "#collapseThree",
        descId: "collapseThree",
        descShow: "",
        title: "Integrity",
        description: "We conduct our business with honesty, transparency, and accountability, and uphold ethical standards in all our interactions with customers, employees, and stakeholders."
    },

]

const points1 = [
    {
        icon: "fas fa-trophy",
        text: "We've Repution for Excellence"
    },
    {
        icon: "fas fa-sliders-h",
        text: "We Build Partnerships"
    },
]

const points2 = [
    {
        icon: "fas fa-thumbs-up",
        text: "Guided by Commitment"
    },
    {
        icon: "fas fa-users",
        text: "A Team of Professionals"
    },
]
const About = () => {
  return (
    <section id="ts-features"  className="ts-features">
        <div  className="container">
            <div  className="row">
                <div  className="col-lg-6">
                <div  className="ts-intro">
                    <h2  className="into-title">About Us</h2>
                    <h3  className="into-sub-title">We deliver landmark projects</h3>
                    <p>
                        Prevics has a proven track record of delivering landmark projects, demonstrating our expertise and commitment to quality in every aspect of our work. We have successfully completed high-profile projects in various sectors, including commercial, residential, and institutional, earning a reputation for excellence and professionalism in the industry.
                    </p>
                </div>

                <div  className="gap-20"></div>

                    <div  className="row">
                        {points1.map((point) => (
                            <div key={point.text} className="col-md-6">
                                <div  className="ts-service-box">
                                    <span  className="ts-service-icon">
                                    <i  className={point.icon}></i>
                                    </span>
                                    <div  className="ts-service-box-content">
                                    <h3  className="service-box-title">{point.text}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div  className="row">
                        {points2.map((point) => (
                            <div key={point.text} className="col-md-6">
                                <div  className="ts-service-box">
                                    <span  className="ts-service-icon">
                                    <i  className={point.icon}></i>
                                    </span>
                                    <div  className="ts-service-box-content">
                                    <h3  className="service-box-title">{point.text}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div  className="col-lg-6 mt-4 mt-lg-0">
                <h3  className="into-sub-title">Our Values</h3>
                <p>
                Our values are safety-first, customer-centric, and integrity-driven, guiding us to deliver exceptional service with honesty and accountability.
                </p>

                <div  className="accordion accordion-group" id="our-values-accordion">

                    {/* {values.map((value) => (
                        <div key={value.title} className="card">
                            <div className="card-header p-0 bg-transparent" id={`${value.headingId}`}>
                                <h2  className="mb-0">
                                <button  
                                    className="btn btn-block text-left" 
                                    type="button" data-toggle="collapse" 
                                    data-target={value.target} 
                                    aria-expanded={value.ariaExpand} 
                                    aria-controls={value.descId}
                                >
                                    {value.title}
                                </button>
                                </h2>
                            </div>
                        
                            <div id={value.descId} className={`collapse ${value.descShow}`} aria-labelledby={value.headingId} data-parent="#our-values-accordion">
                                <div  className="card-body">
                                    {value.description}
                                </div>
                            </div>
                        </div>
                        ))} */}
                    
                    <div  className="card">
                        <div  className="card-header p-0 bg-transparent" id="headingOne">
                            <h2  className="mb-0">
                            <button  className="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Safety
                            </button>
                            </h2>
                        </div>
                        <div id="collapseOne"  className="collapse" aria-labelledby="headingOne" data-parent="#our-values-accordion">
                            <div  className="card-body">
                            We prioritize the well-being of our employees, customers, and partners by maintaining a safe working environment through proper training and adherence to protocols.                        </div>
                    </div>

                    <div  className="card">
                        <div  className="card-header p-0 bg-transparent" id="headingTwo">
                            <h2  className="mb-0">
                            <button  className="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Customer Service
                            </button>
                            </h2>
                        </div>
                        <div id="collapseTwo"  className="collapse" aria-labelledby="headingTwo" data-parent="#our-values-accordion">
                            <div  className="card-body">
                            We strive to exceed our customers expectations by providing timely, courteous, and knowledgeable service, and by always putting their needs first.                            </div>
                        </div>
                    </div>
                    <div  className="card">
                        <div  className="card-header p-0 bg-transparent" id="headingThree">
                            <h2  className="mb-0">
                            <button  className="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Integrity
                            </button>
                            </h2>
                        </div>
                        <div id="collapseThree"  className="collapse" aria-labelledby="headingThree" data-parent="#our-values-accordion">
                            <div  className="card-body">
                            We conduct our business with honesty, transparency, and accountability, and uphold ethical standards in all our interactions with customers, employees, and stakeholders.                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</section>

  )
}

export default About