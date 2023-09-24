import styles from "./Technology.module.css";
import PageNav from "../components/PageNav";
import { useTechnology } from "../contexts/TechnologyProvider";
import Spinner from "../components/Spinner";
function Technology() {
  const { isLoading, technology, handleGetTechnology, technologyNames } =
    useTechnology();
  const { name, images, description } = technology;

  if (isLoading) return <Spinner />;
  return (
    <main className={styles.technology}>
      <PageNav page="technology" />
      <header>
        {" "}
        <span>03</span> SPACE LAUNCH 101
      </header>
      <section>
        <div className={styles.main}>
          <nav className={styles.nav}>
            {technologyNames.map((el, i) => (
              <button
                className={`${
                  el.toLowerCase() === name.toLowerCase() ? "active" : ""
                }`}
                key={i}
                onClick={() => handleGetTechnology(el)}
              >
                {i + 1}
              </button>
            ))}
          </nav>
          <div className={styles.content}>
            <h2>The Terminology...</h2>
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        </div>

        <img src={images?.portrait} alt={name} />
      </section>
    </main>
  );
}

export default Technology;
