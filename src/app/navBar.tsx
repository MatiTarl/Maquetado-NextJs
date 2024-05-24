import Image from 'next/image';
import NavLinks from './ui/nav-links';

export default function NavBar() {
    return (
        <main>
            <div className='w-full h-16 border justify-around items-center flex'>
                <div className='w-full h-full items-center justify-start flex'>
                    <Image src='' alt='' width={100} height={30} className='' />
                </div>
                <div className='flex w-full'>
                    <NavLinks />
                </div>
            </div>
        </main>
    )
}