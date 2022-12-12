import api from '@api/axios'

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AUTHENTICATED, NOT_AUTHENTICATED } from './actionTypes'
import { AuthenticationRequest, RegistrationRequest } from '@app/models';
import { AuthenticationResponse } from '@app/models/authenticationResponse';

const setToken = (token: string) => localStorage.setItem("token", token);

const deleteToken = () => localStorage.removeItem("token");

export const getToken = () => localStorage.getItem("token");

export const login = createAsyncThunk('authentication/login', async (credentials: AuthenticationRequest) => {
  const token = await api.post('authenticate', credentials)
  console.log(token)
  return credentials
})

export const signup = createAsyncThunk('authentication/signup', async (credentials: RegistrationRequest) => { return {} })

export const logout = createAsyncThunk('authentication/logout', async () => { })

export const checkAuthenticationState = () => { };