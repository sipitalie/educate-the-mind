import Image from "next/image";
import { Carousel } from "./components/carousel";
import { ScheduleButton } from "./components/scheduleButton";
import { OvalForm1 } from "./components/oval/ovalForm1";
//import HeroForme from  "../../public/HeroForme.svg"
export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex flex-col">
      <div className="flex flex-col items-center  relative">
      <header className="flex fixed w-full items-center justify-center  bg-[#FFF5E1] h-24 z-30">
        <nav className="flex flex-row w-full justify-between  max-w-screen-2xl">
          <div className="flex items-center hover:cursor-pointer">
            <a>Educar Mentes</a>
          </div>
          <ul className="flex  flex-row justify-between items-center gap-5 ">
            <li className="flex font-poppins hover:cursor-pointer hover:text-[#F18063]"  >Home</li>
            <li className="flex font-poppins hover:cursor-pointer hover:text-[#F18063]" >Sobre Nós</li>
            <li className="flex font-poppins hover:cursor-pointer hover:text-[#F18063]" >Serviços</li>
            <li className="flex font-poppins hover:cursor-pointer hover:text-[#F18063]" >Team</li>
            <li className="flex font-poppins hover:cursor-pointer hover:text-[#F18063]" >Contactos</li>
          </ul>
          <div>
          <ScheduleButton/>
          </div>
          
         
        </nav>
      </header>
      <div className="flex w-full max-w-screen-2xl justify-center mt-32 z-10 h-[732px]">
      <div className="flex flex-col w-[50%] gap-5 justify-center h-[100%]">
        <div className="flex w-[60%]">
        <h1 className="font-preahvihear text-6xl leading-[4.8rem] text-zinc-800">
        Apoio para Crescer com Confiança!
        </h1>
        </div>
        <div className="flex w-[70%]">
        <p className="text-xl text-zinc-800 font-poppins leading-8">
        Bem-vindo ao nosso espaço de descobertas! Estamos aqui para caminhar consigo, oferecendo apoio, orientação e uma abordagem personalizada que respeita o ritmo e as necessidades de cada criança.
        </p>
        </div>
       <ScheduleButton/>
       
       </div>
      
       <div className="flex w-[50%] items-center">
          <Carousel/>
       </div>
       </div>
       
        <div  className="flex w-screen absolute">
       <Image
          src={"/bgImage.png"}
          className="w-full"
          width={1480}
          height={840}
          style={{objectFit: "contain"}}
        
          alt="hero forme"
        />
         
        </div>  
       
        </div>
       <div className="flex flex-col relative w-full items-center h-lvh mt-[30%]">
        <div className="flex flex-col  items-center gap-10 max-w-screen-2xl">
          <div className="flex  flex-col text-center font-preahvihear" > 
            <span className="text-[#011627] relative text-5xl">
              <p>Porquê escolher</p>
              <span className="absolute right-0 w-[50%] bg-white">
                <svg width="178" height="18" viewBox="0 0 258 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 14.043C37.5 5.7097 136.2 -5.95697 255 14.043" stroke="#55BEDE" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </span>
            </span>
            <span className="text-[#011627] mt-4 text-5xl">o nosso centro?</span>
          </div>
          <div className="flex justify-center items-center" >
            <div className="flex justify-center gap-10 items-center">
              <span>
                <svg width="275" height="1" viewBox="0 0 275 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="4.37114e-08" y1="0.5" x2="275" y2="0.500024" stroke="#C2C7CB"/>
                </svg>
              </span>
              <span>
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.40193 1.5C9.55663 -0.500003 12.4434 -0.5 13.5981 1.5L21.3923 15C22.547 17 21.1036 19.5 18.7942 19.5H3.20577C0.896367 19.5 -0.547005 17 0.607695 15L8.40193 1.5Z" fill="#C2C7CB"/>
                </svg>
              </span>
              <span>
                <svg width="275" height="1" viewBox="0 0 275 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="4.37114e-08" y1="0.5" x2="275" y2="0.500024" stroke="#C2C7CB"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="flex max-w-[49.625rem]" >
            <p className="text-[#606060] text-center leading-8 font-poppins text-xl">
              Aqui, acreditamos que cada criança é única e especial, com um potencial que merece ser explorado e apoiado. Sou uma profissional dedicada e especializada em terapia ocupacional, focada em ajudar crianças com necessidades especiais a desenvolver as suas capacidades motoras, sensoriais e sociais, de uma forma divertida e acolhedora.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10  gap-x-24 max-w-[71.5rem]">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center justify-end">
                  <div className="flex">
                  <p className="text-right font-preahvihear text-2xl text-[#011627]">Agendamento Flexível</p>
                  </div>
                  <div className="flex w-9 ml-4">
                      <span className="flex w-[34px] h-[34px] items-center justify-center border-[#D2D2D2] border rounded-full">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.6667 2.66675H3.33334C2.59696 2.66675 2.00001 3.2637 2.00001 4.00008V13.3334C2.00001 14.0698 2.59696 14.6667 3.33334 14.6667H12.6667C13.4031 14.6667 14 14.0698 14 13.3334V4.00008C14 3.2637 13.4031 2.66675 12.6667 2.66675Z" stroke="#5CCC95" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10.6667 1.33325V3.99992" stroke="#5CCC95" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M5.33334 1.33325V3.99992" stroke="#5CCC95" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2.00001 6.66675H14" stroke="#5CCC95" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                </span>
                </div>   
              </div>
              
              <p className="text-justify font-poppins text-xl text-[#606060]">Facilitamos a sua jornada com horários adaptáveis e atendimento presencial ou online. Escolha a melhor opção para a sua rotina, com total comodidade e praticidade, seja de manhã, tarde ou noite. Reserve já o seu horário e cuide do seu bem-estar de forma simples e eficiente.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center justify-start">
                <div className="flex w-9 mr-4">
                <span className="flex w-[34px] h-[34px] items-center justify-center border-[#D2D2D2] border rounded-full">
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <g clipPath="url(#clip0_1_87)">
                     <path d="M13.9146 3.2994C13.5741 2.95874 13.1698 2.6885 12.7248 2.50413C12.2799 2.31975 11.8029 2.22485 11.3213 2.22485C10.8396 2.22485 10.3627 2.31975 9.91771 2.50413C9.47274 2.6885 9.06845 2.95874 8.72795 3.2994L8.02128 4.00607L7.31461 3.2994C6.62682 2.61161 5.69397 2.22521 4.72128 2.22521C3.74859 2.22521 2.81574 2.61161 2.12795 3.2994C1.44015 3.9872 1.05375 4.92005 1.05375 5.89274C1.05375 6.86543 1.44015 7.79828 2.12795 8.48607L2.83461 9.19274L8.02128 14.3794L13.2079 9.19274L13.9146 8.48607C14.2553 8.14557 14.5255 7.74128 14.7099 7.29631C14.8943 6.85133 14.9892 6.3744 14.9892 5.89274C14.9892 5.41108 14.8943 4.93414 14.7099 4.48917C14.5255 4.04419 14.2553 3.63991 13.9146 3.2994Z" stroke="#F4A664" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                   </g>
                   <defs>
                    <clipPath id="clip0_1_87">
                      <rect width="16" height="16" fill="white" transform="translate(0.0212784 0.226074)"/>
                    </clipPath>
                   </defs>
                  </svg>
                </span>   
                </div> 
                <div className="flex">
                    <p  className="text-left font-preahvihear text-2xl text-[#011627]" >Apoio Especializado</p>
                </div>
                 
              </div> 
              <p className="text-justify font-poppins text-xl text-[#606060]">
              Oferecemos suporte integral e personalizado para o desenvolvimento e bem-estar de crianças, adolescentes e adultos. Focamos em superar desafios de aprendizagem, comportamento e emoções, com cuidado e atenção às necessidades de cada pessoa.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center justify-end">
                
                <div className="flex">
                <p  className="text-right font-preahvihear text-2xl text-[#011627]">Profissional Especializada</p>
                </div>
                <div className="flex w-9 ml-4">
                <span className="flex w-[34px] h-[34px] items-center justify-center border-[#D2D2D2] border rounded-full">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_1_98)">
                        <path d="M10.6667 14V12.6667C10.6667 11.9594 10.3857 11.2811 9.88562 10.781C9.38552 10.281 8.70724 10 8 10H3.33333C2.62609 10 1.94781 10.281 1.44771 10.781C0.947616 11.2811 0.666664 11.9594 0.666664 12.6667V14" stroke="#55BEDE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.66667 7.33333C7.13943 7.33333 8.33333 6.13943 8.33333 4.66667C8.33333 3.19391 7.13943 2 5.66667 2C4.19391 2 3 3.19391 3 4.66667C3 6.13943 4.19391 7.33333 5.66667 7.33333Z" stroke="#55BEDE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.3333 7.33333L12.6667 8.66667L15.3333 6" stroke="#55BEDE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_98">
                          <rect width="16" height="16" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                </span>   
                </div> 
                 
              </div> 
             
              <p className="text-justify font-poppins text-xl text-[#606060]">
              Em nosso Centro de Atendimento Psicopedagógico, contamos com uma equipa de profissionais especializada e comprometida com o desenvolvimento integral e o bem-estar dos nossos pacientes. Cada membro da nossa equipe é selecionado com base em uma formação sólida e experiência prática, além de uma verdadeira paixão pelo cuidado e apoio psicopedagógico.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center justify-start">
                <div className="flex w-9 mr-4">
                  <span className="flex w-[34px] h-[34px] items-center justify-center border-[#D2D2D2] border rounded-full">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_1_80)">
                        <path d="M11.3333 14V12.6667C11.3333 11.9594 11.0524 11.2811 10.5523 10.781C10.0522 10.281 9.37391 10 8.66667 10H3.33333C2.62609 10 1.94781 10.281 1.44772 10.781C0.94762 11.2811 0.666668 11.9594 0.666668 12.6667V14" stroke="#FFD45D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 7.33333C7.47276 7.33333 8.66667 6.13943 8.66667 4.66667C8.66667 3.19391 7.47276 2 6 2C4.52724 2 3.33333 3.19391 3.33333 4.66667C3.33333 6.13943 4.52724 7.33333 6 7.33333Z" stroke="#FFD45D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.3333 14V12.6667C15.3329 12.0758 15.1362 11.5019 14.7742 11.0349C14.4123 10.5679 13.9054 10.2344 13.3333 10.0867" stroke="#FFD45D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.6667 2.08667C11.2403 2.23354 11.7487 2.56714 12.1118 3.03488C12.4748 3.50262 12.6719 4.07789 12.6719 4.67C12.6719 5.26212 12.4748 5.83739 12.1118 6.30513C11.7487 6.77287 11.2403 7.10647 10.6667 7.25334" stroke="#FFD45D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_80">
                        <rect width="16" height="16" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg> 
                  </span>  
                </div> 
                <div className="flex">
                <p  className="text-left font-preahvihear text-2xl text-[#011627]">Foco na Comunidade</p>
                </div> 
                </div> 
              <p className="text-justify font-poppins text-xl text-[#606060]">
              Promovemos vínculos e partilhamos conhecimento para fortalecer a comunidade. Mais do que um centro de atendimento, oferecemos recursos, orientações e eventos que beneficiam famílias, educadores e todos os envolvidos no desenvolvimento de uma sociedade mais saudável e inclusiva. Queremos ser um ponto de apoio para o crescimento coletivo.
              </p>
            </div>
          </div>

          <div className="flex flex-row mt- w-[71.25rem] h-[27.938rem] bg-[#FFE7B8] rounded-[3.813rem] mt-[4rem] ">
            <div className="flex w-[50%] h-full">
              <Image
                src={"/hands-child-who-smeared.png"}
                width={559}
                height={433}
                style={{objectFit: "contain"}}
                alt="hands-child-who-smeared"
              />
            </div>
            <div className="flex flex-col justify-center w-[50%] h-full gap-8">
              <h1 className="font-preahvihear text-6xl leading-[4.8rem] text-zinc-800">Estamos Aqui Para Ouvir e Apoiar!</h1>
              <button className="flex bg-[#F18063] hover:opacity-70  hover:cursor-pointer w-52 h-12 items-center justify-center gap-3 rounded-3xl">
                <p className="text-xl text-white font-poppins"> Contactar </p>
              </button>
            </div>
           
          </div>
         
        </div>
       { /*<OvalForm1/>*/}
       <footer className="flex flex-col w-full bg-[#FFE7B8] min-h-[29.938rem] items-center justify-center mt-10"  >
       <div className="flex h-full w-full  max-w-screen-2xl items-center justify-between">
          <div className="flex w-[60%] h-2/4 items-center">
            <ul className="flex w-full flex-col gap-5" >
              <li>PhoneNumber:902 726 903 9</li>
              <li>WhatsApp:902 726 903 9</li>
              <li>Email:contacto@centro.pt</li>
              <li>Adress:Lisboa, Avenida XYZ, Edifício X.</li>
            </ul>
          </div>
          <div className="flex w-[40%] justify-end gap-12">
          <ul  className="flex  flex-col gap-5">
            <li>Home</li>
            <li>Sobre Nós</li>
            <li>Serviços</li>
            <li>Formulário</li>
          </ul>
          <ul className="flex  flex-col gap-5">
            <li>Termos de Uso</li>
            <li>Política de Privacidade</li>
          </ul>
          </div>
        </div>
        <div className="flex pb-10">
          <p>©2024 Centrox®,  Copyright Todos os direitos reservados.</p>
        </div>
      </footer>
      </div>
      </main>
    </div>
  );
}
