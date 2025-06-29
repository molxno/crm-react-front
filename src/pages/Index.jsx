function Index() {
  return (
    <div>
      <h1 className="font-black text-4xl text-slate-900">CRM React Frontend</h1>
      <p className="mt-3 text-xl text-slate-700">
        Sistema de gestión de clientes desarrollado con tecnologías modernas
      </p>

      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Sobre este proyecto
        </h2>
        <p className="text-slate-600 mb-6">
          Aplicación web completa para la gestión de clientes (CRM) que permite
          administrar, crear, editar y eliminar información de clientes de
          manera eficiente y moderna.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">
              🎨 Frontend (React)
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>
                • <strong>React 18.2.0</strong> - Biblioteca para interfaces de
                usuario
              </li>
              <li>
                • <strong>React Router DOM</strong> - Navegación y routing
              </li>
              <li>
                • <strong>Vite</strong> - Herramienta de desarrollo y build
              </li>
              <li>
                • <strong>Tailwind CSS</strong> - Framework de estilos
                utilitarios
              </li>
              <li>
                • <strong>Axios</strong> - Cliente HTTP para API
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">
              ⚙️ Backend & Tecnología
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>
                • <strong>Laravel API</strong> - Backend robusto y escalable
              </li>
              <li>
                • <strong>RESTful API</strong> - Arquitectura de servicios
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-slate-50 rounded-lg">
          <h3 className="text-lg font-semibold text-slate-800 mb-2">
            🚀 Características principales
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-600">
            <div>• Gestión completa de clientes</div>
            <div>• Interfaz moderna y responsive</div>
            <div>• Validación de formularios</div>
            <div>• Navegación fluida (SPA)</div>
            <div>• Integración con API Laravel</div>
            <div>• Componentes reutilizables</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
