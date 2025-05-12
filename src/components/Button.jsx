import React from "react";
import { Link } from "react-router";
import clsx from "clsx";

const styles = {
    base: "inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium transition-colors cursor-pointer",
    variants: {
        start: "px-6 py-3 bg-emerald-600 text-white text-2xl font-semibold rounded-lg shadow-md hover:bg-emerald-700 transition duration-200 ease-in-out",
        next: "px-4 py-1 bg-emerald-600 text-white text-2xl font-semibold rounded-lg shadow-md hover:bg-emerald-700 transition duration-200 ease-in-out",
        back: "px-6 py-3 bg-red-600 text-white text-2xl font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200 ease-in-out",
        disabled:
            "px-6 py-3 bg-gray-100 text-gray-400 text-2xl font-semibold rounded-lg shadow-md !cursor-not-allowed",
        disabledNext:
            "px-4 py-1 bg-gray-100 text-gray-400 text-2xl font-semibold rounded-lg shadow-md !cursor-not-allowed",
        toggleOn:
            "px-4 py-1 bg-violet-600 text-white text-1xl font-semibold rounded-lg shadow-md hover:bg-violet-700 transition duration-200 ease-in-out",
        toggleOff:
            "px-4 py-1 bg-gray-300 text-1xl font-semibold rounded-lg shadow-md hover:bg-violet-100 transition duration-200 ease-in-out",
        hint: "px-1 py-1 bg-emerald-600 text-white text-1xl font-semibold rounded-lg shadow-md hover:bg-emerald-700 transition duration-200 ease-in-out",
    },
};

const Button = ({
    children,
    to,
    href,
    variant = "primary",
    className = "",
    ...props
}) => {
    const combinedClass = clsx(
        styles.base,
        styles.variants[variant],
        className
    );

    if (to) {
        return (
            <Link
                to={to}
                className={combinedClass}
                {...props}
            >
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a
                href={href}
                className={combinedClass}
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className={combinedClass}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
