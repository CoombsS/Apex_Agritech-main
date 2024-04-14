import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const FrameDeviceLayout = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.frameDeviceLayout}>
      <View style={[styles.deviceLayourBack, styles.devicePosition]}>
        <View style={[styles.deviceLayourBackChild, styles.devicePosition]} />
        <View style={[styles.deviceLayourBackItem, styles.devicePosition]} />
      </View>
      <TouchableHighlight
        style={styles.burgerMenu}
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
        style={[styles.apexTitleIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/Logo.png")}
      />
      <Image
        style={[styles.logoIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/Logo.png")}
      />
      <TouchableOpacity
        style={[styles.coop1, styles.coopLayout]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("FrameDevicePage")}
      >
        <View style={[styles.coop1Child, styles.lineParentPosition]} />
        <Text style={[styles.coop11, styles.coopTypo]}>Coop #1</Text>
        <View style={styles.rectangleParent}>
          <View style={[styles.rectangleView, styles.groupChild1Position]} />
          <Text style={[styles.text, styles.textClr]}>55°</Text>
          <Text style={[styles.temperature, styles.waterLevelTypo]}>
            Temperature
          </Text>
        </View>
        <View style={styles.rectangleGroup}>
          <View style={[styles.groupChild1, styles.groupChild1Position]} />
          <Text style={[styles.text1, styles.textClr]}>6.2</Text>
          <Text style={[styles.waterLevel, styles.waterLevelTypo]}>
            Water Level
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.coop2, styles.coopLayout]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("FrameDevicePage")}
      >
        <View style={[styles.coop1Child, styles.lineParentPosition]} />
        <Text style={[styles.coop21, styles.coopTypo]}>Coop #2</Text>
        <View style={styles.rectangleContainer}>
          <View style={[styles.rectangleView, styles.groupChild1Position]} />
          <Text style={[styles.text2, styles.textTypo]}>6.2</Text>
          <Text style={[styles.waterLevel1, styles.waterLevel1Typo]}>
            Water Level
          </Text>
        </View>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <View style={[styles.rectangleView, styles.groupChild1Position]} />
          <Text style={[styles.text2, styles.textTypo]}>55°</Text>
          <Text style={[styles.temperature1, styles.waterLevel1Typo]}>
            Temperature
          </Text>
        </View>
      </TouchableOpacity>
      <Pressable
        style={[styles.coop3, styles.coopLayout]}
        onPress={() => navigation.navigate("FrameDevicePage")}
      >
        <View style={[styles.coop1Child, styles.lineParentPosition]} />
        <Text style={[styles.coop21, styles.coopTypo]}>Coop #3</Text>
        <View style={styles.rectangleContainer}>
          <View style={[styles.rectangleView, styles.groupChild1Position]} />
          <Text style={[styles.text2, styles.textTypo]}>6.2</Text>
          <Text style={[styles.waterLevel2, styles.waterLevel2Typo]}>
            Water Level
          </Text>
        </View>
        <View style={[styles.rectangleParent2, styles.groupViewPosition]}>
          <View style={[styles.groupChild1, styles.groupChild1Position]} />
          <Text style={[styles.text5, styles.textTypo]}>55°</Text>
          <Text style={[styles.temperature2, styles.waterLevel2Typo]}>
            Temperature
          </Text>
        </View>
      </Pressable>
      <TouchableOpacity
        style={styles.addNew}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("FrameAddNewDevice")}
      >
        <Text style={[styles.addNew1, styles.textClr]}>Add New</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  devicePosition: {
    width: 430,
    left: 0,
    top: 0,
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
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  coopLayout: {
    height: 141,
    width: 331,
    position: "absolute",
  },
  lineParentPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  coopTypo: {
    textAlign: "left",
    color: Color.colorDarkorange,
    fontFamily: FontFamily.k2DRegular,
    fontSize: FontSize.size_21xl,
    left: "3.32%",
    height: "31.91%",
    position: "absolute",
  },
  groupChild1Position: {
    backgroundColor: Color.colorAliceblue,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  textClr: {
    color: Color.colorSteelblue_100,
    textAlign: "left",
  },
  waterLevelTypo: {
    fontSize: FontSize.size_3xs,
    top: "9.2%",
    height: "16.09%",
    color: Color.colorSteelblue_100,
    fontFamily: FontFamily.k2DExtraLight,
    fontWeight: "200",
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    top: "26.44%",
    color: Color.colorSteelblue_100,
    fontFamily: FontFamily.k2DExtraLight,
    fontWeight: "200",
    fontSize: FontSize.size_13xl,
    height: "47.13%",
    textAlign: "left",
    position: "absolute",
  },
  waterLevel1Typo: {
    top: "10.34%",
    fontSize: FontSize.size_3xs,
    height: "16.09%",
    color: Color.colorSteelblue_100,
    fontFamily: FontFamily.k2DExtraLight,
    fontWeight: "200",
    textAlign: "left",
    position: "absolute",
  },
  groupViewPosition: {
    left: "54.68%",
    bottom: "19.15%",
    top: "19.15%",
    height: "61.7%",
    position: "absolute",
  },
  waterLevel2Typo: {
    top: "12.64%",
    fontSize: FontSize.size_3xs,
    height: "16.09%",
    color: Color.colorSteelblue_100,
    fontFamily: FontFamily.k2DExtraLight,
    fontWeight: "200",
    textAlign: "left",
    position: "absolute",
  },
  deviceLayourBackChild: {
    backgroundColor: Color.colorLightsteelblue,
    height: 932,
  },
  deviceLayourBackItem: {
    height: 120,
    backgroundColor: Color.colorWhite,
  },
  deviceLayourBack: {
    height: 932,
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
    top: 73,
    position: "absolute",
  },
  apexTitleIcon: {
    left: 70,
    width: 342,
    height: 27,
    top: 73,
  },
  logoIcon: {
    top: 788,
    left: 149,
    width: 128,
    height: 103,
  },
  coop1Child: {
    backgroundColor: Color.colorWhite,
  },
  coop11: {
    width: "44.41%",
    top: "26.24%",
  },
  rectangleView: {
    right: "0%",
    backgroundColor: Color.colorAliceblue,
    width: "100%",
  },
  text: {
    fontFamily: FontFamily.k2DExtraLight,
    fontWeight: "200",
    fontSize: FontSize.size_13xl,
    top: "25.29%",
    height: "47.13%",
    color: Color.colorSteelblue_100,
    position: "absolute",
    left: "8.62%",
    width: "91.38%",
  },
  temperature: {
    left: "1.72%",
    width: "98.28%",
  },
  rectangleParent: {
    right: "28.1%",
    left: "54.38%",
    bottom: "22.7%",
    top: "15.6%",
    height: "61.7%",
    width: "17.52%",
    position: "absolute",
  },
  groupChild1: {
    width: "98.31%",
    right: "1.69%",
  },
  text1: {
    left: "10.17%",
    width: "89.83%",
    fontFamily: FontFamily.k2DExtraLight,
    fontWeight: "200",
    fontSize: FontSize.size_13xl,
    top: "25.29%",
    height: "47.13%",
    color: Color.colorSteelblue_100,
    position: "absolute",
  },
  waterLevel: {
    width: "88.14%",
    left: "5.08%",
  },
  rectangleGroup: {
    left: "76.13%",
    right: "6.04%",
    width: "17.82%",
    bottom: "22.7%",
    top: "15.6%",
    height: "61.7%",
    position: "absolute",
  },
  coop1: {
    top: 177,
    left: 53,
  },
  coop21: {
    width: "47.43%",
    top: "32.62%",
  },
  text2: {
    left: "8.62%",
    width: "91.38%",
  },
  waterLevel1: {
    left: "5.17%",
    width: "89.66%",
  },
  rectangleContainer: {
    left: "76.44%",
    bottom: "19.15%",
    top: "19.15%",
    right: "6.04%",
    width: "17.52%",
    height: "61.7%",
    position: "absolute",
  },
  temperature1: {
    left: "1.72%",
    width: "98.28%",
  },
  groupView: {
    right: "27.79%",
    left: "54.68%",
    width: "17.52%",
  },
  coop2: {
    top: 348,
    left: 52,
  },
  waterLevel2: {
    left: "6.9%",
    width: "89.66%",
  },
  text5: {
    left: "8.47%",
    width: "89.83%",
  },
  temperature2: {
    width: "96.61%",
    left: "3.39%",
  },
  rectangleParent2: {
    right: "27.49%",
    width: "17.82%",
    left: "54.68%",
  },
  coop3: {
    top: 519,
    left: 50,
  },
  addNew1: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.k2DBold,
    width: 83,
    height: 28,
  },
  addNew: {
    left: 169,
    top: 690,
    position: "absolute",
  },
  frameDeviceLayout: {
    flex: 1,
    height: 932,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default FrameDeviceLayout;
