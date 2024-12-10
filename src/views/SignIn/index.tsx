import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/Auth/useAuth';
import { useNavigate } from 'react-router-dom';
import "../../styles/views/signin.scss";

export default function SignIn() {
    const { t } = useTranslation();
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSignIn = async () => {
        try {
            setError(null);
            await login(email, password);
            navigate('/Baby-Track/');
        } catch (error) {
            setError((error as Error).message);
        }
    };

    return (
        <div className='signin'>
            <h1>{t("signIn.title")}</h1>
            <input
                type="email"
                placeholder={t("signIn.email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder={t("signIn.password")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit' onClick={handleSignIn}>{t("signIn.submit")}</button>
            {error && <p>{error}</p>}
            <button type='submit' onClick={() => navigate('/Baby-Track/signup')}>{t("signIn.signup")}</button>
        </div>
    );
}
