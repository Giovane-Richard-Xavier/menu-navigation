import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FiMessageCircle } from "react-icons/fi";
import { IoCameraOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

export const listItems = [
  { icon: () => <IoHomeOutline />, label: "Home" },
  { icon: () => <FaRegUser />, label: "Profile" },
  { icon: () => <FiMessageCircle />, label: "Message" },
  { icon: () => <IoCameraOutline />, label: "Photos" },
  { icon: () => <IoSettingsOutline />, label: "Settings" },
];
