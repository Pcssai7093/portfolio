import "./App.css";
import Leftbar from "./Components/Leftbar";
import Rightbar from "./Components/Rightbar";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Pcssai7093/portfolio/master/data.json"
      )
      .then((result) => {
        console.log(result.data);
        setData((p) => result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      {data && <Leftbar data={data} />}
      {data && <Rightbar data={data} />}
    </div>
  );
}

export default App;
