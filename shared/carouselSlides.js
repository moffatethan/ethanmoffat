import pattern from '../public/assets/pattern.jpg'
import budgetBearLogo from '../public/assets/budget_bear.svg'
import finlyLogo from '../public/assets/finly.svg'
import subflixLogo from '../public/assets/subflix.svg'
import ethanmoffatLogo from '../public/assets/ethanmoffat.svg'

const carouselSlideClasses = 'block md:flex bg-white dark:bg-gray-200 shadow-lg rounded-3xl p-8'
const carouselSlideContentClasses = {
  parent: 'md:ml-8 md:text-left text-center cursor-default',
  h3: 'text-3xl font-medium text-gray-700',
  p: 'font-body text-gray-500 leading-relaxed text-lg mt-3',
  span: 'font-bold text-gray-600 cursor-pointer'
}

const largeCarouselSlideClasses = 'flex-col lg:flex-row flex bg-white dark:bg-gray-200 shadow-lg rounded-3xl p-8';
const largeCarouselSlideContentClasses = {
  div: 'flex-1 px-5',
  logo: 'w-96',
  img: 'hidden lg:block flex-1 h-96 shadow-md rounded-3xl',
  p: 'font-body text-xl text-gray-600 mt-5 leading-10',
  button: 'mt-12 bg-blue-500 border shadow-md border-blue-500 text-blue-100 text-md px-12 py-4 rounded-lg transition hover:bg-blue-600 transform hover:-translate-y-1'
}

const carouselSlides = [
  <div className={carouselSlideClasses}>
    <img src={pattern} className="mb-4 md:mb-0 w-full h-56 rounded-3xl" />
    <div className={carouselSlideContentClasses.parent}>
      <h3 className={carouselSlideContentClasses.h3}>Hello! Welcome to my first blog post!</h3>
      <p className={carouselSlideContentClasses.p}>
        Hello! My name is Ethan and this is my little spot on the Internet. I design beautiful websites, I enjoy working on the back-end and front-end. On my website I hope to educate... <span className={carouselSlideContentClasses.span}>Read more</span>
      </p>
    </div>
  </div>,
  <div className={carouselSlideClasses}>
    <img src={pattern} className="mb-4 w-full h-56 rounded-3xl" />
    <div className={carouselSlideContentClasses.parent}>
      <h3 className={carouselSlideContentClasses.h3}>Hello! Welcome to my first blog post!</h3>
      <p className={carouselSlideContentClasses.p}>
        Hello! My name is Ethan and this is my little spot on the Internet. I design beautiful websites, I enjoy working on the back-end and front-end. On my website I hope to educate... <span className={carouselSlideContentClasses.span}>Read more</span>
      </p>
    </div>
  </div>,
  <div className={carouselSlideClasses}>
    <img src={pattern} className="mb-4 w-full h-56 rounded-3xl" />
    <div className={carouselSlideContentClasses.parent}>
      <h3 className={carouselSlideContentClasses.h3}>Hello! Welcome to my first blog post!</h3>
      <p className={carouselSlideContentClasses.p}>
        Hello! My name is Ethan and this is my little spot on the Internet. I design beautiful websites, I enjoy working on the back-end and front-end. On my website I hope to educate... <span className={carouselSlideContentClasses.span}>Read more</span>
      </p>
    </div>
  </div>,
]

const largeCarouselSlides = [
  <div className={largeCarouselSlideClasses}>
    <div className={largeCarouselSlideContentClasses.div}>
      <img className={largeCarouselSlideContentClasses.logo} src={budgetBearLogo} />
      <p className={largeCarouselSlideContentClasses.p}>
        Budget bear is a budgeting solution that utilizes the envelope pattern. Set your savings goal and due date and Budget Bear will calculate how much you need to put away per month to achieve the goal on the due date. This app utilizes the Plaid API and connects to your bank account and pulls transaction data from it.
      </p>
      <button className={largeCarouselSlideContentClasses.button}>View Project</button>
    </div>
    <img className={largeCarouselSlideContentClasses.img} src={pattern} />
  </div>,
  <div className={largeCarouselSlideClasses}>
    <div className={largeCarouselSlideContentClasses.div}>
      <img className={largeCarouselSlideContentClasses.logo} src={finlyLogo} />
      <p className={largeCarouselSlideContentClasses.p}>
        Finly is a Financing-As-A-Service platform. Merchants can offer alternative payment options to their customers through integrating with Finly. Finly handles qualifying, processing payments, and paying the merchant once a customer is in a financing agreement.
      </p>
      <button className={largeCarouselSlideContentClasses.button}>View Project</button>
    </div>
    <img className={largeCarouselSlideContentClasses.img} src={pattern} />
  </div>,
  <div className={largeCarouselSlideClasses}>
    <div className={largeCarouselSlideContentClasses.div}>
      <img className={largeCarouselSlideContentClasses.logo} src={ethanmoffatLogo} />
      <p className={largeCarouselSlideContentClasses.p}>
        This project is my portfolio website that you are on now. Under the hood I am running off of Vercel, utilizing Next.js, React, Contentful (Headless-CMS), and GraphQL. In the future this is also where I will host my courses where I hope to teach Elixir &amp; React.
      </p>
      <button className={largeCarouselSlideContentClasses.button}>View Project</button>
    </div>
    <img className={largeCarouselSlideContentClasses.img} src={pattern} />
  </div>,
  <div className={largeCarouselSlideClasses}>
    <div className={largeCarouselSlideContentClasses.div}>
      <img className={largeCarouselSlideContentClasses.logo} src={subflixLogo} />
      <p className={largeCarouselSlideContentClasses.p}>
        Subflix allows content creators to make exclusive subscriber-only video and photo content. Subscribers pay a monthly contribution set by the creator and gain access to a movie library like experience to watch their favourite premium content at home.
      </p>
      <button className={largeCarouselSlideContentClasses.button}>View Project</button>
    </div>
    <img className={largeCarouselSlideContentClasses.img} src={pattern} />
  </div>
]

export default {
  smallSlides: carouselSlides,
  largeSlides: largeCarouselSlides
}
