export interface User {
  gender: string;
  phone: string;
  cell: string;
  email: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  login: {
    sha256: string;
  };
  dob: {
    date: string;
    age: string;
  };
  location: {
    city: string;
    state: string;
  };
}
