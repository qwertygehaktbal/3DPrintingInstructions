import React, { useState } from "react";
import Button from "./Button";

const Models = () => {
    const [currentEmbed, setCurrentEmbed] = useState("#embed1");

    return (
        <div className="justify-center items-center bg-gray-100 p-4 rounded shadow w-full min-h-[90vh] flex flex-col">
            <div className="w-full aspect-video mb-4 relative">
                <iframe
                    width="700"
                    height="700"
                    src="https://www.thinglink.com/view/scene/1973398432970179428"
                    className={` top-0 left-0 transition-opacity duration-300 ${
                        currentEmbed === "#embed1"
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                    }`}
                    allowFullScreen
                ></iframe>
                <iframe
                    src="https://www.thinglink.com/view/scene/1973684327728284134"
                    width="700"
                    height="700"
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
                        currentEmbed === "#embed2"
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                    }`}
                    allowFullScreen
                ></iframe>
            </div>
            <div className="flex">
                <Button
                    variant={
                        currentEmbed === "#embed1" ? "toggleOn" : "toggleOff"
                    }
                    onClick={() => setCurrentEmbed("#embed1")}
                >
                    3D Printer
                </Button>
                <Button
                    variant={
                        currentEmbed === "#embed2" ? "toggleOn" : "toggleOff"
                    }
                    onClick={() => setCurrentEmbed("#embed2")}
                >
                    DryBox
                </Button>
            </div>
        </div>
    );
};

export default Models;
