import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { LoginAlt } from '../components/buttonsComponents/loginAltButtons';
import { CadasterInput } from '../components/inputsComponents/cadasterInput';
import { globalStyles } from '../css/globalStyles';

export default function Cadaster() {
    return (
        <ScrollView
            style={globalStyles.blackColor}
            className="flex-1"
            contentContainerStyle={{ flexGrow: 1 }}
        >

            <View className='w-full h-0 items-end '><Image style={[globalStyles.smallImageLogo,]} source={require('@/assets/images/thehubLogoFull.png')} /></View>

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
                        <LoginAlt image={require('@/assets/images/googleIcon.png')} text={'Faça login com o google'} />
                    </View>

                    {/* TextInputsArea */}
                    <View style={[globalStyles.grayBorder]} className='w-full mt-[20px]   border-t-[1px] pt-[20px]'>
                        {/* Top text */}
                        <Text
                            style={[globalStyles.JetBrainsFont, globalStyles.whiteFonts, globalStyles.largeFont]}
                            className='text-center mb-[15px]'>Informações necessárias</Text>

                        {/* Inputs */}
                        <View className='w-full grid grid-cols-3 max-h-fit '>
                            <CadasterInput topText={'Nome'} placeholder={'******'} value={''} onChangeText={function (text: string): void {
                                throw new Error('Function not implemented.');
                            }} />
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
                                <Pressable className="group/cadastro">
                                    <Text className="group-hover/cadastro:text-[19px] group-hover/cadastro:ml-[7px] transition-all duration-200">
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
