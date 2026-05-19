export function validateEmail(email: string): string | null {
    if (!email) return null
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return (!emailRegex.test(email)) ? "Format email tidak valid" : null
}

export function validatePassword(password: string): string | null {
    if (!password) return null
    if (password.length < 8) return "Password must be at least 8 characters"
    if (!/[a-zA-Z]/.test(password)) return "Password must contain at least one letter"
    if (!/[0-9]/.test(password)) return "Password must contain at least one number"
    return null
}

export function validateConfirmPassword(password: string, confirm: string): string | null {
    if (!confirm) return null
    return (password !== confirm) ? "Passwords do not match" : null
}

export function validateUsername(username: string): string | null {
    if (!username) return null
    if (username.length < 4) return "Username must be at least 4 characters"
    if (username.toLowerCase() === "admin") return "Username is already taken"
    return null
}

export function validateWhatsapp(whatsapp: string): string | null {
    if (!whatsapp) return null
    if (!/^\d+$/.test(whatsapp)) return "Only numbers are allowed"
    if (whatsapp.length < 11 || whatsapp.length > 12) return "Must be 11-12 digits"
    return null
}