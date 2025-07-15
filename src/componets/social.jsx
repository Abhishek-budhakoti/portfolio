import { FaGithub, FaPhoneAlt, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const icons = [
  {
    href: 'mailto:abhishekbudakoti23@gmail.com',
    icon: <IoMdMail className="w-5 h-5" />,
    label: 'abhishekbudakoti23@gmail.com',
  },
  {
    href: 'tel:+919671271189',
    icon: <FaPhoneAlt className="w-5 h-5" />,
    label: '+91 9671271189',
  },
  {
    href: 'https://github.com/Abhishek-budhakoti',
    icon: <FaGithub className="w-5 h-5" />,
    label: 'Abhishek-budhakoti',
  },
  {
    href: 'https://www.linkedin.com/in/abhishek-budakoti',
    icon: <FaLinkedinIn className="w-5 h-5" />,
    label: 'Abhishek Budakoti',
  },
];

export const SocialButtons = () => {
  return (
    <div className="fixed right-4 top-4 flex flex-col gap-5 z-50 mt-10">
      {icons.map(({ href, icon, label }, index) => (
        <div key={index} className="relative group">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-9 h-9 flex items-center justify-center bg-transparent border border-white/30 hover:bg-black text-white rounded-full shadow-lg transition transform hover:scale-110"
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
