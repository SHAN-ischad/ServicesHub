import { Pressable, ScrollView, Text, View } from 'react-native';
import { LoginInput } from '../components/inputsComponents/loginInput';
import "../css/global.css";
import { globalStyles } from '../css/globalStyles';


export default function Login() {
  // variáveis da página/page variables


  return (
    <ScrollView style={globalStyles.blackColor} className='flex-1 grid-flow-col pt-[20px]' >
      {/* Header */}
      <View className='w-full min-h-[80px] max-h-fit'>
        <Text style={[globalStyles.extraLargeFont, globalStyles.JetBrainsFont]} className='text-[20pt] text-center text-white'>Bem Vindo ao TheHub</Text>
      </View>

      {/* Body. Main content of Page */}
      <View className='w-full flex-row justify-center gap-[1%]'>

        {/* Left Content(Presentation TheHub ) */}
        <View style={globalStyles.purpleColor} className='flex-[55%] items-center justify-center ml-[5%] min-h-[200px] rounded-md '>
          <Text style={[globalStyles.highFont, globalStyles.whiteFonts, globalStyles.JetBrainsFont]} className='text-[19pt]'>TheHub é uma plataforma que conecta prestadores de serviços a clientes de forma eficiente e confiável. Nossa missão é facilitar o encontro entre quem oferece e quem busca serviços, promovendo oportunidades para todos os envolvidos.<Text style={[]}>Venha fazer parte de nosso projeto</Text> </Text>
        </View>

        {/* LOGIN AREA */}
        <View style={globalStyles.grayColor} className='flex-[25%] rounded-md min-h-[400px]   max-h-fit  mr-[5%]'>
          <Text style={[globalStyles.highFont, globalStyles.whiteFonts]} className='text-[16pt] text-center mt-[20px]'>Faça seu Login</Text>

          {/* formulário de login/Login form */}
          <View className='w-full gap-[15px] flex-col items-center'>
            <LoginInput placeholder='Email. Ex(user@gmail)' title='Email' />
            <LoginInput placeholder='Senha/Password' title='Senha' />

            {/* Button */}
            <View className='mt-[30px]'>
              <Pressable style={[globalStyles.purpleButton]} className='w-[160px] p-[20px] rounded-md items-center '><Text style={[globalStyles.JetBrainsFont, globalStyles.whiteFonts]}>Entrar</Text></Pressable>
            </View>
            {/* cadastro/cadaster */}
            <View className='w-full justify-center flex-row items-center'>
              <Text style={[globalStyles.JetBrainsFont, globalStyles.lowFont, globalStyles.whiteFonts]}>Não possui conta? <Pressable className='group/cadastro'><Text className='group-hover/cadastro:text-[19px] group-hover/cadastro:ml-[7px] transition-all duration-200 '>Faça seu cadastro</Text></Pressable></Text>
            </View>
          </View>
        </View>
      </View>

    </ScrollView>
  );
}