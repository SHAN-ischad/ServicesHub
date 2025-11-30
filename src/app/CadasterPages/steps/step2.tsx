import { CadasterInput } from '@/Components/inputsComponents/cadasterInput';
import { View } from 'react-native';



export default function Steps2(props: {
    values: string[]
    valids: boolean[]
    errors: string[]
    onChange: (index: number, text: string) => void
}) {
    return (
        <View className='w-full grid, gap-[8px] grid-cols-3'>

            <CadasterInput topText={'Telefone'}
                placeholder={'(xx) xxxxx-xxxx'}
                value={props.values[3]}
                onChangeText={(t) => props.onChange(3, t)}
                isValid={props.valids[3]}
                showError={!!props.errors[3]}
                errorText={props.errors[3]}
                isRequired />

            <CadasterInput topText={'Código Postal'}
                placeholder={'00000-000'}
                value={props.values[4]}
                onChangeText={(t) => props.onChange(4, t)}
                isValid={props.valids[4]}
                showError={!!props.errors[4]}
                errorText={props.errors[4]}
                isRequired />

            <CadasterInput topText={'Endereço'}
                placeholder={'Rua, número, complemento'}
                value={props.values[5]}
                onChangeText={(t) => props.onChange(5, t)}
                isValid={props.valids[5]}
                showError={!!props.errors[5]}
                errorText={props.errors[5]}
                isRequired />
        </View>
    );
}