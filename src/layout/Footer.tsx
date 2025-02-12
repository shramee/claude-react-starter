import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from '../components/Link';
import { navItems } from '../lib/config';

const Footer = () => (
	<footer className="bg-gray-800 text-white">
		<div className="container mx-auto px-4 py-8">
			<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
				{/* Company Info */}
				<div className="space-y-4">
					<h3 className="text-xl font-bold">Company</h3>
					<p className="text-gray-300">
						Building amazing digital experiences since 2024.
					</p>
				</div>

				{/* Quick Links */}
				<div className="space-y-4">
					<h3 className="text-xl font-bold">Quick Links</h3>
					<ul className="space-y-2">
						{navItems.map((item) => (
							<li key={item.path}>
								<Link
									to={item.path}
									className="text-gray-300 hover:text-white transition-colors"
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Contact Info */}
				<div className="space-y-4">
					<h3 className="text-xl font-bold">Contact</h3>
					<p className="text-gray-300">123 Business Street</p>
					<p className="text-gray-300">City, State 12345</p>
					<p className="text-gray-300">contact@example.com</p>
				</div>

				{/* Social Links */}
				<div className="space-y-4">
					<h3 className="text-xl font-bold">Follow Us</h3>
					<div className="flex space-x-4">
						<a href="#" className="text-gray-300 hover:text-white">
							<Github size={24} />
						</a>
						<a href="#" className="text-gray-300 hover:text-white">
							<Twitter size={24} />
						</a>
						<a href="#" className="text-gray-300 hover:text-white">
							<Linkedin size={24} />
						</a>
						<a href="#" className="text-gray-300 hover:text-white">
							<Mail size={24} />
						</a>
					</div>
				</div>
			</div>

			<div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
				<p>&copy; 2024 Your Company. All rights reserved.</p>
			</div>
		</div>
	</footer>
);

export default Footer;