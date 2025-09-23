import { ScrollView, Text, View } from 'react-native';
import { LoginInput } from '../components/inputsComponents/loginInput';
import "../css/global.css";
import { globalStyles } from '../css/globalStyles';
export default function Login() {
  return (
    <ScrollView style={globalStyles.blackColor} className='flex-1 grid-flow-col pt-[20px]' >
      {/* Header */}
      <View className='w-full min-h-[80px] max-h-fit'>
        <Text style={globalStyles.highFont} className='text-[20pt] text-center text-white'>Bem Vindo ao TheHub</Text>
      </View>

      {/* Body. Main content of Page */}
      <View className='w-full flex-row justify-center gap-[1%]'>

        {/* Left Content(Presentation TheHub ) */}
        <View className='flex-[55%] items-center justify-center ml-[5%] min-h-[200px] bg-white rounded-md '>
          <Text style={globalStyles.highFont} className='text-[19pt]'>TheHub é uma plataforma que conecta prestadores de serviços a clientes de forma eficiente e confiável. Nossa missão é facilitar o encontro entre quem oferece e quem busca serviços, promovendo oportunidades para todos os envolvidos.<Text style={globalStyles.bronwFonts}>Venha fazer parte de nosso projeto</Text> </Text>
        </View>

        {/* LOGIN AREA */}
        <View style={globalStyles.grayColor} className='flex-[25%] rounded-md min-h-[400px]   max-h-fit  mr-[5%]'>
          <Text style={[globalStyles.highFont, globalStyles.whiteFonts]} className='text-[16pt] text-center'>Faça seu Login</Text>

          {/* formulário de login/Login form */}
          <View className='w-full flex-col items-center'>
            <LoginInput placeholder='Email. Ex(user@gmail)' title='Email' />
          </View>
        </View>
      </View>

    </ScrollView>
  );
}