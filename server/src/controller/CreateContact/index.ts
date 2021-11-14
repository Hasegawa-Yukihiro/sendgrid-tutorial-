import { NextFunction } from "express";
import { JSONSchema7 } from "json-schema";
import { CreateContactCommand } from "~application/Contact/CreateContactService/CreateContactCommand";
import applicationService from "~factory/ApplicationService";
import { CreateContactControllerProps } from "./type";

export class CreateContactController
  implements CreateContactControllerProps.Impl
{
  readonly schema: { body: JSONSchema7 } = {
    body: {
      type: "object",
      required: [],
      properties: {
        name: { type: "string" },
        email: { type: "string" },
        message: { type: "string" }
      },
      additionalProperties: false
    }
  };

  execute = async (
    req: CreateContactControllerProps.Req,
    res: CreateContactControllerProps.Res,
    next: NextFunction
  ) => {
    try {
      const command: CreateContactCommand = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
      };

      await applicationService.createContact.handle(command);

      return res.json({ ok: true });
    } catch (error) {
      next(error);
    }
  };
}
