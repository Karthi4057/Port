import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import { Download, Github, Mail, User, ArrowRight, ExternalLink, Eye, Sun, Moon, Linkedin, X, Phone, MapPin } from "lucide-react";
import BackgroundRemover from "@/components/BackgroundRemover";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1RHletLEKfqmWoGHa66HVgtiE8vOcBLps/view?usp=drivesdk', '_blank');
  };

  const openGitHub = () => {
    window.open('https://github.com/Karthi4057', '_blank');
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'aa0fc793-b480-4c12-924b-638aeaa67ebd',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error Sending Message",
        description: "There was an issue sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const skills = [
    { name: 'Java', level: 85, logo: '☕' },
    { name: 'SQL', level: 80, logo: '🗃️' },
    { name: 'HTML/CSS', level: 90, logo: '🌐' },
    { name: 'JavaScript', level: 75, logo: '⚡' },
    { name: 'ReactJS', level: 70, logo: '⚛️' },
    { name: 'MySQL', level: 80, logo: '🐬' },
    { name: 'Power BI', level: 65, logo: '📊' }
  ];

  const tools = [
    { name: 'GitHub', logo: '🐙' },
    { name: 'VS Code', logo: '💻' },
    { name: 'Android Studio', logo: '🤖' },
    { name: 'Power BI', logo: '📊' },
    { name: 'Excel', logo: '📈' },
    { name: 'MySQL', logo: '🗄️' }
  ];

  const projects = [
    {
      title: "Smart E-Waste Monitoring System",
      description: "IoT-based system for monitoring and managing electronic waste with real-time analytics",
      techStack: ["IoT", "Sensors", "Data Analytics", "Monitoring"],
      features: ["Real-time monitoring", "Analytics dashboard", "Waste categorization"],
      projectLink: "https://smartewasteecotracksystem.netlify.app/",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop"
    },
    {
      title: "Bus Reservation System",
      description: "Complete bus booking platform with user-friendly interface for seamless travel planning",
      techStack: ["Java", "MySQL", "Swing", "Database"],
      features: ["Booking management", "Cancellation system", "User interface"],
      projectLink: "#",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=300&fit=crop"
    }
  ];

  const certifications = [
    { 
      name: "Java for Beginners", 
      platform: "Udemy", 
      year: "2024",
      viewLink: "https://drive.google.com/file/d/1RDKiJ2707FeGnuES5GVC1aD26St0_rDC/view?usp=drivesdk"
    },
    { 
      name: "Mastering MySQL", 
      platform: "Udemy", 
      year: "2024",
      viewLink: "https://drive.google.com/file/d/1EyB9fmuyfTPEol2N-2Yvg5uprRkOhwwM/view?usp=drivesdk"
    },
    { 
      name: "Cloud Computing (Elite)", 
      platform: "NPTEL", 
      year: "2024",
      viewLink: "https://drive.google.com/file/d/1N2ZyVNdV06v5SjTEOihd9YWo9as8Dm_K/view?usp=drivesdk"
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 font-inter ${isDarkMode ? 'dark' : ''}`}>
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          <Sun className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-orange-500'}`} />
          <Switch
            checked={isDarkMode}
            onCheckedChange={toggleTheme}
            className="data-[state=checked]:bg-blue-500"
          />
          <Moon className={`w-4 h-4 ${isDarkMode ? 'text-blue-500' : 'text-gray-400'}`} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Hand wave emoji in top corner */}
        <div className="fixed top-4 left-4 z-50">
          <div className="text-4xl animate-bounce">👋</div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 to-blue-100/20" />
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-200/30 rounded-full animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-200/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="text-center z-10 px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
            Karthi <span className="text-orange-500 animate-glow">M</span>
          </h1>
          <div className="flex items-center justify-center gap-3 mb-2">
            <p className="text-xl md:text-2xl text-gray-600 animate-glow">
              Creative Developer & Tech Enthusiast
            </p>
          </div>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            "Build. Break. Learn. Repeat."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={downloadResume}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={openGitHub}
            >
              <Github className="w-4 h-4 mr-2" />
              View GitHub
            </Button>
            <Button 
              variant="outline" 
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={scrollToContact}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Computer Science Engineering student who loves solving problems, 
              building real-world tech solutions, and learning through hands-on projects. 
              Every line of code I write is driven by curiosity and the desire to make technology 
              more accessible and impactful.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Education</h3>
                  <p className="text-gray-600">Computer Science Engineering Student</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Languages</h3>
                  <p className="text-gray-600">Tamil & English</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-orange-200 to-blue-200 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/6ed16302-0e61-4cdf-9f8d-d35f6b703352.png" 
                alt="Karthi M - Professional Photo"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate about technology with hands-on experience in various programming languages and tools
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skill.logo}</span>
                      <span className="font-medium text-gray-700">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Tools & Platforms</h3>
                <div className="grid grid-cols-2 gap-3">
                  {tools.map((tool) => (
                    <div key={tool.name} className="flex items-center gap-3 p-2 bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg">
                      <span className="text-xl">{tool.logo}</span>
                      <span className="text-gray-700 font-medium">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['Java ☕', 'SQL 🗃️', 'HTML 🌐', 'CSS 🎨', 'JavaScript ⚡'].map((lang) => (
                    <Badge key={lang} variant="outline" className="border-orange-500 text-orange-600 text-sm px-3 py-1">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto mb-8"></div>
          </div>
          
          <Card className="p-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Intern Developer</h3>
                <p className="text-orange-600 font-medium mb-4">Pixel Perfect Software Solution</p>
                <p className="text-gray-600 mb-4">
                  Gained hands-on experience in web development by deploying responsive websites 
                  and collaborating with cross-functional teams. Worked extensively with ReactJS 
                  to build modern, user-friendly interfaces while learning industry best practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-orange-100 text-orange-700">ReactJS</Badge>
                  <Badge className="bg-blue-100 text-blue-700">Responsive Design</Badge>
                  <Badge className="bg-green-100 text-green-700">Team Collaboration</Badge>
                  <Badge className="bg-purple-100 text-purple-700">Web Development</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real-world projects that showcase my problem-solving skills and technical expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-blue-500 text-blue-600">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature) => (
                          <li key={feature} className="text-gray-600 flex items-center gap-2">
                            <ArrowRight className="w-4 h-4 text-orange-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        variant="outline" 
                        className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white w-full"
                        onClick={() => window.open(project.projectLink, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Continuous learning through industry-recognized certifications
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={cert.name} className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full"></div>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{cert.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{cert.platform}</p>
                <p className="text-gray-500 text-sm mb-4">{cert.year}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white"
                  onClick={() => window.open(cert.viewLink, '_blank')}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Certificate
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Achievements</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto mb-8"></div>
          </div>
          
          <Card className="p-8 max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Poster Design Award</h3>
            <p className="text-gray-600">
              Recognition for creative excellence in poster design, showcasing artistic skills 
              alongside technical expertise.
            </p>
          </Card>
        </div>
      </section>

      {/* Portfolio & Social Links */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Let's Connect</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find me across the digital landscape - let's build something amazing together!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <h3 className="font-semibold text-gray-800 mb-2">Portfolio Website</h3>
              <p className="text-blue-600 hover:text-blue-800 cursor-pointer">karthimanicse.netlify.app</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <h3 className="font-semibold text-gray-800 mb-2">GitHub</h3>
              <p className="text-blue-600 hover:text-blue-800 cursor-pointer">github.com/Karthi4057</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <h3 className="font-semibold text-gray-800 mb-2">LinkedIn</h3>
              <p className="text-blue-600 hover:text-blue-800 cursor-pointer">linkedin.com/in/karthi-m-a81a4b27b</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's create something extraordinary together!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <a href="mailto:karthicse2022@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                      karthicse2022@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <a href="tel:+918124907645" className="text-blue-600 hover:text-blue-800 transition-colors">
                      +91 8124907645
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600">Tiruppur, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <p className="text-gray-600 leading-relaxed">
                  I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                  or simply connect with fellow developers and tech enthusiasts. Feel free to reach out!
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full h-32"
                    placeholder="Tell me about your project or just say hello!"
                    required
                  />
                </div>
                
                <div className="text-center">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed w-full"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Karthi M</h3>
          <p className="text-gray-400 mb-6">Creative Developer & Tech Enthusiast</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              onClick={() => window.open('https://linkedin.com/in/karthi-m-a81a4b27b', '_blank')}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white"
              onClick={() => window.open('https://github.com/Karthi4057', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white"
              onClick={() => window.open('#', '_blank')}
            >
              <X className="w-4 h-4 mr-2" />
              Twitter
            </Button>
          </div>
          
          <div className="mb-6">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              onClick={downloadResume}
            >
              <Download className="w-4 h-4 mr-2" />
              Take me with you!
            </Button>
          </div>
          
          <p className="text-gray-500 text-sm">
            © 2024 Karthi M. "Turning ideas into reality, one line of code at a time" 💻✨
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
