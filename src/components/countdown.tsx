"use client";

import useIsMounted from "@/hooks/use-is-mounted";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface TimeCount {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const getTimeLeft = (expiry: string): TimeCount => {
  let days = "0";
  let hours = "0";
  let minutes = "0";
  let seconds = "0";

  const difference = new Date(expiry).getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const d = Math.floor((difference / (1000 * 60 * 60 * 24)));
  const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const m = Math.floor((difference / (1000 * 60)) % 60);
  const s = Math.floor((difference / 1000) % 60);

  days = d < 10 ? `0${d}` : d.toString();
  hours = h < 10 ? `0${h}` : h.toString();
  minutes = m < 10 ? `0${m}` : m.toString();
  seconds = s < 10 ? `0${s}` : s.toString();

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

const Countdown = ({ launchDate }: { launchDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeCount>(getTimeLeft(launchDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(launchDate));
    }, 1000);
  }, [launchDate]);

  if (!useIsMounted()) return <></>

  return (
    <div className="container-md flex justify-center items-center gap-4 font-serif">
      <Image alt="" src="/images/flower-004.webp" className="w-16 max-lg:hidden" radius="none" />
      <Card>
        <CardBody className="text-2xl items-center">
          {timeLeft.days}
        </CardBody>
        <Image alt="" src="/images/separator-001.svg" className="w-24" />
        <CardFooter className="uppercase justify-center font-mono text-xs">
          HARI
        </CardFooter>
      </Card>
      <Card>
        <CardBody className="text-2xl items-center">
          {timeLeft.hours}
        </CardBody>
        <Image alt="" src="/images/separator-001.svg" className="w-24" />
        <CardFooter className="uppercase justify-center font-mono text-xs">
          JAM
        </CardFooter>
      </Card>
      <Card>
        <CardBody className="text-2xl items-center">
          {timeLeft.minutes}
        </CardBody>
        <Image alt="" src="/images/separator-001.svg" className="w-24" />
        <CardFooter className="uppercase justify-center font-mono text-xs">
          MENIT
        </CardFooter>
      </Card>
      <Card>
        <CardBody className="text-2xl items-center">
          {timeLeft.seconds}
        </CardBody>
        <Image alt="" src="/images/separator-001.svg" className="w-24" />
        <CardFooter className="uppercase justify-center font-mono text-xs">
          DETIK
        </CardFooter>
      </Card>
      <Image alt="" src="/images/flower-004.webp" className="w-16 max-lg:hidden -scale-x-[1]" radius="none" />
    </div>
  );
};

export default Countdown;
