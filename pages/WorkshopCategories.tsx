import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Settings, Drone, Gamepad2, Cpu } from "lucide-react";

/* =======================
   PISTON BACKGROUND (FIXED)
======================= */
const Piston = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    className={className}
  >
    <path d="M6 9v12h12V9" />
    <path d="M4 9h16" />

    <motion.path
      d="M7 5h10v4H7z"
      initial={{ y: 0 }}
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />

    <motion.line
      x1={12}
      x2={12}
      y1={9}
      y2={21}
      initial={{ y1: 9, y2: 21 }}
      animate={{ y1: [9, 17, 9], y2: [21, 29, 21] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

/* =======================
   ICON ANIMATION VARIANTS
======================= */
const iconVariants = {
  rest: {
    scale: 1,
    opacity: 1,
    filter: "drop-shadow(0 0 0px rgba(0,0,0,0))",
  },
  droneHover: {
    scale: [1, 1.08, 1],
    filter: [
      "drop-shadow(0 0 0px rgba(255,165,0,0))",
      "drop-shadow(0 0 18px rgba(255,165,0,0.9))",
      "drop-shadow(0 0 0px rgba(255,165,0,0))",
    ],
    transition: { duration: 1.1, repeat: Infinity },
  },
  gamepadHover: {
    scale: [1, 1.1, 1],
    filter: [
      "drop-shadow(0 0 0px rgba(59,130,246,0))",
      "drop-shadow(0 0 14px rgba(59,130,246,0.9))",
      "drop-shadow(0 0 0px rgba(59,130,246,0))",
    ],
    transition: { duration: 1.2, repeat: Infinity },
  },
  cpuHover: {
    scale: [1, 1.15, 1],
    opacity: [1, 0.7, 1],
    transition: { duration: 1, repeat: Infinity },
  },
};

/* =======================
   WORKSHOP DATA
======================= */
const workshops = [
  {
    title: "DRONE & UAV",
    path: "/workshop/1",
    icon: Drone,
    animation: "drone",
    color: "text-orange-400",
    border: "border-orange-500",
    fee: "₹ 300 / person",
    resource: "Industry Technician",
  },
  {
    title: "GAME DEVELOPMENT",
    path: "/workshop/2",
    icon: Gamepad2,
    animation: "gamepad",
    color: "text-blue-400",
    border: "border-blue-500",
    fee: "₹ 200 / person",
    resource: "Student Team",
  },
  {
    title: "ECU",
    path: "/workshop/3",
    icon: Cpu,
    animation: "cpu",
    color: "text-purple-400",
    border: "border-purple-500",
    fee: "₹ 200 / person",
    resource: "Student Team",
  },
];

/* =======================
   COMPONENT
======================= */
const WorkshopCategories: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-4 container mx-auto relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Settings className="absolute -top-10 -left-10 w-[500px] h-[500px] text-gray-500 animate-spin-slow" />
        <Piston className="absolute top-1/3 right-0 w-96 h-96 text-gray-500 opacity-50" />
      </div>

      {/* HEADER */}
      <h1 className="text-center text-3xl md:text-5xl font-mech text-white mb-16 uppercase tracking-widest">
        Select <span className="text-neonOrange">Workshop</span>
      </h1>

      {/* CARDS */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-10 max-w-7xl mx-auto">
        {workshops.map((ws, index) => (
          <Link
            key={index}
            to={ws.path}
            className="w-[90%] md:w-[45%] lg:w-[29%]"
          >
            <motion.div
              initial="rest"
              animate="rest"
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative h-64 md:h-[19rem] bg-black/40 backdrop-blur-md
              border ${ws.border} rounded-xl p-6
              flex flex-col items-center justify-center
              group overflow-hidden cursor-pointer`}
            >
              {/* HOVER GRADIENT */}
              <div
                className={`absolute inset-0 bg-gradient-to-b
                from-transparent to-${ws.color.split("-")[1]}-900/20
                opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* ICON */}
              <motion.div
                variants={iconVariants}
                animate="rest"
                whileHover={
                  ws.animation === "drone"
                    ? "droneHover"
                    : ws.animation === "gamepad"
                      ? "gamepadHover"
                      : ws.animation === "cpu"
                        ? "cpuHover"
                        : "rest"
                }
                className="mb-6"
              >
                <ws.icon
                  className={`w-14 h-14 md:w-[4.5rem] md:h-[4.5rem] ${ws.color}`}
                />
              </motion.div>

              {/* TITLE */}
              <h2 className="text-lg md:text-2xl font-mech text-white font-bold text-center z-10">
                {ws.title}
              </h2>
              <p className="mt-1 text-lg md:text-base text-gray-300 font-body">
  Resource Person:{" "}
  <span className={`${ws.color}`}>
    {ws.resource}
  </span>
</p>


              {/* FEE */}
              <p className="text-gray-400 font-mono mt-2 text-lg md:text-sm z-10">
                {ws.fee}
              </p>

              {/* BOTTOM GLOW */}
              <div
                className={`absolute bottom-0 w-full h-1
                bg-gradient-to-r from-transparent
                via-${ws.color.split("-")[1]}-500 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity`}
              />
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WorkshopCategories;
