import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

const getAllSpots = async () => {
  const response = await instance.get('/spots');
  return response;
};

const getASpot = async (id) => {
  const response = await instance.get(`/spots/${id}`);
  return response;
};

const deleteASpot = async (id) => {
  const response = await instance.delete(`/spots/${id}`);
  return response;
};

const listNewSpot = async ({ title, description, price, images }) => {
  const response = await instance.post('/spots', {
    title,
    description,
    price,
    user_id: 1,
    url: images
  });
  return response;
};

const editASpot = async ({ title, description, price }, id) => {
  const response = await instance.put(`/spots/${id}`, {
    title,
    description,
    price,
    user_id: 1
  });
  return response;
};

// export all of them from here
export { getAllSpots, getASpot, listNewSpot, editASpot, deleteASpot };
