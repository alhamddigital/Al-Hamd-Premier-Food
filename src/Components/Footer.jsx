import React, { useEffect, useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen]);

    const handleOverlay=()=>{
        setIsModalOpen(false)
    }

    return (
        <div className='w-full h-auto bg-[rgb(15,15,15)] py-9 md:mt-9 mt-4'>
            <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9'>
                <div>
                    <h1 className='text-white text-3xl font-[700]'>Al Hamd</h1>
                    <p className='text-white font-[400] mt-5'>
                        Our aim is to become the leading company, delivering excellence and reliability in every service we provide, ensuring unmatched quality, customer satisfaction, and continuous improvement in all aspects of our business.
                    </p>
                </div>
                <div className='md:flex justify-center'>
                    <div className=''>
                        <h1 className='text-white text-2xl font-[500]'>Get in Touch</h1>
                        <ul>
                            <li className='text-white flex items-center cursor-pointer mt-5 transition-all hover:text-yellow-500 font-[400]'><MdEmail /> <h1 className='ml-3'>alhamd@alhamdges.com.pk</h1></li>
                            <li className='text-white flex items-center cursor-pointer mt-2 transition-all hover:text-yellow-500 font-[400]'><FaPhoneAlt /> <h1 className='ml-3'>+92 322 4326125</h1></li>
                            <div onClick={openModal} className='text-white flex items-center cursor-pointer mt-2 transition-all hover:text-yellow-500 font-[400]'>
                                <FaLocationDot />
                                <h1 className='ml-3'>55-A Muhafiz Town Lahore Pakistan</h1>
                            </div>
                        </ul>
                        {isModalOpen && (
                            <div onClick={handleOverlay}  className="fixed w-full cursor-crosshair h-screen inset-0 bg-black z-30 bg-opacity-50 flex justify-center items-center">
                                <div className="w-[90%] h-[90vh] md:w-[80%] bg-white p-4 rounded-lg relative">
                                    <div onClick={closeModal} className='absolute -top-[1px] cursor-pointer right-3 text-3xl'>&times;</div>
                                    <h2 className="text-lg text-center font-bold">AL-HAMD</h2>
                                    <iframe
                                        className='w-[100%] h-[70vh] lg:h-[73vh]'
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13614.099748746778!2d74.21628!3d31.454743000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff5f02fed4b5%3A0xdbaba95cc008c0f6!2sAl%20Hamd%20General%20Engineering%20Services!5e0!3m2!1sen!2sus!4v1729843374665!5m2!1sen!2sus"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        title="Bahria Town Map"
                                    />
                                    <button onClick={closeModal} className="mt-3 bg-red-500 text-white cursor-pointer px-2 py-1 rounded">Close</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-white font-[500] text-xl'>You can find us at</h1>
                    <div className='flex items-center mt-5'>
                        <div className='w-[40px] h-[40px] cursor-pointer flex justify-center items-center overflow-hidden text-white text-2xl' title='watsapp'>
                            <img className='w-full h-full' src="https://res.cloudinary.com/djpvajewe/image/upload/v1732857807/watsapp_pyr5pq.png" alt="" />
                        </div>
                        <div className='w-[40px] h-[40px] ml-[] cursor-pointer flex justify-center items-center overflow-hidden text-white text-2xl' title='instagram'>
                            <img className='w-full h-full' src="https://res.cloudinary.com/djpvajewe/image/upload/v1732857806/linkedin_egzsvk.png" alt="" />
                        </div>
                        <a href="https://www.facebook.com/p/Al-Hamd-General-Engineering-Services-Lahore-100065319076543/">
                            <div className='w-[40px] h-[40px] cursor-pointer flex justify-center items-center overflow-hidden text-white text-2xl' title='facebook'>
                                <img className='w-full h-full' src="https://res.cloudinary.com/djpvajewe/image/upload/v1732857806/facebook_oozfbi.png" alt="" />
                            </div>
                        </a>
                        <div className='w-[35px] h-[35px] ml-1 cursor-pointer flex justify-center items-center overflow-hidden text-white text-2xl' title='linkedin'>
                            <img className='w-full h-full' src="https://res.cloudinary.com/djpvajewe/image/upload/v1732857806/instagram_ygvf9t.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <iframe
                        className='w-[100%] h-[100%]'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54523.82286713028!2d74.06792521476743!3d31.338582362414005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391855cf9234767b%3A0x3d6f5b008219cf0d!2sCh%20Sharif%20Dairy%20Farm!5e0!3m2!1sen!2sus!4v1733124976108!5m2!1sen!2sus"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Bahria Town Map"
                    />
                </div>
            </div>

            <p className='text-white text-center mt-9'>© 2024 Al Hamd. All rights reserved.</p>

        </div>
    )
}

export default Footer



