 const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'sdfsldfjsldf' })
    }, 2000);
  })
}

export default getData