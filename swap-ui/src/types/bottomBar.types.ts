import { SvgIcon } from "./global.types";

export type BottomBarItem = {
  path: string;
  name: string;
  icon: SvgIcon;
  authenticated?: boolean;
};
