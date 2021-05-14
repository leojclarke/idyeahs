import React from 'react'
import styled from 'styled-components'
import logo from '../images/idyeahsLogoWhite.png';
import { useSpring, animated } from 'react-spring';

const LogoImg = styled(animated.img)`
  width: 200px;
`;

export function Logo({ onClick }) {
    const logoFadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 },
    });

    return <LogoImg src={logo} style={logoFadeIn} onClick={onClick} />;
}