interface LinkProps {
	to: string,
	children: string,
	className: string
}

const Link = ({ to, children, className }: LinkProps) => (
	<a
		href={to}
		className={className}
		onClick={(e) => {
			if (to.startsWith('http')) return;
			e.preventDefault();
			window.history.pushState({}, '', to);
			window.dispatchEvent(new PopStateEvent('popstate'));
		}}
	>
		{children}
	</a>
);


export default Link;