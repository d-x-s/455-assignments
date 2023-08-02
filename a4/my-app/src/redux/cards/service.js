const addCard = async (card) => {
  const response = await fetch("https://davis455.onrender.com/database", {
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
  console.log(data);
  return data;
};

const getCards = async () => {
  const response = await fetch("https://davis455.onrender.com/database/all", {
      method: "GET"
  });
  return response.json();
};

const deleteCard = async (cardID) => {
  const response = await fetch(`https://davis455.onrender.com/database`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
      },
    body: JSON.stringify(cardID)
  });
  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
  return data;
};

// const addCard = async (card) => {
//     const response = await fetch("http://localhost:4000/database", {
//         method: "POST",
//         headers: {
//         "Content-Type": "application/json"
//         },
//         body: JSON.stringify(card)
//     });
//     const data = await response.json();
//     if (!response.ok) {
//         const errorMsg = data?.message;
//         throw new Error(errorMsg)
//     }
//     console.log(data);
//     return data;
// };

// const getCards = async () => {
//     const response = await fetch("http://localhost:4000/database/all", {
//         method: "GET"
//     });
//     return response.json();
// };

// const deleteCard = async (cardID) => {
//     const response = await fetch(`http://localhost:4000/database`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json"
//         },
//       body: JSON.stringify(cardID)
//     });
//     const data = await response.json();
//     if (!response.ok) {
//       const errorMsg = data?.message;
//       throw new Error(errorMsg);
//     }
//     return data;
//   };

export default {
    addCard,
    getCards,
    deleteCard,
};