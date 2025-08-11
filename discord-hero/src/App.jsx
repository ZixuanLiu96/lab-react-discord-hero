import "./App.css";
import Nav from "./components/nav";
import Button from "./components/button";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="text">
        <h1>imagine a place...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, and a
          worldwide art community. Where just you and your handful friends can
          spend time together.A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className="btn-box">
          <Button className="download-btn">Download for Mac</Button>
          <Button className="open-btn">Open Discord in your browser</Button>
        </div>
      </div>
      <img
        className="bg-img"
        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-background.png"
      />
    </div>
  );
}

export default App;
