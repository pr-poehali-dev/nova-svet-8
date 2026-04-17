import { motion } from "framer-motion"

export default function Overlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <div className="absolute top-8 left-0 right-0 flex flex-col items-center gap-2">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="font-serif text-2xl md:text-3xl font-light tracking-wide"
          style={{ color: "hsl(340, 60%, 82%)" }}
        >
          Путь к себе
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="text-sm md:text-base font-light tracking-widest uppercase"
          style={{ color: "hsl(340, 30%, 65%)" }}
        >
          Осознанное снижение веса без насилия над собой
        </motion.p>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 px-6 max-w-2xl w-full"
        >
          {[
            { num: "01", label: "Личностный скрининг" },
            { num: "02", label: "Скрытые триггеры" },
            { num: "03", label: "Дневник питания" },
            { num: "04", label: "Меню на неделю" },
          ].map((item) => (
            <div
              key={item.num}
              className="flex flex-col items-center gap-1 px-4 py-3 rounded-xl"
              style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(220,130,160,0.25)" }}
            >
              <span className="text-xs font-light" style={{ color: "hsl(340, 60%, 75%)" }}>{item.num}</span>
              <span className="text-xs text-center font-light" style={{ color: "hsl(0, 0%, 85%)" }}>{item.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          className="text-xs font-light tracking-widest"
          style={{ color: "hsl(340, 20%, 55%)" }}
        >
          Тяни мышью · свайпай · ← →
        </motion.p>
      </div>
    </div>
  )
}