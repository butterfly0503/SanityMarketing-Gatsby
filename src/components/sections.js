import React from 'react'
import images from "../constants/images"
import { Link } from 'gatsby'

export function GetStartedSection() {
    return (
        <div className="bg-red">
            <div className="flex container px-10 relative">
                <div className="hidden md:block absolute bottom-0">
                    <p className="font-40 text-red-2 font-second uppercase absolute" style={{ marginLeft: "70%", marginTop: "35%" }}>LOLA</p>
                    <img src={images.IMG_LOLA} className=" object-fill relative bottom-0" style={{ marginTop: -35 }} />
                </div>

                <div className="w-0 md:w-2/5">

                </div>
                <div className="py-10 pl-0 md:pl-16 mx-auto md:mx-0">
                    <p className="font-64 text-white z-20 leading-none relative">READY FOR RESULTS?</p>
                    <p className="font-80 text-black z-10 leading-none relative mb-4 uppercase font-bold" style={{ marginTop: -28 }}>let’s get started</p>
                    <div>
                        <div className="flex">
                            <img className="object-none mr-2" src={images.IC_CHECKBOX} />
                            <span className="text-white font-27 my-auto">Pay Per Results PR</span>
                        </div>
                        <div className="flex">
                            <img className="object-none mr-2" src={images.IC_CHECKBOX} />
                            <span className="text-white font-27 my-auto">50+ Pick ‘N’ Mix Marketing Services</span>
                        </div>
                        <div className="flex">
                            <img className="object-none mr-2" src={images.IC_CHECKBOX} />
                            <span className="text-white font-27 my-auto">Low Fees</span>
                        </div>
                        <div className="flex mb-4">
                            <img className="object-none mr-2" src={images.IC_CHECKBOX} />
                            <span className="text-white font-27 my-auto">No Contracts</span>
                        </div>
                        <button className="button-green px-8">Let&apos;s begin</button>
                    </div>
                </div>


            </div>
        </div>
    );
}

export function DownloadOrderSection() {
    return (
        <div className="bg-red">
            <div className="container flex px-12 md:px-24 justify-between">
                <img src={images.IMG_NICK} className="hidden md:block object-none relative bottom-0" style={{ marginTop: -100 }} />
                <form className="leading-none py-20 px-0 md:px-10 mx-auto md:mx-0 w-full md:w-2/3">
                    <p className="uppercase font-58 text-white">
                        SAMPLE ORDERS & PRICE LISTS
                    </p>
                    <p className="font-40 font-second text-black relative mb-6" style={{ marginTop: -12 }}>
                        Download our ordering guide
                    </p>
                    <input className="form-input rounded-none w-full appearance-none px-8 py-4 text-black placeholder-black font-34 mb-4"
                        placeholder="Enter your email address" type="email" required />

                    <button className="button-yellow px-10 py-5 mx-auto">Download</button>
                </form>
            </div>
        </div>
    );
}

export function GuaranteeSection() {
    return (
        <div className="container px-12 md:px-24 py-10 bg-white flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 leading-none mt-10">
                <p className="uppercase font-58 text-black z-20 relative">Guarantee</p>
                <p className="uppercase font-54 text-red z-10 relative font-medium font-second" style={{ marginTop: -16 }}>100% Satisfaction</p>
                <div className="flex flex-col md:flex-row mt-16 justify-between">
                    <img src={images.IC_GURANTEE} className="object-none" />
                    <span className="text-black font-20 mr-10 mt-4 md:mt-0 w-full md:w-1/2 leading-snug">
                        We want you to feel confident in every purchase you make with us, which is why we are offering a 100% satisfaction guarantee. If for any reason you are not satisfied with our product, contact our support within 30 days of receiving your report and we’ll work with you to make it right!
                    </span>
                </div>
            </div>
            <div className="w-full md:w-1/2 mx-auto">
                <img src={images.IMG_TESTIMONIAL_G} className="object-fill mx-auto" />
            </div>
        </div>
    );
}

export function PopularServiceSection() {
    return (
        <div className="container px-12 md:px-24 py-10 bg-white flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 leading-none mt-10 mb-8">
                <p className="uppercase font-58 text-red z-20 relative">POPULAR SERVICES</p>
                <p className="uppercase font-40 text-black z-10 relative mb-8 font-medium font-second" style={{ marginTop: -16 }}>how we can help</p>
                <Link to="/services" className="button-yellow px-12 mx-auto">
                    BROWSE ALL SERVICES
                </Link>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 col-gap-4 row-gap-6 mb-4">
                <div className="bg-white shadow-md py-4 relative">
                    <div className="absolute bottom-0 flex justify-center w-full" style={{ marginBottom: -20 }}>
                        <button className="bg-red font-22 py-px px-4 text-white">VIEW</button>
                    </div>
                    <img src={images.IMG_PR} className="object-fill mb-1 mx-auto" />
                    <p className="text-center font-34">Press Releases</p>
                </div>
                <div className="bg-white shadow-md py-4 relative">
                    <div className="absolute bottom-0 flex justify-center w-full" style={{ marginBottom: -20 }}>
                        <button className="bg-red font-22 py-px px-4 text-white">VIEW</button>
                    </div>
                    <img src={images.IMG_PR} className="object-fill mb-1 mx-auto" />
                    <p className="text-center font-34">Press Releases</p>
                </div>
                <div className="bg-white shadow-md py-4 relative">
                    <div className="absolute bottom-0 flex justify-center w-full" style={{ marginBottom: -20 }}>
                        <button className="bg-red font-22 py-px px-4 text-white">VIEW</button>
                    </div>
                    <img src={images.IMG_PR} className="object-fill mb-1 mx-auto" />
                    <p className="text-center font-34">Press Releases</p>
                </div>
            </div>
        </div>
    );
}
