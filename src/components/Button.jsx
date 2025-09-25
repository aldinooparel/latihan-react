export default function Button({ children, className, variantButton }) {

    const buttonClass = {
        base: "py-2 px-4 rounded-xl cursor-pointer",
        light: "bg-gray-100 hover:bg-gray-200 text-black",
        dark: "bg-neutral-800 hover:bg-neutral-900 text-white",
        danger: "bg-red-500 hover:bg-red-700 text-white",
        primary: "bg-primary hover:bg-primary-700 text-white",
        ghostGreen: "hover:bg-primary-100 text-primary",

    };
    return (
        <button className={`${buttonClass.base} ${buttonClass[variantButton]} ${className}`}>
            {children}
        </button>
    );
} 