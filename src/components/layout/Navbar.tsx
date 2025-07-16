import { useState } from 'react'
import { ShoppingBasket, Search, UserRound, Menu, X } from 'lucide-react'

const scrollToSection = (selector:string) => {
    const element = document.getElementById(selector) as HTMLElement;
    const navbar = document.querySelector('header') as HTMLElement;
    const offset = navbar.offsetHeight;

    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    
    function handleOpenMenu() {
        setMenuOpen((prev) => !prev);
    }

    return (
        <header className="text-white font-poppins sticky top-0 left-0 z-99 bg-black">
            <nav className="flex items-center justify-between py-5 px-3">
                <div>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="text-3xl select-none"
                    >
                        Pizza<span className="text-red-600">Mook</span>
                    </button>
                </div>

                {/* Menu Desktop */}
                <ul className="hidden md:flex items-center space-x-8 text-lg">
                    <li><button className="hover:text-red-400 cursor-pointer" onClick={() => scrollToSection('menu')}>Menu</button></li>
                    <li><button className="hover:text-red-400 cursor-pointer" onClick={() => scrollToSection('testimonial')}>Depoimentos</button></li>
                    <li><button className="hover:text-red-400 cursor-pointer" onClick={() => scrollToSection('contact')}>Contact Us</button></li>
                    <li><button className="hover:text-red-400 cursor-pointer" onClick={() => scrollToSection('aboutus')}>About Us</button></li>
                </ul>

                {/* Ícones Desktop */}
                <div className="hidden md:flex items-center space-x-3.5">
                    <ShoppingBasket className="hover:text-red-400 cursor-pointer" />
                    <Search className="hover:text-red-400 cursor-pointer" />
                    <UserRound className="hover:text-red-400 cursor-pointer" />
                </div>

                {/* Botão de abrir menu mobile */}
                {!menuOpen && (
                    <div className="md:hidden absolute top-2 right-0 p-4 cursor-pointer z-50" onClick={handleOpenMenu}>
                        <Menu />
                    </div>
                )}

                {/* Menu Mobile */}
                <ul className={`
                    md:hidden fixed top-0 right-0 flex-col flex items-center justify-center space-y-3.5 w-full h-dvh bg-black z-50
                    transition-transform duration-300 ease-in-out
                    ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    <div className="absolute top-0 left-0 p-3 cursor-pointer" onClick={handleOpenMenu}>
                        <X />
                    </div>
                    <li><button  className="hover:text-red-400 cursor-pointer" onClick={() => { scrollToSection('menu'); setMenuOpen(false); }}>Menu</button></li>
                    <li><button  className="hover:text-red-400 cursor-pointer" onClick={() => { scrollToSection('testimonial'); setMenuOpen(false); }}>Testimonial</button></li>
                    <li><button  className="hover:text-red-400 cursor-pointer" onClick={() => { scrollToSection('contact'); setMenuOpen(false); }}>Contact Us</button></li>
                    <li><button  className="hover:text-red-400 cursor-pointer" onClick={() => { scrollToSection('aboutus'); setMenuOpen(false); }}>About Us</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar