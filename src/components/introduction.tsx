"use client"

import { Button, Card, CardBody, CardFooter, Divider, Image, Input } from "@nextui-org/react"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import Polaroid from "./polaroid"
import moment from "moment"
import toast from "react-hot-toast"
import { revalidatePath } from "next/cache"

const GuestForm = () => {
  const [guestName, setGuestName] = useState<string>()

  const router = useRouter()
  return (
    <form className="flex gap-4 w-full font-mono">
      <Input
        placeholder="Masukkan Nama Tamu"
        onValueChange={setGuestName}
      />
      <Button
        variant="flat"
        onPress={() => {
          toast.success("Nama tamu berhasil disimpan")
          router.replace(`?name=${guestName}`)
        }}
      >
        Simpan
      </Button>
    </form>
  )
}

const Introduction = () => {
  const searchParams = useSearchParams()
  const guestName = searchParams.get("name")
  const marriageDate = process.env.NEXT_PUBLIC_MARRIAGE_DATE

  return (
    <div className="flex flex-col items-center gap-12 w-full">
      <section className="container-xs flex flex-col gap-6">
        <div className="flex flex-col gap-4 w-full items-center">
          <Image alt="" src="/images/separator-003.svg" radius="none" classNames={{
            img: "max-md:w-8/12",
            wrapper: "flex place-content-center items-center"
          }} />
          <div className="font-sans text-2xl text-foreground-500">Undangan Pernikahan</div>
          <div className="flex flex-col items-center">
            <div className="font-bold text-5xl max-md:text-4xl">{process.env.NEXT_PUBLIC_LHS_FULL_NAME}</div>
            <div className="text-3xl">Bersama dengan</div>
            <div className="font-bold text-5xl max-md:text-4xl">{process.env.NEXT_PUBLIC_RHS_FULL_NAME}</div>
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-center font-mono text-md uppercase">
          <div>{moment(marriageDate).format("DD")}</div>
          <Divider orientation="vertical" className="w-[1px] h-6 bg-black" />
          <div>{moment(marriageDate).format("MMMM")}</div>
          <Divider orientation="vertical" className="w-[1px] h-6 bg-black" />
          <div>{moment(marriageDate).format("YYYY")}</div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="text-center font-serif">
            Kami mengundang bapak/ibu/saudara/saudari:
          </div>
          <Card>
            <CardBody className="text-lg items-center font-serif p-4">
              {guestName ?? <GuestForm />}
            </CardBody>
            <Divider />
            <CardFooter className="px-8 justify-center">
              <div className="text-foreground-400 text-sm max-md:text-xs font-mono">
                Maaf apabila ada kesalahan penulisan nama & gelar.
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>
      <Polaroid />
    </div>
  )
}

export default Introduction
