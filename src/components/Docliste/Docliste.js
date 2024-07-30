import Mockdata from '../Mockdata/Mockdata';
import { Button, Breadcrumb, Checkbox, Label, TextInput, Textarea, Avatar, Blockquote, Rating, Pagination, Card, Kbd } from "flowbite-react";
import { HiHome } from "react-icons/hi";

function Docliste() {
    return (
        <>

            <div class="container mx-auto">
                <div class="p-4 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl dark:bg-gray-700 dark:border-gray-600">

                    <div class="space-y-3 flex flex-row">

                        <div class="w-full p-4">
                            <div class="flex flex-row justify-between space-y-3">
                                <div class="p-4 ">
                                    <h2 class="mb-6 text-3xl text-left font-bold text-customblue-300 dark:text-white">Canlı Soru<span class="mx-4 text-orange-400 ">Çözüm Alanına Hoşgeldin!</span></h2>
                                    <p class="flex items-center text-xl text-left font-normal text-gray-500 dark:text-gray-400 ">Hemen bir odaya katıl ve derse başla</p>
                                </div>
                                <div class="p-4 flex items-center">
                                    <button type="button" class="w-[242px] h-[41px] text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium uppercase rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-white">SORU GÖNDER</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            <div class="container mx-auto">
                <div>
                    <div class="flex flex-row items-start mb-3 me-4 items-center md:items-start flex-col border-b border-gray-200 ">
                        <a href="https://flowbite.com/" class="flex items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:mb-0 dark:border-gray-600">
                            <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                        </a>
                        <p class="flex items-center text-left text-sm font-normal text-gray-500 dark:text-gray-400 ">Build websites even faster with components on top of Tailwind CSS</p>
                    </div>
                </div>
            </div>

            <div class="container mx-auto">
                <div class="p-4 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl dark:bg-gray-700 dark:border-gray-600">

                    <div class="flex flex-row justify-between space-y-3">

                        <div class="p-4 block w-full">
                            <Mockdata />
                        </div>

                        <div class="p-4 hidden md:block">
                            <div class="w-full grid grid-cols-1">
                                <div>
                                    <a href="https://flowbite.com/" class="flex items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:mb-0 dark:border-gray-600">
                                        <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                                    </a>
                                    <p class="flex items-center text-left text-sm font-normal text-gray-500 dark:text-gray-400 ">Build websites even faster with components on top of Tailwind CSS</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            <div class="container mx-auto">
                <div class="p-4 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl dark:bg-gray-700 dark:border-gray-600">

                    <div class="space-y-3 flex flex-row">

                        <div class="w-full p-4">
                            <div class="w-full grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
                                <div>
                                    <div class="box-border p-4 rounded-[10px] border-cusgray300 shadow-sm flex flex-col justify-center bg-white border-[1px] hover:bg-customblue-600">
                                        <div className=" flex justify-center">
                                            <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 me-2" alt="Flowbite Logo" />
                                        </div>
                                        <div className=" text-customblue-400  hover:text-white">
                                            <h2 className=" font-[500px] text-2xl">TYT</h2>
                                            <p className=" text-cusgray100 text-base  hover:text-white">
                                                286 Courses
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="box-border p-4 rounded-[10px] border-cusgray300 shadow-sm flex flex-col justify-center bg-white border-[1px] hover:bg-customblue-600">
                                        <div className=" flex justify-center">
                                            <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 me-2" alt="Flowbite Logo" />
                                        </div>
                                        <div className=" text-customblue-400  hover:text-white">
                                            <h2 className=" font-[500px] text-2xl">TYT</h2>
                                            <p className=" text-cusgray100 text-base  hover:text-white">
                                                286 Courses
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="box-border p-4 rounded-[10px] border-cusgray300 shadow-sm flex flex-col justify-center bg-white border-[1px] hover:bg-customblue-600">
                                        <div className=" flex justify-center">
                                            <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 me-2" alt="Flowbite Logo" />
                                        </div>
                                        <div className=" text-customblue-400  hover:text-white">
                                            <h2 className=" font-[500px] text-2xl">TYT</h2>
                                            <p className=" text-cusgray100 text-base  hover:text-white">
                                                286 Courses
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="box-border p-4 rounded-[10px] border-cusgray300 shadow-sm flex flex-col justify-center bg-white border-[1px] hover:bg-customblue-600">
                                        <div className=" flex justify-center">
                                            <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 me-2" alt="Flowbite Logo" />
                                        </div>
                                        <div className=" text-customblue-400  hover:text-white">
                                            <h2 className=" font-[500px] text-2xl">TYT</h2>
                                            <p className=" text-cusgray100 text-base  hover:text-white">
                                                286 Courses
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            <div class="container mx-auto">
                <div class="p-4 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl dark:bg-gray-700 dark:border-gray-600">

                    <div class="space-y-3 flex flex-wrap">

                        <div class="p-4 w-full md:w-2/3 mb-0">
                            <h2 class="mb-6 text-3xl text-left font-bold text-customblue-300 dark:text-white">Canlı Soru<span class="mx-4 text-orange-400 ">Çözüm Alanına Hoşgeldin!</span></h2>
                        </div>

                        <div class="p-4 w-full md:w-1/3 mb-0">
                            <button type="button" class="w-[242px] h-[41px] text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium uppercase rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-white">SORU GÖNDER</button>
                        </div>

                    </div>

                </div>
            </div>



            <div class="container mx-auto">
                <div class="p-4 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl dark:bg-gray-700 dark:border-gray-600">

                    <div class="space-y-3 flex flex-row">

                        <div class="p-4 md:w-1/4">
                            <a href="https://flowbite.com/" class="flex items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:mb-0 dark:border-gray-600">
                                <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                            </a>
                        </div>

                        <div class="p-4 md:w-3/4">
                            <div class="w-full grid grid-cols-1">
                                <div>

                                    <figure className="max-w-screen-md">
                                        <figcaption className="mt-6 flex items-center space-x-3">
                                            <Avatar rounded size="xs" img="/images/people/profile-picture-3.jpg" alt="profile picture" />
                                            <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                                                <cite className="pr-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
                                                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CTO at Flowbite</cite>
                                            </div>
                                        </figcaption>
                                        <Blockquote>
                                            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                                                "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to
                                                complex dashboard. Perfect choice for your next SaaS application."
                                            </p>
                                        </Blockquote>
                                        <div className="mb-4 flex items-center">
                                            <Rating size="md">
                                                <Rating.Star />
                                                <Rating.Star />
                                                <Rating.Star />
                                                <Rating.Star />
                                                <Rating.Star />
                                            </Rating>
                                        </div>
                                    </figure>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>




        </>
    );
}
export default Docliste;
