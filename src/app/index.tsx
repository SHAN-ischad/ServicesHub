import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { LoginInput } from '../components/inputsComponents/loginInput';
import "../css/global.css";
import { globalStyles } from '../css/globalStyles';

// componentes animados/animated
export default function Login() {
  return (
    <ScrollView
      style={[
        globalStyles.blackColor
      ]}
      className="flex-1 grid-flow-col max-lg:p-[2%] max-lg:pb-[4%]"
    >
      {/* Header */}
      <View className="w-full flex-row justify-center items-center min-h-[80px] max-h-fit">
        <Text
          style={[
            globalStyles.extraLargeFont,
            globalStyles.JetBrainsFont
          ]}
          className="text-[20pt] text-center text-white"
        >
          Bem Vindo ao TheHub
        </Text>

        <Image
          style={[
            globalStyles.smallImageLogo
          ]}
          source={require('@/assets/images/thehubLogoFull.png')}
        />
      </View>

      {/* Body. Main content of Page */}
      <View className="w-full max-lg:flex-col max-lg:gap-[3%] flex-row justify-center gap-[1%]">

        {/* Left Content (Presentation TheHub) */}
        <View
          style={[
            // globalStyles.purpleColor
          ]}
          className="flex-[55%] max-lg:w-full max-lg:ml-0 max-lg:min-h-[300px] p-[10px] bg-gradient-to-r from-[#8333FF] to-[#3F3F3E]  items-center justify-center ml-[5%] min-h-[200px] rounded-md"
        >
          <Text
            selectable={false}
            style={[
              globalStyles.highFont,
              globalStyles.whiteFonts,
              globalStyles.JetBrainsFont
            ]}
            className="text-[29pt]"
          >
            Armazene todo o seu sonho em um só lugar.
            <Text>Venha fazer parte de nosso projeto</Text>
          </Text>
        </View>

        {/* LOGIN AREA */}
        <View
          style={[
            globalStyles.grayColor
          ]}
          className="flex-[25%] p-[10px] rounded-md min-h-[400px] max-h-fit mr-[5%] max-lg:mr-0 min-w-fit"
        >
          <Text
            style={[
              globalStyles.highFont,
              globalStyles.whiteFonts,
              globalStyles.JetBrainsFont
            ]}
            className="text-[16pt] text-center mt-[20px]"
          >
            Faça seu Login
          </Text>

          {/* formulário de login/Login form */}
          <View className="w-full gap-[15px] flex-col items-center">
            <LoginInput
              keyboardType="email-address"
              placeholder="Email. Ex(user@gmail)"
              title="Email"
            />

            <LoginInput
              keyboardType="password"
              placeholder="Senha/Password"
              title="Senha"
            />

            {/* Button */}
            <View className="mt-[30px]">
              <Pressable
                style={[
                  globalStyles.purpleButton
                ]}
                className="w-[160px] p-[20px] rounded-md items-center transition-all duration-200 hover:bg-[#3A3A3A] hover:border-[1px] hover:border-purple-600 active:border-[#FFFFFF]"
              >
                <Text
                  selectable={false}
                  style={[
                    globalStyles.JetBrainsFont,
                    globalStyles.whiteFonts
                  ]}
                >
                  Entrar
                </Text>
              </Pressable>
            </View>

            {/* cadastro/cadaster */}
            <View className="w-full justify-center flex-row items-center">
              <Text
                selectable={false}
                style={[
                  globalStyles.JetBrainsFont,
                  globalStyles.smallFont,
                  globalStyles.whiteFonts
                ]}
              >
                Não possui conta?{" "}
                <Pressable className="group/cadastro">
                  <Text className="group-hover/cadastro:text-[19px] group-hover/cadastro:ml-[7px] transition-all duration-200">
                    Faça seu cadastro
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
