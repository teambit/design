import { MainRuntime } from '@teambit/cli';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { ReactAspect, ReactMain, ReactEnv } from '@teambit/react';
import { DesignReactEnvAspect } from './react-env.aspect';
import { DesignReactEnv } from './react-env.envs';

export class DesignReactEnvMain {
  constructor(readonly designReactEnv: ReactEnv) {}

  static slots = [];

  static dependencies = [ReactAspect, EnvsAspect];

  static runtime = MainRuntime;

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const designReactEnv = envs.merge(new DesignReactEnv(react.reactEnv), react.reactEnv) as ReactEnv;
    envs.registerEnv(designReactEnv);

    return new DesignReactEnvMain(designReactEnv);
  }
}

DesignReactEnvAspect.addRuntime(DesignReactEnvMain);
