const HeroSection = (props) => {
    if (props.releaseList) {
        return (
            <div className="relative h-screen bg-gradient-to-t from-[#fffbf5] to-[#fffef4] pt-10 sm:pt-0 mb-10">

                <div className="container sm:flex p-10 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 bg-gradient-to-t from-[#fffbf5] to-[#fffef4]">
                    <div
                        className="content"
                    >
                        <div className="flex items-center gap-3">
                            <hr className="w-10 bg-orange-500 border " />
                            <span className="md:text-[18px] font-medium text-gray-800 ">
                                Nouveauté sur Spotify
                            </span>
                        </div>
                        <p className="text-[40px] lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0 ">
                            "{props.releaseList ? props.releaseList.name : "undefined"}" | <br />

                            {props.releaseList ? props.releaseList.artists.map((item) => (
                                item.name
                            )) : "undefined"}
                        </p>
                        <p className="mt-5 md:text-md ">
                            Sortie : {props.releaseList ? props.releaseList.release_date : "undefined"} | {props.releaseList ? props.releaseList.type : "undefined"} | {props.releaseList ? props.releaseList.total_tracks + " tracks" : "undefined"}
                        </p>
                        <div className="flex gap-4 mt-10">

                            <button className="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-orange-300 to-orange-500 hover:from-pink-500 hover:to-yellow-500  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass ">Play now
                                <span className="animate-ping absolute right-0 top-0 w-3 h-3  rounded-full bg-gradient-to-r from-orange -400 to-orange-700 "></span>
                                {/* <a href={props.releaseList.uri}></a> */}
                            </button>
                        </div>

                    </div>
                    <div className="relative sm:mt-0 mt-10 px-6 sm:px-0">
                        <img className="w-14  top-14 sm:-left-5 hidden sm:absolute" src="/Assets/figma.png" alt="" />
                        <img className="w-32 hidden sm:absolute  bottom-0 sm:-left-10" src="/Assets/nextjs.png" alt="" />

                        <img className="w-[300px] animate__animated animate__fadeInRight animate__delay-.5s" src={props.releaseList ? props.releaseList.images[0].url : null} alt="" />
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <p>Chargement</p>
        )
    }
};

export default HeroSection;