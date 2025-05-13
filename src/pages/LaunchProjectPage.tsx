import React, { useState } from 'react';
import AnimatedElement from '../components/ui/AnimatedElement';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  CheckCircle2,
  Send,
  Video,
  Megaphone,
  Globe,
  Sparkles,
  BarChart4,
  Clock,
  Shield,
  Users,
  Target
} from 'lucide-react';

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  description: string;
  features: string[];
  icon: React.ElementType;
}

const services: ServiceOption[] = [
  {
    id: 'enterprise-content',
    name: 'Enterprise Content Solutions',
    basePrice: 50000,
    description: 'Comprehensive content strategy and creation for global enterprise needs',
    icon: Video,
    features: [
      'Global content strategy development',
      'Multi-market content optimization',
      'Enterprise-grade content management',
      'Advanced analytics and reporting',
      'International market adaptation'
    ]
  },
  {
    id: 'global-marketing',
    name: 'Global Marketing Solutions',
    basePrice: 75000,
    description: 'Integrated marketing solutions for international market presence',
    icon: Megaphone,
    features: [
      'Multi-channel campaign management',
      'Global market penetration strategy',
      'Cross-border campaign optimization',
      'Enterprise marketing automation',
      'International audience targeting'
    ]
  },
  {
    id: 'enterprise-digital',
    name: 'Enterprise Digital Infrastructure',
    basePrice: 150000,
    description: 'Scalable digital solutions for global enterprise operations',
    icon: Globe,
    features: [
      'Enterprise-grade architecture',
      'Global performance optimization',
      'Advanced security protocols',
      'Multi-region deployment',
      'Scalable infrastructure design'
    ]
  },
  {
    id: 'ai-solutions',
    name: 'Advanced AI Integration',
    basePrice: 200000,
    description: 'Cutting-edge AI solutions for enterprise-scale implementation',
    icon: Sparkles,
    features: [
      'Custom AI model development',
      'Enterprise data processing',
      'Machine learning optimization',
      'Predictive analytics systems',
      'AI-powered automation'
    ]
  },
  {
    id: 'enterprise-management',
    name: 'Enterprise Management Systems',
    basePrice: 250000,
    description: 'Comprehensive business management solutions for global operations',
    icon: BarChart4,
    features: [
      'Global operations management',
      'Enterprise resource planning',
      'Cross-border compliance',
      'Advanced reporting systems',
      'Business intelligence integration'
    ]
  }
];

const timeframes = [
  { 
    id: 'standard', 
    name: 'Standard', 
    multiplier: 1, 
    duration: '12-16 weeks',
    description: 'Comprehensive enterprise implementation with standard delivery timeline'
  },
  { 
    id: 'accelerated', 
    name: 'Accelerated', 
    multiplier: 1.5, 
    duration: '8-10 weeks',
    description: 'Expedited delivery with dedicated enterprise resources'
  },
  { 
    id: 'priority', 
    name: 'Priority', 
    multiplier: 2, 
    duration: '4-6 weeks',
    description: 'Maximum resource allocation for rapid enterprise deployment'
  }
];

const complexityLevels = [
  { 
    id: 'standard', 
    name: 'Standard Enterprise', 
    multiplier: 1,
    description: 'Core enterprise features with standard integrations',
    features: [
      'Standard security protocols',
      'Basic analytics integration',
      'Core enterprise features',
      'Standard support package'
    ]
  },
  { 
    id: 'advanced', 
    name: 'Advanced Enterprise', 
    multiplier: 1.75,
    description: 'Enhanced features with advanced integrations',
    features: [
      'Advanced security measures',
      'Custom integrations',
      'Enhanced analytics',
      'Priority support'
    ]
  },
  { 
    id: 'premium', 
    name: 'Premium Enterprise', 
    multiplier: 2.5,
    description: 'Full-scale solution with premium features',
    features: [
      'Military-grade security',
      'Custom AI integration',
      'Advanced automation',
      '24/7 dedicated support'
    ]
  }
];

export default function LaunchProjectPage() {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [timeframe, setTimeframe] = useState('standard');
  const [complexity, setComplexity] = useState('standard');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    description: '',
    industry: '',
    employees: '',
    budget: '',
    timeline: ''
  });

  const calculateQuote = () => {
    const baseTotal = selectedServices.reduce((sum, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return sum + (service?.basePrice || 0);
    }, 0);

    const timeframeMultiplier = timeframes.find(t => t.id === timeframe)?.multiplier || 1;
    const complexityMultiplier = complexityLevels.find(c => c.id === complexity)?.multiplier || 1;

    return Math.round(baseTotal * timeframeMultiplier * complexityMultiplier);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-royal-100/50 dark:bg-royal-800/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement animation="fade">
              <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-gold-100 text-gold-600 dark:bg-gold-900/30 dark:text-gold-400 mb-4">
                Enterprise Solutions
              </span>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Launch Your <span className="gradient-text">Enterprise Solution</span>
              </h1>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={0.4}>
              <p className="text-lg text-royal-700 dark:text-royal-300">
                Partner with industry leaders to transform your enterprise with cutting-edge solutions
                designed for global scale and impact.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Enterprise Stats */}
      <section className="py-12 border-b border-royal-200/20 dark:border-royal-700/20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6">
            <AnimatedElement animation="slideUp" delay={0.2}>
              <div className="p-6 rounded-xl glass border border-royal-200/20 dark:border-royal-700/20 text-center">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mx-auto mb-4">
                  <Shield size={24} />
                </div>
                <div className="text-3xl font-bold mb-2">ISO</div>
                <p className="text-royal-600 dark:text-royal-400">Certified Security</p>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slideUp" delay={0.3}>
              <div className="p-6 rounded-xl glass border border-royal-200/20 dark:border-royal-700/20 text-center">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mx-auto mb-4">
                  <Users size={24} />
                </div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <p className="text-royal-600 dark:text-royal-400">Global Support</p>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slideUp" delay={0.4}>
              <div className="p-6 rounded-xl glass border border-royal-200/20 dark:border-royal-700/20 text-center">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mx-auto mb-4">
                  <Target size={24} />
                </div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <p className="text-royal-600 dark:text-royal-400">Success Rate</p>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slideUp" delay={0.5}>
              <div className="p-6 rounded-xl glass border border-royal-200/20 dark:border-royal-700/20 text-center">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mx-auto mb-4">
                  <Globe size={24} />
                </div>
                <div className="text-3xl font-bold mb-2">30+</div>
                <p className="text-royal-600 dark:text-royal-400">Countries Served</p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 border-b border-royal-200/20 dark:border-royal-700/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div 
                  key={stepNumber}
                  className={`flex items-center ${stepNumber < 4 ? 'flex-1' : ''}`}
                >
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step >= stepNumber 
                        ? 'bg-gold-500 text-royal-900' 
                        : 'bg-royal-200/20 dark:bg-royal-700/20 text-royal-600 dark:text-royal-400'
                    }`}
                  >
                    {stepNumber}
                  </div>
                  {stepNumber < 4 && (
                    <div 
                      className={`flex-1 h-1 mx-2 ${
                        step > stepNumber 
                          ? 'bg-gold-500' 
                          : 'bg-royal-200/20 dark:bg-royal-700/20'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm text-royal-600 dark:text-royal-400">
              <span>Select Solutions</span>
              <span>Project Scope</span>
              <span>Enterprise Details</span>
              <span>Review & Launch</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Step 1: Services Selection */}
              {step === 1 && (
                <AnimatedElement animation="slideUp" delay={0.2}>
                  <div className="space-y-8">
                    <h2 className="text-2xl font-bold mb-6">Select Enterprise Solutions</h2>
                    <div className="grid gap-6">
                      {services.map((service) => (
                        <motion.div
                          key={service.id}
                          className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                            selectedServices.includes(service.id)
                              ? 'bg-gold-500 text-royal-900'
                              : 'glass border border-royal-200/20 dark:border-royal-700/20'
                          }`}
                          whileHover={{ scale: 1.01 }}
                          onClick={() => {
                            setSelectedServices(prev =>
                              prev.includes(service.id)
                                ? prev.filter(id => id !== service.id)
                                : [...prev, service.id]
                            );
                          }}
                        >
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                              selectedServices.includes(service.id)
                                ? 'bg-royal-900 text-gold-500'
                                : 'bg-gold-500/10 text-gold-500'
                            }`}>
                              <service.icon size={24} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-bold">{service.name}</h3>
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                  selectedServices.includes(service.id)
                                    ? 'bg-royal-900 text-gold-500'
                                    : 'bg-gold-500/10 text-gold-500'
                                }`}>
                                  <CheckCircle2 size={14} />
                                </div>
                              </div>
                              <p className={`mb-4 ${
                                selectedServices.includes(service.id)
                                  ? 'text-royal-800'
                                  : 'text-royal-600 dark:text-royal-400'
                              }`}>
                                {service.description}
                              </p>
                              <ul className="grid md:grid-cols-2 gap-2">
                                {service.features.map((feature, index) => (
                                  <li 
                                    key={index}
                                    className={`flex items-center gap-2 text-sm ${
                                      selectedServices.includes(service.id)
                                        ? 'text-royal-800'
                                        : 'text-royal-600 dark:text-royal-400'
                                    }`}
                                  >
                                    <CheckCircle2 size={12} className="flex-shrink-0" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </AnimatedElement>
              )}

              {/* Step 2: Project Parameters */}
              {step === 2 && (
                <AnimatedElement animation="slideUp" delay={0.2}>
                  <div className="space-y-12">
                    {/* Timeframe Selection */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold mb-4">
                        <Clock size={20} className="inline-block mr-2 text-gold-500" />
                        Implementation Timeline
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {timeframes.map((option) => (
                          <label
                            key={option.id}
                            className={`block p-6 rounded-xl cursor-pointer transition-all ${
                              timeframe === option.id
                                ? 'bg-gold-500 text-royal-900'
                                : 'glass border border-royal-200/20 dark:border-royal-700/20'
                            }`}
                          >
                            <input
                              type="radio"
                              name="timeframe"
                              value={option.id}
                              checked={timeframe === option.id}
                              onChange={(e) => setTimeframe(e.target.value)}
                              className="sr-only"
                            />
                            <div className="text-center">
                              <span className="text-2xl font-bold block mb-2">{option.name}</span>
                              <span className="block mb-2">{option.duration}</span>
                              <span className="text-sm block">{option.description}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Complexity Selection */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold mb-4">
                        <Rocket size={20} className="inline-block mr-2 text-gold-500" />
                        Solution Tier
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {complexityLevels.map((option) => (
                          <label
                            key={option.id}
                            className={`block p-6 rounded-xl cursor-pointer transition-all ${
                              complexity === option.id
                                ? 'bg-gold-500 text-royal-900'
                                : 'glass border border-royal-200/20 dark:border-royal-700/20'
                            }`}
                          >
                            <input
                              type="radio"
                              name="complexity"
                              value={option.id}
                              checked={complexity === option.id}
                              onChange={(e) => setComplexity(e.target.value)}
                              className="sr-only"
                            />
                            <div className="text-center">
                              <span className="text-2xl font-bold block mb-2">{option.name}</span>
                              <span className="block mb-4">{option.description}</span>
                              <ul className="text-sm space-y-2">
                                {option.features.map((feature, index) => (
                                  <li key={index} className="flex items-center gap-2">
                                    <CheckCircle2 size={12} className="flex-shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              )}

              {/* Step 3: Enterprise Information */}
              {step === 3 && (
                <AnimatedElement animation="slideUp" delay={0.2}>
                  <div className="space-y-8">
                    <h2 className="text-2xl font-bold mb-6">Enterprise Information</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-royal-700 dark:text-royal-300 mb-2">
                          Contact Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-royal-100 dark:bg-royal-800/50 border border-royal-200 dark:border-royal-700 focus:outline-none focus:ring-2 focus:ring-gold-500"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-royal-700 dark:text-royal-300 mb-2">
                          Business Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-royal-100 dark:bg-royal-800/50 border border-royal-200 dark:border-royal-700 focus:outline-none focus:ring-2 focus:ring-gold-500"
                          placeholder="Corporate email"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-royal-700 dark:text-royal-300 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-royal-100 dark:bg-royal-800/50 border border-royal-200 dark:border-royal-700 focus:outline-none focus:ring-2 focus:ring-gold-500"
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-royal-700 dark:text-royal-300 mb-2">
                          Industry
                        </label>
                        <input
                          type="text"
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-royal-100 dark:bg-royal-800/50 border border-royal-200 dark:border-royal-700 focus:outline-none focus:ring-2 focus:ring-gold-500"
                          placeholder="Your industry"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-royal-700 dark:text-royal-300 mb-2">
                          Company Size
                        </label>
                        <select
                          value={formData.employees}
                          onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-royal-100 dark:bg-royal-800/50 border border-royal-200 dark:border-royal-700 focus:outline-none focus:ring-2 focus:ring-gold-500"
                        >
                          <option value="">Select company size</option>
                          <option value="100-500">100-500 employees</option>
                          <option value="501-1000">501-1000 employees</option>
                          <option value="1001-5000">1001-5000 employees</option>
                          <option value="5000+">5000+ employees</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-royal-700 dark:text-royal-300 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-royal-100 dark:bg-royal-800/50 border border-royal-200 dark:border-royal-700 focus:outline-none focus:ring-2 focus:ring-gold-500"
                          placeholder="Contact number"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-royal-700 dark:text-royal-300 mb-2">
                        Project Requirements
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg bg-royal-100 dark:bg-royal-800/50 border border-royal-200 dark:border-royal-700 focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none"
                        placeholder="Describe your enterprise requirements and objectives"
                      ></textarea>
                    </div>
                  </div>
                </AnimatedElement>
              )}

              {/* Step 4: Review & Quote */}
              {step === 4 && (
                <AnimatedElement animation="slideUp" delay={0.2}>
                  <div className="space-y-8">
                    <h2 className="text-2xl font-bold mb-6">Enterprise Solution Summary</h2>
                    
                    {/* Selected Solutions */}
                    <div className="p-6 rounded-xl glass border border-royal-200/20 dark:border-royal-700/20">
                      <h3 className="font-bold mb-4">Selected Solutions</h3>
                      <div className="space-y-3">
                        {selectedServices.map((serviceId) => {
                          const service = services.find(s => s.id === serviceId);
                          return (
                            <div key={serviceId} className="flex items-center gap-3">
                              <CheckCircle2 size={16} className="text-gold-500" />
                              <span>{service?.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Implementation Details */}
                    <div className="p-6 rounded-xl glass border border-royal-200/20 dark:border-royal-700/20">
                      <h3 className="font-bold mb-4">Implementation Details</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-royal-600 dark:text-royal-400">Timeline</p>
                          <p className="font-medium">
                            {timeframes.find(t => t.id === timeframe)?.name} ({timeframes.find(t => t.id === timeframe)?.duration})
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-royal-600 dark:text-royal-400">Solution Tier</p>
                          <p className="font-medium">
                            {complexityLevels.find(c => c.id === complexity)?.name}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Enterprise Benefits */}
                    <div className="p-6 rounded-xl glass border border-royal-200/20 dark:border-royal-700/20">
                      <h3 className="font-bold mb-4">Enterprise Benefits</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mx-auto mb-2">
                            <Shield size={24} />
                          </div>
                          <p className="font-medium">Enterprise Security</p>
                          <p className="text-sm text-royal-600 dark:text-royal-400">ISO Certified</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mx-auto mb-2">
                            <Users size={24} />
                          </div>
                          <p className="font-medium">Dedicated Support</p>
                          <p className="text-sm text-royal-600 dark:text-royal-400">24/7 Global Team</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mx-auto mb-2">
                            <Globe size={24} />
                          </div>
                          <p className="font-medium">Global Scale</p>
                          <p className="text-sm text-royal-600 dark:text-royal-400">Multi-Region Support</p>
                        </div>
                      </div>
                    </div>

                    {/* Investment Summary */}
                    <div className="p-8 rounded-xl glass border border-gold-500/20">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2">Enterprise Investment</h3>
                        <div className="text-4xl font-bold text-gold-500 mb-4">
                          R{calculateQuote().toLocaleString()}
                        </div>
                        <p className="text-royal-600 dark:text-royal-400 text-sm">
                          Enterprise-grade implementation with comprehensive support and maintenance
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between gap-4">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 rounded-lg font-medium border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-royal-900 transition-colors"
                  >
                    Previous Step
                  </button>
                )}
                {step < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto px-6 py-3 rounded-lg font-medium bg-gold-500 text-royal-900 hover:bg-gold-600 transition-colors"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto px-8 py-4 rounded-lg font-medium bg-gold-gradient text-royal-900 hover:shadow-gold hover:scale-105 transition-all flex items-center group"
                  >
                    Launch Enterprise Solution
                    <Send size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}