import React from "react";

type SectionHeadingProps = {
  HeadText: React.ReactNode;
};

const SectionHeading = ({ HeadText }: SectionHeadingProps) => {
  return <h2 className="text-3xl font-medium capitalize mb-8">{HeadText}</h2>;
};

export default SectionHeading;
