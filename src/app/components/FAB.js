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
  top: 89%;
  right: 4%;
  border-radius: 50%;
  text-align: center;
  font-size: 1.2rem;
  line-height: 60px;
  background: #efc311;
  color: white;
  box-shadow: 0 14px 28px rgba(19, 22, 52, 0.25),
    0 10px 10px rgba(12, 23, 45, 0.22);
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: white;

  .active.focus,
  .active:focus,
  .focus,
  .focus:active,
  :active:focus,
  :focus {
    outline: 0;
    outline-offset: 0;
    background-image: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

export default function AddButton() {
  return (
    <StyledFloatingButton>
      <Link to="/">
        <FontAwesomeIcon icon={faPlus} size="lg" />
      </Link>
    </StyledFloatingButton>
  );
}

AddButton.propTypes = {
  handlePublish: PropTypes.func,
  history: PropTypes.object,
};
