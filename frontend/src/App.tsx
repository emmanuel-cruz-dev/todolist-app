import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Navbar/Header";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
