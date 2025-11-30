import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import Step1 from './steps/step1';
import Step2 from './steps/step2';
// import { useRouter } from 'expo-router';
import { AnimatedLogo } from '../../Components/imageComponents/animatedTheHubLogo';
import { Toastify } from '../../Components/toastContainer';
import { globalStyles } from '../../css/globalStyles';

export default function Cadaster() {
    //   const router = useRouter();
    const totalFields = 6;
    const [currentStep, setCurrentStep] = useState(0);
    const [values, setValues] = useState<string[]>(Array(totalFields).fill(''));
    const [valids, setValids] = useState<boolean[]>(Array(totalFields).fill(false));
    const [errors, setErrors] = useState<string[]>(Array(totalFields).fill(''));
    const [toast, setToast] = useState({ message: '', type: 'info' as any, key: 0 });

    function handleChange(index: number, text: string) {
        const nv = [...values]; nv[index] = text; setValues(nv);
        console.log("handleChange", index, text)
        // validação instantânea opcional:
        const err = getFieldError(index, text);
        const ne = [...errors]; ne[index] = err; setErrors(ne);
        const nvld = [...valids]; nvld[index] = err === ''; setValids(nvld);
    }

    React.useEffect(() => {
        console.log('Values:', values)
    }, [values])

    const steps = [
        <Step1 values={values} valids={valids} errors={errors} onChange={handleChange} key="s1" />,
        <Step2 values={values} valids={valids} errors={errors} onChange={handleChange} key="s2" />,
    ];

    function getFieldIndicesForStep(step: number) {
        if (step === 0) return [0, 1, 2];
        if (step === 1) return [3, 4, 5];
        return [];
    }

    function getFieldError(index: number, text: string) {
        const t = (text || '').trim();
        if (!t) return 'Obrigatório';
        if (index === 0 && !/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(t)) return 'Nome inválido';
        if (index === 1 && !/^[^@]+@/.test(t)) return 'Email inválido';
        return '';
    }

    function handleNext() {
        const indices = getFieldIndicesForStep(currentStep);
        let ok = true;
        const newErrors = [...errors];
        indices.forEach(i => {
            const err = getFieldError(i, values[i]);
            newErrors[i] = err;
            if (err) ok = false;
        });
        setErrors(newErrors);
        setValids(prev => prev.map((v, idx) => newErrors[idx] === ''));

        if (!ok) {
            setToast({ message: 'Corrija os campos destacados', type: 'error', key: Date.now() });
            return;
        }

        if (currentStep < steps.length - 1) setCurrentStep(s => s + 1);
        else setToast({ message: 'Cadastro concluído', type: 'success', key: Date.now() });
    }

    function handleBack() {
        if (currentStep > 0) setCurrentStep(s => s - 1);
    }

    return (
        <ScrollView style={globalStyles.blackColor} className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
            <View className='w-full h-0 items-end '><AnimatedLogo /></View>
            <View className="w-full flex-1 my-[2%] justify-center items-center">
                <View style={[globalStyles.grayColor]} className='w-[50%]  max-w-full items-center p-[10px] py-[20px] rounded-md'>
                    <Text className='mb-[2%]' style={[globalStyles.JetBrainsFont, globalStyles.largeFont, globalStyles.whiteFonts]}>Cadastro</Text>

                    {steps[currentStep]}


                    <View className='w-full flex-row justify-between mt-[20px]'>
                        <Pressable onPress={handleBack} style={[globalStyles.whiteButton]} className='p-[12px] rounded-md hover:p-[14px] hover:bg-[#3F3F3E] hover:border-[1px] hover:border-white transition-border duration-200'>
                            <Text style={globalStyles.JetBrainsFont}>Voltar</Text>
                        </Pressable>
                        <Pressable onPress={handleNext} style={[globalStyles.purpleButton]} className='p-[12px] rounded-md hover:p-[14px] hover:bg-[#3F3F3E] hover:border-[1px] hover:border-white transition-border duration-200'>
                            <Text style={[globalStyles.JetBrainsFont, globalStyles.whiteFonts]}>Continuar</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            <Toastify message={toast.message} type={toast.type} key={toast.key} />
        </ScrollView>
    );
}