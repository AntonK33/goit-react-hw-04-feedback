import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';
const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={css.section_paragraph}>{title}</h2>
      {children}
    </section>
  );
};
export default Section;
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
//qwe
