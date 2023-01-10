import Image from "../assets/IndexImg.jpg"

function Index() {
  return (
    <div>
      <h1 className="font-black text-4xl text-slate-800">Inicio</h1>
      <p className="mt-3 text-xl">
        Bienvenido, este aplicativo gestiona las relaciones con los diferentes
        clientes.
      </p>
      <div className="mt-10 flex flex-wrap justify-center">
        <img src={Image} alt="Client image" className="max-w-full h-auto rounded-lg"/>
      </div>
    </div>
  );
}

export default Index;
