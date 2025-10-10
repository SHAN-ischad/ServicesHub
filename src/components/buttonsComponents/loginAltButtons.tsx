import { Image, ImageSourcePropType, Pressable, Text } from "react-native";
import { globalStyles } from "../../css/globalStyles";

interface loginAltProps {
    image: ImageSourcePropType,
    text: string,

}
export function LoginAlt({ image, text }: loginAltProps) {
    return (
        <Pressable className="group flex-row gap-[5px] px-[4px] w-[270px] max-w-full items-center rounded-3xl border-white border-[1px] hover:rounded-none duration-200">
            <Image
                style={[globalStyles.verySmallImageLogo]}
                source={image}
                className="transition-all duration-200 group-hover:-rotate-12"
            />
            <Text
                style={[globalStyles.JetBrainsFont, globalStyles.smallFont, globalStyles.whiteFonts]}
                selectable={false}
            >
                {text}
            </Text>
        </Pressable>
    );
}