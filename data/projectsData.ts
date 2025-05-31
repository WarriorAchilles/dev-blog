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
        href: '/blog/CQL', // probably should make a blog post about this and then link the blog post here, then link to the site inside the blog post.
    },
    {
        title: 'MERC',
        description: `A website for Medical Equipment Resource Consultants, a company that specializes in helping hospitals and healthcare facilities maximize the value of their medical equipment. Made with WordPress.`,
        imgSrc: '/static/images/MERC-Homepage.png',
        href: '/blog/merc', // probably should make a blog post about this and then link the blog post here, then link to the site inside the blog post.
    },
    {
        title: 'NanoHabits',
        description: `More info coming soon`,
        imgSrc: '/static/images/time-machine.jpg',
        href: '#',
    },
];

export default projectsData;
