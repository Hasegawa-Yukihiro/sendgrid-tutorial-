import { useCallback, useState } from "react";
import { CreateContactAPI } from "~api/Contact/CreateContact/";

const createContactApi = new CreateContactAPI();

export const useContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  /** 名前のチェンジハンドラ */
  const handleNameChange = useCallback((name: string) => {
    setName(name);
  }, []);

  /** メールアドレスのチェンジハンドラ */
  const handleEmailChange = useCallback((email: string) => {
    setEmail(email);
  }, []);

  /** 問い合わせ内容のチェンジハンドラ */
  const handleMessageChange = useCallback((message: string) => {
    setMessage(message);
  }, []);

  /** 送信ボタン押下ハンドラ */
  const handleSubmitClick = useCallback(async () => {
    const success = await createContactApi.handle({
      body: {
        name,
        email,
        message
      }
    });
    setSuccess(success.ok);
  }, [email, message, name]);

  return {
    name,
    email,
    message,
    success,
    handleNameChange,
    handleEmailChange,
    handleMessageChange,
    handleSubmitClick
  };
};
