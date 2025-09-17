export default function Button({ children, className, variantButton }) {

    const buttonClass = {
        base: "py-2 px-4 rounded xl",
        light: "bg-gray-100 hover:bg-gray-200 text-black",
        dark: "bg-neutral-800 hover:bg-neutral-900 text-white",
        danger: "bg-red-500 hover:bg-red-700 text-white"
    };
    return (
        <button className={`${buttonClass.base} ${buttonClass[variantButton]} ${className}`}>
            {children}
        </button>
    );
} 