import Button from "./Button"
import { Link } from "react-router";

export default function Navbar() {

    const navigasi = [
        {
            label: "Home",
            link: "/",
        },
        {
            label: "Service",
            link: "/",
        },
        {
            label: "Feature",
            link: "/",
        },
        {
            label: "Product",
            link: "/",
        },
        {
            label: "Testimonial",
            link: "/",
        },
        {
            label: "FAQ",
            link: "/",
        },
    ];


    return (
        <nav className="bg-[#F5F7FA]">
            <div className="container mx-auto h-[80px] flex justify-between items-center px-6">
                <Link to={"/"}><img src="/logo.png" alt="logo" /></Link>
                <ul className="flex justify-center items-center gap-7">
                    {navigasi.map(function (item, index) {
                        return (
                            <li key={item.link + index}>
                                <Link className="hover:opacity-50 transition-all" to={item.link}>{item.label}</Link>
                            </li>
                        );
                    })
                    }
                </ul>
                <div className="flex justify-center text-nowrap gap-2">
                    <Button className={"w-full"} variantButton={"ghostGreen"}>Login</Button>
                    <Button className={"w-full"} variantButton={"primary"}>Sign Up</Button>
                </div>
            </div>
        </nav>
    )
}