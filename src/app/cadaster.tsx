import { ScrollView, Text, View } from 'react-native';
import { LoginAlt } from '../components/buttonsComponents/loginAltButtons';
import { globalStyles } from '../css/globalStyles';

export default function Cadaster() {
    return (
        <ScrollView style={globalStyles.blackColor} className='justify-center' >
            <View className='w-full h-full justify-center items-center'>
                {/* Cadaster Content */}
                <View style={[globalStyles.grayColor,]} className='w-[50%] max-w-full items-center p-[10px] rounded-md'>
                    <Text style={[
                        globalStyles.JetBrainsFont,
                        globalStyles.largeFont,
                        globalStyles.whiteFonts
                    ]}
                    >Cadastro</Text>
                    {/* Botões da cadastro e login/Registration and login buttons  */}
                    <View className='w-full flex-col gap-[10px] mt-[15px] items-center'>
                        <LoginAlt image={require('@/assets/images/googleIcon.png')} text={'Faça login com o google'} />
                    </View>

                    {/* TextInputs */}
                    <View style={[globalStyles.grayBorder]} className='w-full mt-[20px] grid-cols-2  border-t-[1px] pt-[20px]'>
                        aaaaaaaa
                    </View>
                </View>

            </View>
        </ScrollView>
    );
}

{/* Inputs */ }
{/* <View className='w-full'>
                        <TextInput style={[globalStyles.JetBrainsFont, globalStyles.whiteColor]} className='p-[5px] rounded-md w-[30%]' />
                    </View>
                </View> */}