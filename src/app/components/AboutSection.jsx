'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

export default function AboutSection() {
  const [tab, setTab] = useState('skills');

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
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            I&apos;m the dynamic candidate for this web dev internship due to my coding finesse, design sensibilities, and an insatiable hunger for growth. My track record of building user-centric websites, coupled with my proficiency in cutting-edge technologies, makes me a prime asset to your team. I&apos;m driven by innovation, thrive in collaborative environments, and possess an innate ability to turn concepts into captivating online realities. With a passion for crafting seamless user experiences and a dedication to mastering new skills, I am poised to elevate your projects to new heights. I&apos;m particularly excited about the opportunity to work on real-time projects, contributing my skills to create impactful websites that resonate with users and achieve lasting success. Let&apos;s embark on a journey of digital innovation together and create a remarkable portfolio of work.
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
