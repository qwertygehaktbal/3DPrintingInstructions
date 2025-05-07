//
import React, { useState, useEffect } from "react";
import instructionsData from "../data/instructions.json";
import { Lightbulb, ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";
import Button from "./Button";
import Hint from "./Hint";
import { useNavigate } from "react-router";

const Card = () => {
    const [hintVisibility, setHintVisibility] = useState({});
    const [currentPage, setCurrentPage] = useState(0);
    const [instructions, setInstructions] = useState([]);
    const [checkedSteps, setCheckedSteps] = useState({});
    const [warningMessage, setWarningMessage] = useState("");
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
            navigation("/end");
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

    const showWarning = (message) => {
        setWarningMessage(message);
        setTimeout(() => {
            setWarningMessage("");
        }, 3000);
    };

    if (instructions.length === 0) {
        return <p>Loading instructions...</p>;
    }

    const { title, steps } = instructions[currentPage];
    const checkboxes = checkedSteps[currentPage] || [];

    return (
        <div className="bg-gray-100 p-4 rounded shadow w-full min-h-[90vh] flex flex-col">
            {warningMessage && (
                <div className="bg-yellow-200 text-yellow-900 border border-yellow-400 rounded px-4 py-2 mb-4">
                    {warningMessage}
                </div>
            )}
            <h2 className="text-3xl font-semibold mb-3">{title}</h2>
            <div className="flex-grow space-y-4">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="bg-white border rounded px-1.5 py-1.5 w-full"
                    >
                        <div className="flex flex-col justify-between items-start">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={checkboxes[index] || false}
                                        disabled={
                                            index > 0 && !checkboxes[index - 1]
                                        }
                                        onClick={() => {
                                            if (
                                                index > 0 &&
                                                !checkboxes[index - 1]
                                            ) {
                                                showWarning(
                                                    "Complete the previous step first."
                                                );
                                            }
                                        }}
                                        onChange={() => toggleCheckbox(index)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-3"
                                    />
                                    <label className="mr-3">{step.text}</label>
                                </div>
                                <div>
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

            <div className="flex gap-2 mt-auto pt-4 border-t border-gray-300">
                <Button
                    variant="next"
                    className="bg-red-600 hover:bg-red-700 text-1xl"
                    onClick={backPage}
                >
                    <ArrowBigLeftDash className="mr-2" /> Back
                </Button>
                <Button
                    variant="next"
                    className={`flex justify-end ${
                        !checkboxes.every(Boolean)
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                    }`}
                    onClick={nextPage}
                    disabled={!checkboxes.every(Boolean)}
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
