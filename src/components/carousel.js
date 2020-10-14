import React from "react"
import images from "../constants/images"

class Carousel extends React.Component {
    render() {
        return (
            <div className="carousel relative mt-4 md:-mt-24">
                <div className="carousel-inner1 relative overflow-hidden w-full my-auto">
                    <img src={images.IMG_TESTIMONIAL_BG} className="object-fill" />
                    <input className="carousel-open hidden" type="radio" id="carousel-1" name="carousel" defaultChecked />
                    <div className="carousel-item absolute opacity-0 bottom-0 mx-auto w-full">
                        <div className="pb-8 mx-auto flex justify-center">
                            {/* Screen 1 */}
                            <img src={images.IMG_TESTIMONIAL1} className="object-fill" />
                        </div>
                    </div>
                    {/* <label htmlFor="carousel-3" className="prev control-1 ml-4 absolute cursor-pointer hidden z-10 inset-y-0 left-0 bottom-0 my-auto">
                        <div className="flex flex-col justify-end">
                            <img src={images.IMG_LEFT_ARROW} className="object-none" />
                        </div>
                    </label> */}
                    <label htmlFor="carousel-2" className="next control-1 mr-4 absolute cursor-pointer hidden z-10 inset-y-0 right-0 my-auto">
                        <div className="flex flex-col justify-end">
                            <img src={images.IMG_RIGHT_ARROW} className="object-none" />
                        </div>
                    </label>

                    <input className="carousel-open hidden" type="radio" id="carousel-2" name="carousel" />
                    <div className="carousel-item absolute opacity-0 bottom-0 mx-auto w-full">
                        <div className="pb-8 mx-auto flex justify-center">
                            {/* Screen 1 */}
                            <img src={images.IMG_TESTIMONIAL2} className="object-fill" />
                        </div>
                    </div>
                    {/* <label htmlFor="carousel-1" className="prev control-2 ml-4 absolute cursor-pointer hidden z-10 inset-y-0 left-0 bottom-0 my-auto">
                        <div className="flex flex-col justify-end">
                            <img src={images.IMG_LEFT_ARROW} className="object-none" />
                        </div>
                    </label> */}
                    <label htmlFor="carousel-3" className="next control-2 mr-4 absolute cursor-pointer hidden z-10 inset-y-0 right-0 my-auto">
                        <div className="flex flex-col justify-end">
                            <img src={images.IMG_RIGHT_ARROW} className="object-none" />
                        </div>
                    </label>

                    <input className="carousel-open hidden" type="radio" id="carousel-3" name="carousel" />
                    <div className="carousel-item absolute opacity-0 bottom-0 mx-auto w-full">
                        <div className="pb-8 mx-auto flex justify-center">
                            {/* Screen 1 */}
                            <img src={images.IMG_TESTIMONIAL3} className="object-fill" />
                        </div>
                    </div>
                    {/* <label htmlFor="carousel-2" className="prev control-3 ml-4 absolute cursor-pointer hidden z-10 inset-y-0 left-0 bottom-0 my-auto">
                        <div className="flex flex-col justify-end">
                            <img src={images.IMG_LEFT_ARROW} className="object-none" />
                        </div>
                    </label> */}
                    <label htmlFor="carousel-1" className="next control-3 mr-4 absolute cursor-pointer hidden z-10 inset-y-0 right-0 my-auto">
                        <div className="flex flex-col justify-end">
                            <img src={images.IMG_RIGHT_ARROW} className="object-none" />
                        </div>
                    </label>
                </div>
            </div >

        );
    }
}

export default Carousel;