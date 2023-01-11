import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          Abbiamo creato questo spazio perché comprendiamo che la cultura tradizionale della palestra è alienante 
          per molte persone e spesso tossica e opprimente. 
          Come membri della comunità EVOGYM, ognuno di noi ha la responsabilità di aiutare a creare e mantenere 
          una cultura dell'inclusività.
          </p>
          <p>© Evogym ♥ RZT 2023 All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Le nostre classi</p>
          <p className="my-5">Cardio e non solo la nostra guida</p>
          <p>Vivere in Salute consigli alimentazione</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contattaci</h4>
          <p className="my-5">Per qualunque dubbio non esitare a contattarci.</p>
          <p>(+39)345-425-6825</p>
          <p>evogym@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
