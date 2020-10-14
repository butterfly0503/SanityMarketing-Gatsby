import React, { useState } from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import images from "../constants/images"
import StudyItem from "../components/study_item"
import { StaticQuery, graphql } from "gatsby"
import { shuffle } from "../utils/helpers"
import { DownloadOrderSection, GetStartedSection, GuaranteeSection } from "../components/sections"

const pageData = {
    bgImg: images.IMG_BG_STUDY,
    title: "CASE STUDIES",
    subTitle: "Lock n’ load",
    description: '',
    sentence: 'Proof is in the pudding',
    checkItems: [
        'Hospitality', 'Technology', 'Food & Drink', 'Health, Beauty & Fitness', 'Fashion'
    ]
}

const categories = [
    {
        value: '',
        text: 'ALL'
    },
    {
        value: 'BEAUTY',
        text: 'BEAUTY'
    },
    {
        value: 'DENTISTRY',
        text: 'Dentistry'
    },
    {
        value: 'EXPERTS',
        text: 'EXPERTS'
    },
    {
        value: 'FASHION',
        text: 'Fashion'
    },
    {
        value: 'FITNESS',
        text: 'Fitness'
    },
    {
        value: 'FOOD & DRINK',
        text: 'FOOD & DRINK'
    },
    {
        value: 'HOSPITALITY',
        text: 'Hospitality'
    }
]

function getCaseStudies(data, category) {
    const caseStudies = [];
    shuffle(data.allCasestudiesJson.edges).forEach(item => {
        if (category == "" || item.node.category == category) {
            caseStudies.push(
                <StudyItem key={item.node.id} data={item.node} />
            ) 
        }
    });
    if(caseStudies.length == 0){
        caseStudies.push(
            <div className="mx-auto my-10">No Data...</div>
        )
    }

    return caseStudies;
}

function CaseStudyPage() {
    const [curCategory, setCategory] = useState(categories[0].value)
    return (
        <Layout pageData={pageData}>
            <SEO title="Case Studies"/>

            <div className="container px-12 md:px-24 pt-10 bg-white">
                <div className="flex flex-col md:flex-row mb-16">
                    <p className="w-full md:w-1/5 font-24 text-black">
                        In 2 months we have boosted a clients social traffic by 827%
                        <br /><br />
                        In 7 days, we generated £1700+ in leads for a client
                        <br /><br />
                        Book online page traffic boosted 127%
                    </p>
                    <div className="w-full md:w-4/5 pl-0 md:pl-10">
                        <div className="flex overflow-x-auto font-25 uppercase justify-between pb-6 mb-6">
                            {
                                categories.map((category, index) =>
                                    <button className={"flex-shrink-0 bg-red py-px px-5 text-white mr-4 uppercase " + (curCategory == category.value ? 'bg-yellow' : 'bg-red')} key={index} onClick={() => setCategory(category.value)}>
                                        {category.text}
                                    </button>
                                )
                            }

                        </div>
                        <div className="grid grid-cols-1 row-gap-10">
                            <StaticQuery
                                query={graphql`
                                query CaseStudiesQuery{
                                    allCasestudiesJson{
                                        edges {
                                            node {
                                                id
                                                title
                                                image
                                                topic
                                                category
                                                content
                                            }
                                        }
                                    }
                                }                    
                                `}
                                render={data => <>{getCaseStudies(data, curCategory)}</>}
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


export default CaseStudyPage;

