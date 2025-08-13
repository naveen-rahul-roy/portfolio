import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const EducationSection = () => {
  const currentlyExploring = [
    "Kubernetes and advanced container orchestration",
    "AWS Step Functions for serverless automation", 
    "Internal documentation for scalable DevOps practices"
  ];

  return (
    <section id="education" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education & <span className="bg-gradient-primary bg-clip-text text-transparent">Learning</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and academic excellence in computer science
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="tech-card mb-12">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2">B.Tech in Computer Science and Design</h3>
                <div className="flex flex-wrap gap-4 mb-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>SRKR Engineering College, Bhimavaram</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>2021 - 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>GPA: 8.12</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive education in computer science fundamentals with a focus on modern 
                  design principles. Specialized coursework in cloud computing,DevOps and software engineering, 
                  and system architecture.
                </p>
              </div>
            </div>
          </div>

          <div className="tech-card">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-primary rounded"></div>
              Currently Exploring
            </h3>
            <div className="grid gap-4">
              {currentlyExploring.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;