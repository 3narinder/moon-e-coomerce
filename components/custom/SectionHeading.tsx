import React from "react";

interface SectionHeadingProps {
  text: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ text }) => {
  return (
    <div className="lg:heading-7 heading-6 text-warm-black uppercase font-semibold text-center mb-8 lg:tracking-wider">
      {text}
    </div>
  );
};

export default SectionHeading;
