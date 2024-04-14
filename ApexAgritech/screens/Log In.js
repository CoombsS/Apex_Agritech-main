import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
  Text,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const FrameAddNewDevice = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameAddNewDevice}>
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
            source={require("../assets/layer-1.png")}
          />
          <View style={styles.iphone1415ProMax1Item} />
          <TouchableHighlight
            style={[styles.burgerMenu, styles.burgerMenuPosition]}
            underlayColor="#fff"
            onPress={() => navigation.navigate("FrameAddNewDevice1")}
          >
            <View style={styles.lineParent}>
              <View style={[styles.groupChild, styles.groupPosition]} />
              <View style={[styles.groupItem, styles.groupPosition]} />
              <View style={[styles.groupInner, styles.groupPosition]} />
            </View>
          </TouchableHighlight>
          <Image
            style={[styles.layer1Icon1, styles.burgerMenuPosition]}
            contentFit="cover"
            source={require("../assets/layer-11.png")}
          />
          <View style={styles.iphone1415ProMax1Inner} />
          <Text style={[styles.name, styles.nameTypo]}>Name:</Text>
          <Text style={[styles.location, styles.nameTypo]}> Location:</Text>
          <Text style={[styles.otherInfo, styles.otherTypo]}> Other info:</Text>
          <Text style={[styles.otherInfo1, styles.otherTypo]}>Other info:</Text>
          <View style={[styles.rectangleView, styles.iphone1415ChildLayout]} />
          <View
            style={[
              styles.iphone1415ProMax1Child1,
              styles.iphone1415ChildLayout,
            ]}
          />
          <View
            style={[
              styles.iphone1415ProMax1Child2,
              styles.iphone1415ChildLayout,
            ]}
          />
          <View
            style={[
              styles.iphone1415ProMax1Child3,
              styles.iphone1415ChildLayout,
            ]}
          />
          <Pressable
            style={styles.addNew}
            onPress={() => navigation.navigate("FrameDeviceLayout")}
          >
            <Text style={styles.addNew1}>Add New</Text>
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
  nameTypo: {
    height: 42,
    width: 162,
    textAlign: "right",
    color: Color.colorSteelblue_100,
    fontSize: FontSize.size_5xl,
    left: 26,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    position: "absolute",
  },
  otherTypo: {
    left: 27,
    height: 42,
    width: 162,
    textAlign: "right",
    color: Color.colorSteelblue_100,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  iphone1415ChildLayout: {
    width: 175,
    backgroundColor: Color.colorAliceblue,
    height: 42,
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
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
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
    top: 196,
    left: 31,
    width: 370,
    height: 559,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  name: {
    top: 243,
  },
  location: {
    top: 302,
  },
  otherInfo: {
    top: 376,
  },
  otherInfo1: {
    top: 433,
  },
  rectangleView: {
    left: 199,
    width: 175,
    backgroundColor: Color.colorAliceblue,
    top: 243,
  },
  iphone1415ProMax1Child1: {
    top: 306,
    left: 199,
    width: 175,
    backgroundColor: Color.colorAliceblue,
  },
  iphone1415ProMax1Child2: {
    top: 369,
    left: 201,
  },
  iphone1415ProMax1Child3: {
    top: 432,
    left: 199,
    width: 175,
    backgroundColor: Color.colorAliceblue,
  },
  addNew1: {
    fontSize: FontSize.size_13xl,
    color: Color.colorDarkorange,
    textAlign: "center",
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  addNew: {
    top: 675,
    left: 68,
    width: 303,
    height: 54,
    position: "absolute",
  },
  manageDevices: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  frameAddNewDevice: {
    flex: 1,
    height: 932,
    width: "100%",
  },
});

export default FrameAddNewDevice;