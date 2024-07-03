import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderContact from "@/components/slider-contact";
import TransitionPage from "@/components/transition-page";

const ContactPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">My <span className="font-bold text-secondary"> information.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">Please for any information or request for collaborations in projects, work and any kind of services, don't hessitate to contact me at the next ways.</p>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderContact />
                </div>
            </div>
        </>
    );
}

export default ContactPage;
