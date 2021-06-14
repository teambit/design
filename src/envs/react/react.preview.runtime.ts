import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { ThemeContext } from '@teambit/design.theme.theme-context';
import { DesignReactEnvAspect } from './react-env.aspect';

import { ThemWithCentering } from './theme-with-centering';

export class DesignReactEnvPreview {
  static runtime = PreviewRuntime;
  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const reactEnvPreview = new DesignReactEnvPreview();

    const previewDecorators = [ThemWithCentering];
    react.registerProvider(previewDecorators);

    return reactEnvPreview;
  }
}

DesignReactEnvAspect.addRuntime(DesignReactEnvPreview);
