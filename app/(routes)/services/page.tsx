import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">My <span className="font-bold text-secondary"> services.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">I offer frontend web development services specializing in creating attractive and functional websites and applications. Using the latest technologies, such as HTML, CSS, and JavaScript, I design intuitive and responsive user interfaces that reflect my clients brand identity and enhance their online presence.</p>
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contact with me</button>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;
