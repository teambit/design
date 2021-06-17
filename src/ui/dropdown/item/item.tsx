import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Ellipsis } from '@teambit/design.ui.styles.ellipsis';
import { UserAvatar, OrgAvatar } from '@teambit/design.ui.avatar';
import styles from './item.module.scss';

export type ItemProps = {
  image?: string;
  name: string;
  isActive?: boolean;
  accountType?: string;
} & HTMLAttributes<HTMLDivElement>;

export function Item({ image, name, className, isActive, accountType = 'user', ...rest }: ItemProps) {
  return (
    <div {...rest} className={classNames(styles.item, isActive && styles.active, className)}>
      {accountType === 'organization' ? (
        <OrgAvatar size={20} account={{ profileImage: image }} className={styles.orgImg} />
      ) : (
        <UserAvatar size={20} account={{ profileImage: image }} />
      )}
      <Ellipsis>{name}</Ellipsis>
    </div>
  );
}
