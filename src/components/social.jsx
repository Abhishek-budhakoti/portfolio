import { FaGithub, FaPhoneAlt, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import userInfo from "../utils/userInfoConfig";

const SocialButtons = () => {
  const { gmail, phone, github, linkedin, fullName } = userInfo.social;

  const icons = [
    {
      href: `mailto:${gmail}`,
      icon: <IoMdMail className="w-5 h-5" />,
      label: gmail,
    },
    {
      href: `tel:${phone}`,
      icon: <FaPhoneAlt className="w-5 h-5" />,
      label: phone,
    },
    {
      href: github,
      icon: <FaGithub className="w-5 h-5" />,
      label: fullName || "GitHub",
    },
    {
      href: linkedin,
      icon: <FaLinkedinIn className="w-5 h-5" />,
      label: fullName || "LinkedIn",
    },
  ];

  return (
    <div className="fixed pr-6 right-4 top-2 flex flex-col gap-5 z-50 mt-10">
      {icons.map(({ href, icon, label }, index) => (
        <div key={index} className="relative group">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-9 h-9  flex items-center justify-center bg-transparent border border-white/30 hover:bg-white dark:hover:bg-black text-black dark:text-white rounded-full shadow-lg transition transform hover:scale-110"
          >
            {icon}
          </a>
          <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black text-white text-xs px-3 py-1 rounded shadow-md whitespace-nowrap z-50">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export { SocialButtons };
