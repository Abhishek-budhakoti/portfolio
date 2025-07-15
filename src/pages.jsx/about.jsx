import userInfo from "../utils/userInfoConfig.js";

export const About = () => {
    return (
        <div className="text-black dark:text-white transition-colors duration-500 flex flex-col md:flex-row gap-10 px-8 pt-40">


            <div className="w-full md:w-[300px] h-[300px] rounded-xl border-2 border-black dark:border-white overflow-hidden">
                <img
                    src="/photo.png"
                    alt="myphoto"
                    className="w-full h-full object-cover"
                />
            </div>


            <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">{userInfo.about.greeting}</h2>
                <p className="whitespace-pre-line leading-relaxed">
                    {userInfo.about.aboutMe}
                </p>
            </div>
        </div>
    );
};
