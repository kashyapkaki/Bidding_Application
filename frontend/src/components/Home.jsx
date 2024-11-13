import PropTypes from "prop-types";

const Home = () => {
	return (
		<div className="flex flex-col items-center justify-center w-full min-h-screen p-4 overflow-hidden">
			<div className="w-full mx-auto max-w-7xl">
				<div className="flex flex-col mb-8">
					<h1 className="mt-4 text-4xl md:text-6xl bg-clip-text">
						Your Gateway to Extraordinary Finds
					</h1>
				</div>
				<p className="max-w-4xl mb-12 text-lg md:text-xl">
					Unlock deals, bid smart, and seize the moment with our online bidding bonanza!
				</p>
				<div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
					<FeatureCard
						title="Live Auctions"
						description="Participate in real-time auctions happening now and place your bids instantly."
						gradient="from-teal-400 to-blue-500"
						icon={<LiveIcon />}
					/>
					<FeatureCard
						title="Strategize Bids"
						description="Preview and prepare for auctions to strategize your bidding approach."
						gradient="from-purple-400 to-pink-500"
						icon={<CalendarIcon />}
					/>
					<FeatureCard
						title="Manage Your Auctions"
						description="Effortlessly create, edit, and oversee your auction items with our intuitive tools."
						gradient="from-green-400 to-blue-400"
						icon={<SettingsIcon />}
					/>
				</div>
			</div>
		</div>
	);
};

const FeatureCard = ({ title, description, gradient, icon }) => (
	<div
		className={`p-6 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg text-center transform transition duration-500 hover:scale-105 border border-gray-700`}
	>
		<div className={`text-xl mb-4 bg-gradient-to-r ${gradient}`}>
			{"Bid now >"}
		</div>
		<h2 className="mb-3 text-2xl font-semibold">{title}{icon}</h2>
		<p>{description}</p>
	</div>
);

FeatureCard.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	gradient: PropTypes.string.isRequired,
	icon: PropTypes.element.isRequired,
};

const LiveIcon = () => (
	<svg
		className="w-12 h-12 mx-auto"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
		/>
	</svg>
);

const CalendarIcon = () => (
	<svg
		className="w-12 h-12 mx-auto"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
		/>
	</svg>
);

const SettingsIcon = () => (
	<svg
		className="w-12 h-12 mx-auto"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.993.606 2.277-.165 2.572-1.065z"
		/>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
		/>
	</svg>
);

export default Home;
