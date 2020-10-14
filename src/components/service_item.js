import React, { useState } from "react"
import PropTypes from "prop-types";

const textLimit = 160
function getLimitedText(text) {
    if (text.length > textLimit) {
        return text.substr(0, textLimit) + " ...";
    }
    return text;
}

function ServiceItem({ data }) {
    const [isExpanded, toggleExpansion] = useState(false)

    return (
        <div className="bg-white shadow-md relative">

            <div className={`${(data.content.length <= textLimit || isExpanded) ? `hidden` : `block`} absolute bottom-0 flex justify-center w-full`} style={{ marginBottom: -20 }}>
                <button className="bg-red font-22 py-px px-4 text-white" onClick={() => toggleExpansion(!isExpanded)}>EXPAND</button>
            </div>


            <div className="flex flex-col md:flex-row p-4">
                <div className="m-auto">
                    <img src={data.image} className="object-fill" />
                </div>
                <div className="pl-0 md:pl-4 w-full md:w-3/4">
                    {
                        data.ppr ?
                            <div>
                                <span className="bg-green py-px px-5 text-green mr-4 font-27 uppercase text-right float-right">
                                    Pay per result
                                </span>
                            </div> : ''
                    }
                    <p className="mt-0 md:mt-4 font-34 text-black">{data.title}</p>
                    <p className="font-43 text-red-1">£{data.price}</p>
                    <div className="flex font-20">
                        <span className="text-red-1 mr-4">WHAT</span>
                        <span>
                            {isExpanded ? data.content : getLimitedText(data.content)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

ServiceItem.propTypes = {
    data: PropTypes.object.isRequired
};

export default ServiceItem;