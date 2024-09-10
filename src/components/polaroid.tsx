import { Image } from "@nextui-org/image";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";

import useIsMounted from "@/hooks/use-is-mounted";

const Polaroid = () => {
  if (!useIsMounted()) return;

  return (
    <section className="container-md flex place-content-center">
      <div className="flex gap-2">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <motion.div
              key={index}
              animate={{ rotate: Math.random() * 30 - 15 }}
              className={clsx(
                "drop-shadow border-8 border-b-[10px] bg-white border-white",
              )}
              whileHover={{ rotate: 0, zIndex: 20, cursor: "zoom-in" }}
              whileTap={{ scale: 2, zIndex: 30 }}
            >
              <Image
                alt=""
                className="size-28 min-w-28 object-cover"
                radius="none"
                src={`https://picsum.photos/200?random=${uuidv4()}`}
              />
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default Polaroid;
