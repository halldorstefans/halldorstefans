import { ArrowsRightLeftIcon, GlobeAltIcon, CodeBracketIcon } from '@heroicons/react/20/solid'
import headshot from './assets/images/HS.jpg'

const expertises = [
    {
        name: 'Software Development.',
        description: 'Over 8 years of development experience with C#, Go, SQL, Docker, Kubernetes, Kafka, and .NET framework in agile environments.',
        icon: CodeBracketIcon,
    },
    {
        name: 'API Design and Implementation.',
        description:
            'Design and implement RESTful, OpenAPI, and gRPC APIs based on industry standards and guidelines.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Integration Specialist.',
        description: 'Lead and develop integrations, from ERP to web applications, using SOAP, REST, XML, JSON, etc.',
        icon: ArrowsRightLeftIcon,
    },
]

export default function Expertise() {
    return (
        <div id="expertise" className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-blue-600">Crafting Quality in Code & Collaboration</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Expertise</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Skilled at working with various technologies, from legacy systems to cutting-edge tech.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {expertises.map((expertise) => (
                                    <div key={expertise.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <expertise.icon className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                                            {expertise.name}
                                        </dt>{' '}
                                        <dd className="inline">{expertise.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <img
                        src={headshot}
                        alt="Halldor Stefansson headshot"
                        className="rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
                        width={2432}
                        height={1442}
                    />
                </div>
            </div>
        </div>
    )
}
