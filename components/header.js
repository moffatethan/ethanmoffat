import pattern from '../public/assets/pattern.jpg'
import { Navbar } from './navbar'
import { Latest } from './latest'

export const Header = () => (
  <div className="grid grid-cols-12">
    <div className="col-span-12 md:p-8 xl:p-16 xl:col-span-7">
      <Navbar />
      <div className="mt-16 p-6 md:p-0">
        <h1 className="text-4xl font-work-sans text-gray-700 dark:text-gray-50 leading-snug lg:text-6xl lg:leading-relaxed">
          Hello, my name is <span className="font-medium">Ethan Moffat</span>. I’m a <span className="font-bold text-teal dark:text-teal-light">software developer</span> living in <span className="text-red-400 dark:text-red-300 font-bold">Canada</span>. I build beautiful websites and work with <span className="text-purple-400 dark:text-purple-300 font-bold">Elixir</span>, <span className="text-green-500 dark:text-green-400 font-bold">Node.js</span>, <span className="text-blue-500 dark:text-blue-400 font-bold">React</span>, and more.
        </h1>
        <Latest />
      </div>
    </div>
    <div style={{
      backgroundImage: `url(${pattern})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }} className="hidden lg:block col-start-8 col-span-12"></div>
  </div>
)