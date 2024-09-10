import { Image } from "@nextui-org/react";
import clsx from "clsx";

export type WallpaperProps = {
  children: React.ReactNode;
  background?: string;
  height?: string;
  isUpperOrnamenHidden?: boolean;
  isLowerOrnamenHidden?: boolean;
};

const Wallpaper = ({ props }: { props: WallpaperProps }) => {
  return (
    <div
      className={clsx(
        "relative w-full flex place-content-center items-center",
        props.background ?? "bg-white",
        props.height ?? "h-full",
      )}
    >
      <div
        className={clsx("absolute top-0 left-0 z-10", {
          hidden: props.isUpperOrnamenHidden,
        })}
      >
        <Image
          alt=""
          className="w-52 max-md:w-20"
          radius="none"
          src="/images/flower-001.webp"
        />
      </div>
      <div
        className={clsx("absolute top-0 right-0 z-10", {
          hidden: props.isUpperOrnamenHidden,
        })}
      >
        <Image
          alt=""
          className="w-52 max-md:w-20 -scale-x-[1]"
          radius="none"
          src="/images/flower-001.webp"
        />
      </div>
      <div className="static flex place-content-center w-full z-20">
        {props.children}
      </div>
      <div
        className={clsx("absolute bottom-0 left-0 z-10", {
          hidden: props.isLowerOrnamenHidden,
        })}
      >
        <Image
          alt=""
          className="w-52 max-md:w-20"
          radius="none"
          src="/images/flower-002.webp"
        />
      </div>
      <div
        className={clsx("absolute bottom-0 right-0 z-10", {
          hidden: props.isLowerOrnamenHidden,
        })}
      >
        <Image
          alt=""
          className="w-52 max-md:w-20 -scale-x-[1]"
          radius="none"
          src="/images/flower-002.webp"
        />
      </div>
    </div>
  );
};

export default Wallpaper;
