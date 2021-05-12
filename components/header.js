import pattern from '../public/assets/pattern.jpg'
import { Navbar } from './navbar'
import { Latest } from './latest'

export const Header = () => (
  <div className="grid grid-cols-12">
    <div className="col-span-7 p-16">
      <Navbar />
      <div className="mt-16">
        <h1 className="text-6xl font-work-sans text-gray-700 leading-snug">
          Hello, my name is <span className="font-medium">Ethan Moffat</span>. I’m a <span className="font-bold text-teal">software developer</span> living in <span className="text-red-400 font-bold">Canada</span>. I build beautiful websites and work with <span className="text-purple-400 font-bold">Elixir</span>, <span className="text-green-500 font-bold">Node.js</span>, <span className="text-blue-500 font-bold">React</span>, and more.
        </h1>
        <Latest />
      </div>
    </div>
    <div style={{
      backgroundImage: `url(${pattern})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }} className="col-start-8 col-span-12"></div>
  </div>
)