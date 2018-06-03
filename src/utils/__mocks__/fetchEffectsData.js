export const fetchEffectsData = jest.fn().mockImplementation(() => 
  Promise.resolve(
    [
      {
        "effect": "Relaxed",
        "type": "positive"
      },
      {
        "effect": "Dizzy",
        "type": "negative"
      },
      {
        "effect": "Hungry",
        "type": "positive"
      },
      {
        "effect": "Euphoric",
        "type": "positive"
      },
      {
        "effect": "Happy",
        "type": "positive"
      },
      {
        "effect": "Depression",
        "type": "medical"
      },
    ])
);