import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";
function Homepage() {
  const navigate = useNavigate();
  return (
    <main className={styles.homepage}>
      <PageNav page="homepage" />
      <section>
        <div>
          {" "}
          <h2>SO,YOU WANT TO TRAVEL TO</h2>
          <h1>SPACE</h1>
          <p>
            Let&apos;s face it: if you want to got to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </div>

        <Button type="home-btn" onClick={() => navigate("destination")}>
          Explore
        </Button>
      </section>
    </main>
  );
}

export default Homepage;
