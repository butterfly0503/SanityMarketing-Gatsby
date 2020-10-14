import React, { useState } from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import images from "../constants/images"
import ServiceItem from "../components/service_item"
import { StaticQuery, graphql } from "gatsby"
import { DownloadOrderSection, GetStartedSection, GuaranteeSection } from "../components/sections"

const pageData = {
    bgImg: images.IMG_BG_SERVICES,
    title: "OUR SERVICES",
    subTitle: "Pick n’ mix",
    description: '',
    sentence: 'Small Business Marketing Services',
    checkItems: [
        'Set-up', 'PR', 'Digital Marketing', 'Supporting Services'
    ]
}

const categories = [
    {
        value: 'TECHNICAL',
        text: 'TECHNICAL'
    },
    {
        value: 'PR',
        text: 'PR'
    },
    {
        value: 'DM',
        text: 'Digital marketing'
    },
    {
        value: 'SS',
        text: 'Supporting Services'
    }
]

function getServices(data, category, filterPPR) {
    const services = [];
    data.allServicesJson.edges.forEach(service => {
        if (service.node.category == category) {
            if (!filterPPR || (filterPPR && service.node.ppr)) {
                services.push(
                    <ServiceItem key={service.node.id} data={service.node} />
                )
            }
        }
    });

    if (services.length == 0) {
        services.push(
            <div className="mx-auto my-10">No Data...</div>
        )
    }

    return services;
}


function ServicesPage() {
    const [curCategory, setCategory] = useState(categories[0].value)
    const [filterPPR, setFilter] = useState(false)

    return (
        <Layout pageData={pageData}>
            <SEO title="Services" />

            <div className="container px-12 md:px-24 pt-10 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 row-gap-4 col-gap-4 font-25 text-black mb-10">
                    <div className="bg-white shadow-md p-4 text-left">
                        Services can be chosen as one-off or monthly (rolling contract with 14-days notice)
                    </div>
                    <div className="bg-white shadow-md p-4 text-left">
                        If you choose to work with us you will be agreeing to our Terms & Conditions
                    </div>
                    <div className="bg-green shadow-md p-4 text-center">
                        Not sure what you need? <br />
                        Book a call with our team
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mb-16">
                    <p className="w-full md:w-1/5 font-20 text-black mb-4 md:mb-0">
                        Each service we offer will help you achieve your marketing goals in various (and varying) ways and we’ve made a point of telling you, in simple terms, what each service will do for your small business. Our
                        <span className="text-red-1"> Pick ‘N’ Mix services</span> work well when a collection of the services are used together (the whole is greater than the sum of its parts and all that).
                        <br /><br />
                        Start small and as results come in, we’ll give you a steer as to other services we’d recommend to add fuel to the fire.
                    </p>
                    <div className="w-full md:w-4/5 pl-0 md:pl-10">
                        <div className="flex flex-col sm:flex-row font-25 uppercase justify-between pb-12">
                            {
                                categories.map((category, index) =>
                                    <button className={"w-full sm:w-auto flex justify-center mr-4 " + (curCategory == category.value ? 'bg-yellow' : 'bg-red')}
                                        key={index} onClick={() => setCategory(category.value)}>
                                        <span className="py-px px-5 text-white my-auto text-center">
                                            {category.text}
                                        </span>
                                    </button>
                                )
                            }

                            <div className="w-full sm:w-auto flex justify-center bg-green">
                                <label className="py-px px-5 text-white my-auto text-center cursor-pointer">
                                    <input type="checkbox" className="mr-2" onChange={() => setFilter(!filterPPR)} />
                                    FILTER PAY PER RESULT
                                </label>
                            </div>


                        </div>
                        <div className="grid grid-cols-1 row-gap-10">

                            <StaticQuery
                                query={graphql`
                                query ServicesQuery{
                                    allServicesJson{
                                        edges {
                                            node {
                                                id
                                                title
                                                image
                                                price
                                                category
                                                ppr
                                                content
                                            }
                                        }
                                    }
                                }                    
                                `}
                                render={data => <>{getServices(data, curCategory, filterPPR)}</>}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <DownloadOrderSection />

            <GuaranteeSection />

            <GetStartedSection />

        </Layout>
    );
}


export default ServicesPage;

