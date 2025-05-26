import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";
import Button from "../components/Button";
import Suzanne from "../components/Suzanne";
import rightArrow from "../assets/img/rightarrow.png";
import leftArrow from "../assets/img/leftarrow.png";

export const Tutorial = () => {
    return (
        <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
                3D printing Instructions
            </h1>
            <h2 className="text-1xl md:text-2xl font-semibold text-gray-500 mb-8 mx-50">
                In these instructions you will learn how to use the Creality K1
                Max that is used for 3D printing in the ProtoLab of the HAMK
                Design Factory. These instructions are separated in 10 different
                tasks. In order to finish the instructions, you must complete
                every task with the necessary steps. When you've done a step,
                make sure to tick the checkbox before continuing on to the next
                step.
            </h2>
            <h3>
                <i>
                    NOTE: THIS IS A PROTOTYPE, SOME TASKS MAY DIFFER FROM THE
                    REAL LIFE SCENARIO.
                </i>
            </h3>
            <div className="flex justify-center items-center gap-x-50">
                <div>
                    <h2 className="text-4xl font-bold text-gray">Controls:</h2>
                    <ul className="text-2xl text-gray-500 text-start mt-3">
                        <li>
                            Left mouse button = <b>Rotating & Clicking</b>
                        </li>
                        <li>
                            Middle mouse button = <b>Zoom</b>
                        </li>
                        <li>
                            Right mouse button = <b>Move</b>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-center">
                    <Suzanne />
                    <div className="flex justify-between w-full mt-2 px-10">
                        <img
                            src={rightArrow}
                            alt="Right Arrow"
                            className="w-12 h-12 cursor-default"
                        />
                        <img
                            src={leftArrow}
                            alt="Left Arrow"
                            className="w-12 h-12 cursor-default"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-x-4 mt-6">
                <Button
                    variant="back"
                    to="/"
                >
                    <ArrowBigLeftDash className="mr-2" /> Back
                </Button>
                <Button
                    variant="start"
                    to="/instructions"
                >
                    Start
                    <ArrowBigRightDash className="ml-2" />
                </Button>
            </div>
        </div>
    );
};

export default Tutorial;
