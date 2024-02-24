import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UserProvider, useUser } from "./UserContext"; // Adjust the import path as necessary

beforeEach(() => {
  (global.fetch as jest.Mock) = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            id: 1,
            name: "John Doe",
            username: "johnny",
            email: "john@example.com",
          },
        ]),
    })
  );
});

// Mock component to test the context
const TestComponent = () => {
  const { users, selectUser, selectedUser } = useUser();
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} onClick={() => selectUser(user.id)}>
          {user.name}
        </div>
      ))}
      {selectedUser && (
        <div data-testid="selected-user">{selectedUser.name}</div>
      )}
    </div>
  );
};

describe("UserProvider", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    global.fetch.mockClear();
  });

  it("fetches users and updates state", async () => {
    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>
    );

    await waitFor(() =>
      expect(screen.getByText("John Doe")).toBeInTheDocument()
    );
  });

  it("selects a user and updates selectedUser", async () => {
    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>
    );

    await waitFor(() => screen.getByText("John Doe").click());
    expect(screen.getByTestId("selected-user")).toHaveTextContent("John Doe");
  });

  // Add more tests as needed
});
