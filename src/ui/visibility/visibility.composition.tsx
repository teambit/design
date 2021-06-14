import React from 'react';
import { Visibility } from './visibility';

export const PrivateVisibilityExample = () => <Visibility isPrivate />;

export const PublicVisibilityExample = () => <Visibility isPrivate={false} />;
