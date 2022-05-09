import { IUserType } from "./user";

export interface IMessageType {
  id: number;
  text: string;
  user: IUserType;
  time: string;
}

export interface IInputMessageForm {
  sendMessage: (text: string) => void;
}

export interface IInputEmoticon {
  addEmoticonMessage: (emo: string) => void;
}

export interface IEmoticonPopover extends IInputEmoticon {
  handlePopover: () => void;
}

export interface IChatListItem {
  user: IUserType;
  messages: IMessageType[];
}

export interface IMessageChat {
  messages: IMessageType[];
  toggleChat: (idx: number) => void;
}

export interface IList {
  link: number;
  img: string;
  title: string;
  subTitle: string;
}
