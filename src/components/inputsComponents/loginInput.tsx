import { globalStyles } from '@/src/css/globalStyles';
import { Text, TextInput, View } from 'react-native';


interface loginText {
    title: string,
    placeholder: string,
}
export function LoginInput({ title, placeholder }: loginText) {

    return (

        <View className='flex-col min-w-full max-w-[90px] gap-[3px]'>
            {/* Título/Title */}
            <Text className='justify-start ml-[5px]' style={globalStyles.mediumFont}>{title} <Text style={globalStyles.redFonts}>*</Text></Text>
            {/* input */}
            <TextInput
                style={[globalStyles.grayColor, globalStyles.whiteFonts, globalStyles.lowFont]}
                className='border-gray-300 border-[1px] p-[10px] rounded-md'
                placeholder={placeholder}
                selectionColor={"000"}
            />
        </View>

    );
}