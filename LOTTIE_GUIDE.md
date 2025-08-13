# 🎨 Lottie Animation Guide for Scalixity Website

## What is Lottie?

Lottie is a library that renders After Effects animations as JSON files on web, iOS, Android, and other platforms. It provides:
- **Vector-based animations** that scale perfectly
- **Small file sizes** compared to video/GIF
- **High performance** with smooth playback
- **Cross-platform compatibility**

## 🚀 Getting Started

### 1. Installation
```bash
npm install lottie-react
```

### 2. Basic Usage
```tsx
import Lottie from "lottie-react";

<Lottie
  animationData={yourAnimationData}
  loop={true}
  autoplay={true}
  className="w-32 h-32"
/>
```

## 📁 Available Components

### LottiePlayer
Basic component for playing Lottie animations:
```tsx
import LottiePlayer from "@/src/app/components/ui/lottie-player";

<LottiePlayer
  animationData={animationData}
  loop={true}
  autoplay={true}
  speed={1}
  onComplete={() => console.log('Animation completed!')}
/>
```

### LoadingAnimation
Pre-built loading spinner with multiple sizes:
```tsx
import LoadingAnimation from "@/src/app/components/ui/loading-animation";

<LoadingAnimation size="md" /> // sm, md, lg
```

### ExternalLottie
Load animations from external URLs:
```tsx
import ExternalLottie from "@/src/app/components/ui/external-lottie";

<ExternalLottie
  src="https://your-animation-url.json"
  className="w-32 h-32"
  loop={true}
  autoplay={true}
/>
```

## 🎯 How to Add Lottie to Your Components

### Step 1: Import the Component
```tsx
import LottiePlayer from "@/src/app/components/ui/lottie-player";
```

### Step 2: Add Animation Data
```tsx
const animationData = {
  // Your Lottie JSON data here
};
```

### Step 3: Render the Component
```tsx
<LottiePlayer
  animationData={animationData}
  className="w-32 h-32"
  loop={true}
  autoplay={true}
/>
```

## 🌐 Where to Get Lottie Files

### Free Sources:
1. **[LottieFiles.com](https://lottiefiles.com)** - Huge collection of free animations
2. **[Icons8](https://icons8.com/animated-icons)** - Free animated icons
3. **[IconFinder](https://www.iconfinder.com/search?q=lottie)** - Premium and free animations

### How to Download:
1. Visit any of the above sites
2. Search for animations you like
3. Download the JSON file
4. Place it in your project's `public/lottie/` folder
5. Use it in your components

## 📱 Example: Adding to Hero Section

```tsx
// In your hero component
import LottiePlayer from "@/src/app/components/ui/lottie-player";

export function Hero() {
  return (
    <section className="hero">
      {/* Background Lottie Animation */}
      <div className="absolute inset-0 opacity-10">
        <LottiePlayer
          animationData={heroAnimationData}
          className="w-96 h-96"
          loop={true}
          autoplay={true}
          speed={0.5}
        />
      </div>
      
      {/* Your content */}
      <h1>Your Headline</h1>
    </section>
  );
}
```

## ⚡ Performance Tips

1. **Use appropriate sizes** - Don't render large animations in small containers
2. **Control playback** - Use `autoplay={false}` for animations that should only play on interaction
3. **Optimize loops** - Set `loop={false}` for one-time animations
4. **Lazy load** - Use `ExternalLottie` for large animations that aren't immediately visible

## 🎭 Animation Controls

### Play/Pause
```tsx
const [isPlaying, setIsPlaying] = useState(true);

<LottiePlayer
  animationData={data}
  autoplay={isPlaying}
/>
<button onClick={() => setIsPlaying(!isPlaying)}>
  {isPlaying ? 'Pause' : 'Play'}
</button>
```

### Speed Control
```tsx
const [speed, setSpeed] = useState(1);

<LottiePlayer
  animationData={data}
  speed={speed}
/>
<input
  type="range"
  min="0.1"
  max="3"
  value={speed}
  onChange={(e) => setSpeed(parseFloat(e.target.value))}
/>
```

### Event Handling
```tsx
<LottiePlayer
  animationData={data}
  onComplete={() => console.log('Animation finished!')}
  onLoopComplete={() => console.log('Loop completed!')}
  onEnterFrame={(frame) => console.log('Current frame:', frame)}
/>
```

## 🔧 Troubleshooting

### Common Issues:
1. **Animation not playing** - Check if `autoplay={true}` and `loop={true}`
2. **Large file size** - Optimize your After Effects file before export
3. **Performance issues** - Reduce animation complexity or use smaller sizes
4. **Loading errors** - Verify JSON file format and network access

### Debug Tips:
- Check browser console for errors
- Verify animation data structure
- Test with simple animations first
- Use browser dev tools to inspect animation elements

## 📚 Demo Page

Visit `/lottie-demo` to see all components in action with interactive examples!

## 🎨 Customization

### Styling with CSS:
```tsx
<LottiePlayer
  animationData={data}
  className="w-32 h-32"
  style={{
    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
    borderRadius: '50%'
  }}
/>
```

### Responsive Design:
```tsx
<LottiePlayer
  animationData={data}
  className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32"
/>
```

## 🚀 Next Steps

1. **Explore LottieFiles.com** for inspiration
2. **Try different animations** in the demo page
3. **Integrate animations** into your existing components
4. **Create custom animations** in After Effects
5. **Optimize performance** for production use

---

**Happy Animating! 🎉**

For more help, check out:
- [Lottie Documentation](https://lottiefiles.com/docs)
- [Lottie React Package](https://www.npmjs.com/package/lottie-react)
- [Animation Examples](https://lottiefiles.com/featured)
