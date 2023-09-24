import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DestinationProvider } from "./contexts/DestinationProvider";
import Homepage from "./pages/Homepage";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import PageNotFound from "./pages/PageNotFound";
import { CrewProvider } from "./contexts/CrewProvider";
import { TechnologyProvider } from "./contexts/TechnologyProvider";

// const BASE_URL = "http://localhost:8000";
function App() {
  return (
    <TechnologyProvider>
      <CrewProvider>
        <DestinationProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="destination" element={<Destination />}></Route>
              <Route path="crew" element={<Crew />} />
              <Route path="technology" element={<Technology />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </DestinationProvider>
      </CrewProvider>
    </TechnologyProvider>
  );
}

export default App;
