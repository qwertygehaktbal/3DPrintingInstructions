import React from "react";
import Card from "../components/Card";
import Models from "../components/Models";

const Instructions = () => {
    return (
        <div className="container mx-auto p-4 min-h-screen">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/2">
                    <Card />
                </div>
                <div className="md:w-1/2">
                    <Models />
                </div>
            </div>
        </div>
    );
};

export default Instructions;
