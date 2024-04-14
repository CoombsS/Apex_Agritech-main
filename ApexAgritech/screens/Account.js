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
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const FrameAccountInfo = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.frameAccountInfo}>
      <View style={[styles.accountInfo, styles.accountInfoPosition]}>
        <View style={[styles.accountInfo, styles.accountInfoPosition]}>
          <View
            style={[styles.iphone1415ProMax1Child, styles.accountInfoPosition]}
          />
          <Image
            style={styles.layer1Icon}
            contentFit="cover"
            source={require("../assets/Logo.png")}
          />
          <View style={styles.iphone1415ProMax1Item} />
          <TouchableHighlight
            style={styles.burgerMenu}
            underlayColor="#fff"
            onPress={() => navigation.navigate("FrameMenuAccount")}
          >
            <View style={styles.lineParent}>
              <View style={[styles.groupChild, styles.groupPosition]} />
              <View style={[styles.groupItem, styles.groupPosition]} />
              <View style={[styles.groupInner, styles.groupPosition]} />
            </View>
          </TouchableHighlight>
          <Image
            style={[styles.layer1Icon1, styles.layer1Icon1Layout]}
            contentFit="cover"
            source={require("../assets/Logo.png")}
          />
          <View style={styles.iphone1415ProMax1Inner} />
          <Text style={[styles.userIdWrobinson1, styles.logoutLayout]}>
            User ID: WRobinson1
          </Text>
          <Text style={[styles.helloWilliamRobinson, styles.logout1Clr]}>
            Hello! William Robinson
          </Text>
          <Text style={[styles.emailWrobinson1gmailcom, styles.passwordTypo]}>
            Email: WRobinson1@gmail.com
          </Text>
          <Text style={[styles.phone1234567890, styles.passwordTypo]}>
            Phone: (123)456-7890
          </Text>
          <Text style={[styles.password, styles.passwordTypo]}>
            Password: ********
          </Text>
          <Pressable
            style={[styles.logout, styles.logoutLayout]}
            onPress={() => navigation.navigate("")}
          >
            <Text style={[styles.logout1, styles.logout1Typo]}>Logout</Text>
          </Pressable>
          <TouchableOpacity
            style={[styles.deleteAccount, styles.layer1Icon1Layout]}
            activeOpacity={0.2}
            onLongPress={() => navigation.navigate("FrameSignUp")}
          >
            <Text style={[styles.deleteAccount1, styles.logout1Typo]}>
              Delete Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  accountInfoPosition: {
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
    height: 932,
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
  layer1Icon1Layout: {
    height: 27,
    position: "absolute",
  },
  logoutLayout: {
    height: 54,
    position: "absolute",
  },
  logout1Clr: {
    color: Color.colorDarkorange,
    fontSize: FontSize.size_13xl,
  },
  passwordTypo: {
    height: 25,
    width: 282,
    left: 78,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorSteelblue_100,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    position: "absolute",
  },
  logout1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
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
    top: 73,
    position: "absolute",
  },
  layer1Icon1: {
    left: 70,
    width: 342,
    top: 73,
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
  userIdWrobinson1: {
    top: 311,
    width: 303,
    left: 64,
    height: 54,
    textAlign: "left",
    color: Color.colorSteelblue_100,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    fontSize: FontSize.size_13xl,
  },
  helloWilliamRobinson: {
    top: 236,
    left: 43,
    fontWeight: "700",
    fontFamily: FontFamily.k2DBold,
    width: 351,
    height: 54,
    position: "absolute",
    textAlign: "left",
  },
  emailWrobinson1gmailcom: {
    top: 427,
  },
  phone1234567890: {
    top: 466,
  },
  password: {
    top: 505,
  },
  logout1: {
    color: Color.colorDarkorange,
    fontSize: FontSize.size_13xl,
  },
  logout: {
    top: 674,
    width: 303,
    left: 64,
    height: 54,
  },
  deleteAccount1: {
    color: Color.colorAliceblue,
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  deleteAccount: {
    top: 613,
    left: 113,
    width: 206,
  },
  accountInfo: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  frameAccountInfo: {
    flex: 1,
    height: 932,
    width: "100%",
  },
});

export default FrameAccountInfo;
