import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
    name: z.string().min(5, { message: "Preencha o campo com pelo menos 5 caracteres" }).max(250, { message: 'Preencha o campo com menos de 250 caracteres' }),
    email: z.string().email({ message: 'Insira um e-mail válido' }),
    subject: z.string().min(5, { message: "Preencha o campo com pelo menos 5 caracteres" }).max(250, { message: 'Preencha o campo com menos de 250 caracteres' }),
    message: z.string().min(5, { message: "Preencha o campo com pelo menos 5 caracteres" }).max(1000, { message: 'Preencha o campo com menos de 1000 caracteres' }),
}).required();

type contactSchema = z.infer<typeof contactSchema>;

export function ContactForm() {
    const { 
        register, 
        handleSubmit,
        formState: { errors } 
    } = useForm<contactSchema>({
        resolver: zodResolver(contactSchema)
    });

    function handleOnSendEmail({ name, email, subject, message }: contactSchema) {

        console.log({ name, email, subject, message });
    }

    return(
        <form onSubmit={handleSubmit(handleOnSendEmail)} className="w-full md:w-1/2 grid grid-cols-1 gap-4">
            <div className="flex flex-col gap-2">
                <label className="text-white font-medium" htmlFor="name">Nome:</label>
                <input 
                    className="rounded placeholder:text-slate-400 py-2 px-4" 
                    placeholder="Nome"
                    type="text" 
                    {...register('name')}
                />
                {errors.name?.message && (<span className='text-red-400 text-xs font-medium mt-2'>{errors.name.message}</span>)}
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-white font-medium" htmlFor="email">E-mail:</label>
                <input 
                    className="rounded placeholder:text-slate-400 py-2 px-4" 
                    placeholder="E-mail"
                    type="text" 
                    {...register('email')}
                />
                {errors.email?.message && (<span className='text-red-400 text-xs font-medium mt-2'>{errors.email.message}</span>)}
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-white font-medium" htmlFor="subject">Assunto:</label>
                <input 
                    className="rounded placeholder:text-slate-400 py-2 px-4" 
                    placeholder="Assunto"
                    type="text" 
                    {...register('subject')}
                />
                {errors.subject?.message && (<span className='text-red-400 text-xs font-medium mt-2'>{errors.subject.message}</span>)}
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-white font-medium" htmlFor="message">Sua mensagem:</label>
                <textarea 
                    className="rounded placeholder:text-slate-400 py-2 px-4 resize-none" 
                    placeholder="Sua mensagem..." 
                    rows={4} 
                    {...register('message')}
                />
                {errors.message?.message && (<span className='text-red-400 text-xs font-medium mt-2'>{errors.message.message}</span>)}
            </div>

            <input
                type="submit" 
                className="w-[100px] py-2 text-white cursor-pointer transition-all duration-200 ease-linear rounded bg-violet-950 hover:bg-purple-700"
            >
                {/* Enviar */}
            </input>
        </form>
    )
}