import { ScrollView, Text, View } from 'react-native';
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
        <View className='flex-[55%] ml-[5%] min-h-[200px] bg-white rounded-md '>
          <Text className='text-[16pt]'>TheHub é uma plataforma que conecta prestadores de serviços a clientes de forma eficiente e confiável. Nossa missão é facilitar o encontro entre quem oferece e quem busca serviços, promovendo oportunidades para todos os envolvidos.</Text>
        </View>

        {/* LOGIN AREA */}
        <View style={globalStyles.redColor} className='flex-[25%] rounded-md min-h-[200px] max-h-fit  mr-[5%]'>
          <Text className='text-[16pt] text-center'>Área de Login</Text>
        </View>
      </View>

    </ScrollView>
  );
}