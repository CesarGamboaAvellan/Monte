export const config = (token, params) => {
  if (params) {
    return {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      params: {
        id: params,
      }
    }
  }
  else return {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }

}
