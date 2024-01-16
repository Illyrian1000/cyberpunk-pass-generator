import "./PasswordHistory.css";

export default function PasswordHistory() {
  return (
    <div className="password-history-main-cont">
      <h1>Password History</h1>
      <div className="password-list-element">
        <div>
          <p className="password-history-list">{"^d3>~9YDA8s}cWN9L_P^"}</p>
          <p className="password-history-date">14/01/2023, 23:18:39</p>
        </div>
        <img src="copy-icon.png" />
      </div>

      <p className="clear-history-btn">Clear history</p>
    </div>
  );
}
