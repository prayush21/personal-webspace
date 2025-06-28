// src/app/library/page.tsx
import styles from "./page.module.css";

const LibraryPage = () => {
  return (
    <div className={styles.body}>
      {/* This class comes from your new CSS Module */}
      <h1 className={styles.title}>My Library</h1>

      {/* You can still use Tailwind utility classes! */}
      <p className="mt-4 text-lg">Welcome to the library section.</p>
    </div>
  );
};

export default LibraryPage;
