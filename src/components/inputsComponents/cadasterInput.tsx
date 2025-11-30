import { Text, TextInput, View } from 'react-native';
import { globalStyles } from '../../css/globalStyles';

interface cadasterInputProps {
    topText: string,
    placeholder: string,
    isRequired?: boolean
    value: string,
    onChangeText: (text: string) => void,
    isValid?: boolean // <--- nova prop opcional
    showError?: boolean,
    errorText?: string // <-- nova prop: mensagem de erro
}
export function CadasterInput({ topText, placeholder, isRequired, value, onChangeText, isValid, showError, errorText }: cadasterInputProps) {

    const handleChange = (text: string) => {
        console.log(`[CadasterInput] ${topText} onChangeText:`, text)
        onChangeText(text)
    }


    // borda verde quando isValid === true, cinza padrão quando false ou undefined
    const trimmed = value?.trim?.() ?? ''
    const borderStyle = {
        borderColor: isValid === true ? '#34D399' :
            (isValid === false && (showError || trimmed.length > 0)) ? '#EF4444' : '#3a3a3a'
    };

    return (

        <>
            <View className='flex-col gap-[6px]'>
                <Text
                    style={[globalStyles.highFont, globalStyles.whiteFonts, globalStyles.JetBrainsFont]}
                    className='justify-start ml-[5px]'>{topText}
                    {isRequired ? <Text style={[globalStyles.redFonts, globalStyles.lowFont]} className='bottom-[5px]'>*</Text> : null}
                </Text>
                <TextInput
                    placeholder={placeholder}
                    defaultValue={value ?? ""}
                    onChangeText={handleChange}
                    style={[globalStyles.JetBrainsFont, globalStyles.smallFont, globalStyles.grayBorder, globalStyles.blackColor, globalStyles.whiteFonts, borderStyle]}
                    className='w-[200px] max-w-full p-[10px] rounded-md border-[1px] focus:outline-none transition-border duration-200'
                    underlineColorAndroid="transparent"
                />
                {/* mostra a mensagem de erro quando for para exibir */}
                {showError && errorText ? (
                    <Text style={[globalStyles.lowFont, globalStyles.redFonts, { marginLeft: 6 }]}>{errorText}</Text>
                ) : null}
            </View>
        </>
    );
}