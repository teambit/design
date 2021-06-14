import { MainRuntime } from '@teambit/cli';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { ReactAspect, ReactMain } from '@teambit/react';
import { DesignReactEnvAspect } from './react-env.aspect';

export class DesignReactEnvMain {
  static runtime = MainRuntime;
  static dependencies: any = [EnvsAspect, ReactAspect];

  static async provider([envs, react]: [EnvsMain, ReactMain]) {
    const designReactEnv = react.compose([]);
    envs.registerEnv(designReactEnv);

    return new DesignReactEnvMain();
  }
}

DesignReactEnvAspect.addRuntime(DesignReactEnvMain);
