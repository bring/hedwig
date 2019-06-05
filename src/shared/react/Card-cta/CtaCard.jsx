import React from 'react';

export default function CtaCard({title, content}) {
  return (
    <a href="#" className="hw-card-cta">
      <h2 className="hw-card-cta__title">{title}</h2>
      <hr className="hw-card-cta__hr" />
      <p className="hw-card-cta__text">
        {content}
      </p>
    </a>
  )
};
