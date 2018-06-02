import axios from "axios";
async function getResults(query) {
  const proxy = "https:/cors-anywhere.herokuapp.com/";
  const key = "cd53e8c06b1860ce99b42fd2f4db55ce";
  try {
    const res = await axios(
      `${proxy}http://food2fork.com/api/search?key=${key}&?q=${query}`
    );
    const recipes = res.data.recipes;
    console.log(recipes);
  } catch (error) {
    alert(error);
  }
}

getResults("pizza");
