import Image from 'next/image';
import Link from 'next/link';
import image from "./app/image/logo.png"; 
import { FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Image src="/logo.png" alt="Code Craft Logo" width={40} height={40} className="rounded-full" />
              <span className="ml-2 text-xl font-bold text-white">Code Craft</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <Link key={item} href="#" className="text-gray-300 hover:text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Crafting Code for</span>{' '}
                  <span className="block text-purple-400 xl:inline">Tomorrow's Solutions</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  At Code Craft, we transform ideas into powerful, scalable, and innovative software solutions. Let's build the future together.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out">
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">Our Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              A better way to build software
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
              We offer a wide range of services to help you bring your ideas to life.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                {
                  name: 'Web Development',
                  description: 'We create responsive and dynamic web applications using the latest technologies.',
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  name: 'Mobile App Development',
                  description: 'Our team builds native and cross-platform mobile apps for iOS and Android.',
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  name: 'Cloud Solutions',
                  description: 'We provide scalable and secure cloud infrastructure and migration services.',
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  ),
                },
                {
                  name: 'AI & Machine Learning',
                  description: 'Leverage the power of AI to gain insights and automate processes.',
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                },
              ].map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                      {feature.icon}
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-white">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-400">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">Contact Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Get in Touch with Our Admin
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
              Have questions or need assistance? Our admin is here to help.
            </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <FaEnvelope className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Email</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400">admin@codecraft.com</dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <FaPhone className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Phone</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400">+1 (555) 123-4567</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block">Start your project today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-purple-200">
            Let's collaborate to bring your vision to life. Our team of experts is ready to help you every step of the way.
          </p>
          <a
            href="#"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 sm:w-auto transition duration-150 ease-in-out"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center mb-4">
                <Image src="/logo.png" alt="Code Craft Logo" width={50} height={50} className="rounded-full" />
                <span className="ml-3 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Code Craft</span>
              </div>
              <p className="text-sm text-gray-400 text-center md:text-left">Crafting innovative solutions for tomorrow's challenges</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Services', 'About', 'Contact'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-purple-400 transition duration-300">{item}</a></li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                  <a key={index} href="#" className="text-gray-400 hover:text-purple-400 transition duration-300 transform hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Code Craft. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
