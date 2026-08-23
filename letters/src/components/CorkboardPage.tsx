import Page from "./Page";
import styles from "./CorkboardPage.module.css";

type Theme = "dark" | "warm" | "dark-to-warm" | "warm-to-dark" | "black";

export type PinnedPhoto = {
  src: string;
  alt: string;
  rotate: number;
};

const FALLBACK =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(
    `<svg width='400' height='500' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='#1E0F17'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#FF6FA0' font-family='serif' font-size='18'>us</text></svg>`
  );

export default function CorkboardPage({
  index,
  total,
  theme = "warm",
  photos,
  children,
}: {
  index: number;
  total: number;
  theme?: Theme;
  photos: PinnedPhoto[];
  children?: React.ReactNode;
}) {
  return (
    <Page index={index} total={total} theme={theme}>
      <div className={styles.board}>
        {photos.map((p, i) => (
          <div
            key={i}
            className={`${styles.pin} photo-tilt`}
            style={{ "--rotate": `${p.rotate}deg` } as React.CSSProperties}
          >
            <span className={styles.tape} />
            <img
              src={p.src}
              alt={p.alt}
              onError={(e) => {
                e.currentTarget.src = FALLBACK;
              }}
            />
          </div>
        ))}
      </div>
      {children && <div className={styles.caption}>{children}</div>}
    </Page>
  );
}
