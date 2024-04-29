"use client";

import { SectionHeading } from "@/core/components/headings/section-heading/section-heading.component";
import { useResolve } from "@/core/dependency-injection/use-resolve.hook";
import { SendMessage } from "@/libs/contact/application/send-message";
import { Message } from "@/libs/contact/domain/message";
import { useState } from "react";

export const Contact = () => {
  const [useCaseService] = useResolve([SendMessage]);
  const [message, setMessage] = useState({
    text: "",
    from: "",
    subject: "",
    to: process.env.NEXT_PUBLIC_MY_EMAIL || "",
  });
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(message);
    await useCaseService.execute(Message.fromPrimitives(message));
  };
  return (
    <div>
      <SectionHeading>Contacta</SectionHeading>
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={message.from}
          onChange={(e) =>
            setMessage((prev) => ({ ...prev, from: e.target.value }))
          }
        />
        <label>Asunto</label>
        <input
          type="text"
          value={message.subject}
          onChange={(e) =>
            setMessage((prev) => ({ ...prev, subject: e.target.value }))
          }
        />
        <label>Message</label>
        <textarea
          value={message.text}
          onChange={(e) =>
            setMessage((prev) => ({ ...prev, text: e.target.value }))
          }
        />
        <input type="submit" value={"Enviar"} />
      </form>
    </div>
  );
};
