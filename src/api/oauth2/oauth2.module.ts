import { ContainerModule, interfaces } from "inversify";

import { AuthPort } from "../core";
import { coreInjectionTokens } from "../core/core.module";
import { AuthAdapter } from "./auth.adapter";

export class Oauth2Module {
  providers: ContainerModule;

  constructor() {
    this.providers = new ContainerModule((bind: interfaces.Bind) => {
      bind<AuthPort>(coreInjectionTokens.AuthPort).to(AuthAdapter);
    });
  }
}
