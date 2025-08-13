"use client";

import * as React from "react";
import Lottie from "lottie-react";

interface LottiePlayerProps {
  animationData: Record<string, unknown>;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onComplete?: () => void;
  speed?: number;
}

export default function LottiePlayer({
  animationData,
  loop = true,
  autoplay = true,
  className = "",
  style = {},
  onComplete,
  speed = 1
}: LottiePlayerProps) {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
      style={style}
      onComplete={onComplete}
      speed={speed}
    />
  );
}
