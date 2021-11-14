import React from "react";

export const Contact = () => {
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
      />
      <p>お問い合せ内容</p>
      <textarea
        style={{
          margin: "10 0",
          height: 100,
          padding: 5
        }}
        name="message"
      />
    </div>
  );
};
