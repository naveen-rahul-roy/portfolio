import { Code, Cloud, Zap, Shield } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "AWS expertise with hands-on experience in EC2, S3, Lambda, and VPC"
    },
    {
      icon: Code,
      title: "CI/CD Pipelines",
      description: "Jenkins automation and containerization with Docker & Kubernetes"
    },
    {
      icon: Zap,
      title: "Infrastructure as Code",
      description: "CloudFormation and Terraform for automated deployments"
    },
    {
      icon: Shield,
      title: "Security & Monitoring",
      description: "IAM, CloudWatch, and comprehensive security practices"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Aspiring DevOps Engineer with hands-on experience in CI/CD pipelines, AWS infrastructure 
            automation, containerization, and scripting. Strong understanding of Linux systems, 
            Git workflows, and cloud-native deployments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="tech-card text-center group animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <item.icon size={24} className="text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="tech-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
             A recent Computer Science graduate from SRKR Engineering College with a GPA of 8.12. Eager to contribute to DevOps teams while advancing technical expertise in a collaborative environment. Passionate about automation, continuous integration, and building reliable, scalable infrastructure solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;