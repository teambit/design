import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { ThemeContext } from '@teambit/design.theme.theme-context';
import { DesignReactEnvAspect } from './react-env.aspect';

export class DesignReactEnvPreview {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const dotComponentsReactPreviewMain = new DesignReactEnvPreview();
    // uncomment the line below to register a new provider to wrap all compositions using this environment with a custom theme.
    react.registerProvider([ThemeContext]);

    return dotComponentsReactPreviewMain;
  }
}

DesignReactEnvAspect.addRuntime(DesignReactEnvPreview);
