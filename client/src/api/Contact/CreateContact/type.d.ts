export interface CreateContactAPIImplements {
  handle: (request: CreateContactRequest) => Promise<CreateContactResponse>;
}

export class CreateContactRequest {
  body: CreateContactRequestBody;

  constructor(body: CreateContactRequestBody) {
    this.body = body;
  }
}

export interface CreateContactRequestBody {
  name: string;
  email: string;
  message: string;
}

export class CreateContactResponse {
  ok: boolean;

  constructor(ok: boolean) {
    this.ok = ok;
  }
}
