import styles from "./Destination.module.css";
import PageNav from "../components/PageNav";
import Spinner from "../components/Spinner";
import { useDestination } from "../contexts/DestinationProvider";

export default function Destination() {
  const { isLoading, destination, handleGetDestination, destinationNames } =
    useDestination();
  const { name, images, description, distance, travel } = destination;

  if (isLoading) return <Spinner />;
  return (
    <main className={styles.destination}>
      <PageNav page="destination" />

      <header>
        {" "}
        <span>01</span> PICK YOUR DESTINATION
      </header>
      <section>
        <img src={images?.png} alt={name} />
        <div className={styles.main}>
          <div className={styles.nav}>
            {destinationNames.map((el, i) => (
              <button
                className={`${
                  el.toLowerCase() === name.toLowerCase() ? "active" : ""
                }`}
                key={i}
                onClick={() => handleGetDestination(el)}
              >
                {el}
              </button>
            ))}
          </div>
          <div className={styles.content}>
            <h1>{name}</h1>
            <p>{description}</p>
            <hr />
            <footer>
              <div>
                AVG.DISTANCE
                <p> {distance}</p>
              </div>
              <div>
                EST.TRAVEL TIME
                <p>{travel}</p>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
}
