// src/components/organisms/ContatoForm.tsx

import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  assunto: string;
  mensagem: string;
  urgencia?: boolean;
};

const ContatoForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert(`Dados enviados:\n${JSON.stringify(data, null, 2)}`);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block">E-mail*</label>
        <input
          {...register("email", { required: "Campo obrigatório" })}
          type="email"
          className="border rounded w-full p-2"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block">Assunto*</label>
        <input
          {...register("assunto", { required: "Campo obrigatório" })}
          type="text"
          className="border rounded w-full p-2"
        />
        {errors.assunto && <p className="text-red-500">{errors.assunto.message}</p>}
      </div>

      <div>
        <label className="block">Mensagem*</label>
        <textarea
          {...register("mensagem", { required: "Campo obrigatório" })}
          className="border rounded w-full p-2"
          rows={4}
        />
        {errors.mensagem && <p className="text-red-500">{errors.mensagem.message}</p>}
      </div>

      <div className="flex items-center">
        <input type="checkbox" {...register("urgencia")} className="mr-2" />
        <label>Marcar como urgente</label>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContatoForm;
