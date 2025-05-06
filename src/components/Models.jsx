import React, { useState } from "react";
import Button from "./Button";

const Models = () => {
    const [currentEmbed, setCurrentEmbed] = useState("#embed1");

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="w-full aspect-video mb-4 relative">
                <iframe
                    src="https://www.thinglink.com/view/scene/1973398432970179428"
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
                        currentEmbed === "#embed1"
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                    }`}
                    allowFullScreen
                ></iframe>
                <iframe
                    src="https://www.thinglink.com/view/scene/1956636364363530726"
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
