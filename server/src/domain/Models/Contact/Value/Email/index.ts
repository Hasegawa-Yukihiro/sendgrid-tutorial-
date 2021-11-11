export class ContactEmail {
  readonly value: string;
  private readonly reg: RegExp = new RegExp(
    "[a-zA-Z0-9]+[a-zA-Z0-9._-]*@[a-zA-Z0-9_-]+[a-zA-Z0-9._-]+"
  );
  private readonly maxLength = 100;

  constructor(value: string) {
    if (!value) throw new Error("'email'が空です");
    if (value.length > this.maxLength) throw new Error("100文字までです");
    if (!this.reg.test(value)) throw new Error("不適切なメールアドレスです");

    this.value = value;
  }
}
