import Head from 'next/head';
import Link from 'next/link';

export default function Layout ( { children, home } ) {
    return (
        <div>
            <Head>
                <title>Family Tree information</title>
            </Head>
            <main>
                {children}
            </main>
            {  (!home) && (
                 <Link href="/"><a className="btn btn-primary mt-3">Home</a></Link>
               )
            }
        </div>
    );
        }