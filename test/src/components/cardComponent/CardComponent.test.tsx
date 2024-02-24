import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardComponent from "./CardComponent"; // Ensure the path is correct
import { User } from "../../models/User"; // Ensure the path is correct

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

describe("CardComponent", () => {
  it("renders the user image and checks for alt text", () => {
    render(<CardComponent user={mockUser} />);
    const userImage = screen.getByRole("img", { name: mockUser.name });
    expect(userImage).toHaveAttribute("src", mockUser.imageUrl);
    expect(userImage).toHaveAttribute("alt", mockUser.name);
  });

  it("renders the user name", () => {
    render(<CardComponent user={mockUser} />);
    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
  });

  it("renders the country flag with correct alt text", () => {
    render(<CardComponent user={mockUser} />);
    const flagImage = screen.getByAltText(`${mockUser.countries.country} flag`);
    expect(flagImage).toHaveAttribute(
      "src",
      `https://flagsapi.com/${mockUser.countries.countryCode}/flat/64.png`
    );
  });

  it('displays "Borderless Verified"', () => {
    render(<CardComponent user={mockUser} />);
    expect(screen.getByText("Borderless Verified")).toBeInTheDocument();
  });

  it("displays the user's location", () => {
    render(<CardComponent user={mockUser} />);
    expect(screen.getByText(`${mockUser.address.city}`)).toBeInTheDocument();
  });

  it("displays the user's role", () => {
    render(<CardComponent user={mockUser} />);
    expect(screen.getByText("Role:")).toBeInTheDocument();
    expect(screen.getByText("carer")).toBeInTheDocument();
  });
});
