"use client";

import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { useFormState } from "react-dom";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

import { submit } from "./action";

const Form = () => {
  const [state, action] = useFormState(submit, undefined);
  const [guestName, setGuestName] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    if (state?.errors) {
      toast.error(state.errors);
    }

    if (state?.success) {
      toast.success(state.success);
      formRef.current?.reset();
    }

    if (state?.failure) {
      toast.error(state.failure);
      formRef.current?.reset();
    }
  }, [state]);

  useEffect(() => {
    setGuestName(searchParams.get("name") ?? "");
  }, [searchParams]);

  return (
    <form
      ref={formRef}
      action={action}
      className="flex flex-col gap-4 w-full font-mono"
    >
      <Input
        label="Nama Tamu"
        name="name"
        value={guestName}
        variant="bordered"
        onValueChange={setGuestName}
      />
      <Textarea label="Ucapan dan Harapan" name="message" variant="bordered" />
      <Select
        classNames={{
          listbox: "font-mono",
        }}
        defaultSelectedKeys={"1"}
        disallowEmptySelection={true}
        label="Status Kehadiran"
        name="present"
        variant="bordered"
      >
        <SelectItem key="1">Saya akan hadir</SelectItem>
        <SelectItem key="0">Tidak dapat hadir</SelectItem>
      </Select>
      <Button color="primary" size="lg" type="submit">
        Kirim
      </Button>
    </form>
  );
};

export default Form;
