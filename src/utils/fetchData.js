export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':'849a0d42d1msh67e7d03569d50d3p1a1e88jsn9e52ea0d2f54',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '849a0d42d1msh67e7d03569d50d3p1a1e88jsn9e52ea0d2f54',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};