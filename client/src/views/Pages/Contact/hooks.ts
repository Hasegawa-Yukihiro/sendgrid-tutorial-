import { useCallback, useState } from "react";

export const useContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  return {
    name,
    email,
    message,
    handleNameChange,
    handleEmailChange,
    handleMessageChange
  };
};
