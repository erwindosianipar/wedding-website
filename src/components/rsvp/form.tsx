"use client"

import { Button, Chip, Input, Select, SelectedItems, SelectItem, Textarea } from "@nextui-org/react"
import { useSearchParams } from "next/navigation"
import { useFormState } from "react-dom"
import { useEffect, useRef, useState } from "react"
import { submit } from "./action"
import toast from "react-hot-toast"

const Form = () => {
  const [state, action] = useFormState(submit, undefined)
  const [guestName, setGuestName] = useState<string>("")
  const formRef = useRef<HTMLFormElement>(null)

  const searchParams = useSearchParams()

  useEffect(() => {
    if (state?.errors) {
      toast.error(state.errors)
    }

    if (state?.success) {
      toast.success(state.success)
      formRef.current?.reset()
    }

    if (state?.failure) {
      toast.error(state.failure)
      formRef.current?.reset()
    }
  }, [state])

  useEffect(() => {
    setGuestName(searchParams.get("name"))
  }, [searchParams])

  return (
    <form
      ref={formRef}
      action={action}
      className="flex flex-col gap-4 w-full font-mono"
    >
      <Input
        name="name"
        label="Nama Tamu"
        value={guestName}
        onValueChange={setGuestName}
        variant="bordered"
      />
      <Textarea
        name="message"
        label="Ucapan dan Harapan"
        variant="bordered"
      />
      <Select
        name="present"
        label="Status Kehadiran"
        variant="bordered"
        defaultSelectedKeys={"1"}
        disallowEmptySelection={true}
        classNames={{
          listbox: "font-mono",
        }}
      >
        <SelectItem key="1">
          Saya akan hadir
        </SelectItem>
        <SelectItem key="0">
          Tidak dapat hadir
        </SelectItem>
      </Select>
      <Button type="submit" size="lg" color="primary">Kirim</Button>
    </form>
  )
}

export default Form
