import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { LoginAlt } from '../../components/buttonsComponents/loginAltButtons';
import { AnimatedLogo } from '../../components/imageComponents/animatedTheHubLogo';
import { CadasterInput } from '../../components/inputsComponents/cadasterInput';
import { Toastify } from "../../components/toastContainer";
import { globalStyles } from '../../css/globalStyles';


export default function Cadaster() {
    const router = useRouter();

    const [values, setValues] = useState<string[]>(Array(7).fill(''));
    const [valids, setValids] = useState<boolean[]>(Array(7).fill(false));
    const [errors, setErrors] = useState<string[]>(Array(7).fill('')); // <-- novo: mensagens de erro
    const [toast, setToast] = useState<{ message: string, type: 'info' | 'error' | 'success', key: number }>({ message: '', type: 'info', key: 0 })
    const [submitted, setSubmitted] = useState(false)

    function getFieldLabel(index: number): string {
        switch (index) {
            case 0: return "Nome";
            case 1: return "Email";
            case 2: return "Senha";
            case 3: return "Telefone";
            case 4: return "Cidade";
            case 5: return "Endereço";
            case 6: return "Estado";
            default: return `Campo ${index + 1}`
        }
    }

    // retorna string vazia se válido ou a mensagem de erro quando inválido
    function getFieldError(index: number, text: string) {
        const txt = text.trim();
        switch (index) {
            case 0: // Nome
                if (txt.length === 0) return 'Nome obrigatório';
                if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(txt)) return 'Nome não pode conter números ou símbolos';
                if (txt.length <= 4) return 'Nome deve ter ao menos 5 caracteres';
                return '';
            case 1: // Email
                if (txt.length === 0) return 'Email obrigatório';
                if (!/^[^@]+@gmail\.com$/.test(txt)) return 'Email inválido (use @gmail.com)';
                return '';
            case 2: // Senha
                if (txt.length === 0) return 'Senha obrigatória';
                if (txt.length < 6) return 'Senha deve ter ao menos 6 caracteres';
                return '';
            case 3: // Telefone
                const digits = text.replace(/\D/g, '');
                if (digits.length === 0) return 'Telefone obrigatório';
                if (!/^\d{8,}$/.test(digits)) return 'Telefone inválido (mínimo 8 dígitos)';
                return '';
            case 4:
                if (txt.length === 0) return 'Cidade obrigatória';
                if (txt.length < 3) return 'Cidade muito curta';
                return '';
            case 5:
                if (txt.length === 0) return 'Endereço obrigatório';
                if (txt.length < 4) return 'Endereço muito curto';
                return '';
            case 6:
                if (txt.length === 0) return 'Estado obrigatório';
                if (!/^[A-Za-z]{2}$/.test(txt)) return 'Digite a sigla do estado (ex: SP)';
                return '';
            default:
                return txt.length === 0 ? 'Campo obrigatório' : '';
        }
    }

    function checkValidity(index: number, text: string) {
        return getFieldError(index, text) === '';
    }

    // lógica de validação simples de exemplo — substitua por seu hook
    function validateField(index: number, text: string) {
        const err = getFieldError(index, text);
        const newValids = [...valids];
        const newErrors = [...errors];
        newValids[index] = err === '';
        newErrors[index] = err;
        setValids(newValids);
        setErrors(newErrors);
    }



    function handleChange(index: number, text: string) {
        const newValues = [...values];
        newValues[index] = text;
        setValues(newValues);

        // limpa erro apenas daquele campo enquanto digita
        const newErrors = [...errors];
        newErrors[index] = '';
        setErrors(newErrors);

        setSubmitted(false)
        validateField(index, text); // valida ao digitar
    }

    function handleContinue() {
        setSubmitted(true)
        // valida tudo e coleta mensagens
        const newErrors = values.map((val, idx) => getFieldError(idx, val));
        const newValids = newErrors.map(e => e === '');
        setErrors(newErrors);
        setValids(newValids);

        const firstInvalid = newValids.findIndex(v => !v);
        if (firstInvalid !== -1) {
            const label = getFieldLabel(firstInvalid);
            // também mostra a mensagem específica no toast (opcional)
            setToast({ message: `Erro em ${label}: ${newErrors[firstInvalid]}`, type: 'error', key: Date.now() });
            return;
        }

        setToast({ message: `Todos os campos válidos`, type: 'success', key: Date.now() });
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
                        <LoginAlt image={require('../../../assets/images/googleIcon.png')} text={'Faça login com o google'} />
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
                                    topText={getFieldLabel(idx)}
                                    placeholder="******"
                                    value={val}
                                    onChangeText={(text) => handleChange(idx, text)}
                                    isRequired={true}
                                    isValid={valids[idx]}
                                    showError={submitted}
                                    errorText={errors[idx]}
                                />
                            ))}
                        </View>

                        {/* Buttons */}
                        <View
                            style={[globalStyles.grayBorder]}
                            className='mt-[20px] border-t-[1px] gap-[20px] pt-[20px] items-center'>
                            <Pressable
                                onPress={handleContinue}
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
                                        Faça seu Login
                                    </Text>
                                </Pressable>
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <Toastify message={toast.message} type={toast.type as any} key={toast.key} />
        </ScrollView>
    );
}
