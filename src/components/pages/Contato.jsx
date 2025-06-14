// src/components/pages/Contato.jsx
import { useForm } from "react-hook-form";

const Contato = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log("Dados do formulário:", data);
    alert(`Email enviado com sucesso!\n\n${JSON.stringify(data, null, 2)}`);
    reset();
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6">Contato</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* E-mail */}
        <div>
          <label className="block mb-1 font-medium">E-mail *</label>
          <input
            type="email"
            {...register("email", { required: "E-mail é obrigatório" })}
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2 dark:bg-gray-700"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Assunto */}
        <div>
          <label className="block mb-1 font-medium">Assunto *</label>
          <input
            type="text"
            {...register("assunto", { required: "Assunto é obrigatório" })}
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2 dark:bg-gray-700"
          />
          {errors.assunto && (
            <p className="text-red-500 text-sm">{errors.assunto.message}</p>
          )}
        </div>

        {/* Mensagem */}
        <div>
          <label className="block mb-1 font-medium">Mensagem *</label>
          <textarea
            rows={5}
            {...register("mensagem", { required: "Mensagem é obrigatória" })}
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2 dark:bg-gray-700"
          />
          {errors.mensagem && (
            <p className="text-red-500 text-sm">{errors.mensagem.message}</p>
          )}
        </div>

        {/* Urgente (opcional) */}
        <div className="flex items-center">
          <input
            type="checkbox"
            {...register("urgente")}
            id="urgente"
            className="mr-2"
          />
          <label htmlFor="urgente" className="font-medium">
            Marcar como urgente
          </label>
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contato;
