import { injectable } from "inversify";
import "reflect-metadata";

import { AuthPort } from "../core";

@injectable()
export class AuthAdapter implements AuthPort {
  async login(): Promise<any> {
    return { status: "ok" };
  }
}
