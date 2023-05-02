import React from "react";
import './style.css';
import { Link } from "react-router-dom";

function AboutUs () {
  // Define the data for the footer
  const title = "About Us";

    const description = "This is your very own all-inclusive website for your avid cigars needs and coinsurer essentials. With this website you’ll be able to buy cigars, humidors, hookahs, lighters, cutters, cases, ashtrays, and shirts!"; 

  const columns = [{
    title: "Third Parties",
    resources: [{
      name: "",
      link: "Humidor Haven Foundation"
    },{
      name: "",
      link: "Humidor Careers"
    },{
      name: "",
      link: "Find A Store"
    }]
  },{
    title: "Customer Care",
    resources: [{
      name: "",
      link: "Returns & Exchanges"
    },{
      name: "",
      link: "Subscribe"
    }]
  },{
    title: "Technical Support",
    resources: [{
      name: "",
      link: "Brand560on@gmail.com"
    },{
      name: "",
      link: "Manuela@gmail.com"
    },{
      name: "",
      link: "Jkutch2@yahoo.com"
     }]
  }]

return (
    <div className="AboutUs-container">
        <div>
            <h1>
            {title}
            </h1>
            <p>
            {description}
            </p>
                <div className="contact">
                {columns.map((c) => (    
                    <h3>
                        {c.title}

                    {c.resources.map((e) =>(
                        <div>
                        {e.name}
                        <Link to={e.link}>
                            <p>{e.link}</p>
                        </Link>
                        </div>
                    ))}   
                    </h3>
                ))}
                </div>
        </div>
    </div>
);
};

export default AboutUs;