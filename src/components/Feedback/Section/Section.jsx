import React from 'react';
import PropTypes from "prop-types";
import { SectionBox } from "./Section.styled";


export const Section = ({ title, children }) => {
    return (
    <SectionBox>
    <h1>{title}</h1> 
    {children}
    </SectionBox>
    )
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

