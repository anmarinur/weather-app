const apiKey = process.env.REACT_APP_APIKEY;

exports.handler = async (event) => {

  const key = apiKey;

  const response = await fetch(key);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: data
    })
  }
}