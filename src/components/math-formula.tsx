import katex from "katex";
import "katex/dist/katex.min.css";

/**
 * Серверный рендер TeX-формулы в статичную KaTeX-разметку.
 * dangerouslySetInnerHTML безопасен: вход — доверенный TeX из исходников,
 * а не пользовательские данные.
 */
export function MathFormula({
  tex,
  className,
}: {
  tex: string;
  className?: string;
}) {
  const html = katex.renderToString(tex, {
    throwOnError: false,
    displayMode: false,
  });

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
