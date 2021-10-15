/* eslint-disable max-len */
import React, { FunctionComponent, useMemo } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useAppColors } from 'components/base-components/Configuration';

interface Props {
  isChecked: boolean;
  onClick: (event) => void;
}

const tickVariants = {
  pressed: (isChecked: boolean) => ({ pathLength: isChecked ? 0.85 : 0.2 }),
  checked: { pathLength: 1 },
  unchecked: { pathLength: 0 }
};

const Faux: FunctionComponent<Props> = (props) => {
  const { isChecked, onClick } = props;
  const colors = useAppColors();

  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  const boxVariants = useMemo(() => ({
    hover: { scale: 0.95, strokeWidth: 30 },
    pressed: { scale: 0.9, strokeWidth: 35 },
    checked: {},
    unchecked: { strokeWidth: 25 }
  }), [colors]);

  return (
    <motion.svg
      width="26"
      height="26"
      initial={false}
      animate={isChecked ? 'checked' : 'unchecked'}
      whileHover="hover"
      whileTap="pressed"
      onClick={onClick}
    >
      <g
        id="g19"
        transform="matrix(0.06195059,0,0,0.06195059,-0.71406644,-0.18146049)"
      >
        <motion.path
          d="m 72,136 c 0,-35.346 28.654,-64 64,-64 h 168 c 35.346,0 64,28.654 64,64 v 168 c 0,35.346 -28.654,64 -64,64 H 136 c -35.346,0 -64,-28.654 -64,-64 z"
          fill="transparent"
          strokeWidth="50"
          stroke={isChecked ? colors.BRAND : colors.FONT_SECONDARY}
          variants={boxVariants}
        />
        <motion.path
          d="M 0,128.666 128.658,257.373 341.808,0"
          transform="rotate(-4,1463.1113,-613.45556)"
          fill="transparent"
          strokeWidth="65"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke={colors.BACKGROUND}
          variants={tickVariants}
          style={{ pathLength, opacity }}
          custom={isChecked}
        />
        <motion.path
          d="M 0,128.666 128.658,257.373 341.808,0"
          transform="rotate(-4,1185.5544,-623.14806)"
          fill="transparent"
          strokeWidth="65"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke={colors.ACCENT}
          variants={tickVariants}
          style={{ pathLength, opacity }}
          custom={isChecked}
        />
      </g>
    </motion.svg>
  );
};

export default Faux;
