export class ContactName {
  readonly value: string;
  // Facebookの氏名登録参考（https://kyogom.com/tech/design/maxlength/）
  private readonly maxLength: number = 60;

  constructor(value: string) {
    if (!value) throw new Error("'message'が空です");
    if (value.length > this.maxLength)
      throw new Error(`'message'は${this.maxLength}文字までです`);

    this.value = value;
  }
}
