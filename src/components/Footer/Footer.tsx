import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sección de links */}
        <div>
          <h3 className="font-semibold mb-2">Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Link 1</a></li>
            <li><a href="#" className="hover:underline">Link 2</a></li>
            <li><a href="#" className="hover:underline">Link 3</a></li>
          </ul>
        </div>

        {/* Sección con título y párrafo */}
        <div>
          <h3 className="font-semibold mb-2">Acerca de Nosotros</h3>
          <p>
            Somos una empresa dedicada a proporcionar los mejores servicios y productos para nuestros clientes.
          </p>
        </div>

        {/* Sección de contactos */}
        <div>
          <h3 className="font-semibold mb-2">Contacto</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Email</a></li>
            <li><a href="#" className="hover:underline">Teléfono</a></li>
            <li><a href="#" className="hover:underline">Dirección</a></li>
          </ul>
        </div>
      </div>

      {/* Texto final */}
      <div className="text-center mt-6">
        <p>© {currentYear} Hecho con amor por Juan Aristizabal</p>
      </div>
    </footer>
  );
};

export default Footer;