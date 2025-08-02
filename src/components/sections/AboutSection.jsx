import React from 'react';
import { Card, CardBody, CardHeader, Chip, Badge, Avatar, Divider } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Globe, Users, Zap, Target } from 'lucide-react';
import { personalInfo, experience } from '../../utils/constants';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const AboutSection = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Key achievements with category-based color scheme
  const keyAchievements = [
    {
      icon: Award,
      text: "PhD in Technical Sciences (2024)",
      category: "academic",
      customColor: "bg-blue-700/10 text-blue-700"
    },
    {
      icon: Globe,
      text: "20+ Years International Experience",
      category: "business",
      customColor: "bg-blue-600/10 text-blue-600"
    },
    {
      icon: Users,
      text: "50+ Supplier Partnerships",
      category: "business",
      customColor: "bg-green-700/10 text-green-700"
    },
    {
      icon: Target,
      text: "35% Procurement Increase",
      category: "business",
      customColor: "bg-green-600/10 text-green-600"
    }
  ];

  const expertiseAreas = [
    "ForestTech & Digital Tools",
    "Sustainable Supply Chains",
    "Wood Resource Management",
    "Cross-border Business Development",
    "AI & Precision Forestry"
  ];

  return (
    <section
      id="about"
      ref={elementRef}
      className="py-16 bg-background relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={hasIntersected ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-default-600 max-w-3xl mx-auto">
              Discover my journey in forestry, digital transformation, and international business development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Bio Section */}
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardHeader className="pb-4 px-8 pt-8">
                  <div className="flex items-center gap-4">
                    <Avatar
                      src="/images/profile/nikolai-headshot-80.jpg"
                      alt={personalInfo.name}
                      className="w-16 h-16"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">Professional Journey</h3>
                      <Badge color="primary" variant="flat">
                        International Forestry Expert
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="pt-0 px-8 pb-8">
                  <div className="space-y-4">
                    {personalInfo.bio.map((paragraph, index) => (
                      <p key={index} className="text-default-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            {/* Key Achievements */}
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardHeader className="px-8 pt-8 pb-4">
                  <h3 className="text-xl font-semibold">Key Achievements</h3>
                </CardHeader>
                <CardBody className="px-8 pb-8">
                  <div className="space-y-4">
                    {keyAchievements.map((achievement, index) => {
                      const IconComponent = achievement.icon;
                      return (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-default-50 hover:bg-default-100 transition-colors">
                          <div className={`p-2 rounded-full ${achievement.customColor.split(' ')[0]}`}>
                            <IconComponent className={`${achievement.customColor.split(' ')[1]} w-5 h-5`} />
                          </div>
                          <span className="text-default-700 font-medium">{achievement.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>

          {/* Expertise Areas */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card>
              <CardHeader className="px-8 pt-8 pb-4">
                <div className="flex items-center gap-2">
                  <Zap className="text-primary w-6 h-6" />
                  <h3 className="text-xl font-semibold">Areas of Expertise</h3>
                </div>
              </CardHeader>
              <CardBody className="px-8 pb-8">
                <div className="flex flex-wrap gap-3">
                  {expertiseAreas.map((area, index) => (
                    <Chip
                      key={index}
                      color="success"
                      variant="flat"
                      className="text-sm"
                    >
                      {area}
                    </Chip>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Recent Experience */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader className="px-8 pt-8 pb-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="text-primary w-6 h-6" />
                  <h3 className="text-xl font-semibold">Recent Experience</h3>
                </div>
              </CardHeader>
              <CardBody className="px-8 pb-8">
                <div className="space-y-6">
                  {experience.slice(0, 3).map((exp, index) => (
                    <div key={index}>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="font-semibold text-lg">{exp.title}</h4>
                        <Badge color="secondary" variant="flat" className="text-xs">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-success font-medium mb-2">{exp.company}</p>
                      <p className="text-default-600 text-sm leading-relaxed">{exp.description}</p>
                      {index < experience.slice(0, 3).length - 1 && <Divider className="mt-6" />}
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
