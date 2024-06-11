import React from "react";
import Image from "next/image";
import bg from "../assets/images/bg.jpg";

function Background(): React.JSX.Element { 
    return (
        <>
            <div className="fixed w-full">
                <Image className="fixed top-0 left-0 min-w-full min-h-full object-cover object-center z-0" src={bg} alt={"bg"} />
            </div>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 backdrop-blur-md z-1"></div>
        </>
    );
}


export default Background;