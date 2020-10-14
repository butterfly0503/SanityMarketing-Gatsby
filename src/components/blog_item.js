import React from 'react'
import images from "../constants/images"

function BlogItem() {
    return (
        <div className="bg-white shadow-md p-2 relative">
            <img src={images.IMG_BLOG_COVER1} className="object-none mx-auto" />
            <div className="px-6 pt-2 pb-4">
                <p className="font-27 text-black">
                    Blog title
                </p>
                <p className="text-red font-24">
                    CATEGORY
                </p>
                <button className="bg-red font-18 py-px px-4 text-white uppercase">Read More  </button>
            </div>
        </div>
    );
}

export default BlogItem;