import "./Reset.css";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import data from "./components/data.json";

function App() {
  return (
    <div className="App">
      <Header />
      <Main data={data} />
      <Footer />
    </div>
  );
}

export default App;
