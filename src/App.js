import { WebRouter } from "./router";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
      <BrowserRouter>
        <WebRouter />
      </BrowserRouter>
  );
}

export default App;
