import { useContext } from "react";
import { createContext, useState, useEffect } from "react";

const initialState = [
  {
    name: "Moon",
    images: {
      png: "/destination/image-moon.png",
      webp: "/destination/image-moon.webp",
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: "/destination/image-mars.png",
      webp: "/destination/image-mars.webp",
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: "/destination/image-europa.png",
      webp: "/destination/image-europa.webp",
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: "/destination/image-titan.png",
      webp: "/destination/image-titan.webp",
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];
const initialDest = {
  name: "Moon",
  images: {
    png: "/destination/image-moon.png",
    webp: "/destination/image-moon.webp",
  },
  description:
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  distance: "384,400 km",
  travel: "3 days",
};
const BASE_URL = "http://localhost:8000";
const DestinationContext = createContext();
function DestinationProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [destinations, setDestinations] = useState(initialState);
  const [destination, setDestination] = useState(initialDest);
  const destinationNames = destinations.map((dest) => dest.name);
  useEffect(() => {
    async function fetchDestination(params) {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/destinations`);
        const data = await res.json();
        setDestinations(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDestination();
  }, []);

  function handleGetDestination(ds) {
    const destination = destinations.find(
      (des) => des.name.toLowerCase() === ds.toLowerCase()
    );
    setDestination(destination);
  }
  return (
    <DestinationContext.Provider
      value={{ isLoading, destination, handleGetDestination, destinationNames }}
    >
      {children}
    </DestinationContext.Provider>
  );
}

function useDestination() {
  const context = useContext(DestinationContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider!");
  return context;
}

export { DestinationProvider, useDestination };
