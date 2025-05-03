import { Link } from '@inertiajs/react';
import { Instagram } from 'lucide-react';
import DevCard from './dev-card';
import MadeWithLaravel from './laravel-logo';

function Footer() {
    return (
        <footer className="bg-[url('/assets/footer_background_plexus.webp')] bg-size-[900px] bg-bottom-right bg-no-repeat pt-24">
            <div className="mx-auto px-6 py-10 md:max-w-7xl">
                <section className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
                    <div className="flex flex-col items-start">
                        <MadeWithLaravel />

                        <div className="mt-7">
                            <h2 className="text-center font-semibold md:text-left">Desenvolvido por</h2>
                            <ul className="mt-2 flex gap-2">
                                <DevCard
                                    name="Gabriel Amaral"
                                    link="https://github.com/amaralTheSage"
                                    img="https://avatars.githubusercontent.com/u/140647677?v=4"
                                />
                                <DevCard
                                    name="Marcelo Oscarberry"
                                    link="https://github.com/Marce1in"
                                    img="https://avatars.githubusercontent.com/u/98642728?v=4"
                                />{' '}
                                <DevCard
                                    name="Natan Pederzolli"
                                    link="https://github.com/Sasutan"
                                    img="https://avatars.githubusercontent.com/u/103868377?v=4"
                                />{' '}
                                <DevCard
                                    name="Marcelo Oscarberry"
                                    link="https://github.com/Marce1in"
                                    img="https://avatars.githubusercontent.com/u/98642728?v=4"
                                />{' '}
                                <DevCard
                                    name="Marcelo Oscarberry"
                                    link="https://github.com/Marce1in"
                                    img="https://avatars.githubusercontent.com/u/98642728?v=4"
                                />{' '}
                            </ul>
                        </div>
                    </div>
                    <h4 className="cursor-pointer text-lg font-semibold text-white">#TURMADOCOSQUINHA</h4>

                    <div className="space-y-6 text-center md:text-right">
                        <nav className="flex flex-col gap-1">
                            <h2 className="text-lg font-semibold">Seções</h2>
                            <Link className="hover:underline" prefetch href="/">
                                Home
                            </Link>
                            <Link className="hover:underline" prefetch href="/palestras">
                                Palestras
                            </Link>
                            <Link className="hover:underline" prefetch href="/palestrantes">
                                Palestrantes
                            </Link>
                        </nav>

                        <nav className="flex flex-col gap-1">
                            <h2 className="text-lg font-semibold">Redes Sociais</h2>
                            <a href="https://www.instagram.com/sajic_unisenac/" className="ml-auto flex w-fit items-center gap-1 hover:underline">
                                @sajic_unisenac
                                <Instagram className="size-4" />
                            </a>
                            <a href="https://www.instagram.com/unisenacpelotas/" className="ml-auto flex w-fit items-center gap-1 hover:underline">
                                @unisenacpelotas <Instagram className="size-4" />
                            </a>
                        </nav>
                    </div>
                </section>

                <div className="mt-10 flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-right">
                    <img src="/assets/logo_branco.png" alt="" className="s max-w-[200px] filter not-dark:invert" />
                    <p className="max-w-[450px] text-sm">
                        © 2024. Todos os direitos reservados. Projeto idealizado por estudantes do 4º semestre do curso de Análise e Desenvolvimento
                        de Sistemas.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
