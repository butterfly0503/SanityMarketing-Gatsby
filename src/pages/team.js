import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import images from "../constants/images"
import { DownloadOrderSection, GetStartedSection, PopularServiceSection } from "../components/sections"

const pageData = {
    bgImg: images.IMG_BG_TEAM,
    title: "OUR TEAM",
    subTitle: "the folks that help",
    description: '',
    sentence: 'The power team behind your campaigns',
    checkItems: [
        'Content Managers', 'PR Strategist', 'Copy Writers', 'SEO Specialists'
    ]
}

function TeamPage() {
    return (
        <Layout pageData={pageData}>
            <SEO title="Our Team" />

            <div className="container px-12 md:px-24 pt-10 pb-16 bg-white">
                <div className="flex flex-col md:flex-row mb-4 md:mb-0">
                    <div className="mx-auto md:mx-0">
                        <img src={images.MEMBER_JORDAN} hclassName="object-none" />
                    </div>
                    <div className="w-full md:w-2/5 ml-0 md:ml-10 mt-4 md:mt-20">
                        <p className="font-34">Jordan Baker</p>
                        <p className="font-20 text-red-1 mb-4">THE BIG CHEESE</p>
                        <p className="font-20 mb-8">A disillusioned Chief Of Staff for banks, young(er) Jordan wrote a regular blog on life in London, before being approached to write freelance articles for the likes of The Gay UK, The Gay Times, QX Magazine and the Mail Online during his spare time.</p>
                        <button className="bg-red font-22 text-white px-3 py-1">FIND OUT MORE</button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse mb-4 md:mb-0 mt-2 md:-mt-24">
                    <div className="mx-auto md:mx-0">
                        <img src={images.MEMBER_RILEY} hclassName="object-none" />
                    </div>
                    <div className="w-full md:w-2/5 mr-0 md:mr-10 mt-0 md:mt-20">
                        <p className="font-34">Riley Gardiner</p>
                        <p className="font-20 text-red-1 mb-4">HEAD OF DIGITAL MARKETING</p>
                        <p className="font-20 mb-8">From the land of maple syrup and ice hockey (Canada), Riley is the core cogs of Sanity’s Digital Marketing game. Whether it’s overseeing daily social media posts, or developing ads you just can’t ignore, Riley knows the difference between good Digital Marketing, and Digital Marketing that’ll knock you off your seat.</p>
                        <button className="bg-red font-22 text-white px-3 py-1">FIND OUT MORE</button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mb-4 md:mb-0 mt-2 md:-mt-24">
                    <div className="mx-auto md:mx-0">
                        <img src={images.MEMBER_NICK} hclassName="object-none" />
                    </div>
                    <div className="w-full md:w-2/5 ml-0 md:ml-10 mt-4 md:mt-20">
                        <p className="font-34">Nick Izevbigie</p>
                        <p className="font-20 text-red-1 mb-4">Marketing Assistant</p>
                        <p className="font-20 mb-8">Xavier comes from Swindon, a town that no one seems to have heard of in London, despite being only 80 miles away. He has stemmed from a creative background, having studied Fashion Imaging and Illustration at the University of the Arts London.</p>
                        <button className="bg-red font-22 text-white px-3 py-1">FIND OUT MORE</button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse mb-4 md:mb-0 mt-2 md:-mt-24">
                    <div className="mx-auto md:mx-0">
                        <img src={images.MEMBER_NATHAN} hclassName="object-none" />
                    </div>

                    <div className="w-full md:w-2/5 mr-0 md:mr-10 mt-0 md:mt-20">
                        <p className="font-34">Nathan Grace</p>
                        <p className="font-20 text-red-1 mb-4">VIDEOGRAPHER & PHOTOGRAPHER</p>
                        <p className="font-20 mb-8">As Sanity’s in-house leading camera man, Nathan joined the team in May 2019 as successor to a role previously filled by his brother; what can we say? We like to keep it in the family!</p>
                        <button className="bg-red font-22 text-white px-3 py-1">FIND OUT MORE</button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mb-4 md:mb-0 mt-2 md:-mt-24">
                    <div className="mx-auto md:mx-0">
                        <img src={images.MEMBER_LISA} hclassName="object-none" />
                    </div>
                    <div className="w-full md:w-2/5 ml-0 md:ml-10 mt-4 md:mt-20">
                        <p className="font-34">Lisa Hart</p>
                        <p className="font-20 text-red-1 mb-4">SOCIAL MEDIA CONSULTANT</p>
                        <p className="font-20 mb-8">Having joined the Sanity team back in March 2019, East London-native Lisa has bought a welcomed fresh pair of eyes to our Social Media game; and she expertly oversees the online activity of all our clients and how their platforms are interacting with new customers. </p>
                        <button className="bg-red font-22 text-white px-3 py-1">FIND OUT MORE</button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse  mb-4 md:mb-0 mt-2 md:-mt-24">
                    <div className="mx-auto md:mx-0">
                        <img src={images.MEMBER_LOLA} hclassName="object-none" />
                    </div>
                    <div className="w-full md:w-2/5 mr-0 md:mr-10 mt-0 md:mt-20">
                        <p className="font-34">Lola</p>
                        <p className="font-20 text-red-1 mb-4">THE CHIHUAHUA</p>
                        <p className="font-20 mb-8">It would be nothing short of an insult to describe Lola as just a team mascot; because she’s worthy of so much more. An international fashion icon, an influencer, artist and Chihuahua rights pioneer are just a handful of the titles we could bestow upon her; but of course, we could never do her justice.</p>
                        <button className="bg-red font-22 text-white px-3 py-1">FIND OUT MORE</button>
                    </div>
                </div>
            </div>

            <DownloadOrderSection />

            <PopularServiceSection />

            <GetStartedSection />

        </Layout>
    );
}


export default TeamPage;

