import {
    FlatList,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import MaterialIcons from "@expo/vector-icons/MaterialIcons";
  import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
  // import MaterialIcons from '@expo/vector-icons/MaterialIcons';
  import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
  import Ionicons from '@expo/vector-icons/Ionicons';
  import FontAwesome from '@expo/vector-icons/FontAwesome';
  import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
  import Entypo from '@expo/vector-icons/Entypo';
  import { useContext } from "react";
  import { TasksContext } from "@/Context/TasksContext";
  import {CategoryContext} from "@/Context/CategoryContext"
  const ModalIcons = ({selecticon,set_selecticon,userSelection,setuserSelection}) => {
    // const { userTasks, setuserTasks } = useContext(TasksContext);
    // const data = [
    //   {
    //     icon: (
    //       <MaterialIcons name="local-grocery-store" size={30} color="black" />
    //     ),
    //     title: "Grocery",
    //   },
    //   {
    //     icon: <MaterialIcons name="work" size={30} color="black" />,
    //     title: "Work",
    //   },
    //   {
    //     icon: <FontAwesome6 name="dumbbell" size={30} color="black" />,
    //     title: "Sport",
    //   },
    //   {
    //     icon: <MaterialIcons name="design-services" size={30} color="black" />,
    //     title: "Design",
    //   },
    //   {
    //     icon: <FontAwesome6 name="graduation-cap" size={30} color="black" />,
    //     title: "Graduation",
    //   },
    //   {
    //     icon: <Ionicons name="megaphone" size={30} color="black" />,
    //     title: "Social",
    //   },
    //   {
    //     icon: <FontAwesome5 name="music" size={30} color="black" />,
    //     title: "Music",
    //   },
    //   {
    //     icon: <FontAwesome name="heartbeat" size={30} color="black" />,
    //     title: "Health",
    //   },
    //   {
    //     icon:<MaterialIcons name="video-camera-back" size={30} color="black" />,
    //     title: "Movie",
    //   },
    //   {
    //     icon: <Entypo name="home" size={30} color="black" />,
    //     title: "Home",
    //   },
    //   {
    //     icon: <Entypo name="plus" size={30} color="black" />,
    //     title: "Add",
    //   },
    // ];
    const {categories,setcategories}=useContext(CategoryContext)
    const [tempcat,settempcat]=useState(categories)
    useEffect(()=>{

        settempcat(prev => {
            return prev.filter(category => category.title !== 'Add');
        });
    },[])
    return (
      <View style={styles.main}>
        <View style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Text style={styles.heading}>Choose an Icon</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.iconscont}>
          {tempcat.map((i) => (
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{ marginHorizontal: 15 }}
                onPress={() => {
                  // setback(i);
                    setuserSelection(i.icon)
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: userSelection===i.icon?"#6869b3":"#ffcc80",
                    gap: 5,
                    // padding: 10,
                    paddingHorizontal: 2,
                    borderRadius: 5,
                    justifyContent: "center",
                    marginVertical: 5,
                    width: 70,
                    height: 70,
                  }}
                >
                  {i.icon}
                  {/* <FontAwesome name="flag" size={30} color="white" /> */}
                </View>
              </TouchableOpacity>
              {/* <Text style={styles.heading}>{i.title}</Text> */}
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.editButton}  onPress={()=>set_selecticon(false)}><Text style={styles.heading}>Make Selection</Text></TouchableOpacity>
      </View>
    );
  };
  
  export default ModalIcons;
  
  const styles = StyleSheet.create({
    editButton: {
      backgroundColor: "#8687e7",
      paddingHorizontal: 100,
      paddingVertical: 10,
      borderRadius: 5,
    },
    iconscont: {
      marginLeft:12,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      // padding: 5,
      paddingHorizontal: 0,
      alignItems: "center",
      gap: 5,
      width: "100%",
    },
    main: {
      display: "flex",
      width: "90%",
      height: "auto",
      backgroundColor: "#363636",
      alignItems: "center",
      padding: 20,
      borderRadius: 10,
      flexDirection: "column",
      gap: 10,
      marginBottom: 10,
    },
    heading: {
      color: "#e5e5e5",
      fontSize: 18,
      textAlign:"center"
    },
    separator: {
      backgroundColor: "#979797",
      height: 2,
      width: "98%",
      marginVertical: 10,
    },
    internalIcon: {
      display: "flex",
      flexDirection: "column",
  
      padding: 10,
      paddingHorizontal: 15,
      backgroundColor: "#ccff80",
      marginHorizontal: 20,
      justifyContent: "center",
      alignItems: "center",
      width: 60,
      height: 60,
      borderRadius: 5,
    },
    flat: {
      display: "flex",
      gap: 20,
  
      // flexDirection:"column"
    },
    columnWrapper: {
      justifyContent: "space-around",
    },
  });
  