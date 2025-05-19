import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import BusinessGrowthSection from "./components/BusinessGrowthSection/BusinessGrowthSection";
import IntroSection from "./components/IntroSection/IntroSection";
import CasesSection from "./components/CasesSection/CasesSection";
import StatisticsSection from "./components/StatisticsSection/StatisticsSection";
import EventsSection from "./components/EventsSection/EventsSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import TeamSection from "./components/TeamSection/TeamSection";
import ToolsSection from "./components/ToolsSection/ToolsSection";
import GuaranteesSection from "./components/GuaranteesSection/GuaranteesSection";
import ConsultationForm from "./components/ConsultationForm/ConsultationForm";
import TestimonialsCarousel from "./components/TestimonialsCarousel/TestimonialsCarousel";
import QuestionBlock from "./components/QuestionSection/QuestionSection";
import TextBlock from "./components/TextBlock/TextBlock";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/FooterSection/Footer";

export default function Home() {
  // Пример SEO-текста для компонента TextBlock
  const seoText = `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.</p>
    
    <p>Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.</p>
    
    <p>Suspendisse in libero risus. Donec et nibh non nibh porttitor placerat. Vestibulum ut lacinia lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis vitae lorem egestas, convallis lacus sit amet, lobortis odio.</p>
  `;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <HeroSection />
        <BusinessGrowthSection />
        <IntroSection />
        <CasesSection />
        <StatisticsSection />
        <EventsSection />
        <ServicesSection />
        <TeamSection />
        <ToolsSection />
        <GuaranteesSection />
        <ConsultationForm />
        <TestimonialsCarousel />
        <QuestionBlock />
        <TextBlock 
          title="Заголовок SEO текста" 
          content={seoText}
        />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}