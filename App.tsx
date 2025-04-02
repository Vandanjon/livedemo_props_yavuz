import Avatar from "./Avatar";

const bart = {
	image:
		"https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
	firstName: "Bart",
	lastName: "Simpson",
};

const homer = {
	image:
		"https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png",
	firstName: "Homer",
	lastName: "Simpson",
};

function App() {
	return (
		<>
			<Avatar {...bart} />

			<Avatar {...homer} />
		</>
	);
}

export default App;
