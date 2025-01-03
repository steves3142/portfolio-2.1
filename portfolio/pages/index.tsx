import Header from '@/components/Header';
import type { GetStaticProps } from 'next';
import Head from 'next/head'
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import { Experience, PageInfo, Project, Skill } from "../typings" 
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchProjects } from '../utils/fetchProjects';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  pageInfo: PageInfo | null;
  experiences: Experience[] | null;
  skills: Skill[] | null;
  projects: Project[] | null;
}

export const metadata: Metadata = {
  title: "Portfolio Page",
  robots: {
    index: false, 
    follow: true,
  }
}

const Home = ({ pageInfo, experiences, projects, skills }: Props) => {
  // If any of the props are null, show a 404 page
  if (!pageInfo || !experiences || !skills || !projects) {
    notFound();  // This triggers the 404 page
  }

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0af7bc]/80">
      <Head>
        <title>{pageInfo?.name}</title>
      </Head>  

      <Header />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section> 

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects}/> 
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const pageInfo: PageInfo = await fetchPageInfo(); 
    const experiences: Experience[] = await fetchExperiences(); 
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects(); 

    // If any data is missing or invalid, return a 404 page
    if (!pageInfo || !experiences || !skills || !projects) {
      return {
        notFound: true,  // Triggers the 404 page
      };
    }

    return {
      props: {
        pageInfo,
        experiences,
        skills,
        projects,
      },
      // Enable ISR (Incremental Static Regeneration)
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    // If there's an error fetching the data, return a 404 page
    return {
      notFound: true,  // Triggers the 404 page
    };
  }
};
