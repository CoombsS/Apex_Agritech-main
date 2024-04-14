import * as React from "react";
import { StyleSheet, View, TextInput, Text, Pressable, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { useState, useEffect } from 'react';

function submit(){
  //const newKey = push(child(ref(database), 'users')).key;
  set(ref(db, 'users/' + userid), {
    userid: userid,
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    pwd: pwd
  }).then(() => {
    //Data saved successfully
    alert('data created');
  })
    .catch((error) => {
      //Write failed
      alert(error);
    });
};

const validate = (pwd, pwdCheck, email, emailCheck) => {
  let errors = [];
  if (pwd !== pwdCheck) {
    errors.push("Passwords do not match");
  }
  if (email !== emailCheck) {
    errors.push("Emails do not match");
  }
  return errors;
};

const handleSubmit = () => {
  const errors = validate(pwd, pwdCheck, email, emailCheck);
  if (errors.length === 0) {
    submit();
  } else {
    alert(errors.join("\n"));
  }
};



const FrameSignUp = () => {
  const navigation = useNavigation();
  const [userid, setUid] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdCheck, setPwdCheck] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [emailCheck, setEmailCheck] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.frameSignup}>
      <View style={[styles.signUpCreateAccount, styles.iconPosition]}>
        <View style={styles.iphone1415ProMax1}>
          <View style={[styles.iphone1415ProMax1Child, styles.signUpCreateAccountLayout]} />
          <Image style={[styles.apexTitleIcon, styles.iconPosition]} source={require("../assets/Logo.png")} />
          <Image style={[styles.logoIcon, styles.iconPosition]} source={require("../assets/Logo.png")} />
          <View style={[styles.createAccountSection, styles.createLayout]}>
            <View style={[styles.createAccountSectionChild, styles.createLayout]} />
            <TextInput style={[styles.useridBox, styles.nameLayout]} value ={userid} onChangeText={(userid)=>{setUid(userid)}} placeholder="Example01" />
            <TextInput style={[styles.passwordBox, styles.nameLayout]} value ={pwd} onChangeText={(pwd)=>{setPwd(pwd)}} placeholder="Password" secureTextEntry={true} />
            <TextInput style={[styles.confirmPsswrdBox, styles.nameLayout]} value ={pwdCheck} onChangeText={(pwdCheck)=>{setPwdCheck(pwdCheck)}} placeholder="PasswordCheck" secureTextEntry={true} />
            <TextInput style={[styles.lastNameBox, styles.nameLayout]}  value ={lastName} onChangeText={(lastName)=>{setLastName(lastName)}} placeholder="Last Name"/>
            <TextInput style={[styles.nameBox, styles.nameLayout]} value ={firstName} onChangeText={(firstName)=>{setFirstName(firstName)}} placeholder="First Name"/>
            <TextInput style={[styles.emailBox, styles.nameLayout]} placeholder="example@gmail.com" keyboardType="email-address" autoCapitalize="sentences" value ={email} onChangeText={(email)=>{setEmail(email)}}/>
            <TextInput style={[styles.confirmEmailBox, styles.nameLayout]} placeholder="example@gmail.com" keyboardType="email-address" secureTextEntry={false} value ={emailCheck} onChangeText={(emailCheck)=>{setEmailCheck(emailCheck)}} />
            <TextInput style={[styles.phoneNumberBox, styles.nameLayout]} value ={phone} onChangeText={(phone)=>{setPhone(phone)}} placeholder="#-###-#######"/>
            <Text style={[styles.userId, styles.passwordTypo]}>User ID:</Text>
            <Text style={[styles.firstName, styles.nameTypo]}>First Name:</Text>
            <Text style={[styles.lastName, styles.nameTypo]}>Last Name:</Text>
            <Text style={[styles.email, styles.passwordTypo]}>Email:</Text>
            <Text style={[styles.confirmEmail, styles.phoneNumberTypo]}>Confirm Email:</Text>
            <Text style={[styles.phoneNumber, styles.phoneNumberTypo]}>Phone Number:</Text>
            <Text style={[styles.password, styles.passwordTypo]}>Password:</Text>
            <Text style={[styles.confirmPassword, styles.passwordTypo]}>Confirm Password:</Text>
            <Text style={[styles.createAccount, styles.createTypo]}>Create Account</Text>
          </View>
          <TouchableOpacity style={[styles.createAccButton, styles.component5Layout]} activeOpacity={0.2} onPress={() => navigation.navigate("FrameDeviceLayout")}>
            <View style={[styles.component5, styles.component5Layout]}>
              <View style={[styles.component5Child, styles.createAccount1Position]} />
              <Text style={[styles.createAccount1, styles.createAccount1Position]}>Create Account</Text>

            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};








const styles = StyleSheet.create({
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  signUpCreateAccountLayout: {
    width: 430,
    backgroundColor: Color.colorLightsteelblue,
    left: 0,
    top: 0,
    height: 932,
  },
  createLayout: {
    height: 626,
    width: 361,
    position: "absolute",
  },
  nameLayout: {
    height: 36,
    width: 200,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  passwordTypo: {
    height: 30,
    width: 95,
    textAlign: "right",
    color: Color.colorWhite,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  nameTypo: {
    left: 10,
    height: 30,
    width: 95,
    textAlign: "right",
    color: Color.colorWhite,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  phoneNumberTypo: {
    width: 99,
    height: 30,
    textAlign: "right",
    color: Color.colorWhite,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  createTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  component5Layout: {
    width: 171,
    height: 30,
    position: "absolute",
  },
  createAccount1Position: {
    top: "0%",
    position: "absolute",
  },
  iphone1415ProMax1Child: {
    position: "absolute",
  },
  apexTitleIcon: {
    top: 72,
    left: 45,
    width: 342,
    height: 27,
  },
  logoIcon: {
    top: 788,
    left: 149,
    width: 128,
    height: 103,
  },
  createAccountSectionChild: {
    backgroundColor: Color.colorSteelblue_100,
    left: 0,
    top: 0,
  },
  useridBox: {
    top: 181,
    left: 132,
    width: 200,
  },
  passwordBox: {
    top: 421,
    left: 132,
    width: 200,
  },
  confirmPsswrdBox: {
    top: 481,
    left: 132,
    width: 200,
  },
  lastNameBox: {
    top: 121,
    left: 133,
  },
  nameBox: {
    top: 61,
    left: 132,
    width: 200,
  },
  emailBox: {
    top: 241,
    left: 132,
    width: 200,
  },
  confirmEmailBox: {
    top: 301,
    left: 132,
    width: 200,
  },
  phoneNumberBox: {
    top: 361,
    left: 132,
    width: 200,
  },
  userId: {
    top: 187,
    left: 8,
  },
  firstName: {
    top: 50,
  },
  lastName: {
    top: 109,
  },
  email: {
    top: 247,
    left: 8,
  },
  confirmEmail: {
    top: 289,
    left: 8,
  },
  phoneNumber: {
    top: 350,
    left: 3,
  },
  password: {
    top: 427,
    left: 12,
  },
  confirmPassword: {
    top: 469,
    left: 8,
  },
  createAccount: {
    top: 8,
    left: 99,
    width: 173,
    height: 26,
    position: "absolute",
  },
  createAccountSection: {
    top: 126,
    left: 33,
  },
  component5Child: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorDarkorange,
    width: "100%",
    top: "0%",
  },
  createAccount1: {
    height: "63.33%",
    width: "88.3%",
    left: "5.85%",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.k2DMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  component5: {
    left: 0,
    top: 0,
  },
  createAccButton: {
    top: 688,
    left: 128,
  },
  iphone1415ProMax1: {
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
    height: 932,
  },
  signUpCreateAccount: {
    width: 430,
    backgroundColor: Color.colorLightsteelblue,
    left: 0,
    top: 0,
    height: 932,
  },
  frameSignup: {
    flex: 1,
    height: 932,
    width: "100%",
  },
});

export default FrameSignUp;
