import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ThemeToggle from "@/components/ThemeToggle";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center gap-8 px-6">
        <View className="items-center gap-3">
          <Text className="text-3xl font-bold text-foreground">
            Theme Toggle
          </Text>
          <Text className="text-base text-foreground/60">
            Nativewind v5 + Tailwind CSS v4
          </Text>
        </View>

        <ThemeToggle />

        <View className="w-full max-w-sm gap-4">
          <View className="rounded-2xl border border-border bg-surface p-4">
            <Text className="text-lg font-semibold text-foreground">
              Card Title
            </Text>
            <Text className="mt-1 text-sm text-foreground/60">
              This card uses semantic theme colors that automatically adapt to
              your selected color scheme.
            </Text>
          </View>

          <View className="flex-row gap-4">
            <View className="flex-1 rounded-2xl bg-primary p-4">
              <Text className="text-sm font-medium text-white">Primary</Text>
            </View>
            <View className="flex-1 rounded-2xl bg-secondary p-4">
              <Text className="text-sm font-medium text-foreground">
                Secondary
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
