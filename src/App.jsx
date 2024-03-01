import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import CreateModel from "./pages/CreateModel";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/create" element={<CreateModel />} />
      </Routes>
    </Router>
  );
}

export default App;
