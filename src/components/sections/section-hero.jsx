export default function SectionHero() {
    return (
        <section className="bg-[#F5F7FA]">
            <div className="container mx-auto py-10 px-6 grid grid-cols-5 items-center">
                <div className="col-span-3">
                    <h1 className="text-[#4D4D4D] text-[64px] leading-none font-bold">
                        Lessons and Insight<br /> <span className="text-primary">From 8 Years</span>
                    </h1>
                    <p className="text-[#717171]">Where To Grow Your Business As a photographer: Site Or Social Media?</p>
                </div>
                <img className="col-span-2" src="/Illustration.png" alt="gambar" />
            </div>
        </section>
    )
}