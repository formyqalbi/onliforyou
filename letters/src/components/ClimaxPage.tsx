import Page from "./Page";
import styles from "./ClimaxPage.module.css";

export default function ClimaxPage({
  index,
  total,
  children,
}: {
  index: number;
  total: number;
  children: React.ReactNode;
}) {
  return (
    <Page index={index} total={total} theme="black" ornament={false} className={styles.climax}>
      <div className={styles.stack}>{children}</div>
    </Page>
  );
}
