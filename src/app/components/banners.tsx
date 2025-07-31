"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle, AlertCircle, Info, Star, Zap } from "lucide-react"

// Banner Types
type BannerType = "success" | "warning" | "info" | "error" | "premium" | "cta"

// Banner Props Interface
interface BannerProps {
  type?: BannerType
  title: string
  description?: string
  actionText?: string
  actionHref?: string
  onAction?: () => void
  dismissible?: boolean
  onDismiss?: () => void
  className?: string
  icon?: React.ReactNode
  gradient?: boolean
  animated?: boolean
}

// Banner Component
export function Banner({
  type = "info",
  title,
  description,
  actionText,
  actionHref,
  onAction,
  dismissible = false,
  onDismiss,
  className = "",
  icon,
  gradient = false,
  animated = true
}: BannerProps) {
  // Banner configurations
  const bannerConfig = {
    success: {
      bg: "bg-green-50 border-green-200",
      text: "text-green-800",
      icon: <CheckCircle className="h-5 w-5 text-green-600" />,
      gradient: "from-green-50 to-emerald-50"
    },
    warning: {
      bg: "bg-yellow-50 border-yellow-200",
      text: "text-yellow-800",
      icon: <AlertCircle className="h-5 w-5 text-yellow-600" />,
      gradient: "from-yellow-50 to-amber-50"
    },
    info: {
      bg: "bg-blue-50 border-blue-200",
      text: "text-blue-800",
      icon: <Info className="h-5 w-5 text-blue-600" />,
      gradient: "from-blue-50 to-cyan-50"
    },
    error: {
      bg: "bg-red-50 border-red-200",
      text: "text-red-800",
      icon: <AlertCircle className="h-5 w-5 text-red-600" />,
      gradient: "from-red-50 to-pink-50"
    },
    premium: {
      bg: "bg-purple-50 border-purple-200",
      text: "text-purple-800",
      icon: <Star className="h-5 w-5 text-purple-600" />,
      gradient: "from-purple-50 to-indigo-50"
    },
    cta: {
      bg: "bg-gray-50 border-gray-200",
      text: "text-gray-800",
      icon: <Zap className="h-5 w-5 text-gray-600" />,
      gradient: "from-gray-50 to-slate-50"
    }
  }

  const config = bannerConfig[type]
  const BannerIcon = icon || config.icon

  const bannerContent = (
    <div className={`flex items-start gap-3 p-4 rounded-lg border ${config.bg} ${gradient ? `bg-gradient-to-r ${config.gradient}` : ""} ${className}`}>
      <div className="flex-shrink-0 mt-0.5">
        {BannerIcon}
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className={`text-sm font-semibold ${config.text} font-poppins`}>
          {title}
        </h3>
        {description && (
          <p className={`mt-1 text-sm ${config.text} opacity-90 font-source-sans`}>
            {description}
          </p>
        )}
        {actionText && (
          <div className="mt-3">
            {actionHref ? (
              <Link
                href={actionHref}
                className={`inline-flex items-center gap-2 text-sm font-medium ${config.text} hover:opacity-80 transition-opacity font-poppins`}
              >
                {actionText}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <button
                onClick={onAction}
                className={`inline-flex items-center gap-2 text-sm font-medium ${config.text} hover:opacity-80 transition-opacity font-poppins`}
              >
                {actionText}
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        )}
      </div>

      {dismissible && onDismiss && (
        <button
          onClick={onDismiss}
          className={`flex-shrink-0 p-1 rounded-md ${config.text} hover:bg-black/5 transition-colors`}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  )

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {bannerContent}
      </motion.div>
    )
  }

  return bannerContent
}

// Contest Banner Component
interface ContestBannerProps {
  className?: string
}

export function ContestBanner({ className = "" }: ContestBannerProps) {
  return (
    <motion.div
      className={`w-full ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative w-full h-80 md:h-96 lg:h-[400px] overflow-hidden rounded-xl shadow-lg">
        <img 
          src="https://res.cloudinary.com/dxwspucxw/image/upload/v1753700324/YouTube_Banner_-_Global_Figma_Design_Challenge_sp0jf6.svg"
          alt="Global Figma Design Challenge"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      </div>
    </motion.div>
  )
}

// Feature Banner Component
interface FeatureBannerProps {
  features: Array<{
    icon: React.ReactNode
    title: string
    description: string
  }>
  title?: string
  subtitle?: string
  className?: string
}

export function FeatureBanner({
  features,
  title,
  subtitle,
  className = ""
}: FeatureBannerProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 ${className}`}>
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-gray-600 font-source-sans">
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">
              {feature.title}
            </h3>
            <p className="text-gray-600 font-source-sans leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Notification Banner Component
interface NotificationBannerProps {
  notifications: Array<{
    id: string
    type: BannerType
    title: string
    description?: string
    actionText?: string
    actionHref?: string
    onAction?: () => void
    dismissible?: boolean
    onDismiss?: () => void
  }>
  className?: string
}

export function NotificationBanner({ notifications, className = "" }: NotificationBannerProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {notifications.map((notification) => (
        <Banner
          key={notification.id}
          type={notification.type}
          title={notification.title}
          description={notification.description}
          actionText={notification.actionText}
          actionHref={notification.actionHref}
          onAction={notification.onAction}
          dismissible={notification.dismissible}
          onDismiss={notification.onDismiss}
        />
      ))}
    </div>
  )
} 