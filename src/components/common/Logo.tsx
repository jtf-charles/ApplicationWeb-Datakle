import logoUrl from "@/assets/images/Logo-05.svg";  /* grand ecran*/
import logoUrl1 from "@/assets/images/Logo-03.svg"; /*Petit ecran  */

{/*export default function Logo() {
  return (
    <img
      src={logoUrl}
      alt="DATAKLE"
      className="h-12 w-auto"
      loading="eager"
      decoding="async"
    />
  );
}
*/}

export default function Logo() {
  return (
    <>
      {/* Logo pour desktop/tablette (écrans moyens et grands) */}
      <img
        src={logoUrl}
        alt="DATAKLE"
        className="hidden md:block h-7 lg:h-10 w-auto px-2"
        loading="eager"
        decoding="async"
      />
      
      {/* Logo pour mobile (petits écrans) */}
      <img
        src={logoUrl}
        alt="DATAKLE"
        className="block md:hidden h-10 w-auto px-2"
        loading="eager"
        decoding="async"
      />
    </>
  );
}