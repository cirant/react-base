import axios from 'axios';

export default class Services {
  static Token = () => sessionStorage.getItem('token') || null;

  constructor(url){
    const baseURL = process.env.REACT_APP_BACKFRONT_URL || 'http:localhost:3000';
    this._url = `${baseURL}/${url || ''}`;
    this._token = sessionStorage.getItem('token') || null;
    
    this._request = axios.create({
      baseURL: this._url,
      headers: {'Authorization': `Bearer ${this._token}`}
    });
  }

  get(route = '') {
    return this._request.get(route);
  }

  create(route, data) {
    return this._request.post(route, data);
  }


}