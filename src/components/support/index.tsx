"use client"

import { Icon } from "@iconify/react"
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image } from "@nextui-org/react"
import toast from "react-hot-toast"

const Support = () => {
  const accountNumber = "8090138651"
  const address = "Perumahan Lipsum, Jl. Lorem Ipsum No. 1A, RT00/RW00, Kec. Dolor, Kab. Sit Amet"

  return (
    <section id="support" className="flex flex-col gap-10 place-content-center items-center py-10">
      <div className="container-sm flex flex-col gap-4 items-center">
        <Image alt="" src="/images/separator-001.svg" radius="none" classNames={{
          img: "max-md:w-8/12",
          wrapper: "flex place-content-center items-center"
        }} />
        <div className="font-serif text-4xl">Hadiah Pernikahan</div>
        <div className="font-mono flex text-center">
          Doa restu bapak/ibu/saudara/saudari merupakan karunia yang sangat berarti bagi kami. Jika memberi adalah ungkapan tanda kasih, maka dapat memberi melalui:
        </div>
      </div>
      <div className="container-md flex max-md:flex-col gap-4 font-mono">
        <Card className="w-full">
          <CardHeader className="p-4 justify-between">
            <span>Transfer Rekening</span>
            <Icon icon="wpf:banknotes" fontSize={24} className="text-foreground-400" />
          </CardHeader>
          <Divider />
          <CardBody className="p-4 flex-row gap-4 justify-between items-center">
            <div className="flex flex-col">
              <span>Bank Central Asia</span>
              <span>{accountNumber}</span>
              <span>Romeo Iwak Asin</span>
            </div>
          </CardBody>
          <CardFooter>
            <Button
              color="primary"
              variant="flat"
              className="w-full"
              onPress={() => {
                navigator.clipboard.writeText(accountNumber)
                toast.success("Nomor rekening berhasil disalin")
              }}
            >
              Salin Nomor Rekening
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader className="p-4 justify-between">
            <span>Pengiriman Kado</span>
            <Icon icon="el:gift" fontSize={24} className="text-foreground-400" />
          </CardHeader>
          <Divider />
          <CardBody className="p-4">
            <span>Juliete Cuci Baju</span>
            <span>{address}</span>
          </CardBody>
          <CardFooter>
            <Button
              color="primary"
              variant="flat"
              className="w-full"
              onPress={() => {
                navigator.clipboard.writeText(address)
                toast.success("Alamat lengkap berhasil disalin")
              }}
            >
              Salin Alamat Lengkap
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

export default Support
