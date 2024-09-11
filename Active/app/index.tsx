import { Link } from "@react-navigation/native";  
import * as React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";



export default function Index() {
  console.log("App executed!");
  
  return (
    <ImageBackground 
      source={{ uri: 'https://img.freepik.com/free-photo/dumbbells-multicolored-background_23-2147735032.jpg' }}
      style={styles.background}
    >
      <Link to="/home" style={styles.linkText}>
        <Text style={styles.text}>Go to home</Text>
      </Link>
      {/* <Rectangle /> */}
      {/* <Profile /> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  linkText: {
    textDecorationLine: 'none', // Remove underline
  },
  text: {
    fontSize: 24, // Increase font size
    fontWeight: 'bold', // Make text bold
    color: 'white', // Set the text color to white or another suitable color
    textAlign: 'center', // Center-align the text
    padding: 10, // Add padding around the text
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for contrast
    borderRadius: 5, // Round the edges
  },
});
// ALL UNUSED CODE FOR PROFILE BELOW (tbh we can delete it)
// 
// const ProfileSettingsText = () => {
//   return <Text style={styles.profileSettings}>Profile Settings</Text>;
// };

// const EditInfoText = () => {
//   return <Text style={styles.editInfo}>Edit Info</Text>;
// };

// const Rectangle = () => {
//   return <View style={styles.rectangleView} />;
// };

// const Profile = () => {
//   return (
//     <View style={styles.profile}>
//       <Icon name="user-circle" style={styles.profileIcon} />
//       <View style={[styles.profileChild, styles.profileLayout]} />
//       <Text style={[styles.personalRecords, styles.profileTypo]}>Personal Records</Text>
//       <View style={[styles.profileItem, styles.profileLayout]} />
//       <View style={[styles.profileInner, styles.iconPosition]} />
//       <View style={[styles.lineIcon, styles.lineIconPosition]} />
//       <View style={[styles.profileChild1, styles.lineIconPosition]} />
//       <View style={styles.profileChild2} />
//       <Text style={[styles.editAvatar, styles.profileTypo]}>Edit Avatar</Text>
//       <Text style={[styles.workoutHeatmap, styles.profileTypo]}>Workout Heatmap</Text>
//       <Icon name="heartbeat" style={[styles.icon, styles.iconLayout1]} />
//       <Icon name="calendar" style={[styles.calendarIcon, styles.iconLayout]} />
//       <Icon name="gear" style={[styles.icon2, styles.iconLayout]} />
//       <Icon name="users" style={[styles.groupIcon, styles.iconPosition]} />
//       <Text style={[styles.profile1, styles.profileTypo]}>Profile</Text>
//       <Icon name="cog" style={styles.gearIcon} />
//       <ProfileSettingsText />
//       <EditInfoText />
//       <Rectangle />
//     </View>
//   );
// };

  // profileSettings: {
  //   fontSize: 32,
  //   fontWeight: "500",
  //   fontFamily: "Arial",
  //   color: "#000",
  //   textAlign: "center",
  //   width: 220,
  //   height: 48,
  //   position: "absolute",
  //   top: 150,
  //   left: 112,
  //   zIndex: 10, // Ensure text is on top
  // },
  // editInfo: {
  //   fontSize: 27,
  //   fontWeight: "500",
  //   fontFamily: "Arial",
  //   color: "#000",
  //   textAlign: "center",
  //   width: 102,
  //   height: 40,
  //   position: "absolute",
  //   top: 205,
  //   left: 112,
  //   zIndex: 10, // Ensure text is on top
  // },
  // profileLayout: {
  //   height: 2,
  //   width: 393,
  // },
  // profileTypo: {
  //   height: 48,
  //   fontSize: 32,
  //   textAlign: "center",
  //   color: "#000",
  //   fontFamily: "Arial",
  //   fontWeight: "500",
  // },
  // iconPosition: {
  //   left: 12,
  //   position: "absolute",
  // },
  // lineIconPosition: {
  //   left: 1,
  //   height: 2,
  //   width: 393,
  //   position: "absolute",
  // },
  // iconLayout1: {
  //   height: 60,
  //   width: 60,
  // },
  // iconLayout: {
  //   height: 61,
  //   position: "absolute",
  // },
  // profileIcon: {
  //   top: 143,
  //   left: 31,
  //   fontSize: 62,
  //   color: "#000", // Ensure the icon is visible
  //   position: "absolute",
  // },
  // profileChild: {
  //   top: 637,
  //   left: 0,
  //   height: 2,
  //   position: "absolute",
  //   backgroundColor: "#ccc",
  // },
  // personalRecords: {
  //   top: 555,
  //   width: 251,
  //   left: 115,
  //   fontSize: 32,
  //   position: "absolute",
  //   zIndex: 10, // Ensure text is on top
  // },
  // profileItem: {
  //   top: 519,
  //   left: 0,
  //   height: 2,
  //   position: "absolute",
  //   backgroundColor: "#ccc",
  // },
  // profileInner: {
  //   top: 283,
  //   height: 2,
  //   width: 393,
  //   backgroundColor: "#ccc",
  // },
  // lineIcon: {
  //   top: 132,
  //   backgroundColor: "#ccc",
  // },
  // profileChild1: {
  //   top: 742,
  //   backgroundColor: "#ccc",
  // },
  // profileChild2: {
  //   top: 402,
  //   left: -12,
  //   maxHeight: "100%",
  //   width: 417,
  //   position: "absolute",
  //   backgroundColor: "#ccc",
  // },
  // editAvatar: {
  //   top: 312,
  //   width: 161,
  //   left: 115,
  //   fontSize: 32,
  //   position: "absolute",
  //   zIndex: 10, // Ensure text is on top
  // },
  // workoutHeatmap: {
  //   top: 437,
  //   width: 261,
  //   left: 115,
  //   fontSize: 32,
  //   position: "absolute",
  //   zIndex: 10, // Ensure text is on top
  // },
  // icon: {
  //   top: 765,
  //   left: 12,
  //   fontSize: 60,
  //   color: "#000", // Ensure the icon is visible
  //   position: "absolute",
  // },
  // calendarIcon: {
  //   top: 763,
  //   left: 205,
  //   fontSize: 65,
  //   color: "#000", // Ensure the icon is visible
  //   position: "absolute",
  // },
  // icon2: {
  //   left: 304,
  //   width: 61,
  //   top: 764,
  //   fontSize: 61,
  //   color: "#000", // Ensure the icon is visible
  //   position: "absolute",
  // },
  // groupIcon: {
  //   top: 13,
  //   width: 52,
  //   height: 53,
  //   fontSize: 53,
  //   color: "#000", // Ensure the icon is visible
  //   position: "absolute",
  // },
  // profile1: {
  //   top: 75,
  //   left: 144,
  //   width: 94,
  //   position: "absolute",
  //   zIndex: 10, // Ensure text is on top
  // },
  // gearIcon: {
  //   top: 12,
  //   left: 313,
  //   width: 63,
  //   height: 63,
  //   fontSize: 63,
  //   color: "#000", // Ensure the icon is visible
  //   position: "absolute",
  // },
  // rectangleView: {
  //   backgroundColor: "#e7e4e4",
  //   height: 507,
  //   top: 132,
  //   width: 393,
  //   left: 0,
  //   position: "absolute",
  // },
  // profile: {
  //   backgroundColor: "#f5eeee",
  //   flex: 1,
  //   width: "100%",
  //   height: 852,
  //   overflow: "hidden",
  // },