import Page from "./Page";
import styles from "./ListPage.module.css";

export default function ListPage({
  index,
  total,
  children,
}: {
  index: number;
  total: number;
  children: React.ReactNode;
}) {
  return (
    <Page index={index} total={total} theme="warm">
      <div className={styles.rows}>{children}</div>
    </Page>
  );
}

export function ListRow({ children }: { children: React.ReactNode }) {
  return <p className={styles.row}>{children}</p>;
}
