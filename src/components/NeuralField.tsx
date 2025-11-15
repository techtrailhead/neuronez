"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 18, y: 20, size: 12, delay: 0 },
  { x: 38, y: 12, size: 10, delay: 0.3 },
  { x: 60, y: 24, size: 9, delay: 0.6 },
  { x: 78, y: 32, size: 11, delay: 0.9 },
  { x: 28, y: 48, size: 13, delay: 1.1 },
  { x: 48, y: 46, size: 10, delay: 0.5 },
  { x: 70, y: 55, size: 12, delay: 0.2 },
  { x: 30, y: 70, size: 9, delay: 0.7 },
  { x: 55, y: 74, size: 11, delay: 1.3 },
  { x: 78, y: 70, size: 10, delay: 0.4 },
];

const connections = [
  [0, 2],
  [0, 4],
  [1, 2],
  [2, 3],
  [2, 5],
  [4, 5],
  [5, 6],
  [4, 7],
  [7, 8],
  [6, 9],
  [5, 8],
];

export function NeuralField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <motion.svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 2 }}
      >
        {connections.map(([start, end], index) => {
          const a = nodes[start];
          const b = nodes[end];
          return (
            <motion.line
              key={`edge-${start}-${end}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#neuronGradient)"
              strokeWidth="0.4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 0.8], opacity: [0.2, 0.6, 0.3] }}
              transition={{
                duration: 9,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            />
          );
        })}
        <defs>
          <linearGradient id="neuronGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(243,228,194,0.08)" />
            <stop offset="50%" stopColor="rgba(243,228,194,0.4)" />
            <stop offset="100%" stopColor="rgba(216,204,176,0.45)" />
          </linearGradient>
        </defs>
      </motion.svg>
      {nodes.map((node) => (
        <motion.span
          key={`node-${node.x}-${node.y}`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.25, 0.6, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 8 + node.delay,
            repeat: Infinity,
            delay: node.delay,
          }}
          className="absolute rounded-full shadow-[0_0_25px_rgba(182,247,212,0.5)]"
          style={{
            top: `${node.y}%`,
            left: `${node.x}%`,
            width: `${node.size}px`,
            height: `${node.size}px`,
            background:
              "radial-gradient(circle, rgba(243,228,194,0.9) 0%, rgba(243,228,194,0.1) 70%)",
          }}
        />
      ))}
    </div>
  );
}
