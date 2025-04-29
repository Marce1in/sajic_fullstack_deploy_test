import Heading from '@/components/heading';
import { type PropsWithChildren } from 'react';

export default function SettingsLayout({ children }: PropsWithChildren) {
    return (
        <div className="px-6 pt-12 md:px-32">
            <Heading title="Configurações" description="Gerencie as configurações de sua conta." />

            <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-12">
                <div className="flex-1 md:mx-auto md:max-w-3xl">
                    <section className="mx-auto space-y-12">{children}</section>
                </div>
            </div>
        </div>
    );
}
