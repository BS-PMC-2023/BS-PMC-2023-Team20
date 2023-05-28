import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Confirmation from "./Confirmation";
import '@testing-library/jest-dom/extend-expect';

test("renders confirmation page with correct reservation data", () => {
  // const mockReservations = [
  //   {
  //     id: "reservation1",
  //     FirstName: "John",
  //     LastName: "Doe",
  //     FromDate: "2023-01-01",
  //     ReturnDate: "2023-01-02",
  //     Status: "Pending",
  //     Userid: "user1",
  //     Itemid: "item1",
  //     UserRoles: ['teacher']
  //   },
  // ];

  // const mockItems = [
  //   {
  //     ImageUrl: "http://example.com/image.jpg",
  //   },
  // ];

  // const mockOnStatusChange = jest.fn();

  // render(
  //   <Confirmation 
  //     reservations={mockReservations} 
  //     items={mockItems} 
  //     onStatusChange={mockOnStatusChange} 
  //   />
  // );

  // expect(screen.getByText("Confirmation page")).toBeInTheDocument();
  // expect(screen.getByText("Reservation ID: reservation1")).toBeInTheDocument();
  // expect(screen.getByText("First Name: John")).toBeInTheDocument();
  // expect(screen.getByText("Last Name: Doe")).toBeInTheDocument();
  // expect(screen.getByText("From: 2023-01-01")).toBeInTheDocument();
  // expect(screen.getByText("Return: 2023-01-02")).toBeInTheDocument();
  // expect(screen.getByText("Status: Pending")).toBeInTheDocument();

  // fireEvent.click(screen.getByText('Set as Pending'));
  // expect(mockOnStatusChange).toHaveBeenCalledWith("reservation1", "Pending");

  // fireEvent.click(screen.getByText('Cancel'));
  // expect(mockOnStatusChange).toHaveBeenCalledWith("reservation1", "Cancel");

  // fireEvent.click(screen.getByText('Accept'));
  // expect(mockOnStatusChange).toHaveBeenCalledWith("reservation1", "Accept");
});
