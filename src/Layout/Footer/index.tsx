import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "../../styles/layout/footer.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="container">
        <h3>{t("footer.developed_by")}</h3>
        <p>{t("footer.all_rights_reserved")}</p>
        <div className="social">
          <a
            href="https://github.com/Phoenix7290"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://x.com/MRyan7290"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/marcos-ryan-274266268/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;