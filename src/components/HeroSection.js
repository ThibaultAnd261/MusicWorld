const HeroSection = (props) => {
    console.log(props.releaseList)
    if (props.releaseList) {
        return (
            <div className="relative bg-gradient-to-t from-[#fffbf5] to-[#fffef4] p-10">
                <div className="flex justify-around flex-col sm:flex-row items-center">
                    <div className="content">
                        <div className="flex items-center gap-3 mb-2">
                            <hr className="w-10 bg-orange-500 border " />
                            <span className="md:text-xl text-lg font-medium text-gray-800 ">
                                Nouveauté sur Spotify
                            </span>
                        </div>
                        <p className="text-4xl md:text-5xl font-bold leading-tight mt-5 sm:mt-0">
                            "{props.releaseList ? props.releaseList.name : "undefined"}" |  <span>
                                {props.releaseList ? props.releaseList.artists.map((item) => (
                                    item.name
                                )) : "undefined"}
                            </span>
                        </p>
                        <p className="text-md mt-5 md:text-lg ">
                            Sortie : {props.releaseList ? props.releaseList.release_date : "undefined"} | {props.releaseList ? props.releaseList.type : "undefined"} | {props.releaseList ? props.releaseList.total_tracks + " tracks" : "undefined"}
                        </p>
                        <div className="flex gap-4 mt-10">

                            <button className="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-orange-300 to-orange-500 hover:from-pink-500 hover:to-yellow-500  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass ">Play now
                                <span className="animate-ping absolute right-0 top-0 w-3 h-3  rounded-full bg-gradient-to-r from-orange -400 to-orange-700 "></span>
                            </button>
                        </div>

                    </div>
                    <div className="relative sm:mt-0 mt-10 sm:px-0 sm:ml-5">
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