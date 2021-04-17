import React,{useState} from "react";
import {Text} from "react-native"
import { lightColors,darkColors, fontSizes, fontWeights } from "./index";

export default function (props) {
  const  [colors, setColor] = useState(lightColors) 

  const styles = {};
  styles["margin"] = props["m"];
  styles["marginTop"] = props["mt"];
  styles["marginRight"] = props["mr"];
  styles["marginBottom"] = props["mb"];
  styles["marginLeft"] = props["ml"];
  styles["marginVertical"] = props["my"];
  styles["marginHorizontal"] = props["mx"];
  styles["padding"] = props["p"];
  styles["paddingTop"] = props["pt"];
  styles["paddingRight"] = props["pr"];
  styles["paddingBottom"] = props["pb"];
  styles["paddingLeft"] = props["pl"];
  styles["paddingVertical"] = props["py"];
  styles["paddingHorizontal"] = props["px"];
  styles["textDecorationLine"] = props["decoration"];
  if (props["primary"]) styles["color"] = colors.primary;
  if (props["secondary"]) styles["color"] = colors.secondary;
  if (props["tertiary"]) styles["color"] = colors.tertiary;
  if (props["gray0"]) styles["color"] = colors.gray0;
  if (props["gray1"]) styles["color"] = colors.gray1;
  if (props["gray2"]) styles["color"] = colors.gray2;
  if (props["gray3"]) styles["color"] = colors.gray3;
  if (props["gray4"]) styles["color"] = colors.gray4;
  if (props["gray5"]) styles["color"] = colors.gray5;
  if (props["gray6"]) styles["color"] = colors.gray6;
  if (props["xs"]) styles["fontSize"] = fontSizes.xs;
  if (props["sm"]) styles["fontSize"] = fontSizes.sm;
  if (props["md"]) styles["fontSize"] = fontSizes.md;
  if (props["lg"]) styles["fontSize"] = fontSizes.lg;
  if (props["thin"]) styles["fontWeight"] = fontWeights.thin;
  if (props["extraLight"]) styles["fontWeight"] = fontWeights.extraLight;
  if (props["regular"]) styles["fontWeight"] = fontWeights.regular;
  if (props["medium"]) styles["fontWeight"] = fontWeights.medium;
  if (props["semibold"]) styles["fontWeight"] = fontWeights.semibold;
  if (props["bold"]) styles["fontWeight"] = fontWeights.bold;
  if (props["extraBold"]) styles["fontWeight"] = fontWeights.extraBold;
  if (props["auto"]) styles["textAlign"] = "auto";
  if (props["justify"]) styles["textAlign"] = "justify";
  if (props["center"]) styles["textAlign"] = "center";
  if (props["left"]) styles["textAlign"] = "left";
  if (props["right"]) styles["textAlign"] = "right";

  return (
    <Text {...props} style={[{ ...styles }, props.style]}>
      {props.children}
    </Text>
  );
}
