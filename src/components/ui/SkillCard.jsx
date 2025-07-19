import React from 'react';
import { Card, CardBody, Progress, Chip } from '@nextui-org/react';
import { motion } from 'framer-motion';

const SkillCard = ({ category, skills, icon: IconComponent, color, name, index }) => {
  const avgLevel = skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length;

  const getProgressColor = (level) => {
    if (level >= 90) return "success";
    if (level >= 80) return "primary";
    if (level >= 70) return "warning";
    return "default";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300">
        <CardBody className="p-8">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${color}/10 flex items-center justify-center`}>
            <IconComponent className={`w-8 h-8 text-${color}`} />
          </div>
          <h3 className="font-semibold text-lg mb-2 text-center">{name}</h3>
          <p className="text-default-600 text-sm mb-4 text-center">
            {skills.length} skills
          </p>
          <Progress
            value={avgLevel}
            color={color}
            className="mb-2"
            size="sm"
            classNames={{
              track: "bg-default-200",
              indicator: "transition-all duration-1000 ease-out"
            }}
          />
          <p className="text-xs text-default-500 text-center">
            {Math.round(avgLevel)}% proficiency
          </p>
          
          <div className="mt-4 space-y-2">
            {skills.slice(0, 3).map((skill, skillIndex) => (
              <div key={skillIndex} className="flex justify-between items-center text-sm">
                <span className="text-default-600 truncate">{skill.name}</span>
                <Chip size="sm" variant="flat" color={getProgressColor(skill.level)}>
                  {skill.level}%
                </Chip>
              </div>
            ))}
            {skills.length > 3 && (
              <p className="text-xs text-default-500 text-center">
                +{skills.length - 3} more skills
              </p>
            )}
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default React.memo(SkillCard);
