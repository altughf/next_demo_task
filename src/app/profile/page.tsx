import Link from 'next/link';
import Image from "next/image";

export default function Profile() {
    return (

        <div className="w-full h-screen flex justify-center items-center gap-4 bg-neutral-200">
        <div className="flex flex-col w-96 border rounded-xl bg-neutral-100 justify-center items-center">

            <div className='flex w-full font-bold flex-col items-end px-1'>

            <div className='flex mt-6 w-full justify-between text-sm text-neutral-500'>
                    <div className='flex border-b-2 text-orange-500'>
                        
                        <svg
                        className='fill-orange-500'
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="rgba(0, 0, 0, 1)"
                        >
                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                        </svg>
                        <div>Profile</div>
                        </div>
                    <div className='flex border-b-2'>
                        
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="rgba(0, 0, 0, 1)"
                        >
                        <path d="M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 10H7v-2h5v2zm5-4H7V8h10v2z"></path>
                        </svg>
                        <div>Users</div>
                        </div>
                    <div className='flex border-b-2'>
                        
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="rgba(0, 0, 0, 1)"
                        >
                        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
                        </svg>
                        <div>Products</div>
                        </div>
                    <div className='flex border-b-2'>
                        
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="rgba(0, 0, 0, 1)"
                        >
                        <path d="m20 8-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM9 19H7v-9h2v9zm4 0h-2v-6h2v6zm4 0h-2v-3h2v3zM14 9h-1V4l5 5h-4z"></path>
                        </svg>
                        <div>Seller</div>
                        </div>
                </div>

                <div className='flex w-full flex-col items-start gap-2 mt-4 p-2 shadow-lg border-2 border-orange-500 rounded-2xl'>

                    <div className='text-neutral-700 text-lg'>Company Details</div>

                    <div className='flex items-center'>

                        <div className='relative flex h-fit w-fit'>

                            <svg
                            className='text-neutral-900 z-30 absolute right-0 bottom-0'
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="rgba(0, 0, 0, 1)"
                            >
                            <path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path>
                            <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path>
                            </svg>
                            <Image className='h-fit w-fit rounded-full' src="/temp_image.png" alt="Login Görseli" width={130} height={130}/>
                        </div>

                        <div className='flex text-sm flex-col gap-2 ml-5'>

                            <div className='flex'>
                                <div className='text-black font-bold'>Operator ID : </div>
                                <div className='text-black font-light'>2324234234</div>
                            </div>

                            <div className='flex'>
                                <div className='text-black font-bold'>Company Number : </div>
                                <div className='text-black font-light'>2324234234</div>
                            </div>

                            <div className='flex'>
                                <div className='text-black font-bold'>Legal Name : </div>
                                <div className='text-black font-light'>Kamil Koç Co. LTD</div>
                            </div>

                            <div className='flex'>
                                <div className='text-black font-bold'>TAT Number : </div>
                                <div className='text-black font-light'>2324234234</div>
                            </div>

                            <div className='flex'>
                                <div className='text-black font-bold'>VAT Number : </div>
                                <div className='text-black font-light'>3463453453453</div>
                            </div>

                            <div className='flex'>
                                <div className='text-black font-bold min-w-fit'>Adress : </div>
                                <div className='text-black font-light text-wrap'>Atatürk Bulvarı, 1234 Sokak, Ayden Apt., No:23, Gayrettepe İstanbul</div>
                            </div>

                        </div>
                    </div>
    
                </div>

                <div className='flex relative flex-col w-full items-start gap-2 mt-4 p-2 shadow-lg border-2 border-orange-500 rounded-2xl'>

                    <svg
                    className='text-neutral-900 z-30 absolute right-2 top-2'
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="rgba(0, 0, 0, 1)"
                    >
                    <path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path>
                    <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path>
                    </svg>

                    <div className='text-neutral-700 text-lg'>Bank Details</div>

                    <div className='flex text-sm flex-col gap-2'>

                        <div className='flex'>
                            <div className='text-black font-bold'>Account Type : </div>
                            <div className='text-black font-light'>Bireysel/Şirket Hesabı (2 Seçenek)</div>
                        </div>

                        <div className='flex'>
                            <div className='text-black font-bold'>Bank Name : </div>
                            <div className='text-black font-light'>Kasikom Bankası (15 Seçenek)</div>
                        </div>

                        <div className='flex'>
                            <div className='text-black font-bold'>Account Name : </div>
                            <div className='text-black font-light'>Hakan Kızılkaya</div>
                        </div>

                        <div className='flex'>
                            <div className='text-black font-bold'>Account Number : </div>
                            <div className='text-black font-light'>3695364374 (10 Hane)</div>
                        </div>

                    </div>
    
                </div>

                <div className='flex flex-col relative w-full items-start gap-2 mt-4 p-2 shadow-lg border-2 border-orange-500 rounded-2xl'>

                    <svg
                    className='text-neutral-900 z-30 absolute right-2 top-2'
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="rgba(0, 0, 0, 1)"
                    >
                    <path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path>
                    <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path>
                    </svg>

                    <div className='text-neutral-700 text-lg'>Contact Details</div>

                    <div className='flex text-sm flex-col gap-2'>

                        <div className='flex'>
                            <div className='text-black font-bold'>Company Owner Name : </div>
                            <div className='text-black font-light'>Hakan Kızılkaya</div>
                        </div>

                        <div className='flex'>
                            <div className='text-black font-bold'>Phone Number : </div>
                            <div className='text-black font-light'>+902323425434</div>
                        </div>

                        <div className='flex'>
                            <div className='text-black font-bold'>Office Phone Number : </div>
                            <div className='text-black font-light'>+90234425434</div>
                        </div>

                        <div className='flex'>
                            <div className='text-black font-bold'>Office Phone Number : </div>
                            <div className='text-black font-light'>+902323425434</div>
                        </div>

                    </div>
    
                </div>

                <div className='flex flex-col w-full relative items-start gap-2 mt-4 p-2 shadow-lg border-2 border-orange-500 rounded-2xl'>

                    <svg
                    className='text-neutral-900 z-30 absolute right-2 top-2'
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="rgba(0, 0, 0, 1)"
                    >
                    <path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path>
                    <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path>
                    </svg>

                    <div className='text-neutral-700 text-lg'>Settings</div>

                    <div className='flex text-sm flex-col gap-2'>

                        <div className='flex'>
                            <div className='text-black font-bold'>Change Password : </div>
                            <div className='text-black font-light'>***********</div>
                        </div>

                        <div className='flex'>
                            <div className='text-black font-bold'>Change E-Mail : </div>
                            <div className='text-black font-light'>hakankizilk****@gmail.com</div>
                        </div>

                    </div>
    
                </div>

                <button className="w-32 flex p-2 mt-4 gap-2 bg-orange-600 font-bold text-white rounded-lg duration-300 hover:bg-blue-700 transition">

                    <svg className='fill-white'
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="rgba(0, 0, 0, 1)"
                    >
                    <path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path>
                    <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
                    </svg>

                    <div>Log Out</div>
                </button>

                <div className='flex mt-6 w-full justify-between text-sm text-neutral-500'>
                    <div className='flex flex-col justify-center items-center'>
                        
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="rgba(0, 0, 0, 1)"
                        >
                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                        </svg>
                        <div>Booking</div>
                        </div>
                    <div className='flex flex-col justify-center items-center'>
                        
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="rgba(0, 0, 0, 1)"
                        >
                        <path d="M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 10H7v-2h5v2zm5-4H7V8h10v2z"></path>
                        </svg>
                        <div>Invoice</div>
                        </div>
                    <div className='flex flex-col justify-center items-center'>
                        
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="rgba(0, 0, 0, 1)"
                        >
                        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
                        </svg>
                        <div>Messages</div>
                        </div>
                    <div className='flex flex-col justify-center items-center'>
                        
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="rgba(0, 0, 0, 1)"
                        >
                        <path d="m20 8-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM9 19H7v-9h2v9zm4 0h-2v-6h2v6zm4 0h-2v-3h2v3zM14 9h-1V4l5 5h-4z"></path>
                        </svg>
                        <div>Report</div>
                        </div>
                    <div className='flex flex-col justify-center items-center text-orange-500'>
                        
                        <svg
                        className='fill-orange-500'
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="rgba(0, 0, 0, 1)"
                        >
                        <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
                        </svg>
                        <div>Profile</div>
                        </div>
                </div>

            </div>

        </div>
        </div>

    );
  }
