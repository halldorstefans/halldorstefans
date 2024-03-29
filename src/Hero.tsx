import { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import mainLogo from './assets/images/LogoHS.png';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div id="hero" className="bg-[#ecf4ff]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Halldor Stefansson</span>
              <img
                className="h-8 w-auto"
                src={mainLogo}
                alt="Logo for Halldor Stefansson"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a key="Blog" href="https://halldorstefans.com/" className="text-sm font-semibold leading-6 text-gray-900" target="_blank">
              <ArrowTopRightOnSquareIcon className="inline h-6 w-6" aria-hidden="true" /> Blog
            </a>
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Halldor Stefansson</span>
                <img
                  className="h-8 w-auto"
                  src={mainLogo}
                  alt="Logo for Halldor Stefansson"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a key="Blog" href="https://halldorstefans.com/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" target="_blank">
                    <ArrowTopRightOnSquareIcon className="inline h-6 w-6" aria-hidden="true" /> Blog
                  </a>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-72">
          <div className="text-center">
            <Transition show={true} appear={true} enter="transition-all ease-in delay-300 duration-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Hey - I'm Halldor Stefansson! <br /> Software Engineer.
              </h1>
              <p className="mt-6 px-12 mx-4 text-2xl leading-8 text-gray-600">
                I help make people's lives easier by ensuring smooth communication between multiple systems.
              </p>
            </Transition>
            <Transition show={true} appear={true} enter="transition-all ease-in delay-700 duration-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100">
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#contact"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Let's chat!
                </a>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  )
}
