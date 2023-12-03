import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import MemberCard from '../conponenet/memberCard';


const Member = () => {
    const [userInfo, setUserInfo] = useState(null);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/users');
                const data = await response.json();
                setUserInfo(data); // Assuming the API returns an array of user information
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <View style={{flex:1,margin:5}}>

            <FlatList
                data={userInfo}
                renderItem={({ item, index }) => {
                    const userName = item.name.firstname
                   
                    return (
                        <MemberCard
                        source={item.id==="1"?require("../assets/Image/user1.jpeg"):require("../assets/Image/user2.jpg")}
                        username={userName}
                        />
                    )
                }} />

        </View>
    );
};

const styles = StyleSheet.create({

});

export default Member;
