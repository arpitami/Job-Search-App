import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";


const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
          <Stack.Screen
            options={{
              headerStyle: { backgroundColor: COLORS.lightWhite },
              headerShadowVisible: false,
              headerRight: () => (
                <ScreenHeaderBtn iconUrl={images.profile} dimesion="100%" />
              ),
              headerLeft: () => (
                <ScreenHeaderBtn iconUrl={icons.menu} dimesion="60%" />
              ),
              headerTitle: "",
            }}
          />
        <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={false} > 
        <View style={{
            flex: 1, 
            padding: SIZES.medium,
        }}> 
        <Welcome/>
        <Popularjobs/>
        <Nearbyjobs/> 
    
        </View>
        </ScrollView>
    
        </SafeAreaView>
      );
    };
    export default Home;
    