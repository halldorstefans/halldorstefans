import { ArrowDownTrayIcon, ArrowSmallDownIcon } from '@heroicons/react/24/outline'
import mgbBlackWhite from './assets/images/mgbBlackWhite.jpg'
import cvPDF from './assets/files/Halldor_Stefansson_CV.pdf'

const stats = [
    { name: 'Countries lived in', value: '4' },
    { name: 'Years of professional experience', value: '8+' },
]

export default function About() {
    return (
        <div id="about" className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <img
                src={mgbBlackWhite}
                alt="Background image of an MG B in black and white"
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl w-3/4 lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Who Am I?</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        I'm a graduated car mechanic turned coder who thrives on creating useful things.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        After completing my car mechanic studies, I pursued a university education.
                        There, I discovered the world of programming and got instantly hooked!
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Since then, I've been passionate about crafting solutions to improve people's lives. Whether it's a simple weather dashboard for my girlfriend or integrations to streamline tasks to minimise manual work, I love the challenge.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        My focus is on bringing people together to solve problems efficiently. I specialise in developing software solutions that simplify processes and improve operations. That involves fostering a cohesive team, making data-based decisions, and committing to continuous learning.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Feel free to contact me if you're interested in discussing exciting opportunities, working on cool projects, or just chatting about classic cars.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        <a key="Download CV" href={cvPDF} target="_blank" download="HalldorStefansson_CV.pdf">
                            Download CV <ArrowDownTrayIcon className="inline h-6 w-6 text-white" aria-hidden="true" />
                        </a>
                        <a key="Contact" href="#contact">
                            Contact <ArrowSmallDownIcon className="inline h-6 w-6 text-white" aria-hidden="true" />
                        </a>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.name} className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
