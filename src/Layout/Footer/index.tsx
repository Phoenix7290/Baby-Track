import { useTranslation } from "react-i18next";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import "../../styles/layout/footer.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="container">
        <h3>{t("developed_by")}</h3>
        <p>{t("all_rights_reserved")}</p>
        <div className="social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
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
