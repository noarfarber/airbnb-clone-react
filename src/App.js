import "./style.css";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

function App() {
  return (
		<div className="App">
			<Navbar />
			<Hero />
			<Card
				image="katie-zaferes.png"
				rating="5.0"
				reviewCount={6}
				country="USA"
				title="Life Lessons with Katie Zaferes"
				price={136}
			/>
			<Card />
			<Card />
		</div>
    
  );
}

export default App;
