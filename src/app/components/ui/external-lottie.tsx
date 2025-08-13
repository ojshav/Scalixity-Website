"use client";

import * as React from "react";
import Lottie from "lottie-react";

interface ExternalLottieProps {
  src: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onComplete?: () => void;
  speed?: number;
}

export default function ExternalLottie({
  src,
  loop = true,
  autoplay = true,
  className = "",
  style = {},
  onComplete,
  speed = 1
}: ExternalLottieProps) {
  const [animationData, setAnimationData] = React.useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchAnimation = async () => {
      try {
        setLoading(true);
        
        // Handle Lottie.host URLs differently
        let fetchUrl = src;
        if (src.includes('lottie.host/embed')) {
          // Convert embed URL to direct JSON URL
          fetchUrl = src.replace('/embed/', '/json/').replace('.lottie', '.json');
        }
        
        const response = await fetch(fetchUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch animation: ${response.statusText}`);
        }
        const data = await response.json();
        setAnimationData(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load animation');
        console.error('Error loading Lottie animation:', err);
      } finally {
        setLoading(false);
      }
    };

    if (src) {
      fetchAnimation();
    }
  }, [src]);

  if (loading) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center ${className} text-red-500 text-sm`}>
        <span>Failed to load animation</span>
      </div>
    );
  }

  if (!animationData) {
    return null;
  }

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
