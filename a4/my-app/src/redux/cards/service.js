const addCard = async (card) => {
    const response = await fetch("http://localhost:4000/cards", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(card)
    });
    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }
    return data;
};

const getCards = async () => {
    const response = await fetch("http://localhost:4000/cards", {
        method: "GET"
    });
    return response.json();
};

const deleteCard = async (cardName) => {
    const response = await fetch(`http://localhost:4000/cards/${cardName}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (!response.ok) {
      const errorMsg = data?.message;
      throw new Error(errorMsg);
    }
    return data;
  };

export default {
    addCard,
    getCards,
    deleteCard,
};