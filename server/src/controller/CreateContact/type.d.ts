import { NextFunction, Request, Response } from "express";
import { JSONSchema7 } from "json-schema";

export namespace CreateContactControllerProps {
  export type Req = Request<
    {},
    {},
    {
      name: string;
      email: string;
      message: string;
    }
  >;

  export type Res = Response<{
    ok: boolean;
  }>;

  export interface Impl {
    schema: { body: JSONSchema7 };
    execute: (req: Req, res: Res, next: NextFunction) => Promise<Res | void>;
  }
}
