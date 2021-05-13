import React from 'react'

const Contact = () => (
  <div className="p-6 md:p-8 lg:p-16 block lg:flex gap-56">
    <div className="flex-1 lg:w-56">
      <h1 className="text-6xl font-medium text-blue-500 mb-6 dark:text-blue-300">Let's get in touch</h1>
      <p className="text-xl font-body text-gray-500 leading-loose dark:text-gray-200">
        Ask me anything! Whether you want to hire me, work together, I don't mind getting the emails. I strive to respond within a work week. But, probably will respond very fast.
      </p>
    </div>
    <div className="flex-1 font-body">
      <form>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-2 text-gray-600 dark:text-gray-200">First Name</label>
            <input className="py-3 w-full pr-5 pl-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 dark:bg-gray-200 dark:border-gray-500 outline-none text-gray-700" type="text" name="firstName" placeholder="Enter first name..." />
          </div>
          <div className="flex-1">
            <label className="block mb-2 text-gray-600 dark:text-gray-200">Last Name</label>
            <input className="py-3 w-full pr-5 pl-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 dark:bg-gray-200 dark:border-gray-500 outline-none text-gray-700" type="text" name="firstName" placeholder="Enter last name..." />
          </div>
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-gray-600 dark:text-gray-200">Email Address</label>
          <input className="py-3 w-full pr-5 pl-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 dark:bg-gray-200 dark:border-gray-500 outline-none text-gray-700" type="text" name="firstName" placeholder="Enter email address..." />
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-gray-600 dark:text-gray-200">Message</label>
          <textarea className="py-3 w-full pr-5 pl-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 dark:bg-gray-200 dark:border-gray-500 outline-none text-gray-700" type="text" name="firstName" placeholder="Enter message..." />
        </div>
        <div className="w-full mt-5">
          <button className="bg-blue-500 w-full lg:w-auto py-5 lg:px-16 rounded-xl text-blue-100 shadow-md hover:bg-blue-600 transition transform hover:-translate-y-1 dark:bg-blue-400 dark:hover:bg-blue-500">Send</button>
        </div>
      </form>
    </div>
  </div>
)

export default React.memo(Contact)
