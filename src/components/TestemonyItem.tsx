import { ChatCircleDots } from '@phosphor-icons/react';

import PerfilJpeg from '../assets/perfil.jpeg';
// import { tv } from 'tailwind-variants';

// const testimony = tv({

// })

// type Props = {

// }

export function TestemonyItem() {
    return(
        <div className="relative w-[250px] md:w-[350px] mb-14 mx-auto overflow-hidden bg-white drop-shadow-2xl max-w-xs rounded-3xl p-6 flex flex-col items-center gap-6">
            <div className="bg-gradient-to-r from-purple-700 to-violet-950 pt-9 pr-9 pb-5 pl-5 rounded-full absolute top-[-25px] right-[-25px]">
                <ChatCircleDots color="#FFF" size={48} />
            </div>

            <img 
                src={PerfilJpeg} 
                alt="depoimento - foto"
                className="w-24 h-w-24 rounded-full"
            />
            <div className="flex flex-col gap-2 items-center">
                <h1 className="text-lg font-bold text-purple-800">
                    Lucas Rabelo
                </h1>

                <h2 className="text-base">
                    Programador
                </h2>
            </div>

            <p className="text-base text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, omnis voluptatum ipsum dignissimos quo molestias voluptas autem sapiente sed, fuga numquam rerum facilis. Aspernatur animi quaerat ducimus! Veritatis, corporis magnam.
            </p>
        </div>
    );
}