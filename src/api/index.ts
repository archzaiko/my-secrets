import { AuthPort } from "./core";
import { CoreModule } from "./core/core.module";
import { Oauth2Module } from "./oauth2/oauth2.module";

interface Api {
  authPort: AuthPort;
}

export function getApi(): Api {
  const oauth2: Oauth2Module = new Oauth2Module();
  const core: CoreModule = new CoreModule().register([oauth2.providers]);
  return { authPort: core.getAuthPort() };
}
