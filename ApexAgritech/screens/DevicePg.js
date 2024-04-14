import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
  Text,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const FrameDevicePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameDevicePage}>
      <View style={[styles.devicePage, styles.devicePageLayout]}>
        <View style={[styles.devicePage, styles.devicePageLayout]}>
          <View
            style={[styles.iphone1415ProMax1Child, styles.devicePageLayout]}
          />
          <View style={[styles.iphone1415ProMax1Item, styles.iphone1415Bg]} />
          <TouchableHighlight
            style={[styles.burgerMenu, styles.burgerMenuPosition]}
            underlayColor="#fff"
            onPress={() => navigation.navigate("FrameMenuLayout")}
          >
            <View style={styles.lineParentPosition}>
              <View style={[styles.groupChild, styles.groupPosition]} />
              <View style={[styles.groupItem, styles.groupPosition]} />
              <View style={[styles.groupInner, styles.groupPosition]} />
            </View>
          </TouchableHighlight>
          <Image
            style={[styles.layer1Icon, styles.burgerMenuPosition]}
            contentFit="cover"
            source={require("../assets/apex-title.png")}
          />
          <View
            style={[styles.iphone1415ProMax1Inner, styles.rectangleViewLayout]}
          />
          <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
          <Text style={styles.coop1}>Coop #1</Text>
          <View style={[styles.iphone1415ProMax1Child1, styles.iphone1415Bg]} />
          <Text style={styles.text}>55°</Text>
          <Pressable
            style={[styles.component2Wrapper, styles.wrapperLayout]}
            hightemp="+1"
          >
            <View style={[styles.component2, styles.wrapperLayout]}>
              <View style={styles.component2Child} />
              <Image
                style={[styles.component2Item, styles.itemLayout]}
                contentFit="cover"
                source={require("../assets/line-4.png")}
              />
            </View>
          </Pressable>
          <Pressable
            style={[styles.component3Wrapper, styles.wrapperLayout]}
            lowtemp="-1"
          >
            <View style={[styles.component2, styles.wrapperLayout]}>
              <View style={styles.component2Child} />
              <Image
                style={[styles.component3Item, styles.itemLayout]}
                contentFit="cover"
                source={require("../assets/line-5.png")}
              />
            </View>
          </Pressable>
          <Text style={[styles.waterLevel, styles.text1Typo]}>Water Level</Text>
          <View style={styles.iphone1415ProMax1Child2} />
          <Text style={[styles.text1, styles.text1Typo]}>6.2</Text>
          <Image
            style={styles.layer1Icon1}
            contentFit="cover"
            source={require("../assets/logo.png")}
          />
          <TouchableOpacity
            style={styles.component1}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("FrameEditDevices")}
          >
            <View style={[styles.component1Child, styles.lineParentPosition]} />
            <Text style={styles.edit}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  devicePageLayout: {
    width: 430,
    left: 0,
  },
  iphone1415Bg: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  burgerMenuPosition: {
    top: 73,
    position: "absolute",
  },
  groupPosition: {
    borderTopWidth: 7,
    borderColor: Color.colorDarkorange,
    borderStyle: "solid",
    left: "-8.54%",
    right: "-8.54%",
    width: "117.07%",
    height: "23.33%",
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 145,
    backgroundColor: Color.colorSteelblue_100,
    position: "absolute",
  },
  wrapperLayout: {
    height: 54,
    width: 106,
    position: "absolute",
  },
  itemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "50.94%",
    right: "48.77%",
    width: "0.28%",
    height: "74.07%",
    overflow: "hidden",
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  lineParentPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iphone1415ProMax1Child: {
    backgroundColor: Color.colorLightsteelblue,
    top: 0,
    width: 430,
    height: 932,
    position: "absolute",
  },
  iphone1415ProMax1Item: {
    width: 436,
    height: 120,
    left: 0,
    top: 0,
  },
  groupChild: {
    top: "-11.67%",
    bottom: "88.33%",
  },
  groupItem: {
    top: "38.33%",
    bottom: "38.33%",
  },
  groupInner: {
    top: "88.33%",
    bottom: "-11.67%",
  },
  burgerMenu: {
    left: 20,
    width: 41,
    height: 30,
  },
  layer1Icon: {
    left: 70,
    width: 342,
    height: 27,
    overflow: "hidden",
  },
  iphone1415ProMax1Inner: {
    top: 188,
    left: -6,
    width: 439,
  },
  rectangleView: {
    top: 605,
    width: 430,
    left: 0,
  },
  coop1: {
    top: 215,
    left: 24,
    width: 236,
    height: 72,
    textAlign: "left",
    fontSize: FontSize.size_45xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.k2DRegular,
    position: "absolute",
  },
  iphone1415ProMax1Child1: {
    top: 365,
    left: 33,
    width: 368,
    height: 202,
  },
  text: {
    top: 386,
    left: 52,
    fontSize: 115,
    width: 227,
    height: 161,
    color: Color.colorDarkorange,
    textAlign: "left",
    fontFamily: FontFamily.k2DRegular,
    position: "absolute",
  },
  component2Child: {
    backgroundColor: Color.colorSteelblue_100,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  component2Item: {
    top: "14.81%",
    bottom: "11.11%",
  },
  component2: {
    left: 0,
    top: 0,
  },
  component2Wrapper: {
    top: 412,
    left: 260,
    height: 54,
  },
  component3Item: {
    top: "9.26%",
    bottom: "16.67%",
  },
  component3Wrapper: {
    top: 480,
    left: 260,
    height: 54,
  },
  waterLevel: {
    top: 645,
    left: 30,
    fontSize: FontSize.size_21xl,
    width: 230,
    height: 53,
    color: Color.colorWhite,
  },
  iphone1415ProMax1Child2: {
    top: 623,
    left: 272,
    backgroundColor: Color.colorAliceblue,
    width: 129,
    height: 97,
    position: "absolute",
  },
  text1: {
    top: 631,
    left: 285,
    height: 65,
    width: 106,
    fontWeight: "500",
    color: Color.colorDarkorange,
    fontSize: FontSize.size_45xl,
  },
  layer1Icon1: {
    top: 788,
    left: 149,
    width: 128,
    height: 103,
    overflow: "hidden",
    position: "absolute",
  },
  component1Child: {
    backgroundColor: Color.colorDarkorange,
  },
  edit: {
    height: "56.76%",
    width: "39.13%",
    top: "10.81%",
    left: "30.43%",
    fontSize: FontSize.size_xl,
    letterSpacing: 1.2,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.k2DRegular,
    position: "absolute",
  },
  component1: {
    top: 242,
    left: 286,
    width: 115,
    height: 37,
    position: "absolute",
  },
  devicePage: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    position: "absolute",
    top: 0,
    width: 430,
    height: 932,
  },
  frameDevicePage: {
    flex: 1,
    height: 932,
    width: "100%",
  },
});

export default FrameDevicePage;
