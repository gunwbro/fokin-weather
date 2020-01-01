import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOption = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#403B4A", "#e7e9bb"],
    title: "실안개야~~~",
    subtitle: "살짝 안개꼈엉"
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#000046", "#1CB5E0"],
    title: "엄훠 천둥번개야!!",
    subtitle: "깜짝 놀랄걸~~?"
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#c0c0aa", "#1cefff"],
    title: "보슬비가 내리네~~",
    subtitle: "머리 떡질거야"
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#3a7bd5", "#3a6073"],
    title: "비온다~!!~!!",
    subtitle: "우산 챙기도록!"
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "눈이다 눈",
    subtitle: "눈사람 만들자~~"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#00c6ff", "#0072ff"],
    title: "해가 쨍쨍~~",
    subtitle: "날도 좋은데 산책할까~?"
  },
  Clouds: {
    iconName: "cloud",
    gradient: ["#D3CCE3", "#E9E4F0"],
    title: "구름이 꼈넹",
    subtitle: "흐리다...내 마음도..."
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#70e1f5", "#ffd194"],
    title: "엷은 안개야~",
    subtitle: "실안개랑 뭔차이지"
  },
  Dust: {
    iconName: "weather-snowy",
    gradient: ["#EFEFBB", "#D4D3DD"],
    title: "어우 미세먼지",
    subtitle: "조심해!!ㅠㅠ 중국쉬끼덜"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOption[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOption[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOption[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOption[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left"
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
    textAlign: "left"
  },
  textContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 40,
    justifyContent: "center",
    flex: 1
  }
});
