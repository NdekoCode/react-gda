import "../assets/css/Loader.css";
export function Loader() {
  return (
    <div className="loadingContainer">
      <div className="loading">
        <span className="loadWords">Loading...</span>
        <span className="loading__anim"></span>
      </div>
    </div>
  );
}
