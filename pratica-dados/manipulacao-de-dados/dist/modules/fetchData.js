async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok)
            throw new Error("Erro: " + response.status);
        return await response.json();
    }
    catch (error) {
        if (error instanceof Error)
            console.error("fetchData: " + error.message);
        return null;
    }
}
export default fetchData;
//# sourceMappingURL=fetchData.js.map