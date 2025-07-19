import React from 'react';
import { Card, CardBody, CardHeader, Button, Image, Chip } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';

const ProjectCard = ({ project, onViewDetails, index }) => {
  const getCategoryColor = (category) => {
    const colors = {
      research: 'primary',
      technology: 'secondary',
      business: 'success',
      consulting: 'warning'
    };
    return colors[category] || 'default';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group">
        <CardHeader className="p-0">
          <div className="relative overflow-hidden rounded-t-lg">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <Button
                isIconOnly
                color="primary"
                variant="flat"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onPress={() => onViewDetails(project)}
              >
                <Eye size={20} />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="p-8">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-semibold text-lg line-clamp-2">
              {project.title}
            </h3>
            <Chip
              color={getCategoryColor(project.category)}
              variant="flat"
              size="sm"
              className="ml-2 flex-shrink-0"
            >
              {project.category}
            </Chip>
          </div>
          <p className="text-default-600 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, techIndex) => (
              <Chip
                key={techIndex}
                variant="bordered"
                size="sm"
                className="text-xs"
              >
                {tech}
              </Chip>
            ))}
            {project.technologies.length > 3 && (
              <Chip variant="bordered" size="sm" className="text-xs">
                +{project.technologies.length - 3}
              </Chip>
            )}
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              color="primary"
              variant="flat"
              onPress={() => onViewDetails(project)}
              className="flex-1"
            >
              View Details
            </Button>
            <Button
              size="sm"
              variant="bordered"
              isIconOnly
              as="a"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
            </Button>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default React.memo(ProjectCard);
