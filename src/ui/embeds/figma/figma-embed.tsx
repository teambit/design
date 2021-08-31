import React from 'react';
import classNames from 'classnames';
import styles from './figma-embed.module.scss';

export type FigmaEmbedProps = {} & React.IframeHTMLAttributes<HTMLIFrameElement>;

export function FigmaEmbed({ loading = 'lazy', width = '100%', height = '600', className, ...rest }: FigmaEmbedProps) {
  return (
    <iframe
      {...rest}
      className={classNames(styles.iframe, className)}
      width={width}
      height={height}
      loading={loading}
    ></iframe>
  );
}
