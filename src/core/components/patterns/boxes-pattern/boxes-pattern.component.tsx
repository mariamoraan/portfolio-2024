import { generateMatrix } from "@/core/utils/generate-matrix";
import Image from "next/image";
import styles from "./boxes-pattern.module.css";

interface Props {
  rows?: number;
  columns?: number;
  className?: String;
}

export const BoxesPatternComponent = (props: Props) => {
  const { rows = 5, columns = 5, className = "" } = props;

  const patternMatrix = generateMatrix(columns, rows);
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {patternMatrix.map((row, index) => (
        <div key={index} className={styles.row}>
          {row.map((column) => (
            <div key={`column-${column}`} className={styles.cell}>
              <Image
                src="/images/boxes-pattern.svg"
                height={20}
                width={20}
                alt="AI picture of myself"
                className={styles.pattern}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
