import { ArrowBigLeftDash } from "lucide-react";
import Button from "../components/Button";

export const Home = () => {
    return (
        <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-3">
                You successfully completed the 3D printer instructions
            </h1>
            <div className=" md:space-y-0 md:space-x-4">
                <Button
                    variant="back"
                    to="/"
                >
                    {" "}
                    <ArrowBigLeftDash className="ml-2 h-6 w-6" />
                    Back to the start
                </Button>
            </div>
        </div>
    );
};

export default Home;
