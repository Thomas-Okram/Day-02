function parseJSON(jsonString) {
  try {
    const parsedData = JSON.parse(jsonString);
    return parsedData;
  } catch (error) {
    console.log("An Error occoured while parsing JSON:", error.message);
    return null;
  }
}

const validJSON = '{"name":"Tomba", "age":"20"}';
const invalidJSON = '{"name":"Tomba", "age":"20",}';

const result1 = parseJSON(validJSON);
console.log(result1);

const result2 = parseJSON(invalidJSON);
console.log(result2);
