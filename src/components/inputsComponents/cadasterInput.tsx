import { Text, TextInput, View } from 'react-native';
import { globalStyles } from '../../css/globalStyles';

interface cadasterInputProps {
    topText: string,
    placeholder: string,
    isRequired?: boolean
    value: string,
    onChangeText: (text: string) => void,
    isValid?: boolean // <--- nova prop opcional
}
export function CadasterInput({ topText, placeholder, isRequired, value, onChangeText, isValid }: cadasterInputProps) {
    // borda verde quando isValid === true, cinza padrão quando false ou undefined
    const borderStyle = { borderColor: isValid ? '#34D399' : '#3a3a3a' }; // #34D399 = emerald-400

    return (

        <>
            <View className='flex-col gap-[10px]'>
                <Text
                    style={[globalStyles.highFont, globalStyles.whiteFonts, globalStyles.JetBrainsFont]}
                    className='justify-start ml-[5px]'>{topText}
                    {isRequired ? <Text style={[globalStyles.redFonts, globalStyles.lowFont]} className='bottom-[5px]'>*</Text> : null}
                </Text>
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    style={[globalStyles.JetBrainsFont, globalStyles.smallFont, globalStyles.grayBorder, globalStyles.blackColor, globalStyles.whiteFonts, borderStyle]}
                    className='w-[200px] max-w-full p-[10px] rounded-md border-[1px] focus:outline-none transition-border duration-200'
                    underlineColorAndroid="transparent"
                />
            </View>
        </>
    );
}