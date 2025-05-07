// import React from "react";

// const Hint = ({ text, isOpen }) => {
//     if (!text) return null;

//     // Check if the text is a valid image URL
//     const isImage =
//         typeof text === "string" && text.match(/\.(gif|jpe?g|png)$/i);

//     return (
//         <div className="flex w-full justify-end">
//             {isOpen && (
//                 <div className="mt-3 p-3 border border-gray-300 rounded text-sm text-left">
//                     {isImage ? (
//                         <img
//                             src={text}
//                             alt="Hint"
//                             className="w-full rounded min-h-full"
//                         />
//                     ) : (
//                         text
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Hint;

import React from "react";

// Dynamically import all local image files (GIF, JPG, PNG)
const imageMap = import.meta.glob("../assets/gifs/*.{gif,jpg,jpeg,png}", {
    eager: true,
    as: "url",
});

const Hint = ({ text, isOpen }) => {
    if (!text) return null;

    const isRemote = text.startsWith("http");
    const isImage = /\.(gif|jpe?g|png)$/i.test(text);
    const src = isRemote ? text : imageMap[`../assets/gifs/${text}`] || null;

    return (
        <div className="flex w-full justify-end">
            {isOpen && (
                <div className="mt-3 p-3 border border-gray-300 rounded text-sm text-left">
                    {isImage && src ? (
                        <img
                            src={src}
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
