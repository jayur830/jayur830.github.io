import { Chip } from '@mui/material';
import Link from 'next/link';
import { FC, SVGProps } from 'react';

import { logoValues } from '@/constants/logo';
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

function Badge({ href, label, icon: Icon, svgProps, backgroundColor, textColor }: BadgeProps) {
  return (
    <Link href={href} target="_blank">
      <Chip
        icon={<Icon {...svgProps} />}
        label={label}
        background-color={backgroundColor}
        text-color={textColor}
        sx={{
          backgroundColor,
          borderRadius: '3px',
          color: textColor ?? 'common.white',
          fontSize: { xs: 10, md: 12 },
          fontWeight: 400,
          height: { xs: 18, md: 22 },
          cursor: 'pointer',
          ['.MuiChip-icon']: {
            paddingLeft: '3px',
          },
          ['.MuiChip-label']: {
            paddingLeft: '12px',
          },
        }}
      />
    </Link>
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
