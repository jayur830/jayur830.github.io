import { FC, SVGProps } from 'react';
import { Chip, Link, styled } from '@mui/material';

import { logoValues } from '@/configs/logo';
import { TechLogo } from '@/graphql/graphql';

interface BadgeProps {
  href: string;
  label: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  svgProps: {
    width: number;
    height: number;
    viewBox?: string;
  };
  backgroundColor: string;
  textColor?: string;
}

const LinkButton = styled(Link)({
  display: 'flex',
  textDecoration: 'none',
});

const StyledChip = styled(Chip)<{ 'background-color': string; 'text-color'?: string }>(({ theme, ...props }) => ({
  backgroundColor: props['background-color'],
  borderRadius: 3,
  color: props['text-color'] ?? theme.palette.common.white,
  fontSize: 12,
  fontWeight: 400,
  height: 22,
  cursor: 'pointer',
  ['.MuiChip-icon']: {
    paddingLeft: 3,
  },
  ['.MuiChip-label']: {
    paddingLeft: 12,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 10,
    height: 18,
  },
}));

function Badge({ href, label, icon: Icon, svgProps, backgroundColor, textColor }: BadgeProps) {
  return (
    <LinkButton
      href={href}
      target="_blank"
    >
      <StyledChip
        icon={<Icon {...svgProps} />}
        label={label}
        background-color={backgroundColor}
        text-color={textColor}
      />
    </LinkButton>
  );
}

const logoBadges = Object.entries(logoValues).reduce(
  (result, [logo, props]) => ({
    ...result,
    [logo]: () => <Badge {...props} />,
  }),
  {} as { [K in TechLogo]: FC },
);

export default logoBadges;
