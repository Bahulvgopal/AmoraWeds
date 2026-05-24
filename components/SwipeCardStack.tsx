"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";

export interface CardData {
  id: number;
  image: string;
  title?: string;
  subtitle?: string;
}

interface SwipeCardStackProps {
  cards: CardData[];
  swipeThreshold?: number;
  borderRadius?: number;
  verticalOffset?: number;
  scaleStep?: number;
  onSwipe?: (card: CardData, direction: "left" | "right") => void;
}

// ─── Single Petal ─────────────────────────────────────────────────────────────
function Petal({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const configs = [
    { left: "10%", size: 12, dur: 8000,  delay: 0    },
    { left: "25%", size: 9,  dur: 11000, delay: 1500 },
    { left: "40%", size: 15, dur: 9000,  delay: 3000 },
    { left: "55%", size: 10, dur: 12000, delay: 800  },
    { left: "68%", size: 13, dur: 10000, delay: 2000 },
    { left: "80%", size: 8,  dur: 13000, delay: 4000 },
    { left: "20%", size: 16, dur: 9000,  delay: 5000 },
    { left: "90%", size: 11, dur: 11000, delay: 2500 },
  ];

  const c = configs[index] ?? configs[0];
  const isEven = index % 2 === 0;
  const bg = isEven ? "#f5e0e6" : "#e8d5b0";
  const borderRadius = index % 3 === 0 ? "0 150% 0 150%" : "150% 0 150% 0";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let start: number | null = null;
    let raf: number;

    function animate(ts: number) {
      if (!start) start = ts - c.delay;
      const elapsed = (ts - start) % c.dur;
      const progress = elapsed / c.dur; // 0 → 1

      // vertical: -40px → container height + 40px
      const containerH = el!.parentElement?.offsetHeight ?? 400;
      const y = -40 + progress * (containerH + 80);

      // horizontal wobble
      const x = Math.sin(progress * Math.PI * 2) * 20;

      // rotation
      const rot = progress * 360;

      // opacity: fade in at 10%, fade out at 90%
      let opacity = 0;
      if (progress < 0.1) opacity = progress / 0.1 * 0.6;
      else if (progress < 0.9) opacity = 0.6;
      else opacity = (1 - progress) / 0.1 * 0.6;

      el!.style.transform = `translateY(${y}px) translateX(${x}px) rotate(${rot}deg)`;
      el!.style.opacity = String(opacity);

      raf = requestAnimationFrame(animate);
    }

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [c.delay, c.dur]);

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        left: c.left,
        top: 0,
        width: c.size,
        height: c.size * 1.3,
        background: bg,
        borderRadius,
        opacity: 0,
        pointerEvents: "none",
      }}
    />
  );
}

// ─── Draggable Card ───────────────────────────────────────────────────────────
function DraggableCard({
  card, index, total, onSwipeOut,
  borderRadius, verticalOffset, scaleStep, swipeThreshold,
}: {
  card: CardData; index: number; total: number;
  onSwipeOut: (d: "left" | "right") => void;
  borderRadius: number; verticalOffset: number;
  scaleStep: number; swipeThreshold: number;
}) {
  const isTop = index === 0;
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 0, 300], [-28, 0, 28]);
  const likeOpacity = useTransform(x, [0, swipeThreshold], [0, 1]);
  const nopeOpacity = useTransform(x, [-swipeThreshold, 0], [1, 0]);
  const stackScale = 1 - index * scaleStep;
  const stackY = index * verticalOffset;

  function handleDragEnd(_: unknown, info: { offset: { x: number } }) {
    if (info.offset.x > swipeThreshold) onSwipeOut("right");
    else if (info.offset.x < -swipeThreshold) onSwipeOut("left");
  }

  return (
    <motion.div
      style={{
        position: "absolute", width: "100%", height: "100%",
        borderRadius, overflow: "hidden",
        boxShadow: isTop ? "0 24px 60px rgba(0,0,0,0.22)" : "0 8px 24px rgba(0,0,0,0.12)",
        cursor: isTop ? "grab" : "default",
        userSelect: "none", touchAction: "none",
        scale: stackScale, y: stackY, zIndex: total - index,
        x: isTop ? x : 0, rotate: isTop ? rotate : 0,
      }}
      animate={isTop ? undefined : { scale: stackScale, y: stackY }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.9}
      onDragEnd={handleDragEnd}
      whileDrag={{ cursor: "grabbing" }}
    >
      <img src={card.image} alt={card.title ?? "card"}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }}
        draggable={false}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)" }} />

      {(card.title || card.subtitle) && (
        <div style={{ position: "absolute", bottom: 28, left: 28, right: 28, color: "#fff" }}>
          {card.title && (
            <p style={{ margin: 0, fontSize: "clamp(1.1rem,3vw,1.6rem)", fontWeight: 600, fontFamily: "'Cormorant Garamond',Georgia,serif", letterSpacing: "0.02em", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
              {card.title}
            </p>
          )}
          {card.subtitle && (
            <p style={{ margin: "4px 0 0", fontSize: "clamp(0.75rem,1.8vw,0.95rem)", fontFamily: "'Lato',sans-serif", opacity: 0.85, textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}>
              {card.subtitle}
            </p>
          )}
        </div>
      )}

      {isTop && (
        <motion.div style={{ position: "absolute", top: 36, left: 28, opacity: likeOpacity, border: "3px solid #c9728a", borderRadius: 8, padding: "4px 14px", color: "#c9728a", fontSize: "1.3rem", fontWeight: 800, fontFamily: "'Lato',sans-serif", letterSpacing: "0.1em", rotate: "-12deg", textTransform: "uppercase" }}>
          ♥ LOVE
        </motion.div>
      )}
      {isTop && (
        <motion.div style={{ position: "absolute", top: 36, right: 28, opacity: nopeOpacity, border: "3px solid #b8914a", borderRadius: 8, padding: "4px 14px", color: "#b8914a", fontSize: "1.3rem", fontWeight: 800, fontFamily: "'Lato',sans-serif", letterSpacing: "0.1em", rotate: "12deg", textTransform: "uppercase" }}>
          NEXT →
        </motion.div>
      )}
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
interface QueueItem { data: CardData; instanceKey: number; }
let keyCounter = 0;
function makeItems(cards: CardData[]): QueueItem[] {
  return cards.map((c) => ({ data: c, instanceKey: keyCounter++ }));
}

export default function SwipeCardStack({
  cards: initialCards,
  swipeThreshold = 80,
  borderRadius = 24,
  verticalOffset = 10,
  scaleStep = 0.06,
  onSwipe,
}: SwipeCardStackProps) {
  const [queue, setQueue] = useState<QueueItem[]>(() => makeItems(initialCards));

  function handleSwipeOut(item: QueueItem, direction: "left" | "right") {
    onSwipe?.(item.data, direction);
    setQueue((prev) => {
      const rest = prev.filter((q) => q.instanceKey !== item.instanceKey);
      const recycled: QueueItem = { data: item.data, instanceKey: keyCounter++ };
      return [...rest, recycled];
    });
  }

  const visibleItems = queue.slice(0, 5);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, fontFamily: "'Lato',sans-serif", position: "relative" }}>

      {/* ── Petals container — absolutely fills the section ── */}
     <div style={{
  position: "fixed",
  inset: 0,
  pointerEvents: "none",
  zIndex: 0,
}}>
        {Array.from({ length: 8 }).map((_, i) => (
          <Petal key={i} index={i} />
        ))}
      </div>

      {/* ── Card stack ── */}
      <div style={{
        position: "relative",
        width: "min(360px, 90vw)",
        aspectRatio: "3 / 4",
        height: "auto",
        zIndex: 1,
      }}>
        <AnimatePresence>
          {[...visibleItems].reverse().map((item, reverseIdx) => {
            const index = visibleItems.length - 1 - reverseIdx;
            return (
              <DraggableCard
                key={item.instanceKey}
                card={item.data}
                index={index}
                total={visibleItems.length}
                onSwipeOut={(dir) => handleSwipeOut(item, dir)}
                borderRadius={borderRadius}
                verticalOffset={verticalOffset}
                scaleStep={scaleStep}
                swipeThreshold={swipeThreshold}
              />
            );
          })}
        </AnimatePresence>
      </div>
          <br />
          <br />
      {/* ── Hint ── */}
      <p style={{ color: "rgba(58,44,48,0.35)", fontSize: "0.78rem", margin: 0, letterSpacing: "0.08em", position: "relative", zIndex: 1 }}>
        ❮❮❮ swipe to explore ❯❯❯
      </p>
    </div>
  );
}
