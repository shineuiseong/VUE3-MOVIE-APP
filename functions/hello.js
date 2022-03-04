export default async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Stack_Shines',
      age: 29,
      email: 'crossstory12@gmail.com',
    }),
  }
}
