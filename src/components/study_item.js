import React, { useState } from "react"
import PropTypes from "prop-types";


const textLimit = 160
function getLimitedText(text) {
    if (text.length > textLimit) {
        return text.substr(0, textLimit) + " ...";
    }
    return text;
}

function StudyItem({ data }) {
    const [isExpanded, toggleExpansion] = useState(false)
    return (
        <div className="bg-white shadow-md relative">
            <div className={`${(data.content.length <= textLimit || isExpanded) ? `hidden` : `block`} absolute bottom-0 flex justify-center w-full`} style={{ marginBottom: -20 }}>
                <button className="bg-red font-22 py-px px-4 text-white" onClick={() => toggleExpansion(!isExpanded)}>Read More</button>
            </div>
            <div className="flex flex-col md:flex-row p-4">
                <div className="mx-auto md:my-auto">
                    <img src={data.image} className="object-fill " />
                </div>

                <div className="pl-0 md:pl-4 w-full md:w-3/4 pb-8">
                    <p className="mt-4 font-34 text-black text-center md:text-left">
                        {data.title}
                    </p>
                    <p className="font-43 text-red-1 text-center md:text-left">
                        {data.topic}
                    </p>
                    <div className="flex justify-between font-20">
                        <span className="text-red-1 mr-4">
                            WHAT
                    </span>
                        <span>
                            {isExpanded ? data.content : getLimitedText(data.content)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

StudyItem.propTypes = {
    data: PropTypes.object.isRequired
};

export default StudyItem;