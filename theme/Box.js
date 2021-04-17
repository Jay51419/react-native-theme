import React,{useState} from "react";
import { View, Dimensions } from "react-native";
import { lightColors,darkColors } from "./index";
export default function (props) {
  const  [colors, setColor] = useState(lightColors) 
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const styles = {};
  styles["flex"] = props["flex"];
  styles["zIndex"] = props["z"];
  styles["width"] = props["w"];
  styles["height"] = props["h"];
  styles["top"] = props["t"];
  styles["right"] = props["r"];
  styles["bottom"] = props["b"];
  styles["left"] = props["l"];
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
  styles["borderRadius"] = props["rounded"];
  styles["borderTopRightRadius"] = props["rounded-tr"];
  styles["borderTopLeftRadius"] = props["rounded-tl"];
  styles["borderBottomRightRadius"] = props["rounded-br"];
  styles["borderBottomLeftRadius"] = props["rounded-bl"];
  if (props["primary"]) styles["backgroundColor"] = colors.primary;
  if (props["secondary"]) styles["backgroundColor"] = colors.secondary;
  if (props["tertiary"]) styles["backgroundColor"] = colors.tertiary;
  if (props["gray0"]) styles["backgroundColor"] = colors.gray0;
  if (props["gray1"]) styles["backgroundColor"] = colors.gray1;
  if (props["gray2"]) styles["backgroundColor"] = colors.gray2;
  if (props["gray3"]) styles["backgroundColor"] = colors.gray3;
  if (props["gray4"]) styles["backgroundColor"] = colors.gray4;
  if (props["gray5"]) styles["backgroundColor"] = colors.gray5;
  if (props["gray6"]) styles["backgroundColor"] = colors.gray6;
  if (props["absolute"]) styles["position"] = "absolute";
  if (props["relative"]) styles["position"] = "relative";
  if (props["justify-start"]) styles["justifyContent"] = "flex-start";
  if (props["justify-end"]) styles["justifyContent"] = "flex-end";
  if (props["justify-center"]) styles["justifyContent"] = "center";
  if (props["justify-between"]) styles["justifyContent"] = "space-between";
  if (props["justify-evenly"]) styles["justifyContent"] = "space-evenly";
  if (props["justify-around"]) styles["justifyContent"] = "space-around";
  if (props["align-start"]) styles["alignItems"] = "flex-start";
  if (props["align-end"]) styles["alignItems"] = "flex-end";
  if (props["align-center"]) styles["alignItems"] = "center";
  if (props["align-stretch"]) styles["alignItems"] = "stretch";
  if (props["align-baseline"]) styles["alignItems"] = "baseline";

  if (props["w-screen"]) styles["width"] = screenWidth;
  if (props["h-screen"]) styles["height"] = screenHeight;
  if (props["w-window"]) styles["width"] = windowWidth;
  if (props["h-window"]) styles["height"] = windowHeight;
  if (props["h-full"]) styles["height"] = "100%";
  if (props["w-full"]) styles["height"] = "100%";
  if (props["row"]) styles["flexDirection"] = "row";
  if (props["col"]) styles["flexDirection"] = "column";
  if (props["row-reverse"]) styles["flexDirection"] = "row-reverse";
  if (props["col-reverse"]) styles["flexDirection"] = "column-reverse";
  return (
    <View {...props} style={[{ ...styles }, props.style]}>
      {props.children}
    </View>
  );
}
