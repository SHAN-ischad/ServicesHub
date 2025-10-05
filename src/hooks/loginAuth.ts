import { useState } from "react";

interface LoginResult {
    success: boolean;
    error?: string;
    email?: string;
}

export function useLoginAuth() {
    const [loading, setLoading] = useState(false);

    function validateEmail(email: string): boolean {
        // Garante que tenha caracteres antes e depois de @gmail
        const regex = /^[^@]+@gmail\.com$/;
        return regex.test(email);
    }

    function validatePassword(password: string): boolean {
        return password.length >= 8;
    }

    async function login(email: string, password: string): Promise<LoginResult> {
        setLoading(true);

        if (!validateEmail(email)) {
            setLoading(false);
            return { success: false, error: "O e-mail deve conter '@gmail. Ex(**@gmail**)." };
        }

        if (!validatePassword(password)) {
            setLoading(false);
            return { success: false, error: "A senha deve ter no mínimo 8 caracteres." };
        }

        // Aqui você pode integrar com Axios futuramente:
        // const response = await axios.post('/api/login', { email, password });
        // if (response.data.success) { ... }

        setLoading(false);
        return { success: true, email };
    }

    return {
        loading,
        login,
        validateEmail,
        validatePassword,
    };
}