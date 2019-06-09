import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faArrowRight,
  faArrowLeft,
  faLightbulb,
  faComment,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

library.add(faTimes, faArrowRight, faArrowLeft);

const iconLibrary = {
  times: 'times',
  arrowRight: 'arrow-right',
  arrowLeft: 'arrow-left',
};

export default function Icon({ iconLibrary }) {
  return <FontAwesomeIcon icon={iconLibrary} />;
}
