export class ContactMessage {
  readonly value: string;
  private readonly maxLength: number = 300;

  constructor(value: string) {
    if (!value) throw new Error("'message'が空です");
    if (value.length > this.maxLength)
      throw new Error(`'message'は${this.maxLength}文字までです`);

    this.value = value;
  }
}
