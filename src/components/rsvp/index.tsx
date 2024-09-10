import { Image } from "@nextui-org/react";
import { sql } from "@vercel/postgres";

import Form from "./form";
import Message from "./message";

import { GuestbookModel } from "@/types/models";

const getMessages = async (): Promise<GuestbookModel[]> => {
  try {
    const res = await sql`
      SELECT * FROM guestbook_wedding_001
      ORDER BY created_at DESC
    `;

    return res.rows as GuestbookModel[];
  } catch (error) {
    throw error;
  }
};

const RSVP = async () => {
  const messages = await getMessages();

  return (
    <section className="flex place-content-center py-10 w-full" id="rsvp">
      <div className="flex flex-col gap-8 items-center w-full">
        <div className="container-sm flex flex-col gap-10 items-center">
          <Image
            alt=""
            classNames={{
              img: "max-md:w-8/12",
              wrapper: "flex place-content-center items-center",
            }}
            radius="none"
            src="/images/separator-001.svg"
          />
          <div className="font-serif text-4xl max-md:text-3xl">
            Ucapan & RSVP
          </div>
          <div className="font-mono flex text-center">
            Isi suatu ucapan berupa harapan maupun doa untuk kedua mempelai.
            Formulir di bawah juga disertai dengan status kehadiran untuk
            pendataan tamu undangan.
          </div>
        </div>
        <div className="container-xs">
          <Form />
        </div>
        <div className="container-xl grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-4 font-mono">
          {messages.map((item) => (
            <Message key={item.id} props={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RSVP;
