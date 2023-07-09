import { Tabs } from "expo-router";
import { Feather, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

function Layout() {
    return(
        <Tabs>
            <Tabs.Screen 
                name = {"index"} 
                options={{
                    tabBarLabel: "Planetas", 
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="planet" color={color} size={size}/>
                    )
                }}
            />
            <Tabs.Screen 
                name = {"activities"} 
                options={{
                    tabBarLabel: "Atividades", 
                    headerTitle: "Atividades 📖",
                    headerTintColor: "#8146DA",
                    tabBarIcon: ({color, size}) => (
                        <Feather name={"book"} color={color} size={size}/>
                    )
                }}
            />
            <Tabs.Screen 
                name = {"expo-auth-session"} 
                options={{
                    tabBarLabel: "Login", 
                    headerTitle: "Login com o DROPS",
                    headerTintColor: "#8146DA",
                    tabBarIcon: ({color, size}) => (
                        <Feather name={"user"} color={color} size={size}/>
                )
                }}
            />
             <Tabs.Screen 
                name = {"curiosities"} 
                options={{
                    tabBarLabel: "Curiosidades", 
                    headerTitle: "Curiosidades",
                    headerTintColor: "black",
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name={"emoticon-wink"} color={color} size={size}/>
                    )
                }}
            />
        </Tabs>
    )
}

export default Layout;
