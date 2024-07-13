/* eslint-disable no-undef */

import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import {
  authenticatedState,
  demoUser,
  initialState,
} from "../../fixtures/authFixtures";

describe("Pruebas en el authSlice", () => {
  test("debe de regresar el estado inicial", () => {
    console.log(authSlice);

    const state = authSlice.reducer(initialState, {});
    expect(state).toEqual(initialState);
    expect(authSlice.name).toBe("auth");
  });

  test("Debe de realizar la autenticacion", () => {
    const state = authSlice.reducer(initialState, login(demoUser));

    expect(state).toEqual({
      status: "authenticated",
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      errorMessage: null,
    });
  });

  test("Debe de realizar el logout sin argumentos", () => {
    const state = authSlice.reducer(authenticatedState, logout());
    console.log(state);
    expect(state).toEqual({
      status: "not-authenticated",
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined,
    });
  });

  test("Debe de realizar el logout y mostrar el error", () => {
    const errorMessage = "Credenciales incorrectas";
    const state = authSlice.reducer(authenticatedState, logout({errorMessage}));
    //console.log(state.errorMessage);
    expect(state).toEqual({ status: 'not-authenticated',
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage});
  });

  test('Debe de cambiar el estado a "checking"', () => { 

    const state = authSlice.reducer(authenticatedState, checkingCredentials());
    expect(state.status).toBe('checking');

   })
});