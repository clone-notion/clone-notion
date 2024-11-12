const BASE_URL = "https://kdt-api.fe.dev-cos.com/documents";
const USER_NAME = "CN-4";

const handleFetch = async (endPoint = "", options) => {
  const fetchOpts = {
    headers: {
      Accept: "*/*",
      "x-username": USER_NAME,
    },
    ...options,
  };
  return await fetch(`${BASE_URL}${endPoint}`, fetchOpts)
    .then((res) => res.json())
    .catch((err) => new Error(`에러 발생: ${err}`));
};

//** GET  */
const handleGetAllDocs = async () => await handleFetch();

//** GET :id */
const handleGetDocById = async (id) => await handleFetch(id);

//** POST */
const handleCreateDoc = async (id, body) =>
  await handleFetch(id, { method: "POST", body });

//** PUT */
const handleUpdateDoc = async (id, body) =>
  await handleFetch(id, { method: "PUT", body });

//** DELETE */
const handleDeleteDoc = async (id) =>
  await handleFetch(id, { method: "DELETE" });

export {
  handleGetAllDocs,
  handleGetDocById,
  handleCreateDoc,
  handleUpdateDoc,
  handleDeleteDoc,
};