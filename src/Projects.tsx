
import dayDashImage from './assets/images/DayDashboard.png';
import iotImage from './assets/images/iot_overview.png'
import mcLarenImage from './assets/images/mclarenAPI.jpg'

const projects = [
    {
        name: 'Day Dashboard',
        description: 'Daily Overview',
        imageSrc: dayDashImage,
        imageAlt: 'Dashboard displaying the weather forecast, bus schedule and upcoming events.',
        href: 'https://github.com/halldorstefans/DayDashboard',
    },
    {
        name: 'Energy Analytics',
        description: 'IoT Data Integration',
        imageSrc: iotImage,
        imageAlt: 'Homescreen display data coming from an IoT device.',
        href: 'https://github.com/halldorstefans/Energy-Analytics',
    },
    {
        name: 'McLaren API',
        description: 'Unofficial API for McLaren Formula 1',
        imageSrc: mcLarenImage,
        imageAlt: 'Image of a McLaren Formula 1 car.',
        href: 'https://github.com/halldorstefans/McLarenAPI',
    },
]

export default function Projects() {
    return (
        <div id="work" className="bg-[#ecf4ff]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-3xl font-bold text-gray-900">My Projects & Work</h2>
                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {projects.map((project) => (
                            <div key={project.name} className="group relative">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white aspect-h-1 aspect-w-2 group-hover:opacity-75 sm:h-64">
                                    <img
                                        src={project.imageSrc}
                                        alt={project.imageAlt}
                                        className="object-contain object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <a href={project.href} target="_blank">
                                        <span className="absolute inset-0" />
                                        {project.name}
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}