import { Dimensions } from "react-native";

const { width: DEVICE_WIDTH } = Dimensions.get('screen');

export const TOTAL_WIDTH = DEVICE_WIDTH * 0.80;
export const SPACER = (DEVICE_WIDTH - TOTAL_WIDTH) / 2;
