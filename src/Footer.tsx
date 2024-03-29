const socialmedias = [
    {
        name: 'Email',
        link: 'mailto:hey@halldorstefans.dev',
        svgPath: 'M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z' + 'M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z'
    },
    {
        name: 'LinkedIn ',
        link: 'https://www.linkedin.com/in/halldorstefans/',
        svgPath: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z'
    },
    {
        name: 'GitHub',
        link: 'https://github.com/halldorstefans/',
        svgPath: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
    },
    {
        name: 'Twitter',
        link: 'https://twitter.com/HalldorStefans',
        svgPath: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'
    },
]

export default function FooterCTA() {
    return (
        <footer id="contact" className="text-center bg-[#ecf4ff]">
            <div className="container pt-14 mx-auto">
                <div className="py-20">
                    <span className="flex items-center justify-center w-full">
                        <h2 className="font-semibold text-4xl mx-2">I'd love to hear from you!</h2>
                    </span>
                    <span className="pt-10 flex items-center justify-center w-full">
                        <a href="https://calendly.com/halldorstefans/30min" target="_blank">
                            <button
                                type="button"
                                className="inline-block rounded-full border-2 bg-[#094FC3] border-[#094FC3] px-6 pb-[6px] pt-2 text-xl font-semibold uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-[094FC3}-600 hover:bg-blue-950 hover:bg-opacity-10 hover:text-slate-600 focus:border-blue-600 focus:text-slate-600 focus:outline-none focus:ring-0 active:border-blue-800 active:text-slate-800 dark:hover:bg-blue-600 dark:hover:bg-opacity-10">
                                Book a Call
                            </button>
                        </a>
                    </span>
                </div>
            </div>

            <div className="container pt-9 mx-auto">
                <div className=" mb-9 flex justify-center items-center">
                    {socialmedias.map((social) => (
                        <a className="mx-5" href={social.link} aria-label= {"Link to " + social.name}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d={social.svgPath} />
                            </svg>
                        </a>
                    ))}
                </div>
            </div>

            {/* <!--Copyright section--> */}
            <div
                className="p-4 text-center bg-black bg-opacity-20">
                © 2023 Copyright
                <a className="" href="#home">
                    : Halldor Stefansson</a>
            </div>
        </footer>
    );
}