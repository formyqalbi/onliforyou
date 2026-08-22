import Page from "./Page";
import styles from "./VideoCallPage.module.css";

type Theme = "dark" | "warm" | "dark-to-warm" | "warm-to-dark" | "black";

export default function VideoCallPage({
  index,
  total,
  theme = "dark",
  children,
}: {
  index: number;
  total: number;
  theme?: Theme;
  children: React.ReactNode;
}) {
  return (
    <Page index={index} total={total} theme={theme}>
      <div className={styles.stack}>{children}</div>
    </Page>
  );
}
