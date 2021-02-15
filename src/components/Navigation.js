import Link from 'next/Link';

const Navigation = () => {
        return (
        <>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/post/1/Comment 1'>Post 1</Link>
                </li>
                <li>
                    <Link href='/post/2/Comment 2'>Post 2</Link>
                </li>
            </ul>
        </>
    );
}

export default Navigation;