import React from 'react';
import { Card, CardBody, Button, Avatar, Chip } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Linkedin } from 'lucide-react';
import { personalInfo } from '../../utils/constants';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const HeroSection = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver();

  const handleScrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

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

  return (
    <section
      id="hero"
      ref={elementRef}
      className="min-h-[calc(100vh-4rem)] flex items-start justify-center pt-8 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={hasIntersected ? "visible" : "hidden"}
          className="text-center"
        >
          <Card className="bg-background/80 backdrop-blur-md border border-divider shadow-2xl">
            <CardBody className="p-8 sm:p-10 lg:p-12">
              <motion.div variants={itemVariants} className="mb-6">
                <Avatar
                  src="/images/profile/nikolai-headshot-150.jpg"
                  alt={personalInfo.name}
                  className="w-28 h-28 mx-auto mb-4 ring-4 ring-primary/20"
                />
                <div className="flex justify-center mb-3">
                  <Chip
                    color="success"
                    variant="flat"
                    className="text-sm font-medium"
                  >
                    Available for Consulting
                  </Chip>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
                  <span className="gradient-text">{personalInfo.name}</span>
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl text-default-600 font-medium mb-3">
                  {personalInfo.title}
                </h2>
                <p className="text-base sm:text-lg text-default-500 mb-4">
                  {personalInfo.subtitle}
                </p>
                <p className="text-default-600 max-w-3xl mx-auto text-left sm:text-base leading-relaxed">
                  20+ years in wood sourcing, forest machinery, and sustainable operations.
                  Bridging traditional forestry with cutting-edge technologies across Russia and Northern Europe.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              >
                <Button
                  color="primary"
                  size="lg"
                  startContent={<Mail size={20} />}
                  onPress={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="min-w-[200px]"
                >
                  Get In Touch
                </Button>
                <Button
                  variant="bordered"
                  size="lg"
                  startContent={<Linkedin size={20} />}
                  as="a"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[200px]"
                >
                  LinkedIn Profile
                </Button>
                <Button
                  variant="light"
                  size="lg"
                  startContent={<Download size={20} />}
                  as="a"
                  href="/documents/nikolai-beliaev-cv.pdf"
                  download="Nikolai-Beliaev-CV.pdf"
                  className="min-w-[200px]"
                >
                  Download CV
                </Button>
              </motion.div>

              <motion.div variants={itemVariants} className="flex justify-center mt-2 mb1">
                <Button
                  isIconOnly
                  variant="light"
                  onPress={handleScrollToAbout}
                  className="animate-bounce mx-auto"
                  aria-label="Scroll to about section"
                >
                  <ArrowDown size={24} />
                </Button>
              </motion.div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
