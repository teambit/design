import React from 'react';
import { OwnerAvatar } from './owner-avatar';

const userAccount = { name: 'defaultAccount', type: 'user', profileImage: 'https://static.bit.dev/harmony/github.svg' };

export const OwnerAvatarExample = () => <OwnerAvatar size={32} account={userAccount} />;

export const OwnerAvatarWithoutImageExample = () => (
  <OwnerAvatar size={32} account={{ ...userAccount, name: '', profileImage: '' }} />
);

export const OwnerAvatarDifferentSizes = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 32 }}>
    {[16, 24, 32, 38, 40].map((size, index) => (
      <div>
        Size: {size}
        <OwnerAvatar size={size} account={userAccount} />
      </div>
    ))}
  </div>
);
