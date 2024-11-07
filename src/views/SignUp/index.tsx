import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../../services/supabaseClient';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSignUp = async () => {
        setError(null);
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) {
            setError(error.message);
        } else {
            navigate('/Baby-Track/'); 
        }
    };

    return (
        <div>
            <h1>{t("signUp")}</h1>
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
            <button onClick={handleSignUp}>{t("form.submit")}</button>
            {error && <p>{error}</p>}
            <button onClick={() => navigate('/Baby-Track/signin')}>Go to Sign In</button>
        </div>
    );
}
