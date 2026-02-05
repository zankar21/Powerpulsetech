import styles from "./Badge.module.css";

const tones = {
  info: styles.info,
  warning: styles.warning,
  neutral: styles.neutral
};

export default function Badge({ children, tone = "neutral", className = "" }) {
  return <span className={`${styles.badge} ${tones[tone]} ${className}`}>{children}</span>;
}
