import Background from "../assets/background.jpg";

function BackgroundImg(){
    return(
        <img className="w-full
                         md:w-3/4 
                         h-auto 
                         md:h-3/5 
                         flex 
                         items-center 
                         justify-center" 
            alt="background" 
            src={Background}>
        </img>
    )
}

export default BackgroundImg;