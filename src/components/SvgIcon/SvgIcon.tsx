import { FunctionComponent } from 'react';
import { Colors } from 'styles/colors';
import { useAppColors } from 'components/base-components/Configuration';
import { IconProps } from './icon-props';
import { Icons, icons } from './Icons';
import { svgIconStyles } from './styles';

interface Props extends IconProps {
  id?: string;
  icon: Icons;
  size?: 'small' | 'medium' | 'large' | 'x-large' | 'page';
}

const SvgIcon: FunctionComponent<Props> = (props) => {
  const colors = useAppColors();
  const {
    icon,
    width,
    height,
    size,
    color,
    secondaryColor,
    ...iconProperties
  } = props;
  const iconColor = colors[color];
  const iconSecondaryColor = colors[secondaryColor];
  const iconHeight = height || svgIconStyles.size[size].height;
  const iconWidth = width || svgIconStyles.size[size].width;
  const IconComponent = icons[icon];

  return (
    <IconComponent
      color={iconColor as Colors}
      secondaryColor={iconSecondaryColor as Colors}
      width={iconWidth}
      height={iconHeight}
      {...iconProperties}
    />
  );
};

SvgIcon.defaultProps = {
  icon: null,
  size: 'medium',
  color: 'FONT',
  secondaryColor: 'FONT',
  height: undefined,
  width: undefined,
  className: undefined,
  style: undefined,
};

export default SvgIcon;
