export const saveReport = (type: string, data: any) => {
    const reports = JSON.parse(localStorage.getItem('reports') || '[]');
    const newReport = {
        id: Date.now(),
        type,
        timestamp: new Date().toISOString(),
        ...data,
    };
    reports.push(newReport);
    localStorage.setItem('reports', JSON.stringify(reports));
    return newReport;
};

export const getReports = () => {
    return JSON.parse(localStorage.getItem('reports') || '[]');
};

export const updateReport = (id: number, updatedData: any) => {
    const reports = JSON.parse(localStorage.getItem('reports') || '[]');
    const reportIndex = reports.findIndex((report: any) => report.id === id);

    if (reportIndex !== -1) {
        reports[reportIndex] = {
            ...reports[reportIndex],
            ...updatedData
        };
        localStorage.setItem('reports', JSON.stringify(reports));
        return reports[reportIndex];
    }
    return null;
};

export const deleteReport = (id: number) => {
    const reports = JSON.parse(localStorage.getItem('reports') || '[]');
    const filteredReports = reports.filter((report: any) => report.id !== id);

    localStorage.setItem('reports', JSON.stringify(filteredReports));
    return filteredReports;
};
