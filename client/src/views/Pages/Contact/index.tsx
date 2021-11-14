import React from "react";
import { useContact } from "./hooks";

export const Contact: React.FC = () => {
  const {
    name,
    email,
    message,
    handleNameChange,
    handleEmailChange,
    handleMessageChange,
    handleSubmitClick
  } = useContact();

  return (
    <div
      style={{
        margin: "0 auto",
        width: "50%",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <p>お名前</p>
      <input
        style={{
          margin: "10 0",
          height: 30,
          padding: 5
        }}
        type="text"
        name="name"
        value={name}
        onChange={e => handleNameChange(e.target.value)}
      />
      <p>メールアドレス</p>
      <input
        style={{
          margin: "10 0",
          height: 30,
          padding: 5
        }}
        type="email"
        name="email"
        value={email}
        onChange={e => handleEmailChange(e.target.value)}
      />
      <p>お問い合せ内容</p>
      <textarea
        style={{
          margin: "10 0",
          height: 100,
          padding: 5
        }}
        name="message"
        value={message}
        onChange={e => handleMessageChange(e.target.value)}
      />
      <button
        style={{
          marginTop: 10,
          cursor: "pointer"
        }}
        onClick={handleSubmitClick}
      >
        送信
      </button>
    </div>
  );
};
