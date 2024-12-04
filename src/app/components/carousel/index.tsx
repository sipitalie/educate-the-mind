export function Carousel (){


return <div className="w-full items-center" >
   
    <div className="flex flex-row justify-end items-center">
        <div className="h-[518.93px] w-[590.74px]">
            <img src="/hero1.png"/>
        </div>
        
        <div  className="hidden h-[518.93px] w-[590.74px] bg-slate-100">
            <img src="/hero2.png"/>
        </div>
        
        <div  className="hidden h-[518.93px] w-[590.74px] bg-white">
            <img src="/hero3.png"/>
        </div>
    </div>
</div>

}