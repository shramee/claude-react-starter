import React from 'react';
import { CheckCircle, ArrowRight, BarChart, Shield, Zap, Users } from 'lucide-react';

const Landing = () => {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							Streamline Your Workflow with Our Platform
						</h1>
						<p className="text-xl md:text-2xl mb-8 text-blue-100">
							Boost productivity and improve team collaboration with our all-in-one solution.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
								Get Started Free
							</button>
							<button className="border border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors">
								Book a Demo
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Social Proof */}
			<section className="py-12 bg-gray-50">
				<div className="container mx-auto px-4">
					<p className="text-center text-gray-600 mb-8">Trusted by teams at</p>
					<div className="flex flex-wrap justify-center gap-12 opacity-60">
						{['Company 1', 'Company 2', 'Company 3', 'Company 4'].map((company) => (
							<div key={company} className="text-2xl font-bold text-gray-400">
								{company}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Features */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center max-w-2xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Everything you need to scale your business
						</h2>
						<p className="text-xl text-gray-600">
							Our platform provides all the tools you need to manage and grow your business effectively.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								icon: <BarChart className="w-8 h-8 text-blue-600" />,
								title: 'Advanced Analytics',
								description: 'Get detailed insights into your business performance with real-time analytics.'
							},
							{
								icon: <Shield className="w-8 h-8 text-blue-600" />,
								title: 'Enterprise Security',
								description: 'Keep your data safe with our enterprise-grade security features.'
							},
							{
								icon: <Zap className="w-8 h-8 text-blue-600" />,
								title: 'Lightning Fast',
								description: 'Experience lightning-fast performance with our optimized platform.'
							},
							{
								icon: <Users className="w-8 h-8 text-blue-600" />,
								title: 'Team Collaboration',
								description: 'Work together seamlessly with your team in real-time.'
							}
						].map((feature, index) => (
							<div key={index} className="p-6 bg-white rounded-lg shadow-lg">
								{feature.icon}
								<h3 className="text-xl font-bold mt-4 mb-2">{feature.title}</h3>
								<p className="text-gray-600">{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Pricing */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center max-w-2xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
						<p className="text-xl text-gray-600">Choose the plan that's right for you</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						{[
							{
								name: 'Starter',
								price: '$29',
								description: 'Perfect for small teams',
								features: ['Up to 5 users', '5GB storage', 'Basic analytics', 'Email support']
							},
							{
								name: 'Professional',
								price: '$99',
								description: 'For growing businesses',
								features: ['Up to 20 users', '50GB storage', 'Advanced analytics', 'Priority support']
							},
							{
								name: 'Enterprise',
								price: 'Custom',
								description: 'For large organizations',
								features: ['Unlimited users', 'Unlimited storage', 'Custom analytics', '24/7 support']
							}
						].map((plan, index) => (
							<div key={index} className="bg-white rounded-lg shadow-lg p-8">
								<h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
								<div className="text-4xl font-bold mb-2">{plan.price}</div>
								<p className="text-gray-600 mb-6">{plan.description}</p>
								<ul className="space-y-3 mb-8">
									{plan.features.map((feature, i) => (
										<li key={i} className="flex items-center gap-2">
											<CheckCircle className="w-5 h-5 text-green-500" />
											<span>{feature}</span>
										</li>
									))}
								</ul>
								<button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
									Get Started
								</button>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-20 bg-blue-600 text-white">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Ready to transform your business?
						</h2>
						<p className="text-xl mb-8 text-blue-100">
							Join thousands of satisfied customers who are already using our platform.
						</p>
						<button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
							Get Started Now
							<ArrowRight className="w-5 h-5" />
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Landing;