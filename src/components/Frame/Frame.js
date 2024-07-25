import { Button, Breadcrumb, Checkbox, Label, TextInput, Textarea, Avatar, Blockquote, Rating, Pagination, Card, Kbd } from "flowbite-react";
import { HiHome } from "react-icons/hi";

const Frame = () => {
    return (

        <div className="frame">


            <div class="container mx-auto">
                <div class="p-4 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl dark:bg-gray-700 dark:border-gray-600">

                    <div class="space-y-3 flex flex-row">

                        <div class="p-4">
                            <div class="w-full grid grid-cols-2">
                                <div>
                                    <a href="https://flowbite.com/" class="flex items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:mb-0 dark:border-gray-600">
                                        <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://flowbite.com/" class="flex items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:mb-0 dark:border-gray-600">
                                        <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                                    </a>
                                </div>
                            </div>
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


        </div>

    );
}

export default Frame;
