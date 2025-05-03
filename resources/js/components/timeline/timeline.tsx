import { ReactNode } from 'react';

function Timeline({ children, section = 'white', date }: { children: ReactNode; section?: string; date: string }) {
     let bgImage =
     section === 'blue' ? "bg-[url('/assets/timeline_blue_bg_plexus.webp')]" : "bg-[url('/assets/timeline_white_bg_plexus.webp')]";
    // ${bgImage} bg-no-repeat bg-cover bg-center
 
    return (
        <div className={` ${bgImage} bg-no-repeat bg-cover bg-blend-multiply bg-center ${section === 'blue' ? 'bg-primary-blue text-white' : 'text-primary-blue'}`}>
            <h2
                className={`m-auto w-fit rounded-b-3xl px-6 pt-10 pb-12 text-7xl font-semibold shadow-lg ${section === 'blue' ? 'text-primary-blue bg-white' : 'bg-primary-blue text-white'}`}
            >
                {date}
            </h2>
            <ul className={`relative mx-auto grid w-fit grid-cols-4 gap-x-3`}>{children}</ul>
        </div>
    );
}

export default Timeline;
