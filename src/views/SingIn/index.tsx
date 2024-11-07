import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/Auth/useAuth';
import { useNavigate } from 'react-router-dom';

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
        <div>
            <h1>{t("signIn")}</h1>
            <input
                type="email"
                placeholder={t("form.email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder={t("form.password")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignIn}>{t("form.submit")}</button>
            {error && <p>{error}</p>}
            <button onClick={() => navigate('/Baby-Track/signup')}>Go to Sign Up</button>
        </div>
    );
}
