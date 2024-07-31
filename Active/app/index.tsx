import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

const ProfileSettingsText = () => {
  return <Text style={styles.profileSettings}>Profile Settings</Text>;
};

const EditInfoText = () => {
  return <Text style={styles.editInfo}>Edit Info</Text>;
};

const Rectangle = () => {
  return <View style={styles.rectangleView} />;
};

const Profile = () => {
  return (
    <View style={styles.profile}>
      <View style={styles.profileicon1} />
      <View style={[styles.profileChild, styles.profileLayout]} />
      <Text style={[styles.personalRecords, styles.profileTypo]}>Personal Records</Text>
      <View style={[styles.profileItem, styles.profileLayout]} />
      <View style={[styles.profileInner, styles.iconPosition]} />
      <View style={[styles.lineIcon, styles.lineIconPosition]} />
      <View style={[styles.profileChild1, styles.lineIconPosition]} />
      <View style={styles.profileChild2} />
      <Text style={[styles.editAvatar, styles.profileTypo]}>Edit Avatar</Text>
      <Text style={[styles.workoutHeatmap, styles.profileTypo]}>Workout Heatmap</Text>
      <View style={[styles.icon, styles.iconLayout1]} />
      <View style={[styles.icon1, styles.icon1Position]} />
      <View style={[styles.calendar2492Icon, styles.iconLayout]} />
      <View style={[styles.icon2, styles.iconLayout]} />
      <View style={[styles.groupIcon, styles.iconPosition]} />
      <Text style={[styles.profile1, styles.profileTypo]}>Profile</Text>
      <View style={styles.gearIconPng122} />
      <ProfileSettingsText />
      <EditInfoText />
      <View style={styles.removeBackgroundProject1} />
      <View style={styles.prInpixio1Icon} />
      <View style={styles.imageedit241630972211Icon} />
      <View style={styles.rectangleView} />
    </View>
  );
};

export default function Index() {
  console.log("App executed!");
  return (
    <View style={styles.container}>
      <Rectangle />
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileSettings: {
    fontSize: 32,
    fontWeight: "500",
    fontFamily: "Kanit-Medium",
    color: "#000",
    textAlign: "center",
    width: 220,
    height: 48,
    position: "absolute",
    top: 150,
    left: 112,
  },
  editInfo: {
    fontSize: 27,
    fontWeight: "500",
    fontFamily: "Kanit-Medium",
    color: "#000",
    textAlign: "center",
    width: 102,
    height: 40,
    position: "absolute",
    top: 205,
    left: 112,
  },
  profileLayout: {
    height: 2,
    width: 393,
  },
  profileTypo: {
    height: 48,
    fontSize: 32,
    textAlign: "center",
    color: "#000",
    fontFamily: "Kanit-Medium",
    fontWeight: "500",
  },
  iconPosition: {
    left: 12,
    position: "absolute",
  },
  lineIconPosition: {
    left: 1,
    height: 2,
    width: 393,
    position: "absolute",
  },
  iconLayout1: {
    height: 60,
    width: 60,
  },
  icon1Position: {
    left: 112,
    position: "absolute",
  },
  iconLayout: {
    height: 61,
    position: "absolute",
  },
  profileicon1: {
    top: 143,
    left: 31,
    width: 62,
    height: 62,
    position: "absolute",
    backgroundColor: "#ccc", // Placeholder for image
  },
  profileChild: {
    top: 637,
    left: 0,
    height: 2,
    position: "absolute",
    backgroundColor: "#ccc", // Placeholder for line
  },
  personalRecords: {
    top: 555,
    width: 251,
    left: 115,
    fontSize: 32,
    position: "absolute",
  },
  profileItem: {
    top: 519,
    left: 0,
    height: 2,
    position: "absolute",
    backgroundColor: "#ccc", // Placeholder for line
  },
  profileInner: {
    top: 283,
    height: 2,
    width: 393,
    backgroundColor: "#ccc", // Placeholder for line
  },
  lineIcon: {
    top: 132,
    backgroundColor: "#ccc", // Placeholder for line
  },
  profileChild1: {
    top: 742,
    backgroundColor: "#ccc", // Placeholder for line
  },
  profileChild2: {
    top: 402,
    left: -12,
    maxHeight: "100%",
    width: 417,
    position: "absolute",
    backgroundColor: "#ccc", // Placeholder for line
  },
  editAvatar: {
    top: 312,
    width: 161,
    left: 115,
    fontSize: 32,
    position: "absolute",
  },
  workoutHeatmap: {
    top: 437,
    width: 261,
    left: 115,
    fontSize: 32,
    position: "absolute",
  },
  icon: {
    top: 765,
    left: 12,
    position: "absolute",
    backgroundColor: "#ccc", // Placeholder for icon
  },
  icon1: {
    top: 764,
    height: 60,
    width: 60,
    backgroundColor: "#ccc", // Placeholder for icon
  },
  calendar2492Icon: {
    top: 763,
    left: 205,
    width: 65,
    backgroundColor: "#ccc", // Placeholder for icon
  },
  icon2: {
    left: 304,
    width: 61,
    top: 764,
    backgroundColor: "#ccc", // Placeholder for icon
  },
  groupIcon: {
    top: 13,
    width: 52,
    height: 53,
    backgroundColor: "#ccc", // Placeholder for icon
  },
  profile1: {
    top: 75,
    left: 144,
    width: 94,
    position: "absolute",
  },
  gearIconPng122: {
    top: 12,
    left: 313,
    width: 63,
    height: 63,
    position: "absolute",
    backgroundColor: "#ccc", // Placeholder for icon
  },
  removeBackgroundProject1: {
    top: 301,
    left: 27,
    width: 70,
    height: 70,
    position: "absolute",
    backgroundColor: "#ccc", // Placeholder for icon
  },
  prInpixio1Icon: {
    top: 546,
    left: 39,
    width: 45,
    height: 65,
    position: "absolute",
    backgroundColor: "#ccc", // Placeholder for icon
  },
  imageedit241630972211Icon: {
    top: 422,
    left: 23,
    width: 75,
    height: 75,
    position: "absolute",
    backgroundColor: "#ccc", // Placeholder for icon
  },
  rectangleView: {
    backgroundColor: "#e7e4e4",
    height: 507,
    top: 132,
    width: 393,
    left: 0,
    position: "absolute",
  },
  profile: {
    backgroundColor: "#f5eeee",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});
