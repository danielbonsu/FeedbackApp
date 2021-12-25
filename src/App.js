import "./App.css";
import FeedBackRating from "./components/FeedbackRating/FeedBackRating";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className='mainApp'>
        <FeedBackRating />
      </div>
    </>
  );
}

export default App;
