export const getGames = (category) => {
  let file = "https://api.gapi.lol/api/v2/games/" + category;

  return fetch(file).then((response) => {
    return response.json();
  });
};
