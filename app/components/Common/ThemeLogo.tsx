import Image from "next/image";
import Logo from "../../assets/images/logo.svg";

export default function ThemeLogo() {
  return (
    <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
      <Image
        className="w-8 h-8 mr-2"
        src={Logo}
        alt="logo"
        style={{ width: "auto", height: "auto" }}
      />
      Logicbite
    </div>
  );
}
