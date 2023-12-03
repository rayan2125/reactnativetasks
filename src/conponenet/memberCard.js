import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MemberCard = ({ username }) => {
    return (
        <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
            <View style={{ flexDirection: "row", alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10 }}>
                <View style={{
                    margin: 6,
                    height: 70, width: 70, borderRadius: 100, justifyContent: "center", alignItems: 'center', backgroundColor: "#0098DB"
                }} >
                    <Image
                        source={require("../assets/Image/user.png")}
                        style={{ height: 70, width: 70, borderRadius: 99 }}
                        resizeMode='contain' />

                </View>
                <View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-around', width: '85%' }}>
                        <Text style={{ color: "black", fontSize: 18, fontWeight: "500" }}>{username}</Text>
                        <Text>Playing Xbo</Text>
                        <Text>5 min ago</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-around', width: '85%' }}>
                        <Text style={{ color: '#0098DB' }}>Screen Time</Text>
                        <Text style={{ color: '#0098DB' }}>App Limits</Text>
                        <Text style={{ color: '#0098DB' }}>Ativites</Text>
                    </View>
                </View>

            </View>
            <View style={{ backgroundColor: "black", height: 1, width: '100%', }}></View>
        </View>
    )
}

export default MemberCard

const styles = StyleSheet.create({})