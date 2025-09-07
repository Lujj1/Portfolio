import { Users, Megaphone, Calendar, Trophy } from "lucide-react";

const Experience = () => {
  const activities = [
    {
      title: "Digital Marketing Intern",
      organization: "Digital Marketing Agency",
      icon: Trophy,
      color: "accent",
      responsibilities: [
        "Completed 1-month intensive internship program",
        "Assisted in developing digital marketing strategies",
        "Analyzed social media metrics and engagement data",
        "Contributed to content creation and campaign planning",
      ],
    },
    {
      title: "Social Media Manager",
      organization: "AT Company",
      icon: Users,
      color: "secondary",
      responsibilities: [
        "Managed social media accounts for 1 month",
        "Created and scheduled engaging content across platforms",
        "Monitored social media trends and audience engagement",
        "Developed content calendars and posting strategies",
      ],
    },
    {
      title: "Vice President, Marketing & Media Coverage",
      organization: "Target Team, Mansoura University",
      icon: Megaphone,
      color: "primary",
      responsibilities: [
        "Led marketing strategies for university-wide events",
        "Managed social media presence and engagement",
        "Created promotional content and campaigns",
        "Coordinated with team members for event coverage",
      ],
    },
    {
      title: "Event Organizer",
      organization: "University Events",
      icon: Calendar,
      color: "secondary",
      responsibilities: [
        "Organized and coordinated university-wide activities",
        "Managed event logistics and scheduling",
        "Collaborated with student organizations",
        "Ensured successful event execution",
      ],
    },
    {
      title: "Team Member",
      organization: "Target Team, Mansoura University",
      icon: Users,
      color: "accent",
      responsibilities: [
        "Active participation in team initiatives",
        "Student engagement and outreach",
        "Community building activities",
        "Collaborative project development",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-background via-coral-light/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Extracurricular <span className="bg-gradient-secondary bg-clip-text text-transparent">Activities</span>
          </h2>

          <div className="space-y-8">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover-lift"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className={`w-14 h-14 bg-gradient-${activity.color === 'secondary' ? 'secondary' : activity.color === 'accent' ? 'secondary' : 'primary'} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        {activity.title}
                      </h3>
                      <p className="text-primary font-medium mb-4">{activity.organization}</p>
                      <ul className="space-y-2">
                        {activity.responsibilities.map((resp, respIndex) => (
                          <li
                            key={respIndex}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <Trophy className="w-4 h-4 text-yellow mt-0.5 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-primary text-primary-foreground px-6 py-3 rounded-full shadow-soft">
              <p className="font-semibold">Building Leadership & Communication Skills</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;