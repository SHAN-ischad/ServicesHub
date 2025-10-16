import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { LoginInput } from '../components/inputsComponents/loginInput';
import { Toastify } from '../components/toastContainer';
import "../css/global.css";
import { globalStyles } from '../css/globalStyles';
import { useLoginAuth } from '../hooks/loginAuth';


export default function Login() {
  // Variáveis de ambiente/Environment variables
  const router = useRouter()
  const { login } = useLoginAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [toast, setToast] = useState({ message: '', type: 'info', key: 0 })

  async function handleLogin() {
    if (!email && !password) {
      setToast({ message: "Preencha o e-mail e a senha.", type: "error", key: Date.now() });
      return;
    }

    const result = await login(email, password);
    if (result.success) {
      setToast({ message: "Login realizado com sucesso!", type: "success", key: Date.now() });
    } else if (result.error) {
      setToast({ message: result.error, type: "error", key: Date.now() });
    } else {
      setToast({ message: "Erro desconhecido", type: "info", key: Date.now() });
    }
  }


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
          className="text-[20pt] font-bold text-center text-white"
        >
          Bem Vindo ao <Text style={[globalStyles.purpleFonts, globalStyles.megaFont, globalStyles.googleScansCode]}>TheHub</Text>
        </Text>

        <Image
          style={[
            globalStyles.smallImageLogo
          ]}
          source={require('../../assets/images/thehubLogoFull.png')}
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
              placeholder="Email. Ex(user@gmail)"
              title="Email"
              value={email}
              onChangeText={setEmail}
            />

            <LoginInput
              placeholder="Senha/Password"
              title="Senha"
              value={password}
              onChangeText={setPassword} />

            {/* Button */}
            <View className="mt-[30px]">
              <Pressable
                onPress={handleLogin}
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
                Não possui conta?
                <Pressable
                  onPress={() => { router.push('/cadaster') }}
                  className="group/cadastro">
                  <Text
                    style={[globalStyles.purpleFonts]}
                    className="group-hover/cadastro:text-[19px] group-hover/cadastro:ml-[7px] transition-all duration-200">
                    {" "}Faça seu cadastro
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
