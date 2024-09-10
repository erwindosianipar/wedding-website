import { GuestbookModel } from "@/types/models"
import { Card, CardBody, Chip, User } from "@nextui-org/react"
import moment from "moment"

const Message = ({ props }: { props: GuestbookModel }) => {
  return (
    <Card className="rounded-3xl">
      <CardBody className="gap-4 p-4">
        <div className="flex justify-between">
          <User
            avatarProps={{
              size: "sm",
            }}
            name={props.name}
            description={moment(props.created_at).format("DD MMMM YYYY | HH:mm")}
          />
          <Chip
            color={props.present ? "primary" : "default"}
            variant="flat"
            size="sm"
          >
            {props.present ? "Akan Hadir" : "Tidak Hadir"}
          </Chip>
        </div>
        <div className="text-sm">
          {props.message}
        </div>
      </CardBody>
    </Card>
  )
}

export default Message