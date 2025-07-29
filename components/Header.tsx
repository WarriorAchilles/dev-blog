import siteMetadata from '@/data/siteMetadata';
import headerNavLinks from '@/data/headerNavLinks';
import Logo from '@/data/logo.svg';
import Link from './Link';
import MobileNav from './MobileNav';
import SearchButton from './SearchButton';

const Header = () => {
    let headerClass =
        'flex items-center w-[80%] bg-transparent justify-between py-2 px-10 mt-15 ml-auto mr-auto border rounded-full glass3d';
    if (siteMetadata.stickyNav) {
        headerClass += ' sticky top-0 z-50';
    }

    return (
        <header className={headerClass}>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
                <div className="flex items-center justify-between">
                    <div className="mr-3" style={{ width: '45px' }}>
                        <Logo />
                    </div>
                    {typeof siteMetadata.headerTitle === 'string' ? (
                        <div className="text-textHeading-light dark:text-textHeading hidden h-6 text-2xl font-semibold sm:block">
                            {siteMetadata.headerTitle}
                        </div>
                    ) : (
                        siteMetadata.headerTitle
                    )}
                </div>
            </Link>
            <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
                <div className="hidden items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
                    {headerNavLinks
                        .filter((link) => link.href !== '/')
                        .map((link) => (
                            <Link
                                key={link.title}
                                href={link.href}
                                className="hover:text-primary-500 dark:hover:text-primary-400 text-textHeading-light dark:text-textHeading m-1 font-medium"
                            >
                                {link.title}
                            </Link>
                        ))}
                </div>
                <SearchButton />
                <MobileNav />
            </div>
        </header>
    );
};

export default Header;
