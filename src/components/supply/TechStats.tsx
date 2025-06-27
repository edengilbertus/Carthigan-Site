"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Package, 
  GraduationCap, 
  MapPin,
  Clock,
  Award,
  Zap,
  Globe
} from "lucide-react"

const stats = [
  {
    icon: Package,
    number: "800+",
    label: "Electronic Components",
    description: "In stock and ready to ship",
    color: "text-primary"
  },
  {
    icon: Users,
    number: "2,500+",
    label: "Active Customers",
    description: "Makers, students, and professionals",
    color: "text-secondary"
  },
  {
    icon: GraduationCap,
    number: "50+",
    label: "Universities Served",
    description: "Supporting education across Uganda",
    color: "text-tertiary"
  },
  {
    icon: MapPin,
    number: "15+",
    label: "Cities Reached",
    description: "Nationwide delivery network",
    color: "text-success"
  },
  {
    icon: Clock,
    number: "24hr",
    label: "Support Available",
    description: "Technical assistance when you need it",
    color: "text-warning"
  },
  {
    icon: Award,
    number: "98%",
    label: "Satisfaction Rate",
    description: "Customer happiness is our priority",
    color: "text-error"
  }
]

const achievements = [
  {
    icon: Zap,
    title: "First Tech Supply Platform",
    description: "Leading Uganda's electronics ecosystem",
    bgColor: "bg-primary-container",
    textColor: "text-on-primary-container"
  },
  {
    icon: Globe,
    title: "Regional Expansion",
    description: "Serving East Africa's tech community",
    bgColor: "bg-secondary-container", 
    textColor: "text-on-secondary-container"
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built by makers, for makers",
    bgColor: "bg-tertiary-container",
    textColor: "text-on-tertiary-container"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

export function TechStats() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-container/30 to-secondary-container/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="bg-primary/10 text-primary mb-4 px-4 py-2 rounded-full">
            📊 Platform Impact
          </Badge>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-on-surface mb-6">
            Powering Innovation
          </h2>
          <p className="text-xl text-on-surface/70 max-w-3xl mx-auto">
            See how we're transforming Uganda's technology landscape with quality components and expert services
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-surface/80 backdrop-blur-sm rounded-3xl p-8 border border-outline-variant/20 hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color.replace('text-', 'bg-')}/10 rounded-2xl mb-6`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              
              <div className="space-y-2">
                <div className={`text-4xl font-bold ${stat.color}`}>
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-on-surface">
                  {stat.label}
                </h3>
                <p className="text-on-surface/60 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-on-surface mb-4">
              Leading Uganda's Tech Revolution
            </h3>
            <p className="text-on-surface/70 max-w-2xl mx-auto">
              From humble beginnings to becoming the premier technology supply platform in East Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${achievement.bgColor} rounded-2xl p-6 text-center`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-surface/50 rounded-xl mb-4">
                  <achievement.icon className={`h-6 w-6 ${achievement.textColor}`} />
                </div>
                <h4 className={`text-lg font-bold ${achievement.textColor} mb-2`}>
                  {achievement.title}
                </h4>
                <p className={`text-sm ${achievement.textColor}/70`}>
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-surface/60 backdrop-blur-sm rounded-3xl p-12 border border-outline-variant/20">
            <h3 className="text-2xl md:text-3xl font-bold text-on-surface mb-4">
              "Building the future of African innovation, one component at a time."
            </h3>
            <p className="text-on-surface/70 max-w-2xl mx-auto">
              Our mission extends beyond supply—we're creating an ecosystem where African innovators can access 
              world-class components and expertise to solve local and global challenges.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 