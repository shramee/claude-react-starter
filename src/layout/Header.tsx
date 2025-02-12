import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from '../components/Link';
import { navItems } from '../lib/config';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const currentPath = window.location.pathname;

	return (
		<header className="bg-white shadow-md">
			<nav className="container mx-auto px-4 py-4">
				<div className="flex justify-between items-center">
					{/* Logo */}
					<Link to="/" className="text-2xl font-bold text-blue-600">
						Logo
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-8">
						{navItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className={`transition-colors ${currentPath === item.path
									? 'text-blue-600 font-semibold'
									: 'text-gray-600 hover:text-blue-600'
									}`}
							>
								{item.label}
							</Link>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden mt-4 space-y-4">
						{navItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className={`block transition-colors ${currentPath === item.path
									? 'text-blue-600 font-semibold'
									: 'text-gray-600 hover:text-blue-600'
									}`}
							>
								{item.label}
							</Link>
						))}
					</div>
				)}
			</nav>
		</header>
	);
};


export default Header;