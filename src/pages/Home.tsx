import { useState } from "react";

const Home = () => {
  const [password, setPassword] = useState(true);

  const handleBtn = () => {
    setPassword((prev) => !prev);
  };
  return (
    <div>
      <input type={password ? "password" : "text"} />
      <button onClick={handleBtn}>{password ? "show" : "hide"}</button>
    </div>
  );
};

export default Home;
