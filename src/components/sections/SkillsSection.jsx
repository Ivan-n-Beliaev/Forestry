import React from 'react';
import { Card, CardBody, CardHeader, Chip } from '@nextui-org/react';
import { motion } from 'framer-motion';
import {
  TreePine,
  Cog,
  TrendingUp,
  GraduationCap,
  Cpu,
  Users,
  BarChart3,
  Globe,
  Award,
  Target,
  Lightbulb,
  CheckCircle
} from 'lucide-react';
import { skills } from '../../utils/constants';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const SkillsSection = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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

  const categoryIcons = {
    expertise: TreePine,
    technology: Cpu,
    business: TrendingUp,
    academic: GraduationCap
  };

  // Custom category color scheme - distinct from skill level colors
  const categoryColors = {
    expertise: {
      name: "forestry-blue",
      bg: "bg-blue-700/10",
      text: "text-blue-700",
      border: "border-blue-700/10",
      chip: "bg-blue-700/10 text-blue-700"
    },
    technology: {
      name: "tech-blue",
      bg: "bg-blue-600/10",
      text: "text-blue-600",
      border: "border-blue-600/20",
      chip: "bg-blue-600/10 text-blue-600"
    },
    business: {
      name: "business-green",
      bg: "bg-green-700/10",
      text: "text-green-700",
      border: "border-green-700/20",
      chip: "bg-green-700/10 text-green-700"
    },
    academic: {
      name: "academic-green",
      bg: "bg-green-600/10",
      text: "text-green-600",
      border: "border-green-600/20",
      chip: "bg-green-600/10 text-green-600"
    }
  };

  const categoryNames = {
    expertise: "Forestry Expertise",
    technology: "Technology & Innovation",
    business: "Business Development", 
    academic: "Academic & Research"
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // Skill level descriptors with consistent color scheme
  const getSkillLevel = (level) => {
    if (level >= 90) return {
      label: "Expert",
      color: "success",
      customColor: "bg-purple-600/10 text-purple-600 border-purple-600/20",
      icon: Award
    };
    if (level >= 80) return {
      label: "Advanced",
      color: "primary",
      customColor: "bg-cyan-600/10 text-cyan-600 border-cyan-600/20",
      icon: Target
    };
    if (level >= 70) return {
      label: "Proficient",
      color: "warning",
      customColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
      icon: CheckCircle
    };
    return {
      label: "Developing",
      color: "default",
      customColor: "bg-gray-500/10 text-gray-600 border-gray-500/20",
      icon: Lightbulb
    };
  };

  return (
    <section
      id="skills"
      ref={elementRef}
      className="py-12 bg-gradient-to-br from-background to-default-50"
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
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-lg text-default-600 max-w-3xl mx-auto">
              Two decades of experience across forestry, technology, and international business
            </p>
          </motion.div>

          {/* Skills Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {Object.entries(categoryNames).map(([category, name]) => {
              const IconComponent = categoryIcons[category];
              const categorySkills = groupedSkills[category] || [];
              const expertSkills = categorySkills.filter(skill => skill.level >= 90).length;
              const advancedSkills = categorySkills.filter(skill => skill.level >= 80 && skill.level < 90).length;
              const totalSkills = categorySkills.length;

              return (
                <motion.div key={category} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardBody className="text-center p-8">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${categoryColors[category].bg} flex items-center justify-center`}>
                        <IconComponent className={`w-8 h-8 ${categoryColors[category].text}`} />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{name}</h3>
                      <p className="text-default-600 text-sm mb-4">
                        {totalSkills} skills
                      </p>
                      <div className="flex justify-center gap-2 mb-2 flex-wrap">
                        <Chip
                          className="bg-purple-600/10 text-purple-600"
                          variant="flat"
                          size="sm"
                          startContent={<Award size={14} />}
                        >
                          {expertSkills} Expert
                        </Chip>
                        <Chip
                          className="bg-cyan-600/10 text-cyan-600"
                          variant="flat"
                          size="sm"
                          startContent={<Target size={14} />}
                        >
                          {advancedSkills} Advanced
                        </Chip>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Detailed Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => {
              const IconComponent = categoryIcons[category];
              
              return (
                <motion.div key={category} variants={itemVariants}>
                  <Card className="h-full">
                    <CardHeader className="pb-4 px-8 pt-8">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${categoryColors[category].bg}`}>
                          <IconComponent className={`w-6 h-6 ${categoryColors[category].text}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{categoryNames[category]}</h3>
                          <Chip
                            className={categoryColors[category].chip}
                            variant="flat"
                            size="sm"
                          >
                            {categorySkills.length} skills
                          </Chip>
                        </div>
                      </div>
                    </CardHeader>
                    <CardBody className="pt-0 px-8 pb-8">
                      <div className="space-y-3">
                        {categorySkills.map((skill, index) => {
                          const skillLevel = getSkillLevel(skill.level);
                          const LevelIcon = skillLevel.icon;

                          return (
                            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-default-50 hover:bg-default-100 transition-colors">
                              <div className="flex items-center gap-3">
                                <div className={`p-1.5 rounded-full ${skillLevel.customColor.split(' ')[0]} ${skillLevel.customColor.split(' ')[2]}`}>
                                  <LevelIcon className={`w-4 h-4 ${skillLevel.customColor.split(' ')[1]}`} />
                                </div>
                                <span className="font-medium text-default-700">
                                  {skill.name}
                                </span>
                              </div>
                              <Chip
                                className={`${skillLevel.customColor} text-xs`}
                                variant="flat"
                                size="sm"
                              >
                                {skillLevel.label}
                              </Chip>
                            </div>
                          );
                        })}
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Skills Summary */}
          <motion.div variants={itemVariants} className="mt-16">
            <Card>
              <CardHeader className="px-8 pt-8 pb-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="text-primary w-6 h-6" />
                  <h3 className="text-xl font-semibold">Professional Highlights</h3>
                </div>
              </CardHeader>
              <CardBody className="px-8 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">20+</div>
                    <p className="text-default-600">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                    <p className="text-default-600">Supplier Partnerships</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-warning mb-2">35%</div>
                    <p className="text-default-600">Procurement Increase</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
