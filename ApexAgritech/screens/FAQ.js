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
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const FrameFAQ = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.frameFaq}>
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
            onPress={() => navigation.navigate("FrameMenuFAQ")}
          >
            <View style={[styles.lineParent, styles.question1Position]}>
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
          <View style={[styles.question, styles.questionLayout]}>
            <Pressable
              style={styles.question1Position}
              onPress={() => navigation.navigate("FrameFAQ1")}
            >
              <Text style={[styles.question2, styles.question2Layout]}>
                Question
              </Text>
            </Pressable>
          </View>
          <View style={[styles.question3, styles.questionLayout]}>
            <Pressable
              style={styles.question1Position}
              onPress={() => navigation.navigate("FrameFAQ1")}
            >
              <Text style={[styles.question2, styles.question2Layout]}>
                Question
              </Text>
            </Pressable>
          </View>
          <View style={[styles.question6, styles.questionLayout]}>
            <Pressable
              style={styles.question1Position}
              onPress={() => navigation.navigate("FrameFAQ1")}
            >
              <Text style={[styles.question2, styles.question2Layout]}>
                Question
              </Text>
            </Pressable>
          </View>
          <View style={[styles.question9, styles.questionLayout]}>
            <Pressable
              style={styles.question1Position}
              onPress={() => navigation.navigate("FrameFAQ1")}
            >
              <Text style={[styles.question2, styles.question2Layout]}>
                Question
              </Text>
            </Pressable>
          </View>
          <View style={[styles.question12, styles.questionLayout]}>
            <Pressable
              style={styles.question1Position}
              onPress={() => navigation.navigate("FrameFAQ1")}
            >
              <Text style={[styles.question2, styles.question2Layout]}>
                Question
              </Text>
            </Pressable>
          </View>
          <View style={[styles.question15, styles.questionLayout]}>
            <Pressable
              style={styles.question1Position}
              onPress={() => navigation.navigate("FrameFAQ1")}
            >
              <Text style={[styles.question2, styles.question2Layout]}>
                Question
              </Text>
            </Pressable>
          </View>
          <View style={[styles.question18, styles.questionLayout]}>
            <Pressable
              style={styles.question1Position}
              onPress={() => navigation.navigate("FrameFAQ1")}
            >
              <Text style={[styles.question2, styles.question2Layout]}>
                Question
              </Text>
            </Pressable>
          </View>
          <View style={[styles.question21, styles.questionLayout]}>
            <Pressable
              style={styles.question1Position}
              onPress={() => navigation.navigate("FrameFAQ1")}
            >
              <Text style={[styles.question2, styles.question2Layout]}>
                Question
              </Text>
            </Pressable>
          </View>
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
  question1Position: {
    left: "0%",
    top: "0%",
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
  questionLayout: {
    height: 46,
    width: 303,
    left: 57,
    position: "absolute",
  },
  question2Layout: {
    height: "100%",
    width: "100%",
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
    height: "100%",
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
    top: 193,
    left: 29,
    width: 367,
    height: 568,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  question2: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.k2DBold,
    color: Color.colorSteelblue_100,
    textAlign: "left",
  },
  question: {
    top: 232,
  },
  question3: {
    top: 294,
  },
  question6: {
    top: 356,
  },
  question9: {
    top: 418,
  },
  question12: {
    top: 477,
  },
  question15: {
    top: 536,
  },
  question18: {
    top: 595,
  },
  question21: {
    top: 654,
  },
  manageDevices: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  frameFaq: {
    flex: 1,
    height: 932,
    width: "100%",
  },
});

export default FrameFAQ;
