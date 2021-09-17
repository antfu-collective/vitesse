export default () => {
  console.log('global middleware fired')
  // you may add an application wide check here, for example fetch the user if a jwt token is present but the user in the store is not populated.
}
