import { FaGithub, FaPhoneAlt, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="fixed pr-6 right-4 top-2 flex flex-col gap-5 z-50 mt-10"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {icons.map(({ href, icon, label }, index) => (
        <motion.div key={index} variants={itemVariants} className="relative group">
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{
              scale: 1.2,
              rotate: 5,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-9 h-9 flex items-center justify-center bg-transparent border border-white/30 dark:hover:bg-black hover:bg-white text-black dark:text-white rounded-full shadow-lg transition"
          >
            {icon}
          </motion.a>

          <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black text-white text-xs px-3 py-1 rounded shadow-md whitespace-nowrap z-50">
            {label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export { SocialButtons };
