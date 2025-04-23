import React from "react";

const Hint = ({ text, isOpen }) => {
    if (!text) return null;

    // Check if the text is a valid image URL
    const isImage =
        typeof text === "string" && text.match(/\.(gif|jpe?g|png)$/i);

    return (
        <div className="flex w-full justify-end">
            {isOpen && (
                <div className="mt-3 p-3 border border-gray-300 rounded text-sm text-left">
                    {isImage ? (
                        <img
                            src={text}
                            alt="Hint"
                            className="w-full rounded min-h-full"
                        />
                    ) : (
                        text
                    )}
                </div>
            )}
        </div>
    );
};

export default Hint;
