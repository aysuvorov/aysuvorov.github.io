/**
 * Декоративные панели в композиции «функция и её производная»:
 * S(t) — кривая Каплана–Мейера, h(t) — функция риска с площадью под кривой
 * и римановыми прямоугольниками; оранжевая касательная скользит по h(t).
 * Без реальных данных — только визуальный мотив аналитики.
 */

export function SurvivalPanel() {
  return (
    <svg
      viewBox="0 0 240 190"
      fill="none"
      role="img"
      aria-label="Иллюстрация: кривая дожития с доверительным интервалом"
      className="block h-auto w-full"
    >
      {/* Доверительная полоса 95% */}
      <path
        d="M28 26H56V48H88V72H120V90H152V105H184V116H212V157H184V148H152V135H120V118H88V96H56V68H28Z"
        className="fill-orange-400/10"
      />

      {/* Ступенчатая кривая дожития */}
      <path
        d="M28 34H56V58H88V84H120V104H152V120H184V132H212V140"
        className="stroke-orange-500 dark:stroke-orange-300"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Цензурированные наблюдения */}
      <line x1="72" y1="53" x2="72" y2="63" className="stroke-orange-500/80 dark:stroke-orange-300/80" strokeWidth="1.4" />
      <line x1="136" y1="99" x2="136" y2="109" className="stroke-orange-500/80 dark:stroke-orange-300/80" strokeWidth="1.4" />
      <line x1="196" y1="127" x2="196" y2="137" className="stroke-orange-500/80 dark:stroke-orange-300/80" strokeWidth="1.4" />

      {/* Оси и деления */}
      <path d="M28 24V166H212" className="stroke-foreground/40" strokeWidth="1.1" />
      {[88, 148, 208].map((x) => (
        <line key={x} x1={x} y1="166" x2={x} y2="171" className="stroke-foreground/30" />
      ))}

      <text
        x="206"
        y="40"
        textAnchor="end"
        className="fill-orange-600 dark:fill-orange-300 font-mono text-[10px]"
      >
        S(t)
      </text>
    </svg>
  );
}

export function HazardPanel() {
  const curve =
    "M28 158C60 152 84 138 108 118C132 98 156 72 180 56C192 48 202 44 212 40";

  return (
    <svg
      viewBox="0 0 240 190"
      fill="none"
      role="img"
      aria-label="Иллюстрация: функция риска с площадью под кривой и касательной"
      className="block h-auto w-full"
    >
      {/* Площадь под кривой */}
      <path d={`${curve}L212 166L28 166Z`} className="fill-emerald-400/10" />

      {/* Римановы прямоугольники */}
      {[
        { x: 32, w: 22, y: 158, h: 8 },
        { x: 56, w: 22, y: 150, h: 16 },
        { x: 80, w: 22, y: 139, h: 27 },
        { x: 104, w: 22, y: 124, h: 42 },
        { x: 128, w: 22, y: 104, h: 62 },
        { x: 152, w: 22, y: 80, h: 86 },
        { x: 176, w: 22, y: 56, h: 110 },
        { x: 198, w: 14, y: 44, h: 122 },
      ].map((r) => (
        <rect
          key={r.x}
          x={r.x}
          y={r.y}
          width={r.w}
          height={r.h}
          className="fill-emerald-600/10 dark:fill-emerald-300/15"
        />
      ))}

      {/* Гладкая кривая риска */}
      <path d={curve} className="stroke-emerald-600 dark:stroke-emerald-300" strokeWidth="2" strokeLinecap="round" />

      {/* Оси и деления */}
      <path d="M28 24V166H212" className="stroke-foreground/40" strokeWidth="1.1" />
      {[88, 148, 208].map((x) => (
        <line key={x} x1={x} y1="166" x2={x} y2="171" className="stroke-foreground/30" />
      ))}

      <text
        x="200"
        y="32"
        textAnchor="end"
        className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[10px]"
      >
        h(t)
      </text>

      {/* Оранжевая касательная скользит по кривой */}
      <g className="tangent-sweep">
        <line
          x1="-15"
          y1="0"
          x2="15"
          y2="0"
          className="stroke-orange-500 dark:stroke-orange-300"
          strokeWidth="1.5"
        />
        <circle r="2.8" className="fill-orange-500 dark:fill-orange-300" />
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto" path={curve} />
      </g>
    </svg>
  );
}
