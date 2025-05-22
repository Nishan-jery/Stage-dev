export default function Home() {
  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 bg-gradient-to-br gray-100 to-gray-300 flex items-center justify-center">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold mb-4">Bienvenue !</h1>

          <p className="text-gray-700 mb-4"> Bonjour et bienvenue ! Pour commencer, merci de vous connecter avec
            identifiants reçus par mail. Cette évaluation vous permettra d'obtenir une estimation du temps de préparation
            nécessaire. Bonne chance !
          </p>
          
          <p className="font-semibold text-black">
            Elle se compose de 58 questions couvrant différents aspects du code de la route.
          </p>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center p-12 bg-white">
        <form className="w-full max-w-sm space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 outline-none ">Email</label>
            <input
              type="email"
              placeholder="Entrez votre email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 outline-none">Mot de passe</label>
            <input
              type="password"
              placeholder="Entrez votre mot de passe"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-bold text-white p-2 rounded-md cursor-pointer "
          >
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
}
