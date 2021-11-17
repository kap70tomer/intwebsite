import http from "./common-http";

// Get all resource from APi.
const getAll = async() => {
  return http.get("/tattoos/");
};
// Get resource by ID.
const get = async(_id) => {
  return http.get(`/tattoos/${_id}`);
};
// Send new booking request. 
const create = async(data) => {
  return http.post("/tattoos/", data);
};
// Update by id
const update = async(data)=> {
  return http.put(`/tattoos/${data._id}`,data);
};
// Remove from DB. by ID
const remove = async(_id) => {
  return http.delete(`/tattoos/${_id}`);
};
// Remove all tattoos from DB.
const removeAll = async() => {
  return http.delete(`/tattoos/`);
};
// Upload image to assets dir.
const uploadImage = async (fm) => {
  return http.post('tattoos/file',fm);
} 
export default {
  uploadImage,
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};