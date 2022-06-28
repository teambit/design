import React from 'react';
import { Icon } from '@teambit/design.elements.icon';
import { ButtonLink } from './button-link';

export const ButtonLinkWithImage = () => {
  return (
    <ButtonLink
      linkProps={{ external: true, href: 'https://bit.cloud/teambit' }}
      icon={<img src="https://static.bit.cloud/cloud/organization.svg" />}
    >
      Teambit
    </ButtonLink>
  );
};

export const ButtonLinkWithIcon = () => {
  return (
    <ButtonLink linkProps={{ external: true, href: 'https://bit.cloud/teambit' }} icon={<Icon of="settings" />}>
      Settings
    </ButtonLink>
  );
};
