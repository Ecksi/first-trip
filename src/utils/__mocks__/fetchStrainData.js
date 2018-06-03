const fetchStrainData = jest.fn().mockImplementation(() => {
  Promise.resolve({
    "Afpak": {
      "id": 1,
      "race": "hybrid",
      "flavors": [
        "Earthy",
        "Chemical",
        "Pine"
      ],
      "effects": {
        "positive": [
          "Relaxed",
          "Hungry",
          "Happy",
          "Sleepy"
        ],
        "negative": [
          "Dizzy"
        ],
        "medical": [
          "Depression",
          "Insomnia",
          "Pain",
          "Stress",
          "Lack of Appetite"
        ]
      }
    }
  });
});

export default fetchStrainData;