import { APIBase } from "~src/api/APIBase";
import {
  CreateContactAPIImplements,
  CreateContactRequest,
  CreateContactRequestBody,
  CreateContactResponse
} from "./type";

export class CreateContact
  extends APIBase
  implements CreateContactAPIImplements
{
  constructor() {
    super("SENDGRID_TUTORIAL_URL");
  }

  async handle(request: CreateContactRequest): Promise<CreateContactResponse> {
    const response = await this.post<
      CreateContactRequestBody,
      CreateContactResponse
    >("/contact", request.body);

    return response.data;
  }
}
