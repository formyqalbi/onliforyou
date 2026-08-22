import Page from "./Page";
import styles from "./TextPage.module.css";

type Theme = "dark" | "warm" | "dark-to-warm" | "warm-to-dark" | "black";

export default function TextPage({
  index,
  total,
  theme = "dark",
  align = "left",
  children,
}: {
  index: number;
  total: number;
  theme?: Theme;
  align?: "left" | "center";
  children: React.ReactNode;
}) {
  return (
    <Page index={index} total={total} theme={theme}>
      <div className={`${styles.stack} ${align === "center" ? styles.center : ""}`}>
        {children}
      </div>
    </Page>
  );
}
