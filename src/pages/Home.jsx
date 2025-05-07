import { Printer, Fish, Rocket } from "lucide-react";
import Button from "../components/Button";

export const Home = () => {
    return (
        <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-3">
                Welcome to the{" "}
                <span className="text-emerald-600">3D printing </span>
                instructions!
            </h1>
            <h2 className="text-1xl md:text-3xl font-semibold text-gray-500 mb-8">
                Select the training you want.
            </h2>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
                <Button
                    variant="start"
                    to="/tutorial"
                >
                    3D Printing <Printer className="ml-2 h-6 w-6" />
                </Button>

                <Button variant="disabled">
                    {" "}
                    OrcaSlicer
                    <Fish className="ml-2 h-6 w-6" />{" "}
                </Button>
            </div>
        </div>
    );
};

export default Home;
