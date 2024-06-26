"use client";

import SectionHeading from "@/components/SectionHeading";
import { experiencesData } from "@/libs/data";
import useSectionView from "@/libs/hooks";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const { ref } = useSectionView("Experience");

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experiences</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#CCD0CF",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.5)",
                textAlign: "left",
                padding: "1.3rem 2rem"
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af"
              }}
              icon={item.icon}
              iconStyle={{
                background: "#CCD0CF",
                fontSize: "1.5rem"
              }}>
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">
                {item.location} ({item.date})
              </p>
              <p className="!mt-1 !font-normal text-color-dark">{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
