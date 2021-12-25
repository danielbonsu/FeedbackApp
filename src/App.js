import "./App.css";
import FeedBackRating from "./components/FeedbackRating/FeedBackRating";
import Navbar from "./components/Navbar/Navbar";
import { FeedbackDistributor } from "./Context";

function App() {
  return (
    <>
      <FeedbackDistributor>
        <Navbar />
        <div className='mainApp'>
          <FeedBackRating />
        </div>
      </FeedbackDistributor>
    </>
  );
}

export default App;
