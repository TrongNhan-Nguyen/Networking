export const signIn_Action = (user) => {
  return {
    type: 'SIGN_IN',
    payload: user,
  };
};
export const signOut_Action = ()=>{
    return {type: 'SIGN_OUT'}
}
