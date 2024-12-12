import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DairySlider = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 1700,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2,

                }
            }
        ]
    };

    const array = [
        "https://i.ytimg.com/vi/p_rtdPtdmAU/maxresdefault.jpg",
        "https://images.ctfassets.net/ww1ie0z745y7/3chIam19jNcIiw7vLPmkAQ/63d906731acbf70050186373be96e07f/cow-farm-the-humane-league.jpg?q=75",
        "https://www.ciwf.org.uk/media/1181182/British-friesian-on-pasture.jpg?center=0.5699257425742574,0.7789453125&mode=crop&width=337&height=337&&rnd=130851689590000000",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJnvAlMHq22JV28_Q4G-sKrmhlJRH2G1oVA&s",
        "https://www.dairypesa.com/wp-content/uploads/2015/10/HOLSTEIN-COW-1024x768.jpg",
        "https://cdn.create.vista.com/api/media/small/382724426/stock-photo-group-cows-farm"
    ]

    return (
        <>
            <div className="slider-container mt-9 overflow-hidden">
                <Slider {...settings}>
                    {
                        array.map((e, i) => {
                            return (
                                <>
                                    <div className='ml-2'>
                                        <div className='w-[150px] h-[150px] lg:w-[400px] lg:h-[300px]'>
                                            <img className='w-full h-full' src={e} alt="" />
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </Slider>
            </div>

        </>
    )
}

export default DairySlider