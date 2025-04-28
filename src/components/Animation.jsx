import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Slide, Paper, Box } from '@mui/material';

const SectionWithAnimation = () => {
    const { ref, inView } = useInView({
        threshold: 0.3, // Trigger when 30% is visible
        triggerOnce: false, // Run every time it comes into view
    });

    return (
        <>
            <div className="my-5 flex">
                <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 " />

                {/* <Slide in={inView} direction="right" timeout={1500}>
                    <Paper elevation={0} sx={{
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        border: 'none',
                        p: 0,
                        m: 0,
                    }} >
                        <Box boxShadow={0} sx={{ width: 1, display: 'flex' }} >
                            <div class="px-30 my-14 inline-flex tracking-widest justify-center text-[11rem] font-Knewave font-bold text-transparent bg-clip-text bg-no-repeat bg-center bg-[length:780px_500px] bg-[url(images/beach-boat.jpg)]">
                                Beaches
                            </div>

                        </Box>
                    </Paper>
                </Slide> */}
                <div class="px-30 my-14 inline-flex tracking-widest justify-center text-[11rem] font-Knewave font-bold text-transparent bg-clip-text bg-no-repeat bg-center bg-[length:780px_500px] bg-[url(images/beach-boat.jpg)]">
                                Beaches
                            </div>


                <div ref={ref} className="flex flex-row-reverse -mx-40">
                    {/* <Slide in={inView} direction="left" timeout={1500}>
                        <Paper elevation={0} sx={{
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                            border: 'none',
                            p: 0,
                            m: 0,
                        }} >
                            <Box boxShadow={0} sx={{ width: 1 }} >
                                <img className="m-10 w-140 h-90" src="images\miami-beach.jpg" alt="" />
                            </Box>
                        </Paper>
                    </Slide> */}
                    <img className="m-10 w-140 h-90" src="images\miami-beach.jpg" alt="" />
                </div>
            </div>

            {/* <div class="relative inline-flex self-center justify-center text-[11rem] font-Knewave font-bold tracking-widest">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    class="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="images/video.mp4" type="video/mp4" />

                </video>
                 
                <h1 class="relative text-transparent bg-clip-text z-10 mix-blend-screen">
                    Beaches
                </h1>

                
            </div>




            <div class="relative inline-flex self-center justify-center text-[11rem] font-Knewave font-bold tracking-widest w-fit h-[15rem] overflow-hidden">
                
                <div class="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInLine
                        class="w-full h-full object-cover"
                    >
                        <source src="images/video.mp4" type="video/mp4" />
                    </video>
                </div>

                <h1 class="relative z-10  bg-transparent bg-clip-text mix-blend-screen">
                    Beaches
                </h1>

                
            </div> */}


            {/* <div class="video-text-mask">
  <video src="images/video.mp4" autoPlay muted loop></video>
  <h1>VIDEO TEXT</h1>
</div> */}



        </>
    );
};

export default SectionWithAnimation;
