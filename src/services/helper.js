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

export const configChangeTeenant = (token, teenant) => {
  return {
    headers: {
      'Authorization': `Bearer ${token}`,
      "Abp.TenantId": teenant,
    },
  }
}
