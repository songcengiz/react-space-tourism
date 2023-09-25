import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
const BASE_URL = "http://localhost:8000";
const initialState = [
  {
    name: "Douglas Hurley",
    images: {
      png: "./crew/image-douglas-hurley.png",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: "./crew/image-mark-shuttleworth.png",
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: "./crew/image-victor-glover.png",
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: "./crew/image-anousheh-ansari.png",
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];
const initialCrew = {
  name: "Douglas Hurley",
  images: {
    png: "./crew/image-douglas-hurley.png",
  },
  role: "Commander",
  bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
};
const CrewContext = createContext();
function CrewProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [crews, setCrews] = useState(initialState);
  const [crew, setCrew] = useState(initialCrew);
  const crewNames = crews.map((crew) => crew.name);
  useEffect(() => {
    async function fetchCrew(params) {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/crew`);
        const data = await res.json();
        setCrews(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCrew();
  }, []);

  function handleGetCrew(newCrew) {
    const crew = crews.find(
      (crew) => crew.name.toLowerCase() === newCrew.toLowerCase()
    );
    console.log(crew);
    setCrew(crew);
  }
  return (
    <CrewContext.Provider value={{ isLoading, crew, handleGetCrew, crewNames }}>
      {children}
    </CrewContext.Provider>
  );
}

function useCrew() {
  const context = useContext(CrewContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider!");
  return context;
}
export { CrewProvider, useCrew };
