import moment from "moment";
import { Card, CardBody, Chip, User } from "@nextui-org/react";

import { GuestbookModel } from "@/types/models";

const Message = ({ props }: { props: GuestbookModel }) => {
  return (
    <Card className="rounded-3xl">
      <CardBody className="gap-4 p-4">
        <div className="flex justify-between">
          <User
            avatarProps={{
              size: "sm",
            }}
            description={moment(props.created_at).format(
              "DD MMMM YYYY | HH:mm",
            )}
            name={props.name}
          />
          <Chip
            color={props.present ? "primary" : "default"}
            size="sm"
            variant="flat"
          >
            {props.present ? "Akan Hadir" : "Tidak Hadir"}
          </Chip>
        </div>
        <div className="text-sm">{props.message}</div>
      </CardBody>
    </Card>
  );
};

export default Message;
