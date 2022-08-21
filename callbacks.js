

setTimeout(() => {
  
}, 1500);

const getUserById = (id, callback) => {
  const user = {
    id,
    name: 'Nato'
  }

  setTimeout(() => {
    callback(user);
  }, 1500);
}

getUserById( 4, ( user ) => {
  console.log('Hello ', user.name);
} );