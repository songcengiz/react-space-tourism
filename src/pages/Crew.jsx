import styles from "./Crew.module.css";
import PageNav from "../components/PageNav";
import { useCrew } from "../contexts/CrewProvider";
import Spinner from "../components/Spinner";
function Crew() {
  const { isLoading, crew, handleGetCrew, crewNames } = useCrew();
  const { name, images, role, bio } = crew;

  if (isLoading) return <Spinner />;
  return (
    <main className={styles.crew}>
      <PageNav page="crew" />
      <header>
        {" "}
        <span>02</span> MEET YOUR CREW
      </header>
      <section>
        <div className={styles.content}>
          <h2>{role}</h2>
          <h1>{name}</h1>
          <p>{bio}</p>
          <footer className={styles.nav}>
            {crewNames.map((el, i) => (
              <button
                className={`${
                  el.toLowerCase() === name.toLowerCase() ? "active" : ""
                }`}
                key={i}
                onClick={() => handleGetCrew(el)}
              ></button>
            ))}
          </footer>
        </div>

        <img src={images?.png} alt={name} />
      </section>
    </main>
  );
}

export default Crew;
