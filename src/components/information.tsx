"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Link from "next/link";

import { LatLngModel } from "@/types/models";
import Countdown from "@/components/countdown";
import MapTilerMap from "@/components/maptiler";

const Information = () => {
  const initialLat = -6.1848045;
  const initialLng = 106.8284265;

  const [center, setCenter] = useState<LatLngModel>({
    lat: initialLat,
    lng: initialLng,
  });

  return (
    <section
      className="flex flex-col gap-10 place-content-center items-center py-10"
      id="akad"
    >
      <Image
        alt=""
        classNames={{
          img: "max-md:w-8/12",
          wrapper: "flex place-content-center items-center",
        }}
        radius="none"
        src="/images/separator-001.svg"
      />
      <div className="font-serif text-4xl max-md:text-3xl">Akad & Resepsi</div>
      <Countdown launchDate={process.env.NEXT_PUBLIC_MARRIAGE_DATE as string} />
      <Button
        className="font-mono"
        color="primary"
        size="lg"
        startContent={<Icon fontSize={22} icon="logos:google-calendar" />}
        variant="flat"
      >
        Tambahkan ke Google Calendar
      </Button>
      <div className="container-md flex max-md:flex-col gap-4">
        <Card className="w-full font-mono">
          <CardHeader className="pl-4 justify-between items-center">
            <span className="font-bold">Akad Nikah</span>
            <Image alt="" className="w-8" src="/images/flower-005.webp" />
          </CardHeader>
          <Divider />
          <CardBody className="p-4 gap-2">
            <div className="text-xl">10:00 - 12:00</div>
            <div className="text-foreground-500">15 September 2024</div>
            <div>
              Perumahan Lipsum, Jl. Lorem Ipsum No. 1A, RT00/RW00, Kec. Dolor,
              Kab. Sit Amet.
            </div>
          </CardBody>
          <CardFooter>
            <Button
              as={Link}
              className="w-full"
              color="primary"
              href="/"
              variant="flat"
            >
              Lihat di Google Maps
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full font-mono">
          <CardHeader className="pl-4 justify-between items-center">
            <span className="font-bold">Resepsi Pernikahan</span>
            <Image alt="" className="w-8" src="/images/flower-005.webp" />
          </CardHeader>
          <Divider />
          <CardBody className="p-4 gap-2">
            <div className="text-xl">13:00 - Selesai</div>
            <div className="text-foreground-500">15 September 2024</div>
            <div>
              Perumahan Lipsum, Jl. Lorem Ipsum No. 1A, RT00/RW00, Kec. Dolor,
              Kab. Sit Amet.
            </div>
          </CardBody>
          <CardFooter>
            <Button
              as={Link}
              className="w-full"
              color="primary"
              href="/"
              variant="flat"
            >
              Lihat di Google Maps
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="container-md">
        <Card className="relative min-h-96 p-2 font-mono">
          <div className="flex">
            <div className="flex flex-col gap-2">
              <div className="flex">
                <Card
                  isPressable
                  className="z-30"
                  radius="sm"
                  onPress={() => {
                    setCenter({
                      lat: initialLat,
                      lng: initialLng,
                    });
                  }}
                >
                  <CardBody className="flex-row items-center gap-2 p-2 px-3">
                    <Icon fontSize={18} icon="fxemoji:housebuilding" />
                    <span className="text-sm">Lokasi Akad</span>
                  </CardBody>
                </Card>
              </div>
              <div className="flex">
                <Card
                  isPressable
                  className="z-30"
                  radius="sm"
                  onPress={() => {
                    setCenter({
                      lat: -6.1220344,
                      lng: 106.8448121,
                    });
                  }}
                >
                  <CardBody className="flex-row items-center gap-2 p-2 px-3">
                    <Icon fontSize={18} icon="fxemoji:housebuilding" />
                    <span className="text-sm">Lokasi Resepsi</span>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
          <MapTilerMap
            center={center}
            isInteractive={true}
            pitch={80}
            zoom={18}
          />
        </Card>
      </div>
    </section>
  );
};

export default Information;
