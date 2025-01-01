import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  Timeline,
} from "./MsgTypes";

const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el, ind) => {
          switch (el.type) {
            case "divider":
              // Timeline
              return <Timeline key={ind} el={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  //img msg
                  return <MediaMsg key={ind} el={el} />;
                case "doc":
                  //Docs msg
                  return <DocMsg key={ind} el={el} />;
                case "link":
                  //Link msg
                  return <LinkMsg key={ind} el={el} />;
                case "reply":
                  //Reply msg
                  return <ReplyMsg key={ind} el={el} />;

                default:
                  //text msg
                  return <TextMsg key={ind} el={el} />;
              }

            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
