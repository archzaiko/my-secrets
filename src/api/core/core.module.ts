import { Container, ContainerModule } from "inversify";
import { AuthPort } from "./auth/auth.port";

export const coreInjectionTokens = {
  AuthPort: Symbol.for("AuthPort"),
};

export class CoreModule {
  providers: Container = new Container();

  register(providers: ContainerModule[]): CoreModule {
    this.providers.load(...providers);
    return this;
  }

  getAuthPort(): AuthPort {
    return this.providers.get(coreInjectionTokens.AuthPort);
  }
}
