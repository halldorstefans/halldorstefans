import { StarIcon, RocketLaunchIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

const strengths = [
    {
        name: 'Operational Excellence',
        description:
            'I empower your business and team to operate efficiently by fine-tuning software development processes and workflow.',
        icon: StarIcon,
    },
    {
        name: 'Harmonious & Positive Team Work',
        description:
            'I thrive on bringing people together and solving problems effectively. I foster a sense of unity among team members, ensuring the team works harmoniously together.',
        icon: ChatBubbleLeftRightIcon,
    },
    {
        name: 'Quality Focus',
        description:
            'I focus on providing data-informed decision-making, inspiring high-performance teams, and creating a culture of excellence.',
        icon: RocketLaunchIcon,
    },
]

export default function Strengths() {
    return (
        <div id="strengths" className="bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-blue-600">Connecting Systems and Teams</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Why Me?
                    </p>
                    <p className="mt-6 px-10 text-lg leading-8 text-gray-600">
                        In today's tech world, picking the right software engineer is vital.
                        <br/>
                        Here are my strengths and what sets me apart:
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
                    <dl className="grid mx-auto grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                        {strengths.map((strength) => (
                            <div key={strength.name} className="relative px-8">
                                <dt className="text-center text-base font-semibold leading-7 text-gray-900">
                                    <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                                        <strength.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {strength.name}
                                </dt>
                                <dd className="mt-2 text-center text-base leading-7 text-gray-600">{strength.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
