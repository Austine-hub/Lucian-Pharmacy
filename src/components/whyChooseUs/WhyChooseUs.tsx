import React from 'react';
import styles from './WhyChooseUs.module.css';
import { Ear } from 'lucide-react';
import { 
  FaTooth, 
  FaUserMd, 
  FaFileAlt, 
  FaDna, 
  FaSeedling, 
} from 'react-icons/fa';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <FaTooth />,
      title: 'General Outpatient Care',
      description: 'We provide reliable and affordable outpatient medical services for common illnesses and routine health concerns.'
    },
    {
      icon: <FaUserMd />,
      title: 'Qualified Medical Staff',
      description: 'Our hospital is staffed with licensed doctors, nurses, and clinical officers dedicated to safe and compassionate care.'
    },
    {
      icon: <FaFileAlt />,
      title: 'Accurate Medical Records',
      description: 'We maintain clear and confidential patient records to ensure continuity of care and proper medical follow-up.'
    },
    {
      icon: <FaDna />,
      title: 'Basic Laboratory Services',
      description: 'On-site laboratory testing supports timely diagnosis and treatment for common medical conditions.'
    },
    {
      icon: <FaSeedling />,
      title: 'Preventive & Wellness Care',
      description: 'We promote preventive healthcare through screenings, immunizations, and health education.'
    },
    {
      icon: <Ear size={28} />,
      title: 'Minor Procedures & Care',
      description: 'Our facility safely handles minor procedures, wound care, and basic emergency stabilization.'
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Why Choose Us</h2>
          <div className={styles.underline}></div>
        </div>
        
        <p className={styles.subtitle}>
          We are a community-focused hospital committed to providing accessible, safe, and quality healthcare.
          Our team works together to ensure every patient receives respectful and timely medical attention.
        </p>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
