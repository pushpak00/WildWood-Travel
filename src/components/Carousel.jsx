import React from "react";

function Carousel() {
    return (
        <>
            <div class="relative">
                <img class="h-120 w-full object-cover" src="images/berchtesgaden-2928712.jpg" alt="" />
                <div class="absolute inset-0 bg-gray-700 opacity-15"></div>
                <div class="absolute inset-0 flex items-center justify-center flex-col space-y-4">
                    <h2 class="text-white text-5xl font-bold md:text-6xl font-YujiBoku">Explore Germany’s rugged giant</h2> 
                    <p class="text-white text-2xl font-bold md:text-3xl font-DancingScript">- Watzmann Mountain, Germany</p>
                    </div>
            </div>

        </>
    )
}

export default Carousel