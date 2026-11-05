const API_URL = 'http://localhost:8080/api/properties'

export async function getProperties() {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('Impossible de récupérer les logements')
  }

  return response.json()
}