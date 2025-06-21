import { motion } from "framer-motion"

export const SectionTitle = ({ title, subtitle, delay = 0 }) => {
  return (
    <motion.div
      className="text-center !mb-16 "
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.h2 className="text-5xl md:text-7xl font-black mb-4 relative inline-block" whileHover={{ scale: 1.05 }}>
        <span className="!text-white">{title.split(" ")[0]} </span>
        <span className="relative" style={{ color: "rgb(117, 78, 249)" }}>
          {title.split(" ").slice(1).join(" ")}
          <motion.div
            className="absolute -inset-2 rounded-lg opacity-30"
            style={{
              background: "linear-gradient(45deg, rgb(117, 78, 249), transparent)",
              filter: "blur(10px)",
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </span>
      </motion.h2>

      {subtitle && (
        <motion.p
          className="!text-2xl text-gray-300 w-full mx-auto !text-center !mt-2 !mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
