function calculateAge(birthDate: Date): string {
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - birthDate.getTime());
    const siffDays = Math.ceil(diffTime / (1000 * 3600 * 24));
    return `${siffDays} dias`;
}

export default calculateAge;