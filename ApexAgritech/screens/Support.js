import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
  Text,
  Image
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const FrameSupport = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.frameSupport}>
      <View style={[styles.manageDevices, styles.manageDevicesPosition]}>
        <View style={[styles.manageDevices, styles.manageDevicesPosition]}>
          <View
            style={[
              styles.iphone1415ProMax1Child,
              styles.manageDevicesPosition,
            ]}
          />
          <Image
            style={styles.layer1Icon}
            contentFit="cover"
            source={require("../assets/Logo.png")}
          />
          <View style={styles.iphone1415ProMax1Item} />
          <TouchableHighlight
            style={[styles.burgerMenu, styles.burgerMenuPosition]}
            underlayColor="#fff"
            onPress={() => navigation.navigate("FrameMenuSupport")}
          >
            <View style={[styles.lineParent, styles.lineParentPosition]}>
              <View style={[styles.groupChild, styles.groupPosition]} />
              <View style={[styles.groupItem, styles.groupPosition]} />
              <View style={[styles.groupInner, styles.groupPosition]} />
            </View>
          </TouchableHighlight>
          <Image
            style={[styles.layer1Icon1, styles.burgerMenuPosition]}
            contentFit="cover"
            source={require("../assets/Logo.png")}
          />
          <View style={styles.iphone1415ProMax1Inner} />
          <Text style={[styles.contactSupport, styles.sendMessageLayout]}>
            Contact Support
          </Text>
          <View style={[styles.rectangleView, styles.rectangleViewBg]} />
          <View
            style={[styles.iphone1415ProMax1Child1, styles.rectangleViewBg]}
          />
          <Text style={[styles.subject, styles.subjectTypo]}>Subject:</Text>
          <Pressable
            style={[styles.sendMessage, styles.sendMessageLayout]}
            onPress={() => navigation.navigate("FrameDeviceLayout")}
          >
            <Text style={[styles.sendMessage1, styles.subjectTypo]}>
              Send Message
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  manageDevicesPosition: {
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
    height: 932,
  },
  burgerMenuPosition: {
    top: 73,
    position: "absolute",
  },
  lineParentPosition: {
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
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
  sendMessageLayout: {
    height: 54,
    position: "absolute",
  },
  rectangleViewBg: {
    backgroundColor: Color.colorAliceblue,
    position: "absolute",
  },
  subjectTypo: {
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iphone1415ProMax1Child: {
    backgroundColor: Color.colorLightsteelblue,
  },
  layer1Icon: {
    top: 788,
    left: 149,
    width: 128,
    height: 103,
    overflow: "hidden",
    position: "absolute",
  },
  iphone1415ProMax1Item: {
    width: 436,
    height: 120,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
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
  lineParent: {
    right: "0%",
    bottom: "0%",
    position: "absolute",
  },
  burgerMenu: {
    left: 20,
    width: 41,
    height: 30,
  },
  layer1Icon1: {
    left: 70,
    width: 342,
    height: 27,
    overflow: "hidden",
  },
  iphone1415ProMax1Inner: {
    top: 193,
    left: 29,
    width: 367,
    height: 568,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  contactSupport: {
    top: 223,
    left: 37,
    fontWeight: "700",
    fontFamily: FontFamily.k2DBold,
    width: 351,
    textAlign: "center",
    color: Color.colorDarkorange,
    fontSize: FontSize.size_13xl,
  },
  rectangleView: {
    top: 295,
    left: 145,
    width: 238,
    height: 43,
  },
  iphone1415ProMax1Child1: {
    top: 357,
    left: 47,
    width: 335,
    height: 262,
  },
  subject: {
    top: 296,
    left: -25,
    fontSize: FontSize.size_5xl,
    color: Color.colorSteelblue_100,
    textAlign: "right",
    width: 162,
    height: 42,
  },
  sendMessage1: {
    textAlign: "center",
    color: Color.colorDarkorange,
    fontSize: FontSize.size_13xl,
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  sendMessage: {
    top: 688,
    left: 61,
    width: 303,
  },
  manageDevices: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  frameSupport: {
    flex: 1,
    height: 932,
    width: "100%",
  },
});

export default FrameSupport;
