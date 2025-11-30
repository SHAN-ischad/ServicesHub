import { CadasterInput } from '@/Components/inputsComponents/cadasterInput';
import { View } from 'react-native';

export default function Step1(props: {
    values: string[]
    valids: boolean[]
    errors: string[]
    onChange: (index: number, text: string) => void
}) {
    const { values, valids, errors, onChange } = props


    return (
        <View className='w-full grid gap-[8px] grid-cols-3'>
            <CadasterInput topText={'Nome'} placeholder={'Nome completo'} value={values[0]} onChangeText={(t) => onChange(0, t)} isValid={valids[0]} showError={!!errors[0]} errorText={errors[0]} isRequired />

            <CadasterInput topText={'Email'} placeholder={'seuEmail@gmail.com'} value={values[1]} onChangeText={(t) => onChange(1, t)} isValid={valids[1]} showError={!!errors[1]} errorText={errors[0]} isRequired />

            <CadasterInput topText={'Senha'} placeholder={'******'} value={values[2]} onChangeText={(t) => onChange(2, t)} isValid={valids[2]} showError={!!errors[2]} errorText={errors[2]} isRequired />
        </View>
    );
}