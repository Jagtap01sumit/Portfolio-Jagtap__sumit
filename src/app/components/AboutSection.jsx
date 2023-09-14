'use client';
import React, {  useTransition,useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

export default function AboutSection() {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const TAB_DATA = [
    {
      title: 'Skills',
      id: 'skills',
      content: (
        <ul className="list-disc pl-2">
          <li>NextJs</li>
          <li>ReactJs</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Java</li>
        </ul>
      ),
    },
    {
      title: 'Education',
      id: 'education',
      content: (
        <ul className="list-disc pl-2">
          <li>University of Mumbai</li>
          <li>BVCOE</li>
          <li>CGPA:9.11</li>
        </ul>
      ),
    },
    {
      title: 'Certification',
      id: 'certification',
      content: (
        <ul className="list-disc pl-2">
          <li>Full Stack Java Developer</li>
          <li>Introduction to Cloud Computing</li>
          <li>ReactJs</li>
        </ul>
      ),
    },
  ];

  return (
    <section className="text-white" id='aboutSection'>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-20 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            I&apos;m Sumit Jagtap, an Information Technology enthusiast currently pursuing my BE degree at the University of Mumbai. Throughout my academic journey, I&apos;ve cultivated a deep fascination for the world of Information Technology. My determination to excel in this field has led me to gain practical experience through three valuable internships, each contributing to my growth as a web developer. These experiences have nurtured my passion for creating visually appealing and seamlessly functional websites. With a strong foundation in IT, I am now eager to take on more challenging industrial projects within the web development domain, where I can apply my skills and collaborate with industry experts to bring innovative solutions to life. Join me on this exciting journey of technology, creativity, and continuous learning.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certification')}
              active={tab === 'certification'}
            >
              Certification
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
}
