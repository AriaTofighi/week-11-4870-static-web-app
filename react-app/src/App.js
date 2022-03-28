import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [toons, setToons] = useState();

  useEffect(() => {
    (async () => {
      const res = await getToons();
      const toons = await res.json();
      setToons(toons);
    })();
  }, []);

  const getToons = async () => {
    return await fetch("http://localhost:7071/api/toons");
  };

  return (
    <div className="App">
      <table style={{ padding: "24px" }}>
        {toons?.map((t) => (
          <tr>
            <td>{t?.id}</td>
            <td>{t?.firstName}</td>
            <td>{t?.lastName}</td>
            <td>{t?.gender}</td>
            <td>{t?.occupation}</td>
            <td>{t?.votes}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
