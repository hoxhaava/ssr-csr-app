import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/" className="text-white">Home</Link>
                </li>
                <li>
                    <Link href="/ssr" className="text-white">SSR Page</Link>
                </li>
                <li>
                    <Link href="/csr" className="text-white">CSR Page</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
