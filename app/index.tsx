import { Text, View } from "react-native";

import ThemeToggle from "@/components/ThemeToggle";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center gap-8 bg-white px-6 pt-safe pb-safe dark:bg-gray-900">
      <View className="items-center gap-3">
        <Text className="text-3xl font-bold text-gray-900 dark:text-white">
          Theme Toggle
        </Text>
        <Text className="text-base text-gray-500 dark:text-gray-400">
          Nativewind v5 + Tailwind CSS v4
        </Text>
      </View>

      <ThemeToggle />

      <View className="w-full max-w-sm gap-4">
        <View className="rounded-2xl border border-gray-200 bg-gray-100 p-4 dark:border-gray-700 dark:bg-gray-800">
          <Text className="text-lg font-semibold text-gray-900 dark:text-white">
            Card Title
          </Text>
          <Text className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            This card uses semantic theme colors that automatically adapt to
            your selected color scheme.
          </Text>
        </View>

        <View className="flex-row gap-4">
          <View className="flex-1 rounded-2xl bg-blue-500 p-4 dark:bg-blue-400">
            <Text className="text-sm font-medium text-white">Primary</Text>
          </View>
          <View className="flex-1 rounded-2xl bg-gray-200 p-4 dark:bg-gray-700">
            <Text className="text-sm font-medium text-gray-900 dark:text-white">
              Secondary
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
