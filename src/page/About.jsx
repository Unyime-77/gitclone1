
import ProfileCard from '@/component/about/ProfileCard';
import MyStoryCard from '@/component/about/MyStory';
import Expertise from '@/component/about/SkillStats';
import JourneyExperience from '@/component/about/Timeline';
import Philosophy from '@/component/about/Philosophy';
import GetInTouchCard from '@/component/common/CTASection';
import '@/styles/About.css';


export default function AboutPage() {
  const storyParagraphs = [
    "I'm a passionate tech enthusiast who found my calling at the intersection of design and development. My journey began with a fascination for how beautiful interfaces come to life through code, and that curiosity has evolved into a career dedicated to crafting exceptional digital experiences.",
    "What sets me apart is my dual expertise. As a web developer, I write clean, efficient code that brings ideas to life. As a product designer, I ensure those ideas are not just functional, but delightful to use. This unique combination allows me to bridge the gap between vision and execution.",
    "When I'm not coding or designing, you'll find me exploring the latest web technologies, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and staying ahead of industry trends to deliver cutting-edge solutions."
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">
            Get to know the person behind the pixels and code
          </p>
        </section>

        {/* Main Content Grid */}
        <div className="about-grid">
          {/* Sidebar - Profile Card (Sticky) */}
          <aside className="about-sidebar">
            <ProfileCard 
              
              role="Web Developer & Product Designer"
              
              experience="5+ Years"
              education="Electrical & Electronics Engineering"
              
            />
          </aside>

          {/* Main Content */}
          <div className="about-main">
            {/* My Story */}
            <MyStoryCard 
              title="My Story"
              paragraphs={storyParagraphs}
            />

            {/* Expertise */}
            <Expertise />

            {/* Journey & Experience */}
            <JourneyExperience />

            {/* Philosophy */}
            <Philosophy />
          </div>
        </div>

        {/* Get In Touch CTA */}
        <GetInTouchCard 
          title="Let's Work Together"
          subtitle="Interested in collaborating? I'd love to hear about your project!"
        />
      </div>
    </div>
  );
}