interface Project {
    title: string;
    description: string;
    href?: string;
    imgSrc?: string;
}

const projectsData: Project[] = [
    {
        title: 'CQL',
        description: `My current day job. CQL is a custom ecommerce development agency that specializes in building high-quality, scalable, and secure ecommerce solutions. In my day to day role, I work with a team of talented developers with technologies such as Reach, Node.js, TypeScript, ASP.NET, and more. I use platforms such as AWS, Azure, Shopify Plus, BigCommerce, and Salesforce Commerce Cloud, to build solutions that are the best fit for our clients.`,
        imgSrc: '/static/images/CQL-Logo.png',
        href: '/blog/CQL',
    },
    {
        title: 'MERC',
        description: `A website for Medical Equipment Resource Consultants, a company that specializes in helping hospitals and healthcare facilities maximize the value of their medical equipment. Made with WordPress.`,
        imgSrc: '/static/images/MERC-Homepage.png',
        href: '/blog/merc',
    },
    {
        title: 'NanoHabits',
        description: `An AI-powered habit tracking app designed to help users accomplish their goals and become better versions of themselves`,
        imgSrc: '/static/images/NanoHabits-Logo.png',
        href: '/blog/nanohabits',
    },
    {
        title: 'NanoHabits Prototype',
        description: `Discord bot`,
        imgSrc: '/static/images/time-machine.jpg',
        href: '/blog/nanohabits-prototype',
    },
];

export default projectsData;
