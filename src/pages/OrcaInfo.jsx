import { ArrowBigLeftDash } from "lucide-react";
import Button from "../components/Button";

export const OrcaInfo = () => {
    return (
        <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
                OrcaSlicer instructions
            </h1>
            <h2 className="text-1xl md:text-2xl font-semibold text-gray-500 mb-8 mx-50">
                OrcaSlicer instructions are not available right now. If you feel
                that the same type of training like in the 3D printing
                instruction tool will help you learn OrcaSlicer software, please
                give us feedback and explain why you think this will be useful
                for your training.
            </h2>
            <div className="flex justify-center items-center gap-x-4 mt-6">
                <Button
                    variant="back"
                    to="/"
                >
                    <ArrowBigLeftDash className="mr-2" /> Back to home
                </Button>
            </div>
        </div>
    );
};

export default OrcaInfo;
