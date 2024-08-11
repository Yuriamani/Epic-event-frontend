

export const BASE_URL = "http://localhost:8000";


export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const handleFetchError = (error) => {
  console.error("Fetch error: ", error);
  alert("An error occurred. Please try again later.");
};
