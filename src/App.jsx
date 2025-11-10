import Feature from "./components/Feature";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Workflow from "./components/Workflow";
const App = () => {
  return (
    <>
      <NavBar />
      <div className="px-4 sm:px-6 md:px-12 lg:px-16 lg:max-w-7xl mx-auto pt-20">
        <Hero />
        <Feature />
        <Workflow />
      </div>
    </>
  );
};

export default App;
