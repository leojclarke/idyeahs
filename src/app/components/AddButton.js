import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus);

const StyledFloatingButton = styled.span`
  display: block;
  width: 60px;
  height: 60px;
  position: absolute;
  top: 20%;
  right: 1%;
  border-radius: 50%;
  text-align: center;
  font-size: 1.2rem;
  line-height: 60px;
  background: #7d1538;
  box-shadow: 0 14px 28px rgba(12, 32, 42, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
`;

export default function AddButton() {
  return (
    <StyledFloatingButton>
      <NavLink to="/ideas/add">
        <FontAwesomeIcon icon="plus" />
      </NavLink>
    </StyledFloatingButton>
  );
}

AddButton.propTypes = {
  handlePublish: PropTypes.func,
  history: PropTypes.object,
};
