import Link from "next/link";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/">Server Component</Link>
        <Link href="/client-page">Client Component</Link>
        <Link href="/suspense">Suspense</Link>
      </nav>
    </header>
  );
}
