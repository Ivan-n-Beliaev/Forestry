import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Textarea,
  Button,
  Link,
  Divider
} from '@nextui-org/react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  CheckCircle,
  MessageSquare,
  Calendar,
  Globe,
  AlertCircle
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../../utils/constants';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const ContactSection = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState({});

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

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // EmailJS configuration - check environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Debug logging for development
      console.log('EmailJS Configuration Check:', {
        serviceId: serviceId ? 'Set' : 'Missing',
        templateId: templateId ? 'Set' : 'Missing',
        publicKey: publicKey ? 'Set' : 'Missing'
      });

      // Check if environment variables are properly set
      if (!serviceId || !templateId || !publicKey ||
          serviceId === 'YOUR_SERVICE_ID' ||
          templateId === 'YOUR_TEMPLATE_ID' ||
          publicKey === 'YOUR_PUBLIC_KEY') {

        // In development, show a more helpful message
        if (process.env.NODE_ENV === 'development') {
          console.warn('EmailJS not configured. Please set up environment variables.');
          // Simulate successful submission for development testing
          await new Promise(resolve => setTimeout(resolve, 1000));
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({
            name: '',
            email: '',
            company: '',
            subject: '',
            message: ''
          });
          setTimeout(() => setIsSubmitted(false), 5000);
          return;
        }

        throw new Error('EmailJS configuration is incomplete. Please check environment variables.');
      }

      // Initialize EmailJS with public key
      emailjs.init(publicKey);

      // Template parameters for EmailJS - simplified structure
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not specified',
        subject: formData.subject,
        message: formData.message,
        to_name: 'Nikolai Beliaev',
        to_email: 'nikolai.l.beliaev@gmail.com'
      };

      console.log('Sending email with parameters:', templateParams);

      // Send email using EmailJS
      const response = await emailjs.send(serviceId, templateId, templateParams);

      console.log('Email sent successfully:', response);

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setIsSubmitting(false);

      // Provide more specific error messages
      let errorMessage = 'Failed to send message. ';

      if (error.message.includes('EmailJS configuration')) {
        errorMessage += 'Email service is not properly configured. Please contact directly via email.';
      } else if (error.status === 400) {
        errorMessage += 'Invalid email data. Please check your input and try again.';
      } else if (error.status === 401) {
        errorMessage += 'Email service authentication failed. Please contact directly via email.';
      } else if (error.status === 403) {
        errorMessage += 'Email service access denied. Please contact directly via email.';
      } else if (error.status === 404) {
        errorMessage += 'Email template not found. Please contact directly via email.';
      } else {
        errorMessage += 'Please try again or contact directly via email.';
      }

      setSubmitError(errorMessage);

      // Reset error message after 10 seconds
      setTimeout(() => setSubmitError(''), 10000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'primary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: personalInfo.linkedin,
      color: 'secondary'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null,
      color: 'success'
    },
    {
      icon: Calendar,
      label: 'Availability',
      value: 'Available for consulting',
      href: null,
      color: 'warning'
    }
  ];

  return (
    <section
      id="contact"
      ref={elementRef}
      className="py-16 bg-gradient-to-br from-background to-primary/5"
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
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-default-600 max-w-3xl mx-auto">
              Ready to discuss forestry projects, digital transformation, or international partnerships? 
              Let's connect and explore opportunities together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <Card>
                <CardHeader className="px-8 pt-8 pb-4">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="text-primary w-6 h-6" />
                    <h3 className="text-xl font-semibold">Contact Information</h3>
                  </div>
                </CardHeader>
                <CardBody className="space-y-6 px-8 pb-8">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <div className={`p-3 rounded-full bg-${info.color}/10`}>
                          <IconComponent className={`w-5 h-5 text-${info.color}`} />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-default-700">{info.label}</p>
                          {info.href ? (
                            <Link
                              href={info.href}
                              isExternal={info.label === 'LinkedIn'}
                              className="text-default-600 hover:text-primary transition-colors"
                            >
                              {info.value}
                            </Link>
                          ) : (
                            <p className="text-default-600">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </CardBody>
              </Card>

              {/* Areas of Interest */}
              <Card>
                <CardHeader className="px-8 pt-8 pb-4">
                  <div className="flex items-center gap-2">
                    <Globe className="text-secondary w-6 h-6" />
                    <h3 className="text-xl font-semibold">Let's Discuss</h3>
                  </div>
                </CardHeader>
                <CardBody className="px-8 pb-8">
                  <div className="space-y-3 text-default-600">
                    <p>🌲 ForestTech & Digital Transformation</p>
                    <p>📈 Market Entry Strategies</p>
                    <p>🔗 Sustainable Supply Chain Solutions</p>
                    <p>🪵 Wood Procurement & Quality Management</p>
                    <p>🤝 International Forestry Partnerships</p>
                    <p>📚 Academic Collaboration & Research</p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader className="px-8 pt-8 pb-4">
                  <h3 className="text-xl font-semibold">Send a Message</h3>
                </CardHeader>
                <CardBody className="px-8 pb-8">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-success mb-2">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-default-600">
                        Thank you for reaching out. I'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <>
                      {submitError && (
                        <div className="mb-6 p-4 bg-danger-50 border border-danger-200 rounded-lg">
                          <div className="flex items-center gap-3">
                            <AlertCircle className="w-5 h-5 text-danger flex-shrink-0" />
                            <p className="text-danger text-sm">{submitError}</p>
                          </div>
                        </div>
                      )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                          label="Full Name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onValueChange={(value) => handleInputChange('name', value)}
                          isInvalid={!!errors.name}
                          errorMessage={errors.name}
                          isRequired
                        />
                        <Input
                          label="Email Address"
                          placeholder="Enter your email"
                          type="email"
                          value={formData.email}
                          onValueChange={(value) => handleInputChange('email', value)}
                          isInvalid={!!errors.email}
                          errorMessage={errors.email}
                          isRequired
                        />
                      </div>
                      
                      <Input
                        label="Company/Organization"
                        placeholder="Enter your company (optional)"
                        value={formData.company}
                        onValueChange={(value) => handleInputChange('company', value)}
                      />
                      
                      <Input
                        label="Subject"
                        placeholder="What would you like to discuss?"
                        value={formData.subject}
                        onValueChange={(value) => handleInputChange('subject', value)}
                        isInvalid={!!errors.subject}
                        errorMessage={errors.subject}
                        isRequired
                      />
                      
                      <Textarea
                        label="Message"
                        placeholder="Tell me more about your project or inquiry..."
                        minRows={4}
                        value={formData.message}
                        onValueChange={(value) => handleInputChange('message', value)}
                        isInvalid={!!errors.message}
                        errorMessage={errors.message}
                        isRequired
                      />
                      
                      <Button
                        type="submit"
                        color="primary"
                        size="lg"
                        className="w-full"
                        isLoading={isSubmitting}
                        startContent={!isSubmitting && <Send size={20} />}
                      >
                        {isSubmitting ? 'Sending Message...' : 'Send Message'}
                      </Button>
                    </form>
                    </>
                  )}
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
