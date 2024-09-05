import Nav from "./components/Nav.jsx";
import Carousel from "./components/carousel.jsx";
import Footer from "./components/Footer.jsx";

function App() {
	return (
		<div className="h-screen w-screen bg-[#1e1e1e] text-white">
			<Nav />
			<Carousel />
			<Footer />
		</div>
	);
}

export default App;