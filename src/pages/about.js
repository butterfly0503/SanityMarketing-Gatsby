import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import images from "../constants/images"
import { DownloadOrderSection, GetStartedSection, PopularServiceSection } from "../components/sections"

const pageData = {
    bgImg: images.IMG_BG_ABOUT,
    title: "WHO WE ARE",
    subTitle: "Why we make headlines",
    description: '',
    sentence: 'The power team behind your campaigns',
    checkItems: [
        'Content Managers', 'PR Strategist', 'Copy Writers', 'SEO Specialists'
    ]
}

function AboutPage() {
    return (
        <Layout pageData={pageData}>
            <SEO title="About" />

            <div className="flex px-24 pt-10 bg-white h-56">
                <p>Content...</p>
            </div>

            <DownloadOrderSection />

            <PopularServiceSection />

            <GetStartedSection />

        </Layout>
    );
}


export default AboutPage;

