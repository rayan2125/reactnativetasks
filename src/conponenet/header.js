import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = () => {
    const userImg = [
        require("../assets/Image/user1.jpeg"),
        require("../assets/Image/user2.jpg"),
        require("../assets/Image/user3.jpg"),
        require("../assets/Image/user4.jpeg"),
    ];

    const screenWidth = Dimensions.get('window').width;
    const circleSize = screenWidth;

    return (
        <View style={{
            width: circleSize,
            height: 200,
            bottom: 0,
            overflow: 'hidden',
            backgroundColor: '#E1EFFA',
        }}>
            <View style={{ margin: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' ,padding:10}}>
                    <View style={{ backgroundColor: "#0098DB", height: 40, width: 40, borderRadius: 99, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require("../assets/Image/user.png")}
                            style={{ height: 40, width: 40, borderRadius: 99 }}
                            resizeMode='contain'
                        />
                    </View>
                    <TouchableOpacity>
                        <Icon name="bars" size={20} color="#0098DB" />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View style={{ justifyContent: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center',fontSize:20 }}>Your Family</Text>
                    <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", marginHorizontal: 120 }}>
                        <FlatList
                            horizontal
                            data={userImg}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ margin: 5, }}>
                                        <Image
                                            source={item}
                                            style={{ width: 30, height: 30, borderRadius: 25 }}
                                        />
                                    </View>
                                );
                            }}
                        />
                    </View>
                    <View style={{ alignItems: 'center',flexDirection:'row',justifyContent:"center" }}>
                        <View style={{ backgroundColor: "green", height: 15, width: 15, borderRadius: 15, textAlign: "center",justifyContent:'center',alignItems:'center' }}>

                        <Text style={{color:'white',fontSize:10}}>✓</Text>
                        </View>
                        <Text style={{ textAlign: "center",marginHorizontal:10 }}>Everything looks good</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({});
