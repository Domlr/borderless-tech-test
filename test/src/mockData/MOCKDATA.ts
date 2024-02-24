import {User} from '../models/User'
const mockUser: User = {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    address: {
      city: "New York",
      geo: {
        lat: "-73.935242",
        lng: "40.730610",
      },
      street: "West Street",
      suite: "Apt. 2",
      zipcode: "10001",
    },
    phone: "1-770-736-8031",
    website: "johndoe.com",
    company: {
      bs: "execute e-business applications",
      catchPhrase: "Synergistic logical conglomeration",
      name: "Doe Inc.",
    },
    imageUrl: "https://via.placeholder.com/150",
    countries: {
      country: "United States",
      countryCode: "US",
    },
  };