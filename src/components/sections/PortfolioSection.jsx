import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Chip,
  Tabs,
  Tab
} from '@nextui-org/react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye, Filter } from 'lucide-react';
import { projects } from '../../utils/constants';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const PortfolioSection = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'research', label: 'Research' },
    { key: 'technology', label: 'Technology' },
    { key: 'business', label: 'Business' },
    { key: 'consulting', label: 'Consulting' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  const getCategoryColor = (category) => {
    const colors = {
      research: 'success',
      technology: 'success',
      business: 'success',
      consulting: 'success'
    };
    return colors[category] || 'default';
  };

  return (
    <section
      id="portfolio"
      ref={elementRef}
      className="py-12 bg-background"
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
              Portfolio & <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-default-600 max-w-3xl mx-auto">
              Showcasing key projects and achievements in forestry, technology, and business development
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex justify-center">
              <Tabs 
                selectedKey={selectedCategory}
                onSelectionChange={setSelectedCategory}
                color="primary"
                variant="underlined"
                classNames={{
                  tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                  cursor: "w-full bg-primary",
                  tab: "max-w-fit px-0 h-12",
                  tabContent: "group-data-[selected=true]:text-primary"
                }}
              >
                {categories.map((category) => (
                  <Tab key={category.key} title={category.label} />
                ))}
              </Tabs>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols- lg:grid-cols-4 gap-5">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 justify-center object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <Button
                          isIconOnly
                          color="primary"
                          variant="flat"
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          onPress={() => handleProjectClick(project)}
                        >
                          <Eye size={20} />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="p-8">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-md line-clamp-2">
                        {project.title}
                      </h3>
                      <Chip
                        color={getCategoryColor(project.category)}
                        variant="flat"
                        size="sm"
                        className="ml-0 flex-shrink-0"
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
                        onPress={() => handleProjectClick(project)}
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
            ))}
          </div>

          {/* Project Modal */}
          <Modal 
            isOpen={isOpen} 
            onOpenChange={onOpenChange}
            size="2xl"
            scrollBehavior="inside"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold">{selectedProject?.title}</h3>
                    <Chip
                      color={getCategoryColor(selectedProject?.category)}
                      variant="flat"
                      size="sm"
                    >
                      {selectedProject?.category}
                    </Chip>
                  </ModalHeader>
                  <ModalBody>
                    <Image
                      src={selectedProject?.image?.replace('/projects/', '/projects/details/').replace('.jpg', '-detail.jpg')}
                      alt={selectedProject?.title}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <p className="text-default-600 mb-4">
                      {selectedProject?.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Technologies & Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject?.technologies.map((tech, index) => (
                          <Chip
                            key={index}
                            color="primary"
                            variant="flat"
                            size="sm"
                          >
                            {tech}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button 
                      color="primary" 
                      as="a"
                      href={selectedProject?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      startContent={<ExternalLink size={16} />}
                    >
                      View Project
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
