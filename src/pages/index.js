import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import images from "../constants/images"
import { Link } from 'gatsby'
import { GetStartedSection } from "../components/sections"
import Carousel from "../components/carousel"


const pageData = {
  bgImg: images.IMG_BG_HOME,
  title: "PAY PER RESULTS",
  subTitle: "Marketing Agency",
  description: 'Putting the <span class="text-white">Sanity</span> into <br />small business <span class="text-white">marketing</span>',
  sentence: 'What marketing goals can we help you with?',
  checkItems: [
    'Pay Per Results PR', '50+ Pick ‘N’ Mix Marketing Services', 'Low Fees', 'No Contracts'
  ]
}

function IndexPage() {
  return (
    <Layout pageData={pageData}>
      <SEO
        title="Home"
      />

      <div className="flex flex-col md:flex-row px-12 md:px-24 pt-10 bg-white container">
        <p className="w-full md:w-1/2 lg:w-3/5 font-38 mr-4">
          <span className="text-red">We’re big on results…</span><br />
          in fact, for some of our services that’s the only way you’d pay us. With that in mind, we have over 50 services to help you achieve your small business marketing goals – as ever, with your ROI in mind.
        </p>
        <div className="flex w-auto md:w-auto flex-col justify-end flex-shrink-0 ">
          <div className="mx-auto md:mx-0">
            <img src={images.IMG_JORDAN} className="object-fill bottom-0" />
          </div>

        </div>

        <div className="flex w-full md:w-auto flex-col justify-between mb-6 mt-6 md:mt-0" >

          <div>
            <p className="font-20 text-black-1 mb-10">
              Not sure which services will best support your marketing goals?
            <br /><br />
            Book a <a href="#"><span className="uppercase text-red">free 15 minute call</span></a> with our team
            </p>
            <button className="button-green px-8">Let&apos;s begin</button>
          </div>
          <p className="text-red font-40 mt-6 md:mt-0 ml-0 md:ml-10 font-second">Jordan</p>
        </div>
      </div>

      <div className="bg-black">
        <div className="container py-5 px-2 md:px-18 lg:px-32">
          <p className="text-center text-white font-34">As seen on…</p>
          <div className="grid row-gap-4 md:flex justify-center md:justify-between mt-6 md:mt-0">
            <img src={images.IMG_BBC_RADIO} className="object-fill mx-auto" />
            <img src={images.IMG_BBC} className="object-fill mx-auto" />
            <img src={images.IMG_MO} className="object-fill mx-auto" />
            <img src={images.IMG_ES} className="object-none mx-auto" />
          </div>
        </div>
      </div>
      <div className="bg-red">
        <div className="container flex flex-col md:flex-row px-2 pt-10">
          <div className="w-full md:w-1/4 mx-auto md:mx-0 flex flex-col justify-end">
            <img src={images.IMG_RILEY} className="object-none md:object-fill flex-shrink-0 mt-4 md:mt-32 bottom-0 hidden md:block" />
          </div>
          <div className="w-full md:w-3/4 ml-8">
            <p className="text-white font-58">WHY SANITY?</p>
            <p className="text-black font-40 leading-none uppercase font-second pr-12" style={{ marginTop: -25 }}>Putting the sanity into <span className="text-white">small business marketing</span></p>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 font-20 text-white col-gap-16 pr-12 pb-8 font-hairline">
              <p>
                Small business marketing can be a minefield – a big, dangerous, confusing, expensive minefield. There’s tons and tons of insanity to avoid – whether it’s hiring multiple freelancers (where the whole marketing effort can be a little disjointed – with confused messaging, ugly and inconsistent assets and incoherent tracking); hiring a posh agency who love to talk strategy and want draconian fixed term contracts and thousands and thousands of your hard-earned money; or doing it all yourself and perhaps being a little lost or off-base as to what will resonate with your customers or the press.
                <br />
                <br />
              That’s why we exist – putting the Sanity into small business marketing. Small business marketing shouldn’t be just ‘going through the motions’ and rigid – it should be result-focused and adaptable – so we have tens of services you can choose from (either one-off services or monthly rolling) – most of them working together and complimenting each other nicely (marketing works best when it flows).
            </p>
              <div className="flex flex-col justify-between">
                <p>
                  Small business marketing shouldn’t be expensive – it’s not rocket science – so we charge low fees to our small business clients.

                  Small business marketing shouldn’t be a gamble – we’ve worked with (and continue to work with) hundreds and hundreds of people just like you – so we have a good feel for what works and what doesn’t (check out our testimonials and case studies). All these clients also gives us tons of clout with journalists with plenty of stories, expert comments and review opportunities to offer (that’s why we offer Pay per Results PR – we know we can deliver and we like to put our money where our mouth is).
                <br />
                  <br />
                And that’s why we proudly use the slogan: Putting the Sanity into small business marketing.
              </p>
                <p className="font-40 text-red-2 font-second">Riley</p>
              </div>

            </div>
          </div>
        </div>

      </div>

      <div className="container px-12 md:px-24 py-10">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 leading-none mr-0 md:mr-10">
            <p className="uppercase font-58 text-red z-20 relative">CLIENTS</p>
            <p className="uppercase font-40 text-black z-10 relative font-medium font-second" style={{ marginTop: -20 }}>A FEW HAPPY CHAPPIES</p>
            <div className="grid  grid-cols-2 sm:grid-cols-3 col-gap-4 row-gap-8">
              <div className="mx-auto">
                <img src={images.IMG_CLIENT1} className="object-fill" />
              </div>
              <div className="mx-auto">
                <img src={images.IMG_CLIENT2} className="object-fill" />
              </div>
              <div className="mx-auto">
                <img src={images.IMG_CLIENT3} className="object-fill" />
              </div>
              <div className="mx-auto">
                <img src={images.IMG_CLIENT4} className="object-fill" />
              </div>
              <div className="mx-auto">
                <img src={images.IMG_CLIENT5} className="object-fill" />
              </div>
              <div className="mx-auto">
                <img src={images.IMG_CLIENT6} className="object-fill" />
              </div>
              <div className="mx-auto">
                <img src={images.IMG_CLIENT7} className="object-fill" />
              </div>
              <div className="mx-auto">
                <img src={images.IMG_CLIENT8} className="object-fill" />
              </div>
              <div className="mx-auto">
                <img src={images.IMG_CLIENT9} className="object-fill" />
              </div>
            </div>
          </div>
          <div className="mx-auto">

            <Carousel />
          </div>
        </div>
        <div className="flex justify-center mt-6 md:mt-0">
          <Link to="/casestudy" className="button-yellow px-6 mx-auto">
            Our case studies
          </Link>
        </div>
      </div>

      <div className="container px-12 md:px-24 pt-2 leading-none" style={{ marginBottom: -21 }}>
        <p className="uppercase font-58 text-red z-20 relative">INSTAGRAM</p>
        <p className="font-40 text-black z-10 relative uppercase font-normal font-second" style={{ marginTop: -20 }}>A FEW HAPPY Snappies</p>
      </div>

      <div className="bg-grey">
        <div className="container grid grid-cols-2 md:grid-cols-4 py-4">
          <div className="mx-auto">
            <img src={images.IMG_INS1} className="object-fill" />
          </div>
          <div className="mx-auto">
            <img src={images.IMG_INS2} className="object-fill" />
          </div>
          <div className="mx-auto">
            <img src={images.IMG_INS3} className="object-fill" />
          </div>
          <div className="mx-auto">
            <img src={images.IMG_INS4} className="object-fill" />
          </div>
        </div>
      </div>

      <GetStartedSection />

    </Layout>
  );
}


export default IndexPage;

