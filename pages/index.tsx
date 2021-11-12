import styles from "./index.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className={styles.red}>hello world</h1>

      <h3>
        <Link href="/login">
          <a>Go to Login </a>
        </Link>
      </h3>
    </main>
  );
}
