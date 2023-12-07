import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("screen").width;
export const styles = StyleSheet.create({
  caroselImageStyle: (height) => ({
    width: width,
    resizeMode: "contain",
    height: height,
  }),
  previewImageContainerStyle: {
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  previewImageStyle: {
    width: width,
    resizeMode: "contain",
    height: 400,
  },
});
