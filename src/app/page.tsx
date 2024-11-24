import Image from "next/image";
//import HeroForme from  "../../public/HeroForme.svg"
export default function Home() {
  return (
    <div>
      <main className="flex flex-col">
      <div className="flex relative">
      <div className="flex w-[100%] m-20 p-20 justify-center z-10 h-[732px]">
      <div className="flex flex-col w-[50%] gap-5 justify-center h-[100%]">
        <div className="flex w-[60%] ">
        <h1 className="text-4xl font-bold text-zinc-800">
        Apoio para Crescer com Confiança!
        </h1>
        </div>
        <div className="flex w-[60%]">
        <p className="text-xl text-zinc-800">
        Bem-vindo ao nosso espaço de descobertas! Estamos aqui para caminhar consigo, oferecendo apoio, orientação e uma abordagem personalizada que respeita o ritmo e as necessidades de cada criança.
        </p>
        </div>
        <div className="flex w-[60%]">
        <p className="text-xl text-zinc-800">
        Agendar
        </p>
        </div>
       
       </div>
       <div className="flex  bg-slate-900 w-[50%] items-center h-[100%] flex-row overflow-hidden">
        <div  className="flex  h-[550px] w-[630px]  ">
       <Image
          src={"/heroimage1.svg"}
          width={630}
          height={550}
          style={{objectFit: "contain"}}
          alt="hero image chindren 1"
        />
        
        </div>  
        <div  className="flex">
       <Image
          src={"/heroimage2.svg"}
         
          width={630}
          height={550}
         
          alt="hero image chindren 3"
        />
        
        </div>  
        <div  className="flex">
       <Image
          src={"/heroimage3.svg"}
          width={2000}
          height={550}
          style={{objectFit: "contain"}}
        
          alt="hero image chindren 2"
        />
        </div> 
       </div>
       </div>
       
        <div  className="flex w-screen absolute">
       <Image
          src={"/HeroForme.svg"}
          className="w-full"
          width={1480}
          height={840}
          style={{objectFit: "contain"}}
        
          alt="hero forme"
        />
        
        </div>  
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
