
const altbirStili = {
    background: 'none',
};

const altikiStili = {
    width: '260px',
    background: 'none',
};

const Footer = () => {
    return (

        <div className="footdoc">


            <div class="container mx-auto">
                <div class="p-4 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl dark:bg-gray-700 dark:border-gray-600">

                    <div class="md:flex md:justify-between space-y-3">

                        <div class="p-4 ">
                            <h2 class="mb-6 text-3xl text-left font-bold text-customblue-300 uppercase dark:text-white">DİJİTAL<span class="mx-4 text-orange-400 ">DERSHANEM</span></h2>
                            <ul class="text-gray-500 dark:text-gray-400 text-left font-medium">
                                <li class="mb-4">
                                    <a href="#" class=" hover:underline">Lorem ipsum dolor sit amet consectetur.</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Lorem ipsum dolor sit amet consectetur.</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Lorem ipsum dolor sit amet consectetur.</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Lorem ipsum dolor sit amet consectetur.</a>
                                </li>
                            </ul>
                        </div>

                        <div class="w-full grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 class="mb-6 text-sm text-left font-semibold text-gray-900 uppercase dark:text-white">Bize Ulaşın</h2>
                                <ul class="text-gray-500 dark:text-gray-400 text-left font-medium">
                                    <li class="mb-4">
                                        <a href="#" class=" hover:underline">856 Quired Street Vectoria</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class=" hover:underline">Road, New York</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class=" hover:underline">www.dijidershanem.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm text-left font-semibold text-gray-900 uppercase dark:text-white">Kursları Keşfet</h2>
                                <ul class="text-gray-500 dark:text-gray-400 text-left font-medium">
                                    <li class="mb-4">
                                        <a href="#" class=" hover:underline">YKS 2024</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class=" hover:underline">YKS 2024</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class=" hover:underline">YKS 2024</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class=" hover:underline">YKS 2024</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm text-left font-semibold text-gray-900 uppercase dark:text-white">Faydalı Linkler</h2>
                                <ul class="text-gray-500 dark:text-gray-400 text-left font-medium">
                                    <li class="mb-4">
                                        <a href="#" class=" hover:underline">Hakkımızda</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class=" hover:underline">Sıkça Sorulan Sorular</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class=" hover:underline">Gizlilik Sözleşmesi</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class=" hover:underline">İletişim</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>

                </div>
            </div>

            <div className="component" >

                <div className="inner-div">
                    <a href="#" className="eighty-percent">
                        <div className="taxonomy" >
                            <img src="logo.png" style={altikiStili} alt="" />
                        </div>
                        <div className="popular">Doğru eğitimi sizler için bulalım</div>
                    </a>
                    <a href="#" className="twenty-percent">
                        <button></button>
                    </a>
                </div>

            </div>

            <div className="component"  >
                <div className="container">



                </div>


            </div>

            <div className="component">

                <div className="outer-div">
                    <a href="#" className="ten-percent">
                        <div className="story">Copyright © 2024. All Rights Reserved | Dijital Dershanem</div>
                    </a>
                </div>

            </div>
        </div>

    );
}

export default Footer;
