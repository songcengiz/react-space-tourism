import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const initialState = [
  {
    name: "Launch vehicle",
    images: {
      portrait: "../public/technology/image-launch-vehicle-portrait.jpg",
      landscape: "../public/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: "../public/technology/image-spaceport-portrait.jpg",
      landscape: "../public/technology/image-spaceport-landscape.jpg",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: "../public/technology/image-space-capsule-portrait.jpg",
      landscape: "../public/technology/image-space-capsule-landscape.jpg",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];
const initialTechnology = {
  name: "Launch vehicle",
  images: {
    portrait: "../public/technology/image-launch-vehicle-portrait.jpg",
    landscape: "../public/technology/image-launch-vehicle-landscape.jpg",
  },
  description:
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
};

const BASE_URL = "http://localhost:8000";
const TechnologyContext = createContext();
function TechnologyProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [technologies, setTechnologies] = useState(initialState);
  const [technology, setTechnology] = useState(initialTechnology);
  const technologyNames = technologies.map((tec) => tec.name);
  useEffect(() => {
    async function fetchDestination(params) {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/technology`);
        const data = await res.json();
        setTechnologies(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDestination();
  }, []);

  function handleGetTechnology(tc) {
    const technology = technologies.find(
      (tec) => tec.name.toLowerCase() === tc.toLowerCase()
    );
    setTechnology(technology);
  }

  return (
    <TechnologyContext.Provider
      value={{ isLoading, technology, handleGetTechnology, technologyNames }}
    >
      {children}
    </TechnologyContext.Provider>
  );
}
function useTechnology() {
  const context = useContext(TechnologyContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider!");
  return context;
}

export { TechnologyProvider, useTechnology };
