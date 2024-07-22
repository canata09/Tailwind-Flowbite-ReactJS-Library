import './App.css';
import Navabar from './components/Navabar/Navabar';
import Mockdata from './components/Mockdata/Mockdata';
import Fonts from './components/Fonts/Fonts';

const right = {
  root: {
    base: "relative",
    list: "my-3 p-3 border-b pb-2 bg-white rounded shadow-sm"
  },
  item: {
    base: "flex text-gray-500 pt-3",
    chevron: "mx-1 h-4 w-4 text-gray-400 group-first:hidden md:mx-2",
    href: {
      off: "flex items-center text-sm font-medium text-gray-100 dark:text-gray-400",
      on: "flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
    },
    icon: "mr-2 size-16"
  }
};

function App() {
  const navItems = [
    { name: "Manage Groups", href: "/", active: true },
    { name: "Group 1", href: "/", active: false },
    { name: "Group 2", href: "/", active: false }
  ];

  return (
    <div className="App">

      <Navabar />
      <div class="grid grid-cols-layout">
        <div>
          <div className={right.root.base}>
            <ul className={right.root.list}>
              {navItems.map((item, index) => (
                index === 0 ? (
                  <li key={index} className={right.item.base}>
                    <a
                      href={item.href}
                      className={item.active ? right.item.href.on : right.item.href.off}
                    >
                      <span className={right.item.icon}>•</span>
                      {item.name}
                    </a>
                  </li>
                ) : null
              ))}
            </ul>

            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Groups..." required />

            <ul className={right.root.list}>
              {navItems.map((item, index) => (
                index > 0 ? (
                  <li key={index} className={right.item.base}>
                    {index > 1 && <span className={right.item.chevron}></span>}
                    <a
                      href={item.href}
                      className={item.active ? right.item.href.on : right.item.href.off}
                    >
                      <span className={right.item.icon}>•</span>
                      {item.name}
                    </a>
                  </li>
                ) : null
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div class="space-y-3">
            <Mockdata />
          </div>
        </div>
        <div>

            <div id="marketing-banner" tabindex="-1" class="relative flex flex-col justify-between w-[calc(100%-2rem)] p-4 -translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl left-1/2 top-6 dark:bg-gray-700 dark:border-gray-600">
              <div class="flex items-start mb-3 me-4 items-center md:items-start flex-col border-b border-gray-200 ">
                <a href="https://flowbite.com/" class="flex items-center mb-2 border-gray-200 md:mb-0 dark:border-gray-600">
                  <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
                <p class="flex items-center text-left text-sm font-normal text-gray-500 dark:text-gray-400 ">Build websites even faster with components on top of Tailwind CSS</p>
              </div>
              <div class="flex items-start mb-3 mt-3 me-4 items-center md:items-start flex-col md:mb-0 ">
                <p class="flex items-center text-left text-sm font-normal text-gray-500 dark:text-gray-400">Tailwind CSS</p>
                <a href="#" class="px-5 py-2 me-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Up</a>
              </div>
            </div>


            <div id="marketing-banner" tabindex="-1" class="relative flex flex-row w-[calc(100%-2rem)] p-4 -translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl left-1/2 top-6 dark:bg-gray-700 dark:border-gray-600">
              <div class="flex items-start mb-3 me-4 md:items-center flex-row md:mb-0 ">
                <a href="https://flowbite.com/" class="flex items-center mb-2 border-gray-200 md:border-e md:mb-0 dark:border-gray-600">
                  <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 me-2" alt="Flowbite Logo" />
                </a>
              </div>
              <div class="flex flex-col ">
                <span class="text-left text-lg font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                <p class="flex items-center text-left text-sm font-normal text-gray-500 dark:text-gray-400">Build websites even faster with components on top of Tailwind CSS</p>
              </div>
            </div>


        </div>
      </div>


    </div>
  );
}

export default App;
