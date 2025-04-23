import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";
import Button from "../components/Button";
import Printer from "../components/Printer";

export const Tutorial = () => {
    return (
        <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
                3D printing Instructions
            </h1>
            <h2 className="text-1xl md:text-2xl font-semibold text-gray-500 mb-8">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus
                mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
                urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
                egestas. Iaculis massa nisl malesuada lacinia integer nunc
                posuere. Ut hendrerit semper vel class aptent taciti sociosqu.
                Ad litora torquent per conubia nostra inceptos himenaeos.
            </h2>
            <div className="flex justify-center items-center gap-x-5">
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
                <div>
                    <Printer></Printer>
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
