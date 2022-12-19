const getData = async (formNumber) => {
    const postalCode = formNumber;
    if (postalCode) {
        const response = await fetch(`https://portal.postnord.com/api/sendoutarrival/closest?postalCode=${postalCode}`);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
    }
}

export default getData;