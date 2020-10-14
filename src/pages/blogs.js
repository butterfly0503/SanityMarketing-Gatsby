import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import images from "../constants/images"
import BlogItem from "../components/blog_item"
import { DownloadOrderSection } from "../components/sections"

const pageData = {
    bgImg: images.IMG_BG_BLOG,
    title: "BLOG",
    subTitle: "Insights",
    description: '',
    sentence: 'Proof is in the pudding',
    checkItems: [
        'How-to', 'Insights', 'Guides', 'Resources'
    ]
}

function BlogsPage() {
    return (
        <Layout pageData={pageData}>
            <SEO title="Blogs"/>

            <div className="container px-12 md:px-24 pt-10 pb-20">
                <div className="flex overflow-x-auto font-25 uppercase justify-start md:justify-center pb-6 mb-6">
                    <span className="flex-shrink-0 bg-red py-px px-5 text-white mr-4">
                        ALL
                    </span>
                    <span className="flex-shrink-0 bg-yellow py-px px-5 text-white mr-4">
                        BEAUTY
                    </span>
                    <span className="flex-shrink-0 bg-red py-px px-5 text-white mr-4">
                        Dentistry
                    </span>
                    <span className="flex-shrink-0 bg-red py-px px-5 text-white mr-4">
                        EXPERTS
                    </span>
                    <span className="flex-shrink-0 bg-red py-px px-5 text-white mr-4">
                        Fashion
                    </span>
                    <span className="flex-shrink-0 bg-red py-px px-5 text-white mr-4">
                        Fitness
                    </span>
                    <span className="flex-shrink-0 bg-red py-px px-5 text-white mr-4">
                        F&D
                    </span>
                    <span className="flex-shrink-0 bg-red py-px px-5 text-white mr-4">
                        Hospitality
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 col-gap-4 row-gap-4">
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                </div>
                <div className="flex justify-center pt-20">
                    <button className="bg-red font-18 py-px px-4 text-white uppercase">Load More  </button>
                </div>
            </div>

            <DownloadOrderSection />

        </Layout>
    );
}


export default BlogsPage;

