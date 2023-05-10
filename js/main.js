
const server = 'http://localhost:3000';

async function create(path, machine) {
  const res = await fetch(`${server}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(machine),
  });

  return await res.json();
}

async function read(path) {
  const res = await fetch(`${server}${path}`);

  return await res.json();
}

async function readById(path, id) {
  const res = await fetch(`${server}${path}/${id}`);

  return await res.json();
}

async function update(path, machine, id) {
  const res = await fetch(`${server}${path}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(machine),
  });

  return await res.json();
}

async function remove(path, id) {
  const res = await fetch(`${server}${path}/${id}`, {
    method: 'DELETE',
  });

  return await res.json();
}

export default {
  create,
  read,
  readById,
  update,
  remove,
};