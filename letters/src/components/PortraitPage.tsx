import Page from "./Page";
import styles from "./PortraitPage.module.css";

type Theme = "dark" | "warm" | "dark-to-warm" | "warm-to-dark" | "black";
type Variant = "framed" | "circle" | "bleed";

const FALLBACK =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(
    `<svg width='500' height='650' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='#1E0F17'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#FF6FA0' font-family='serif' font-size='22'>Rani</text></svg>`
  );

export default function PortraitPage({
  index,
  total,
  theme = "warm",
  src,
  alt,
  variant = "framed",
  imgRotate,
  children,
}: {
  index: number;
  total: number;
  theme?: Theme;
  src: string;
  alt: string;
  variant?: Variant;
  imgRotate?: number;
  children?: React.ReactNode;
}) {
  return (
    <Page index={index} total={total} theme={theme}>
      <div className={styles.layout}>
        <div className={`${styles.frame} ${styles[variant]} photo-tilt`}>
          <img
            src={src}
            alt={alt}
            style={imgRotate ? { transform: `rotate(${imgRotate}deg)` } : undefined}
            onError={(e) => {
              e.currentTarget.src = FALLBACK;
            }}
          />
        </div>
        {children && <div className={styles.caption}>{children}</div>}
      </div>
    </Page>
  );
}
