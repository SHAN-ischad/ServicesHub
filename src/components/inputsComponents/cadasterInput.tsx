import { Text, TextInput, View } from 'react-native';
import { globalStyles } from '../../css/globalStyles';


interface cadasterInputProps {
    topText: string,
    placeholder: string,
    isRequired?: boolean
    value: string,
    onChangeText: (text: string) => void
}
export function CadasterInput({ topText, placeholder, isRequired, value, onChangeText }: cadasterInputProps) {
    return (

        <>
            <View className='flex-col gap-[10px]'>
                <Text
                    style={[globalStyles.highFont, globalStyles.whiteFonts, globalStyles.JetBrainsFont]}
                    className='justify-start ml-[5px]'>{topText}<Text style={[globalStyles.redFonts, globalStyles.lowFont]} className='bottom-[5px]'>*</Text></Text>
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    style={[globalStyles.JetBrainsFont, globalStyles.smallFont, globalStyles.grayBorder, globalStyles.blackColor, globalStyles.whiteFonts]}
                    className='w-[200px] max-w-full p-[10px] rounded-md border-[1px] focus:outline-none' />
            </View>
        </>
    );
}