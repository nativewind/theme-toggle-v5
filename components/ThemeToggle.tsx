import { useEffect } from "react";
import { Appearance, Pressable, useColorScheme, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import Feather from "@expo/vector-icons/Feather";

export default function ThemeToggle() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const translateX = useSharedValue(isDark ? 46 : 3.5);

  useEffect(() => {
    translateX.value = withSpring(isDark ? 46 : 3.5, {
      damping: 15,
      stiffness: 150,
    });
  }, [isDark, translateX]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const toggle = () => {
    Appearance.setColorScheme(isDark ? "light" : "dark");
  };

  return (
    <Pressable
      onPress={toggle}
      className="relative h-12 w-24 flex-row items-center justify-between rounded-full bg-secondary p-1"
    >
      <Icon name="sun" />
      <Icon name="moon" />
      <Animated.View
        style={animatedStyle}
        className="absolute h-10 w-10 items-center justify-center rounded-full bg-background"
      />
    </Pressable>
  );
}

function Icon({ name }: { name: "sun" | "moon" }) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View className="z-10 h-10 w-10 items-center justify-center rounded-full">
      <Feather name={name} size={20} color={isDark ? "white" : "black"} />
    </View>
  );
}
