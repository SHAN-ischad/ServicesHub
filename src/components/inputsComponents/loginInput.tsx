import { globalStyles } from '@/src/css/globalStyles';
import { Text, TextInput, View } from 'react-native';


interface loginText {
    title: string,
    placeholder: string,
    keyboardType: string | "email-address" | "password",
}
export function LoginInput({ title, placeholder, keyboardType }: loginText) {

    return (

        <View className='flex-col min-w-full max-w-[90px] gap-[3px]'>
            {/* Título/Title */}
            <Text className='justify-start ml-[5px]' style={[globalStyles.highFont, globalStyles.whiteFonts, globalStyles.JetBrainsFont]}>{title}</Text>
            {/* input */}
            <TextInput
                style={[globalStyles.grayColor, globalStyles.blackColor, globalStyles.smallFont, globalStyles.JetBrainsFont]}
                className='border-gray-300 bg-white border-[1px] p-[10px] rounded-md'
                placeholder={placeholder}
                selectionColor={"000"}

            />
        </View>

    );
}