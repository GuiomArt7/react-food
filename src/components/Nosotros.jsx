const Nosotros = () => {
  return (
    <>
      <section className="mx-auto py-12">
        <h2 className="text-4xl font-bold mb-8 text-center font-mono">¿Quiénes somos?</h2>

        <h3 className="text-2xl font-semibold mb-4 font-mono">Nuestra Historia</h3>
        <p className="text-gray-900 px-6 text-lg text-justify">
          Shalom abrió sus puertas el 21 de abril del 2021 en Ocosingo Chiapas
          México, un lugar lleno de historia, reconocido por su delicioso queso
          de bola.
        </p>
        <br />

        <h3 className="text-2xl font-semibold mb-4 font-mono">Nuestra Filosofía</h3>
        <p className="text-gray-900 px-6 text-lg text-justify">
          Shalom es una palabra hebrea que significa paz, bienestar o totalidad.
          Se utiliza como saludo y despedida en hebreo, y también como un deseo
          de paz, armonía y bienestar para la persona o personas a las que se
          dirige.
        </p>
        <br />

        <p className="text-gray-900 px-6 text-lg text-justify">
          La chef y creadora del concepto culinario, junto a su equipo de
          trabajo, buscan representar precisamente el significado de Shalom en
          la armonía entre lo tradicional y lo moderno, dándole a sus platillos
          una variedad de vistas, texturas, aromas y elementos que proporcionen
          un sentimiento de plenitud a sus comensales.
        </p><br />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <img
              src="/img/slide8.jpg"
              alt="Imagen 1"
              className="rounded-lg shadow-md"
            />
            <p className="text-center"></p>
          </div>
          <div>
            <img
              src="/img/slide3.jpg"
              alt="Imagen 2"
              className="rounded-lg shadow-md"
            />
            <p className="text-center"></p>
          </div>
          <div>
            <img
              src="/img/slide2.jpg"
              alt="Imagen 3"
              className="rounded-lg shadow-md"
            />
            <p className="text-center"></p>
          </div>
          <div>
            <img
              src="/img/slide5.jpg"
              alt="Imagen 4"
              className="rounded-lg shadow-md"
            />
            <p className="text-center"></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nosotros;
