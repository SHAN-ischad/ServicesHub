import Image from "next/image";

const LoginPage = () => {
  return (
    <main className=" min-h-screen bg-[#33302d]     ">
      {/* top Text */}
      <div className="w-full text-center ">
        <h1
          className="text-[#9900ff] text-2xl text-center "
          style={{ fontFamily: "ui-monospace" }}
        >
          Bem vindo ao seu Agente Ia oráculo perfeito para sua empresa
        </h1>
      </div>

      {/* div Pai de todo o formulário/father div of all form */}
      <div className="w-full h-full flex flex-row mt-[10%]">
        {/* lado Esquerdo, imagem/side left, image */}
        <div className="w-1/2 flex h-full flex-col gap-17.5  justify-center ml-[2%] ">
          <h1 className="text-[30pt] text-[#ffffff]">
            Faça login em nosso Serviço
          </h1>
          <Image src="/Login.svg" alt="image" width={350} height={350} />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
