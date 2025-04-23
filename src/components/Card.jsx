import React, { useState, useEffect } from "react";
import instructionsData from "../data/instructions.json";
import { Lightbulb } from "lucide-react";
import Button from "./Button";
import Hint from "./Hint";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";
import { useNavigate } from "react-router";

const Card = () => {
    const [hintVisibility, setHintVisibility] = useState({});
    const [currentPage, setCurrentPage] = useState(0);
    const [instructions, setInstructions] = useState([]);
    const [checkedSteps, setCheckedSteps] = useState({});
    const navigation = useNavigate();

    useEffect(() => {
        setInstructions(instructionsData);
    }, []);

    useEffect(() => {
        if (instructions[currentPage] && !checkedSteps[currentPage]) {
            setCheckedSteps((prev) => ({
                ...prev,
                [currentPage]: instructions[currentPage].steps.map(() => false),
            }));
        }
    }, [instructions, currentPage]);

    const toggleCheckbox = (stepIndex) => {
        setCheckedSteps((prev) => {
            const updatedPage = [...prev[currentPage]];
            updatedPage[stepIndex] = !updatedPage[stepIndex];
            return {
                ...prev,
                [currentPage]: updatedPage,
            };
        });
    };

    const toggleHint = (stepIndex) => {
        setHintVisibility((prev) => ({
            ...prev,
            [`${currentPage}-${stepIndex}`]:
                !prev[`${currentPage}-${stepIndex}`],
        }));
    };

    const nextPage = () => {
        if (currentPage === instructions.length - 1) {
            navigation("/end"); // navigate to End.jsx
        } else {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const backPage = () => {
        if (currentPage === 0) {
            navigation("/tutorial");
        }
        setCurrentPage((prev) => Math.max(prev - 1, 0));
    };

    if (instructions.length === 0) {
        return <p>Loading instructions...</p>;
    }

    const { title, steps } = instructions[currentPage];
    const checkboxes = checkedSteps[currentPage] || [];

    return (
        <div className="bg-gray-100 p-4 rounded shadow w-full mt-10">
            <h2 className="text-3xl font-semibold mb-3">{title}</h2>
            <div className="space-y-4 mb-4">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="bg-white border rounded px-4 py-3 w-full"
                    >
                        <div className="flex flex-col justify-between items-start">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={checkboxes[index] || false}
                                        onChange={() => toggleCheckbox(index)}
                                        className="mr-3"
                                    />
                                    <label className="mr-3">{step.text}</label>
                                </div>
                                <div className="">
                                    <Button
                                        onClick={() => toggleHint(index)}
                                        variant="hint"
                                    >
                                        <Lightbulb size={25} /> Hint
                                    </Button>
                                </div>
                            </div>

                            <Hint
                                text={step.hint}
                                isOpen={
                                    hintVisibility[`${currentPage}-${index}`]
                                }
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-start gap-2">
                <Button
                    variant="next"
                    className="bg-red-600 hover:bg-red-700 text-1xl"
                    onClick={backPage}
                >
                    <ArrowBigLeftDash className="mr-2" /> Back
                </Button>
                <Button
                    variant="next"
                    // variant={
                    //     currentPage === instructions.length - 1
                    //         ? "disabled" // still styled differently
                    //         : "next"
                    // }
                    onClick={nextPage}
                >
                    {currentPage === instructions.length - 1
                        ? "Finish"
                        : "Next"}
                    <ArrowBigRightDash className="ml-2" />
                </Button>
            </div>
        </div>
    );
};

export default Card;
