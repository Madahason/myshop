import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 54,
    },
    image: {
        width: 90,
        height: 50
    },
    title: {
        color: colors.green,
        fontSize: 26,
        fontWeight: '500',
        paddingHorizontal: 16,
    }
})