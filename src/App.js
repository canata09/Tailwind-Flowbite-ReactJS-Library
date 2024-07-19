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
        <div>Item 1</div>
      </div>

      <div className="container">
        <p className="font-poppins">İçerik 1</p>
      </div>


    </div>
  );
}

export default App;
