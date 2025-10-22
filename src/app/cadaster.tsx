import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { LoginAlt } from '../components/buttonsComponents/loginAltButtons';
import { AnimatedLogo } from '../components/imageComponents/animatedTheHubLogo';
import { CadasterInput } from '../components/inputsComponents/cadasterInput';
import { globalStyles } from '../css/globalStyles';

export default function Cadaster() {
    const router = useRouter();

    // exemplo: 6 campos de teste
    const [values, setValues] = useState<string[]>(Array(6).fill(''));
    const [valids, setValids] = useState<boolean[]>(Array(6).fill(false));

    // lógica de validação simples de exemplo — substitua por seu hook
    function validateField(index: number, text: string) {
        const top = index; // só exemplo: você pode usar mapa de tipos por índice
        let ok = false;
        // Exemplo: se for o primeiro campo trate como nome (min 3 chars)
        if (index === 0) ok = text.trim().length >= 3;
        // Exemplo: segundo campo como email contendo @gmail.com
        else if (index === 1) ok = /^[^@]+@gmail\.com$/.test(text);
        // outros campos: mínima existência
        else ok = text.trim().length > 0;

        const newValids = [...valids];
        newValids[index] = ok;
        setValids(newValids);
    }

    function handleChange(index: number, text: string) {
        const newValues = [...values];
        newValues[index] = text;
        setValues(newValues);

        validateField(index, text); // valida ao digitar
    }

    return (
        <ScrollView
            style={globalStyles.blackColor}
            className="flex-1"
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View className='w-full h-0 items-end '><AnimatedLogo /></View>

            <View className="w-full flex-1 my-[2%]  justify-center items-center">
                {/* Cadaster Content */}
                <View style={[globalStyles.grayColor,]} className='w-[50%] max-w-full items-center p-[10px] py-[20px] rounded-md'>
                    <Text style={[
                        globalStyles.JetBrainsFont,
                        globalStyles.largeFont,
                        globalStyles.whiteFonts
                    ]}
                    >Cadastro</Text>
                    {/* Botões da cadastro e login/Registration and login buttons  */}
                    <View className='w-full flex-col gap-[10px] mt-[15px] items-center'>
                        <LoginAlt image={require('../../assets/images/googleIcon.png')} text={'Faça login com o google'} />
                    </View>

                    {/* TextInputsArea */}
                    <View style={[globalStyles.grayBorder]} className='w-full mt-[20px]   border-t-[1px] pt-[20px]'>
                        {/* Top text */}
                        <Text
                            style={[globalStyles.JetBrainsFont, globalStyles.whiteFonts, globalStyles.largeFont]}
                            className='text-center mb-[15px]'>Informações necessárias</Text>

                        {/* Inputs */}
                        <View className='w-full grid gap-[8px] grid-cols-3 max-h-fit '>
                            {values.map((val, idx) => (
                                <CadasterInput
                                    key={idx}
                                    topText={`Campo ${idx + 1}`}
                                    placeholder="******"
                                    value={val}
                                    onChangeText={(text) => handleChange(idx, text)}
                                    isRequired={true}
                                    isValid={valids[idx]}
                                />
                            ))}
                        </View>

                        {/* Buttons */}
                        <View
                            style={[globalStyles.grayBorder]}
                            className='mt-[20px] border-t-[1px] gap-[20px] pt-[20px] items-center'>
                            <Pressable
                                style={[
                                    globalStyles.purpleButton
                                ]}
                                className="w-[160px] p-[20px] rounded-md items-center transition-all duration-200 hover:bg-[#3A3A3A] hover:border-[1px] hover:border-purple-600 active:border-[#FFFFFF]"
                            >
                                <Text selectable={false} style={[globalStyles.JetBrainsFont, globalStyles.whiteFonts]}>Continuar</Text>

                            </Pressable>

                            {/* possuí conta/ have account */}
                            <Text
                                selectable={false}
                                style={[
                                    globalStyles.JetBrainsFont,
                                    globalStyles.smallFont,
                                    globalStyles.whiteFonts
                                ]}
                            >
                                Já possuí uma conta?
                                <Pressable
                                    onPress={() => { router.replace('/') }}
                                    className="group/cadastro">
                                    <Text
                                        style={[globalStyles.purpleFonts]}
                                        className="group-hover/cadastro:text-[19px] group-hover/cadastro:ml-[7px] transition-all duration-200">
                                        {''} Faça seu Login
                                    </Text>
                                </Pressable>
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
