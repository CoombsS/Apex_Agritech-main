import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
  Text,
  TextInput,
  Image
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { useState } from "react";
import { set, ref, push } from 'firebase/database';
import { db } from '../components/config';





function addDevice(deviceName, location, otherInfo) {
  const deviceNameStr = typeof deviceName === 'object' ? deviceName.deviceName : deviceName;
  set(ref(db, 'devices/' + deviceNameStr), {
    deviceName: deviceName,
    location: location,
    otherInfo: otherInfo
  }).then(() => {
    // Data saved successfully
    alert('Data created');
  }).catch((error) => {
    // Write failed
    alert(error);
  });
}


const FrameAddNewDevice = () => {
  const navigation = useNavigation();
  const [deviceName, setName] = useState('');
  const [location, setLocation] = useState('');
  const [otherInfo, setOtherInfo] = useState('');
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
            source={require("../assets/Logo.png")}
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
            source={require("../assets/Logo.png")}
          />
          <View style={styles.iphone1415ProMax1Inner} />
          <Text style={[styles.name, styles.nameTypo]}>Name:</Text>
          <Text style={[styles.location, styles.nameTypo]}> Location:</Text>
          <Text style={[styles.deviceNumber, styles.nameTypo]}>
            Device Number:
          </Text>
          <TextInput style={[styles.nameBox, styles.boxLayout]} value ={deviceName} onChangeText={(deviceName)=>{setName(deviceName)}} placeholder="Example01"/>
          <TextInput style={[styles.locationBox, styles.boxLayout]} value ={location} onChangeText={(location)=>{setLocation(location)}} placeholder="Backyard"/>
          <TextInput style={[styles.otherInfoBox, styles.boxLayout]} value ={otherInfo} onChangeText={(otherInfo)=>{setOtherInfo(otherInfo)}} placeholder="Chickens, Quail, Geese"/>
          <Pressable style={styles.addNew} onPress={() => {
  if(deviceName && deviceName.trim() !== '') { // Check if deviceName is defined and not empty
    addDevice(deviceName, location, otherInfo);
  } else {
    alert('Device name cannot be empty');
  }
}}>
  <Text style={styles.addNew1}>Add New Device</Text>
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
    left: 18,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    position: "absolute",
  },
  boxLayout: {
    width: 175,
    backgroundColor: Color.colorAliceblue,
    left: 199,
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
    top: 307,
  },
  location: {
    top: 376,
  },
  deviceNumber: {
    top: 431,
  },
  nameBox: {
    top: 307,
  },
  locationBox: {
    top: 376,
  },
  otherInfoBox: {
    top: 445,
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
