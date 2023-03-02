import ParticlesBg from "particles-bg";
import "./App.css";

function App() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="profile text-center">
            <img alt="#" src="/anjas.png" className="avatar" />
            <h1>@anjasmoro</h1>
            <p>Frontend Developer</p>
          </div>
          <div className="mt-16">
            <a href="https://www.instagram.com/tunjung_anjasmoro/">Instagram</a>
          </div>
          <div className="mt-16">
            <a href="https://www.facebook.com/profile.php?id=100071763890647">Facebook</a>
          </div>
          <div className="mt-16">
            <a href="https://id.linkedin.com/in/tunjung-anjasmoro-237a03197">LinkedIn</a>
          </div>
        </div>
      </div>
      <ParticlesBg type="thick" bg={true} />
    </div>
  );
}

export default App;
