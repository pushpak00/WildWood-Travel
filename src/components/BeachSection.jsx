import React from 'react'
import Button from '@mui/material/Button';


function BeachSection() {
    return (
        <>
            <div class="relative">
                <img class="h-150 w-full object-cover" src="images\hawai-beach-1.jpg" alt="" />
                <div class="absolute inset-0 bg-gray-700 opacity-20"></div>
                <div class="absolute inset-0 flex items-center justify-center flex-col space-y-4">
                    <h2 class="text-white text-[5rem] font-bold md:text-[9rem] font-KaushanScript">Hawaii</h2> 
                    {/* <p class="text-white text-2xl font-bold md:text-3xl font-DancingScript">- Watzmann Mountain, Germany</p> */}
                    <Button sx={{fontSize: 20}} color='info' size="large">Explore more</Button>
                    </div>
                   
            </div>
        </>
    )
}

export default BeachSection